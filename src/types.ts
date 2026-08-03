export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  summary: string;
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  award?: string;
  category: "AI Integration" | "Full-Stack Web";
  shortDescription: string;
  description: string;
  caseStudy: CaseStudy;
  techStack: string[];
  metrics: ProjectMetric[];
  color: "blue" | "emerald";
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  status: "Production Ready" | "Core Stack" | "Advanced" | "Exploring";
  icon: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

