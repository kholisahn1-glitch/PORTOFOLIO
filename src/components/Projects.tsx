"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import { CheckCircle, ChevronDown, ChevronUp, FolderGit2 } from "lucide-react";

type FilterTab = "All" | "Featured Backend" | "System Architecture" | "Information System";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [expandedId, setExpandedId] = useState<string | null>("si-bansos-ngrowo");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#18233c]/15 bg-[#d8cbb8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#e07a38] font-bold block">
            // 03. SELECTED WORK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18233c] mt-1">
            Proyek Pilihan
          </h2>
          <p className="text-[#565d6c] text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Implementasi backend, perancangan skema basis data, dan arsitektur logika sistem berbasis proyek akademik dan studi kasus nyata.
          </p>

          {/* Filter Pills with dynamic hover */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(["All", "Featured Backend", "System Architecture", "Information System"] as FilterTab[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#18233c] text-[#d8cbb8] shadow-md scale-105"
                      : "bg-[#c4b59f]/60 text-[#18233c] border border-[#18233c]/20 hover:bg-[#18233c] hover:text-[#d8cbb8]"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  project.category === "Featured Backend"
                    ? "border-[#18233c] bg-[#c9bba6] shadow-md"
                    : "border-[#18233c]/40 bg-[#cfc1ad] hover:border-[#18233c]"
                }`}
              >
                {/* Project Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#e07a38]">
                        0{index + 1}.
                      </span>
                      <span className="inline-flex items-center text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#18233c] text-[#d8cbb8] font-bold">
                        {project.tag}
                      </span>
                      <span className="text-xs text-[#565d6c] font-medium">• {project.role}</span>
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#18233c] hover:text-[#e07a38] transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Tutup Detail <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Lihat Detail Teknis <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black text-[#18233c] mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#18233c] leading-relaxed mb-4">
                    {project.overview}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#d8cbb8] border border-[#18233c]/20 text-[#18233c] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#565d6c]">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-[#e07a38] shrink-0 mt-0.5" />
                        <span className="text-[#18233c] font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Technical Details */}
                {isExpanded && (
                  <div className="border-t-2 border-[#18233c]/20 bg-[#beaf99]/60 p-5 sm:p-6 space-y-5 text-sm">
                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl bg-[#c9bba6] border border-[#18233c]/20 p-4">
                        <span className="text-[10px] font-mono uppercase text-red-800 block mb-1 font-bold">
                          Problem / Masalah:
                        </span>
                        <p className="text-xs text-[#18233c] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#c9bba6] border border-[#18233c]/20 p-4">
                        <span className="text-[10px] font-mono uppercase text-[#e07a38] block mb-1 font-bold">
                          Solution / Solusi:
                        </span>
                        <p className="text-xs text-[#18233c] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#18233c] mb-2">
                        Fitur Utama Sistem:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#18233c]">
                            <CheckCircle className="h-3.5 w-3.5 text-[#e07a38] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Development Process */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#18233c] mb-2">
                        Tahapan Pengembangan &amp; Kontribusi:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#18233c]">
                        {project.developmentProcess.map((proc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-mono text-[#e07a38] font-bold shrink-0">{idx + 1}.</span>
                            <span>{proc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="rounded-xl bg-[#c9bba6] border border-[#18233c]/20 p-3.5 text-xs text-[#18233c]">
                      <span className="font-bold block mb-1 uppercase font-mono text-[10px] text-[#565d6c]">
                        Hasil / Deliverable:
                      </span>
                      {project.result}
                    </div>

                    {/* Repo Link */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#18233c]/15">
                      <span className="text-[11px] text-[#565d6c] font-mono">
                        Status Code: Repository Internal / Akademik PENS
                      </span>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="btn-editorial inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase bg-[#18233c] text-[#d8cbb8] hover:bg-[#e07a38]"
                        >
                          <FolderGit2 className="h-3.5 w-3.5" />
                          <span>Repositori</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
