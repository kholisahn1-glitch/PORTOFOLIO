"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.41 8.79 7.68C8.54 7.95 7.86 8.59 7.86 9.88C7.86 11.17 8.8 12.42 8.93 12.6C9.06 12.78 10.74 15.5 13.38 16.53C15.57 17.38 16.02 17.21 16.49 17.17C16.96 17.13 18.01 16.55 18.23 15.93C18.45 15.31 18.45 14.77 18.38 14.66C18.31 14.55 18.14 14.49 17.88 14.36C17.62 14.23 16.35 13.6 16.11 13.52C15.87 13.43 15.7 13.39 15.53 13.65C15.36 13.91 14.88 14.49 14.73 14.66C14.58 14.83 14.43 14.85 14.18 14.72C13.93 14.6 12.87 14.25 11.61 13.13C10.63 12.25 9.97 11.17 9.84 10.95C9.72 10.73 9.83 10.61 9.95 10.49C10.07 10.37 10.21 10.18 10.34 10.03C10.47 9.88 10.51 9.77 10.6 9.6C10.68 9.42 10.64 9.27 10.58 9.14C10.51 9.02 10.03 7.84 9.83 7.33Z" />
    </svg>
  );
}

const TICKER_ITEMS = [
  "Backend Developer",
  "Software Engineer",
  "FastAPI",
  "Laravel",
  "PostgreSQL",
  "Docker",
  "LLM Exploration",
  "PENS Surabaya",
];

