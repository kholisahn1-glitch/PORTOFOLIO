import { Award, CheckCircle2, ArrowUpRight, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, CERTIFICATES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#c4b59f]/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#18233c]/15">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
              // 04. EXPERIENCE &amp; CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
              Pengalaman &amp; Sertifikat
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#565d6c] hidden sm:block">
            ACADEMIC &amp; CERTIFICATION<br />
            POLITEKNIK ELEKTRONIKA NEGERI SURABAYA
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Academic & Project Experience */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#18233c] font-mono flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#e07a38]" />
              Pengalaman Akademik &amp; Proyek
            </h3>

            <div className="border-l-2 border-[#18233c] pl-4 space-y-6">
              <div className="relative">
                <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#e07a38]"></span>
                <span className="text-[10px] font-mono uppercase text-[#e07a38] font-bold block">
                  2023 - Sekarang
                </span>
                <h4 className="text-sm font-bold text-[#18233c]">
                  Pengembangan Sistem Backend &amp; Basis Data
                </h4>
                <p className="text-xs text-[#565d6c] mt-1 leading-relaxed">
                  Terlibat aktif dalam perancangan database relasional formal (CDM/PDM via PowerDesigner), pembuatan REST API FastAPI &amp; Laravel, serta implementasi standar IEEE PRD untuk proyek-proyek di PENS.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#18233c]"></span>
                <span className="text-[10px] font-mono uppercase text-[#565d6c] font-bold block">
                  2024
                </span>
                <h4 className="text-sm font-bold text-[#18233c]">
                  Eksplorasi Cloud &amp; AI Integration
                </h4>
                <p className="text-xs text-[#565d6c] mt-1 leading-relaxed">
                  Mempelajari kontainerisasi Docker, fondasi cloud computing, dan integrasi praktis Large Language Models (LLM) seperti Google Gemini API.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Daftar Sertifikat yang Diikuti */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#18233c] font-mono flex items-center gap-2">
              <Award className="h-4 w-4 text-[#e07a38]" />
              Sertifikasi &amp; Pelatihan Terverifikasi
            </h3>

            <div className="space-y-3">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-[#18233c] text-[#d8cbb8]">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#565d6c]">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#18233c] leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#e07a38] font-semibold mt-0.5 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-[#565d6c] leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-[#18233c]/15 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#565d6c]">
                      Status: Terverifikasi / Lulus Pelatihan
                    </span>
                    <span className="text-[#18233c] font-bold inline-flex items-center gap-1 hover:text-[#e07a38]">
                      Detail Sertif <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#565d6c] font-mono bg-[#d8cbb8] p-3 rounded-xl border border-[#18233c]/20">
              💡 Sertifikat asli fisik &amp; digital siap ditunjukkan untuk verifikasi berkas rekrutmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
