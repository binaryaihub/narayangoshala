import Link from "next/link";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  siteName: string;
  siteTagline: string;
  logoInitials: string;
  description: string;
  quickLinks: { href: string; label: string }[];
  services: string[];
  contact: { address: string; phone: string; email: string };
  copyrightSuffix: string;
  tagline: string;
}

export default function Footer({ siteName, siteTagline, logoInitials, description, quickLinks, services, contact, copyrightSuffix, tagline }: FooterProps) {
  return (
    <footer className="bg-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{logoInitials}</span>
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold">{siteName}</h3>
                <p className="text-sm text-amber-200">{siteTagline}</p>
              </div>
            </div>
            <p className="text-amber-100/80 text-sm leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-amber-100/80 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-amber-100/80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-amber-100/80">
                <MapPin size={18} className="mt-0.5 shrink-0 text-amber-300" />
                {contact.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-amber-100/80">
                <Phone size={18} className="shrink-0 text-amber-300" />
                {contact.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-amber-100/80">
                <Mail size={18} className="shrink-0 text-amber-300" />
                {contact.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-amber-100/60">
            &copy; {new Date().getFullYear()} {copyrightSuffix}
          </p>
          <p className="text-sm text-amber-100/60 flex items-center gap-1">
            {tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
