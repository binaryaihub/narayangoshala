import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { get } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${get<string>("site.name")} - ${get<string>("site.tagline")}`,
  description: get<string>("site.description"),
  keywords: get<string[]>("site.keywords"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar
          siteName={get<string>("site.name")}
          siteTagline={get<string>("site.tagline")}
          logoInitials={get<string>("site.logo_initials")}
          links={get("nav.links")}
          donateButton={get<string>("nav.donate_button")}
        />
        <main>{children}</main>
        <Footer
          siteName={get<string>("site.name")}
          siteTagline={get<string>("site.tagline")}
          logoInitials={get<string>("site.logo_initials")}
          description={get<string>("footer.description")}
          quickLinks={get("footer.quick_links")}
          services={get<string[]>("footer.services")}
          contact={get("footer.contact")}
          copyrightSuffix={get<string>("footer.copyright_suffix")}
          tagline={get<string>("footer.tagline")}
        />
      </body>
    </html>
  );
}
