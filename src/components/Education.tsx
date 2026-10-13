import { GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#d8cbb8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
            // 05. FORMAL EDUCATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
            Pendidikan
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border-2 border-[#18233c] bg-[#c9bba6] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#18233c] text-[#d8cbb8] flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-[#e07a38]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[#18233c]">
                    {PERSONAL_INFO.education.campus}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#e07a38]">
                    {PERSONAL_INFO.education.major}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#18233c] text-[#d8cbb8]">
                Mahasiswa Aktif
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#565d6c] leading-relaxed mb-6 pt-2 border-t border-[#18233c]/15">
              {PERSONAL_INFO.education.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-[#d8cbb8] border border-[#18233c]/20 text-xs text-[#18233c]">
                <span className="font-bold block mb-1">Database &amp; Data Model:</span>
                ERD, CDM, PDM via PowerDesigner, MySQL &amp; PostgreSQL.
              </div>
              <div className="p-3 rounded-xl bg-[#d8cbb8] border border-[#18233c]/20 text-xs text-[#18233c]">
                <span className="font-bold block mb-1">Backend Architecture:</span>
                FastAPI, Laravel, RESTful APIs, OOP, Data Structures.
              </div>
              <div className="p-3 rounded-xl bg-[#d8cbb8] border border-[#18233c]/20 text-xs text-[#18233c]">
                <span className="font-bold block mb-1">DevOps &amp; Cloud:</span>
                Docker containers, Linux OS, Git flow, Network basics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
