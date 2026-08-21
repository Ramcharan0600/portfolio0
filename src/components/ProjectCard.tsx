import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-mission group block">
      <div className="mission-art">
        <div className={`mission-glow bg-gradient-to-br ${project.accent}`} />
        <div className="mission-grid" />
        <div className="mission-symbol"><Sparkles /></div>
        <div className="mission-number">{project.period}</div>
        {project.metric && <div className="mission-metric">{project.metric}</div>}
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-[10px] font-mono tracking-[.28em] text-slate-500">{project.category}</p><h3 className="mt-2 text-2xl font-display font-bold group-hover:text-white transition-smooth">{project.title}</h3></div>
          <ArrowUpRight className="size-5 text-slate-500 group-hover:text-cyan-200 group-hover:rotate-45 transition-smooth" />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.short}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">{project.stack.slice(0, 6).map((s) => <span key={s} className="mission-tag">{s}</span>)}</div>
      </div>
    </Link>
  );
}
