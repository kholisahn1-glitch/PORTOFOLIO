import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#18233c] text-[#d8cbb8] py-10 border-t-2 border-[#18233c]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          <span className="font-bold tracking-wider uppercase block">
            {PERSONAL_INFO.name} — Portofolio Digital
          </span>
          <span className="text-[#d8cbb8]/60 font-mono text-[11px]">
            D3 Teknik Informatika • Politeknik Elektronika Negeri Surabaya (PENS)
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e07a38] transition-colors"
          >
            WA
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.socials.emailMailto}
            className="hover:text-[#e07a38] transition-colors"
          >
            GMAIL
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e07a38] transition-colors"
          >
            LINKEDIN
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e07a38] transition-colors"
          >
            IG
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-6 pt-4 border-t border-[#d8cbb8]/15 text-center text-[11px] text-[#d8cbb8]/50 font-mono">
        © 2026 {PERSONAL_INFO.name}. Designed with Mees Verberne editorial aesthetic.
      </div>
    </footer>
  );
}
