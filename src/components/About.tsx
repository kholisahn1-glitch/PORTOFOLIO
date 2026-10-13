import { GraduationCap, Target, Layers, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#d8cbb8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#18233c]/15">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
              // 01. PROFILE &amp; FOCUS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
              Tentang Saya
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#565d6c] hidden sm:block">
            NUR KHOLISAH<br />
            D3 TEKNIK INFORMATIKA PENS
          </div>
        </div>

        {/* Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-[#18233c] leading-relaxed text-sm sm:text-base">
            <p>
              Saya adalah mahasiswa D3 Teknik Informatika di{" "}
              <strong className="font-bold underline decoration-[#e07a38] decoration-2 underline-offset-4">
                Politeknik Elektronika Negeri Surabaya (PENS)
              </strong>{" "}
              yang memfokuskan keahlian pada rekayasa sisi server (<em>backend development</em>). Dalam setiap pengembangan sistem, fokus utama saya adalah merancang alur API yang terstruktur, menjaga kejelasan arsitektur, serta menjamin integritas data melalui pemodelan relasional yang konsisten.
            </p>
            <p>
              Saya terbiasa membangun layanan web menggunakan framework modern seperti{" "}
              <strong className="font-bold">FastAPI</strong> dan{" "}
              <strong className="font-bold">Laravel</strong>, mengelola basis data relasional dengan{" "}
              <strong className="font-bold">PostgreSQL</strong> dan{" "}
              <strong className="font-bold">MySQL</strong>, serta mengisolasi lingkungan aplikasi menggunakan{" "}
              <strong className="font-bold">Docker</strong> dan Linux. Saya senang memecahkan masalah logika bisnis di balik layar—mulai dari menerjemahkan kebutuhan dokumen teknis formal (IEEE PRD) ke skema database (ERD, CDM, PDM) hingga menjadi kode endpoint yang teruji.
            </p>
            <p className="text-xs sm:text-sm text-[#565d6c] bg-[#c4b59f]/40 p-4 rounded-xl border border-[#18233c]/15">
              Saat ini, saya aktif mengeksplorasi konsep dasar <strong>Cloud Computing</strong> dan penerapan praktis <strong>Large Language Models (LLM)</strong> seperti Google Gemini API untuk integrasi sistem cerdas pada aplikasi masa depan.
            </p>
          </div>

          {/* Quick Info Grid - Editorial Card Style */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="rounded-xl border-2 border-[#18233c] bg-[#c9bba6] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#18233c]">
                <GraduationCap className="h-5 w-5 text-[#e07a38]" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Pendidikan</h3>
              </div>
              <p className="text-xs font-bold text-[#18233c]">D3 Teknik Informatika</p>
              <p className="text-xs text-[#565d6c]">Politeknik Elektronika Negeri Surabaya (PENS)</p>
            </div>

            <div className="rounded-xl border-2 border-[#18233c] bg-[#c9bba6] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#18233c]">
                <Target className="h-5 w-5 text-[#e07a38]" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Target Role</h3>
              </div>
              <p className="text-xs font-semibold text-[#18233c]">
                Backend Developer • Software Engineer • Junior Cloud Engineer
              </p>
            </div>

            <div className="rounded-xl border-2 border-[#18233c] bg-[#c9bba6] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#18233c]">
                <Layers className="h-5 w-5 text-[#e07a38]" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Fokus Utama</h3>
              </div>
              <p className="text-xs text-[#565d6c] leading-relaxed">
                RESTful API Design, Relational Database Modeling (ERD/CDM/PDM), Containerization (Docker), Algorithmic Logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
