"use client";

import Image from "next/image";
import { Mail, ArrowUpRight, Send, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.41 8.79 7.68C8.54 7.95 7.86 8.59 7.86 9.88C7.86 11.17 8.8 12.42 8.93 12.6C9.06 12.78 10.74 15.5 13.38 16.53C15.57 17.38 16.02 17.21 16.49 17.17C16.96 17.13 18.01 16.55 18.23 15.93C18.45 15.31 18.45 14.77 18.38 14.66C18.31 14.55 18.14 14.49 17.88 14.36C17.62 14.23 16.35 13.6 16.11 13.52C15.87 13.43 15.7 13.39 15.53 13.65C15.36 13.91 14.88 14.49 14.73 14.66C14.58 14.83 14.43 14.85 14.18 14.72C13.93 14.6 12.87 14.25 11.61 13.13C10.63 12.25 9.97 11.17 9.84 10.95C9.72 10.73 9.83 10.61 9.95 10.49C10.07 10.37 10.21 10.18 10.34 10.03C10.47 9.88 10.51 9.77 10.6 9.6C10.68 9.42 10.64 9.27 10.58 9.14C10.51 9.02 10.03 7.84 9.83 7.33Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#c4b59f]/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
            // 06. CONNECT &amp; COLLABORATE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
            Mari Terhubung
          </h2>
          <p className="text-[#565d6c] text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Terbuka untuk peluang kerja magang (*internship*), posisi Junior Backend Developer / Software Engineer, maupun kolaborasi proyek.
          </p>
        </div>

        {/* Contact Links Grid with dynamic buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* WhatsApp Direct */}
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#25D366] group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18233c] text-[#d8cbb8] group-hover:bg-[#25D366] group-hover:text-white transition-colors mb-3">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#18233c] mb-1">
              WhatsApp
            </span>
            <span className="text-xs font-mono text-[#565d6c] group-hover:text-[#18233c] font-semibold">
              {PERSONAL_INFO.socials.phoneDisplay}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#e07a38]">
              Chat Langsung <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>

          {/* Gmail Direct */}
          <a
            href={PERSONAL_INFO.socials.emailMailto}
            className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#EA4335] group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18233c] text-[#d8cbb8] group-hover:bg-[#EA4335] group-hover:text-white transition-colors mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#18233c] mb-1">
              Gmail
            </span>
            <span className="text-xs font-mono text-[#565d6c] group-hover:text-[#18233c] font-semibold">
              {PERSONAL_INFO.socials.email}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#e07a38]">
              Kirim Email <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>

          {/* LinkedIn Direct */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#0077B5] group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18233c] text-[#d8cbb8] group-hover:bg-[#0077B5] group-hover:text-white transition-colors mb-3">
              <LinkedInIcon className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#18233c] mb-1">
              LinkedIn
            </span>
            <span className="text-xs font-mono text-[#565d6c] group-hover:text-[#18233c] font-semibold">
              Nur Kholisah
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#e07a38]">
              Lihat Profil <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>

          {/* Instagram Direct */}
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#E1306C] group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18233c] text-[#d8cbb8] group-hover:bg-[#E1306C] group-hover:text-white transition-colors mb-3">
              <InstagramIcon className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#18233c] mb-1">
              Instagram
            </span>
            <span className="text-xs font-mono text-[#565d6c] group-hover:text-[#18233c] font-semibold">
              @{PERSONAL_INFO.socials.instagramUsername}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#e07a38]">
              Kunjungi Profil <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
        </div>

        {/* Instagram QR Code Showcase Card */}
        <div className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-md">
          <div className="relative w-36 h-36 shrink-0 rounded-xl overflow-hidden border border-[#18233c]/20 bg-white p-2 shadow-inner">
            <Image
              src="/images/ig-qr.png"
              alt="QR Code Instagram kholisa.1"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <span className="inline-block text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-[#18233c] text-[#d8cbb8]">
              SCAN ME
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#18233c]">
              QR Code Instagram ({PERSONAL_INFO.socials.instagramUsername})
            </h3>
            <p className="text-xs text-[#565d6c] leading-relaxed">
              Pindai kode QR ini menggunakan kamera ponsel atau aplikasi Instagram untuk terhubung langsung.
            </p>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#e07a38] hover:underline"
            >
              Buka link langsung di browser <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