export default function Hero() {
  const [isBursting, setIsBursting] = useState(false);
  const birdCardRef = useRef<HTMLDivElement>(null);

  // Trigger burst/feather scattering effect on profile click
  const triggerBirdBurst = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsBursting(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    // Burst 1: Feathery warm confetti
    confetti({
      particleCount: 55,
      spread: 90,
      startVelocity: 35,
      origin: { x: originX, y: originY },
      colors: ["#e07a38", "#18233c", "#d8cbb8", "#5c4833", "#2a3b5c"],
      ticks: 120,
      gravity: 0.9,
    });

    // Burst 2: Wider scatter with smaller flecks
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 120,
        startVelocity: 45,
        origin: { x: originX, y: originY },
        colors: ["#d97736", "#ffffff", "#1e293b"],
      });
      setIsBursting(false);
    }, 400);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:py-20 border-b border-[#18233c]/15 overflow-hidden">
      {/* Background Big Typography Outline like Mees Verberne */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-10">
        <span className="font-extrabold text-[80px] sm:text-[160px] lg:text-[220px] tracking-tighter text-[#18233c] leading-none whitespace-nowrap">
          BACKEND
        </span>
      </div>

      {/* Marquee Ticker */}
      <div className="relative w-full border-y border-[#18233c]/15 py-2 mb-10 overflow-hidden bg-[#c4b59f]/40">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center text-xs font-bold tracking-widest uppercase text-[#18233c] mx-4">
              <span>{item}</span>
              <span className="mx-3 text-[#e07a38]">✕</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Barcode & Editorial Details */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-between h-[380px] border-r border-[#18233c]/15 pr-6 text-xs text-[#565d6c]">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-[#18233c] font-bold mb-2">
                // SYSTEM COORD
              </div>
              <p className="font-mono text-[11px] leading-tight text-[#18233c]">
                -7.2758° S<br />
                112.7937° E<br />
                PENS SURABAYA
              </p>
            </div>

            {/* Stylized Barcode */}
            <div className="space-y-1">
              <div className="h-10 w-full flex items-end gap-[2px] opacity-70">
                {[4,8,2,6,10,3,7,2,9,4,6,3,8,5,2,9,4,7,2,8,3,6].map((h, i) => (
                  <div key={i} className="bg-[#18233c] w-[3px]" style={{ height: `${h * 10}%` }}></div>
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#18233c] block">
                WA: {PERSONAL_INFO.socials.phoneDisplay}
              </span>
            </div>

            <div>
              <p className="font-medium text-[11px] leading-relaxed text-[#18233c]">
                Skilled in both <br />
                <span className="italic font-bold">backend logic</span> &amp; <span className="italic font-bold">system design</span>
              </p>
            </div>
          </div>

          {/* Center Column: Interactive Bird / Profile Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              ref={birdCardRef}
              onClick={triggerBirdBurst}
              title="Klik saya untuk efek animasi pecahan!"
              className={`relative cursor-pointer group rounded-2xl bg-[#c9bba6] border-2 border-[#18233c] p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 select-none max-w-sm w-full ${
                isBursting ? "scale-95 rotate-1" : "hover:shadow-2xl"
              }`}
            >
              {/* Corner Editorial Crosses */}
              <span className="absolute -top-2.5 -left-2.5 text-xs text-[#18233c] font-bold">✕</span>
              <span className="absolute -top-2.5 -right-2.5 text-xs text-[#18233c] font-bold">✕</span>
              <span className="absolute -bottom-2.5 -left-2.5 text-xs text-[#18233c] font-bold">✕</span>
              <span className="absolute -bottom-2.5 -right-2.5 text-xs text-[#18233c] font-bold">✕</span>

              {/* Top tag */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#18233c] mb-2 px-1">
                <span className="font-bold">N.K. / INFORMATICS</span>
                <span className="bg-[#e07a38] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  KLIK FOTO
                </span>
              </div>

              {/* Interactive Profile Photo Frame with Bird Burst Physics */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#beaf99] border border-[#18233c]/20 flex items-center justify-center group-hover:brightness-105 transition-all shadow-inner">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto Profil Nur Kholisah"
                  fill
                  priority
                  className={`object-cover object-top transition-transform duration-500 ${
                    isBursting ? "scale-90 rotate-2 opacity-80" : "group-hover:scale-105"
                  }`}
                />

                {/* Subtle Editorial Overlay Filter matching warm sand palette */}
                <div className="absolute inset-0 bg-[#d8cbb8]/10 mix-blend-multiply pointer-events-none" />

                {/* Floating Bird Mascot Stamp (Corner badge) */}
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#18233c]/90 text-[#d8cbb8] text-[9px] font-mono font-bold px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#18233c]">
                  <span>🕊️</span>
                  <span>BURST FX</span>
                </div>

                {/* Interactive Click Hint Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#18233c]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#18233c] text-[#d8cbb8] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#e07a38]">
                    ✨ Klik untuk efek pecahan!
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 text-center">
                <span className="font-bold text-[#18233c] text-sm block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-[#565d6c] font-mono">
                  Backend Developer &amp; Student at PENS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Cursive Signature, CTA Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e07a38] font-bold block mb-1">
                Backend Developer
              </span>
              
              {/* Mees Verberne Large Signature Font Overlay */}
              <div className="relative">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#18233c] leading-tight">
                  Nur Kholisah
                </h1>
                <span className="font-script text-5xl sm:text-7xl text-[#e07a38] absolute -top-4 left-24 sm:left-36 pointer-events-none select-none opacity-85">
                  Developer
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#18233c] leading-relaxed">
              Mahasiswa D3 Teknik Informatika di{" "}
              <strong className="font-bold">Politeknik Elektronika Negeri Surabaya (PENS)</strong> dengan fokus mendalam pada rekayasa backend, perancangan skema database relasional (ERD, CDM, PDM), RESTful API dengan FastAPI &amp; Laravel, serta eksplorasi Cloud Computing &amp; LLM.
            </p>

            {/* Direct Social & Contact CTA Buttons with dynamic JavaScript physics */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* WhatsApp direct */}
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#18233c] text-[#d8cbb8] hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp: {PERSONAL_INFO.socials.phoneDisplay}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Email direct */}
              <a
                href={PERSONAL_INFO.socials.emailMailto}
                className="btn-editorial flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#18233c] text-[#d8cbb8] hover:bg-[#e07a38]"
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Projects anchor */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#18233c] border border-[#18233c] rounded-full hover:bg-[#18233c] hover:text-[#d8cbb8] transition-colors"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Core Tech Stack editorial badges */}
            <div className="pt-4 border-t border-[#18233c]/15">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#565d6c] block mb-2 font-bold">
                CORE BACKEND STACK:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold text-[#18233c]">
                <span className="px-3 py-1 rounded-full bg-[#c4b59f]/60 border border-[#18233c]/20">FastAPI</span>
                <span className="px-3 py-1 rounded-full bg-[#c4b59f]/60 border border-[#18233c]/20">Laravel</span>
                <span className="px-3 py-1 rounded-full bg-[#c4b59f]/60 border border-[#18233c]/20">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full bg-[#c4b59f]/60 border border-[#18233c]/20">MySQL</span>
                <span className="px-3 py-1 rounded-full bg-[#c4b59f]/60 border border-[#18233c]/20">Docker</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
