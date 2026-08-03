import React, { useState } from "react";
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Terminal, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award, 
  CheckCircle, 
  Copy, 
  Check, 
  Code, 
  Server, 
  Database, 
  Globe, 
  GitBranch, 
  Wrench, 
  Printer, 
  Briefcase, 
  BookOpen,
  Info,
  X,
  Bot
} from "lucide-react";
import { PORTFOLIO_OWNER, PROJECTS_DATA, SKILLS_DATA, RECOMMENDED_PROMPTS } from "./data";
import { Project } from "./types";
import AITwinChat from "./components/AITwinChat";
import CaseStudyModal from "./components/CaseStudyModal";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"AI Integration" | "Full-Stack Web">("AI Integration");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_OWNER.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleAskAI = (question: string) => {
    setIsChatOpen(true);
    
    setTimeout(() => {
      const chatInput = document.querySelector("#ai-twin-chat input") as HTMLInputElement;
      if (chatInput) {
        chatInput.value = question;
        chatInput.focus();
        const sendBtn = document.querySelector("#ai-twin-chat form button[type='submit']") as HTMLButtonElement;
        if (sendBtn) {
          sendBtn.click();
        }
      }
    }, 300);
  };

  const renderSkillIcon = (icon: string) => {
    switch (icon) {
      case "React":
        return <Code className="w-4 h-4 text-[#6366F1]" />;
      case "Node":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "TypeScript":
        return <Layers className="w-4 h-4 text-[#6366F1]" />;
      case "Tailwind":
        return <Globe className="w-4 h-4 text-sky-400" />;
      case "JS":
        return <Code className="w-4 h-4 text-amber-400" />;
      case "HTML5":
        return <Code className="w-4 h-4 text-orange-400" />;
      case "Gemini":
        return <Sparkles className="w-4 h-4 text-[#6366F1]" />;
      case "Prompt":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "JSON":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "Firebase":
        return <Database className="w-4 h-4 text-amber-400" />;
      case "Cloud":
        return <Layers className="w-4 h-4 text-sky-400" />;
      case "Git":
        return <GitBranch className="w-4 h-4 text-orange-400" />;
      case "Vite":
        return <Wrench className="w-4 h-4 text-purple-400" />;
      case "Esbuild":
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case "Postman":
        return <Terminal className="w-4 h-4 text-orange-400" />;
      case "PDF":
        return <Printer className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-[#8B949E]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#8B949E] flex flex-col font-sans relative selection:bg-[#6366F1]/30 selection:text-[#E6EDF3]">
      
      {/* Sleek Minimalist Navbar */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 md:px-12 w-full bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363D]">
        <header className="py-4 w-full max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded bg-[#6366F1] flex items-center justify-center font-bold text-white text-xs">
              RW
            </div>
            <span className="font-sans font-bold text-[#E6EDF3] text-sm md:text-base tracking-tight">
              Ridho Wicaksono
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono text-[#8B949E]">
            <a href="#about" className="hover:text-[#E6EDF3] transition-colors">Profil</a>
            <a href="#skills" className="hover:text-[#E6EDF3] transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-[#E6EDF3] transition-colors">Studi Kasus</a>
          </nav>

          <a 
            href="#contact" 
            className="text-xs font-mono bg-[#161B22] hover:bg-[#30363D]/50 border border-[#30363D] text-[#E6EDF3] px-3.5 py-1.5 rounded-md transition-all"
          >
            Hubungi Saya
          </a>
        </header>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-20">
        
        {/* HERO SECTION */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live AI Status Pulse Indicator */}
            <div 
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center gap-2.5 bg-[#161B22] hover:bg-[#30363D]/40 border border-[#30363D] rounded-full px-3.5 py-1.5 text-xs text-[#E6EDF3] font-mono transition-all cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="font-semibold text-[#10B981]">AI Twin Active</span>
              <span className="text-[#8B949E] hidden sm:inline">• Tanya pengalaman & proyek</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6366F1] group-hover:translate-x-1 transition-transform" />
            </div>

            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#E6EDF3] leading-[1.15] tracking-tight">
              {PORTFOLIO_OWNER.headline}
            </h1>

            <p className="text-sm sm:text-base text-[#8B949E] font-normal leading-relaxed max-w-xl">
              {PORTFOLIO_OWNER.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="#projects" 
                className="bg-[#6366F1] hover:bg-[#6366F1]/90 text-white font-sans font-medium text-xs px-5 py-2.5 rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                Eksplor Kasus Proyek
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-[#161B22] hover:bg-[#30363D]/50 text-[#E6EDF3] border border-[#30363D] font-sans font-medium text-xs px-5 py-2.5 rounded-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-[#6366F1]" />
                <span>Tes AI Twin</span>
              </button>
            </div>

            {/* Micro Social Bar */}
            <div className="flex items-center space-x-4 pt-3 border-t border-[#30363D]/50">
              <span className="text-xs text-[#8B949E] font-mono uppercase tracking-wider">Kontak & Tautan:</span>
              <a 
                href={PORTFOLIO_OWNER.contacts.github} 
                target="_blank" 
                rel="noreferrer"
                title="GitHub Ridho Wicaksono"
                className="p-1.5 bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] rounded-md text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PORTFOLIO_OWNER.contacts.linkedin} 
                target="_blank" 
                rel="noreferrer"
                title="LinkedIn Ridho Wicaksono"
                className="p-1.5 bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] rounded-md text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
               >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${PORTFOLIO_OWNER.contacts.email}`}
                title="Email Ridho Wicaksono"
                className="p-1.5 bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] rounded-md text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Profile Photo Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ProfileCard />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 rounded-xl p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono text-[#6366F1] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Tentang Saya
              </span>
              <h2 className="font-sans font-bold text-2xl text-[#E6EDF3] tracking-tight">
                Profil Ringkas
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <p className="text-[#8B949E] text-sm md:text-base leading-relaxed">
                {PORTFOLIO_OWNER.aboutMe}
              </p>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="border-t border-[#30363D] pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-md text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] uppercase font-mono">Juara 1 GDGoC</h4>
                <p className="text-xs text-[#8B949E] mt-1 leading-normal">
                  Mini Competition Universitas Esa Unggul lewat proyek AI "RuangPaham".
                </p>
              </div>
            </div>

            <div className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] uppercase font-mono">Efisiensi -90%</h4>
                <p className="text-xs text-[#8B949E] mt-1 leading-normal">
                  Otomatisasi penyusunan Modul Ajar Kurikulum Merdeka bagi para guru.
                </p>
              </div>
            </div>

            <div className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-md text-[#6366F1] shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#E6EDF3] uppercase font-mono">Sistem Informasi UNPAM</h4>
                <p className="text-xs text-[#8B949E] mt-1 leading-normal">
                  Fokus pada Full-Stack Web Development &amp; AI Integration Engineering.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS & TECH STACK SECTION (3-COLUMN MATRIX - NO PROGRESS BARS) */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#6366F1] uppercase tracking-wider font-semibold">Tech Stack &amp; Tools</span>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#E6EDF3] tracking-tight">
              Keahlian &amp; Tumpukan Teknologi
            </h2>
            <p className="text-[#8B949E] text-xs md:text-sm leading-relaxed max-w-2xl">
              Kombinasi teknologi frontend, backend, dan AI untuk memecahkan masalah secara efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Core Web Stack */}
            <div className="bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 rounded-xl p-5 space-y-4">
              <div className="border-b border-[#30363D] pb-3">
                <h3 className="font-sans font-bold text-sm text-[#E6EDF3] flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#6366F1]" />
                  Core Web Stack
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "React.js", desc: "Modular SPA architecture & custom hooks", icon: "React" },
                  { name: "Node.js & Express", desc: "REST API, middleware & secure key proxy", icon: "Node" },
                  { name: "TypeScript", desc: "Strict static typing & data reliability", icon: "TypeScript" },
                  { name: "Tailwind CSS", desc: "Utility-first precision styling & design system", icon: "Tailwind" },
                  { name: "JavaScript (ES6+)", desc: "Async DOM processing & event handling", icon: "JS" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] p-3 rounded-lg transition-colors flex items-start gap-3">
                    <div className="pt-0.5">{renderSkillIcon(item.icon)}</div>
                    <div>
                      <div className="text-xs font-semibold text-[#E6EDF3]">{item.name}</div>
                      <div className="text-[11px] text-[#8B949E] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: AI & Cloud Integration */}
            <div className="bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 rounded-xl p-5 space-y-4">
              <div className="border-b border-[#30363D] pb-3">
                <h3 className="font-sans font-bold text-sm text-[#E6EDF3] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6366F1]" />
                  AI &amp; Cloud Integration
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Google Gemini API / Gen AI SDK", desc: "LLM integration for server-side logic", icon: "Gemini" },
                  { name: "Structured Output (JSON Schema)", desc: "Valid JSON schema parsing & zero syntax errors", icon: "JSON" },
                  { name: "Prompt Engineering", desc: "Strict system instruction & persona guardrails", icon: "Prompt" },
                  { name: "Firebase (Firestore, Auth)", desc: "NoSQL real-time sync & user authentication", icon: "Firebase" },
                  { name: "Google Cloud", desc: "Server deployment & Cloud Run infrastructure", icon: "Cloud" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] p-3 rounded-lg transition-colors flex items-start gap-3">
                    <div className="pt-0.5">{renderSkillIcon(item.icon)}</div>
                    <div>
                      <div className="text-xs font-semibold text-[#E6EDF3]">{item.name}</div>
                      <div className="text-[11px] text-[#8B949E] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Tools & Workflows */}
            <div className="bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 rounded-xl p-5 space-y-4">
              <div className="border-b border-[#30363D] pb-3">
                <h3 className="font-sans font-bold text-sm text-[#E6EDF3] flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#6366F1]" />
                  Tools &amp; Workflows
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Git & GitHub", desc: "Version control & collaboration workflows", icon: "Git" },
                  { name: "Vite & Build Tools", desc: "Fast dev server & optimized asset bundling", icon: "Vite" },
                  { name: "Postman API Testing", desc: "Endpoint validation & payload testing", icon: "Postman" },
                  { name: "Bundle Optimization", desc: "esbuild bundling & fast cold-start builds", icon: "Esbuild" },
                  { name: "CSS PDF Export Engine", desc: "Print media queries for automated PDF reports", icon: "PDF" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0D1117] border border-[#30363D] hover:border-[#6366F1] p-3 rounded-lg transition-colors flex items-start gap-3">
                    <div className="pt-0.5">{renderSkillIcon(item.icon)}</div>
                    <div>
                      <div className="text-xs font-semibold text-[#E6EDF3]">{item.name}</div>
                      <div className="text-[11px] text-[#8B949E] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FEATURED PROJECTS (CASE STUDIES) */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#30363D] pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#6366F1] uppercase tracking-wider font-semibold">Studi Kasus Proyek</span>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#E6EDF3] tracking-tight">
                Proyek Unggulan
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-1 flex items-center shrink-0">
              {(["AI Integration", "Full-Stack Web"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs px-3.5 py-1.5 rounded-md font-mono transition-all cursor-pointer ${
                    activeTab === tab 
                      ? "bg-[#30363D] text-[#E6EDF3] font-semibold" 
                      : "text-[#8B949E] hover:text-[#E6EDF3]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS_DATA.filter(p => p.category === activeTab).map((project) => {
              return (
                <div 
                  key={project.id}
                  className="bg-[#161B22] border border-[#30363D] hover:border-[#6366F1] rounded-xl p-6 md:p-8 transition-colors duration-200 flex flex-col lg:flex-row lg:items-center gap-6"
                >
                  {/* Primary Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-[#0D1117] text-[#8B949E] border border-[#30363D] px-2.5 py-0.5 rounded-md">
                        {project.role}
                      </span>
                      {project.award && (
                        <span className="text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          {project.award}
                        </span>
                      )}
                    </div>

                    <h3 className="font-sans font-bold text-xl md:text-2xl text-[#E6EDF3] tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-[#8B949E] text-xs md:text-sm leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech tags in JetBrains Mono */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((item, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] px-2 py-0.5 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact metrics & CTA */}
                  <div className="lg:w-80 border-t lg:border-t-0 lg:border-l border-[#30363D] pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between gap-6 shrink-0">
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="bg-[#0D1117] border border-[#30363D] rounded-lg p-3 space-y-1">
                          <span className="block text-2xl font-mono font-bold text-[#E6EDF3]">
                            {m.value}
                          </span>
                          <span className="text-[10px] font-bold text-[#E6EDF3] uppercase tracking-tight block">{m.label}</span>
                          <span className="text-[10px] text-[#8B949E] leading-tight block">{m.description}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-center text-xs font-mono font-medium flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#30363D] bg-[#0D1117] hover:bg-[#30363D]/40 text-[#E6EDF3] hover:text-white cursor-pointer transition-all"
                    >
                      Buka Case Study
                      <ArrowRight className="w-3.5 h-3.5 text-[#6366F1]" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="contact" className="rounded-xl border border-[#30363D] hover:border-[#6366F1] transition-colors duration-200 bg-[#161B22] p-8 md:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#6366F1] uppercase tracking-wider font-semibold block">
              Kolaborasi &amp; Pertanyaan
            </span>
            
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#E6EDF3] tracking-tight">
              Tertarik Berkolaborasi?
            </h2>
            
            <p className="text-[#8B949E] text-xs md:text-sm leading-relaxed">
              Saya siap membantu mengintegrasikan kemampuan AI ke dalam sistem web Anda, dari perancangan arsitektur hingga rilis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a 
              href={PORTFOLIO_OWNER.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#6366F1]/90 text-white px-6 py-2.5 rounded-md text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              <span>Hubungi di LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto bg-[#0D1117] hover:bg-[#30363D]/40 border border-[#30363D] text-[#E6EDF3] px-6 py-2.5 rounded-md text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400">Email Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8B949E] shrink-0" />
                  <span>Salin Email ({PORTFOLIO_OWNER.contacts.email})</span>
                </>
              )}
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#30363D] bg-[#0D1117] py-6 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
        <div>
          <p className="text-xs text-[#8B949E] font-mono">
            React, TypeScript, Tailwind CSS, &amp; Google Gemini API.
          </p>
        </div>
        <div>
          <p className="text-xs text-[#8B949E] font-sans">
            &copy; 2026 <span className="font-semibold text-[#E6EDF3]">{PORTFOLIO_OWNER.name}</span>.
          </p>
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onAskAI={handleAskAI}
      />

      {/* CENTERED PLAYGROUND MODAL FOR AI TWIN */}
      {isChatOpen && (
        <AITwinChat onClose={() => setIsChatOpen(false)} />
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          title="Bicara dengan AI Twin"
          className="w-12 h-12 rounded-lg bg-[#6366F1] hover:bg-[#6366F1]/90 text-white flex items-center justify-center cursor-pointer shadow-lg transition-all"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}


