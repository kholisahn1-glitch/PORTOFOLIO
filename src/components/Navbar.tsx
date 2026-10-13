"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

// Custom WhatsApp Icon SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.41 8.79 7.68C8.54 7.95 7.86 8.59 7.86 9.88C7.86 11.17 8.8 12.42 8.93 12.6C9.06 12.78 10.74 15.5 13.38 16.53C15.57 17.38 16.02 17.21 16.49 17.17C16.96 17.13 18.01 16.55 18.23 15.93C18.45 15.31 18.45 14.77 18.38 14.66C18.31 14.55 18.14 14.49 17.88 14.36C17.62 14.23 16.35 13.6 16.11 13.52C15.87 13.43 15.7 13.39 15.53 13.65C15.36 13.91 14.88 14.49 14.73 14.66C14.58 14.83 14.43 14.85 14.18 14.72C13.93 14.6 12.87 14.25 11.61 13.13C10.63 12.25 9.97 11.17 9.84 10.95C9.72 10.73 9.83 10.61 9.95 10.49C10.07 10.37 10.21 10.18 10.34 10.03C10.47 9.88 10.51 9.77 10.6 9.6C10.68 9.42 10.64 9.27 10.58 9.14C10.51 9.02 10.03 7.84 9.83 7.33Z" />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: "INDEX", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE & CERTIF", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#d8cbb8]/90 backdrop-blur-md border-b border-[#18233c]/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Name badge */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-[#e07a38] group-hover:scale-150 transition-transform"></span>
          <span className="font-bold tracking-widest text-[#18233c] text-sm uppercase">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#565d6c] border-l border-[#18233c]/20 pl-2">
            PENS // D3 TI
          </span>
        </a>

        {/* Center Pill Menu like meesverberne.com */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#18233c] px-4 py-1.5 shadow-md">
          {NAV_ITEMS.map((item, idx) => (
            <div key={item.label} className="flex items-center">
              <a
                href={item.href}
                className="px-2.5 py-1 text-[11px] font-bold tracking-widest text-[#d8cbb8] hover:text-[#e07a38] transition-colors"
              >
                {item.label}
              </a>
              {idx < NAV_ITEMS.length - 1 && (
                <span className="text-[#d8cbb8]/30 text-xs px-0.5">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* WhatsApp direct CTA Button */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct Chat via WhatsApp"
            className="btn-editorial flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-[#18233c] text-[#d8cbb8] hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Chat WA</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[#18233c]/20 bg-[#18233c] text-[#d8cbb8]"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#18233c]/20 bg-[#d8cbb8] px-5 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-bold tracking-wider uppercase text-[#18233c] hover:text-[#e07a38] border-b border-[#18233c]/10"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#18233c] hover:bg-[#25D366] px-4 py-2.5 text-xs font-bold tracking-wider uppercase text-[#d8cbb8] hover:text-white transition-all"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Hubungi via WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
