import React from "react";
import { X, Award, ExternalLink, Github, CheckCircle, Flame, Server, Cpu, HelpCircle, ArrowRight } from "lucide-react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onAskAI: (question: string) => void;
}

export default function CaseStudyModal({ project, onClose, onAskAI }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0D1117]/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans max-h-[90vh]">
        
        {/* Accent Bar */}
        <div className="h-1 w-full bg-[#6366F1]"></div>

        {/* Header bar */}
        <div className="flex justify-between items-start px-6 pt-6 pb-4 border-b border-[#30363D]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2.5 py-0.5 rounded-md font-mono font-medium bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
                {project.category}
              </span>
              {project.award && (
                <span className="text-xs px-2.5 py-0.5 rounded-md font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {project.award}
                </span>
              )}
            </div>
            
            <h3 className="font-sans font-bold text-2xl text-[#E6EDF3] tracking-tight">{project.title}</h3>
            <p className="text-xs text-[#8B949E] font-mono mt-1">{project.role}</p>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-[#8B949E] hover:text-[#E6EDF3] rounded-md hover:bg-[#30363D]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-[#0D1117]">
          
          {/* Key Metrics Dashboard */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B949E] mb-3">Impact Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 flex flex-col items-start hover:border-[#6366F1]/40 transition-colors">
                  <span className="text-3xl font-mono font-bold text-[#E6EDF3]">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-[#E6EDF3] mt-1">{metric.label}</span>
                  <span className="text-[11px] text-[#8B949E] leading-normal mt-0.5">{metric.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Case Study Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Story / Problem Solving */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Ringkasan */}
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-base text-[#E6EDF3] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#6366F1]" />
                  Ringkasan Eksekutif
                </h5>
                <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-wrap">{project.caseStudy.summary}</p>
              </div>

              {/* Tantangan / Masalah */}
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-base text-[#E6EDF3] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-rose-400" />
                  Masalah Utama (The Challenge)
                </h5>
                <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-wrap">{project.caseStudy.problem}</p>
              </div>

              {/* Solusi Rekayasa */}
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-base text-[#E6EDF3] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#6366F1]" />
                  Solusi Teknologi & Pendekatan Rekayasa
                </h5>
                <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-wrap">{project.caseStudy.solution}</p>
              </div>

              {/* Dampak */}
              <div className="space-y-2">
                <h5 className="font-sans font-bold text-base text-[#E6EDF3] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Dampak & Keberhasilan Proyek (The Impact)
                </h5>
                <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-wrap">{project.caseStudy.impact}</p>
              </div>

            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tech Stack widget */}
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-5 space-y-3">
                <h6 className="text-xs font-mono uppercase text-[#8B949E] tracking-wider flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#6366F1]" />
                  Tech Stack Integration
                </h6>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] px-2.5 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation CTA Buttons */}
              <div className="space-y-2">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#161B22] hover:bg-[#30363D]/50 border border-[#30363D] p-3 rounded-lg flex items-center justify-between text-xs text-[#E6EDF3] hover:text-white transition-all cursor-pointer font-sans font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Lihat Source Code
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8B949E]" />
                  </a>
                )}

                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#6366F1] hover:bg-[#6366F1]/90 p-3 rounded-lg flex items-center justify-between text-xs text-white font-bold transition-all cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Luncurkan Aplikasi Live
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Direct Ask AI feature */}
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#6366F1] tracking-wider block font-semibold">Ask About This Project</span>
                <p className="text-xs text-[#8B949E] leading-normal">
                  Ingin tahu rincian teknis di balik taktik penyelesaian masalah proyek ini? Tanyakan langsung ke AI Twin Ridho.
                </p>
                <button
                  onClick={() => {
                    onAskAI(`Tolong jelaskan secara lebih mendalam tentang tumpukan teknologi dan bagaimana peran Ridho dalam mengembangkan proyek ${project.title}`);
                    onClose();
                  }}
                  className="w-full bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/30 text-[#6366F1] p-2.5 rounded-md text-xs font-medium cursor-pointer text-center transition-all block font-sans"
                >
                  Tanya AI Twin Sekarang
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Modal footer */}
        <div className="bg-[#161B22] px-6 py-4 border-t border-[#30363D] flex items-center justify-between">
          <p className="text-[10px] text-[#8B949E] font-mono">
            Ridho Wicaksono Portfolio © 2026
          </p>
          <button 
            onClick={onClose}
            className="text-xs text-[#8B949E] hover:text-[#E6EDF3] cursor-pointer hover:underline font-mono"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}

