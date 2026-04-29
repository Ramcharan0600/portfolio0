import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth hover:-translate-y-1 block"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          width={1024}
          height={640}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border text-muted-foreground">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-display font-semibold">{project.title}</h3>
          <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-smooth" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.short}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
