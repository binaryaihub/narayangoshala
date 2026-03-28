"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  siteName: string;
  siteTagline: string;
  logoInitials: string;
  links: NavLink[];
  donateButton: string;
}

export default function Navbar({ siteName, siteTagline, logoInitials, links, donateButton }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{logoInitials}</span>
            </div>
            <div>
              <h1 className={`font-[var(--font-heading)] text-xl font-bold ${scrolled ? "text-primary-dark" : "text-white"}`}>
                {siteName}
              </h1>
              <p className={`text-xs ${scrolled ? "text-gray-500" : "text-white/80"}`}>
                {siteTagline}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-light ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              <Heart size={16} />
              {donateButton}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-warm rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full text-sm font-semibold"
            >
              <Heart size={16} />
              {donateButton}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
