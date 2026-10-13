import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#c4b59f]/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
            // 02. TECHNICAL STACK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
            Keahlian &amp; Toolset
          </h2>
          <p className="text-[#565d6c] text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Teknologi yang saya gunakan secara aktif untuk pengembangan layanan backend, pemodelan database, dan topik yang sedang dipelajari.
          </p>
        </div>

        {/* Skills Grid - Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className={`rounded-2xl border-2 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                cat.highlight
                  ? "border-[#e07a38] bg-[#d5c5b0] shadow-md"
                  : "border-[#18233c] bg-[#c9bba6]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#18233c] text-sm flex items-center gap-1.5 uppercase tracking-wide">
                    {cat.highlight && <Sparkles className="h-4 w-4 text-[#e07a38]" />}
                    {cat.category}
                  </h3>
                  {cat.highlight && (
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#e07a38] text-white">
                      EXPLORING
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#565d6c] mb-4 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#18233c]/15">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full border ${
                      cat.highlight
                        ? "bg-[#18233c] text-[#d8cbb8] border-[#18233c]"
                        : "bg-[#d8cbb8] text-[#18233c] border-[#18233c]/30 font-medium"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
