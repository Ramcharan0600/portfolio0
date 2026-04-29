import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — A Ramcharan" },
      { name: "description", content: "Selected projects by A Ramcharan: LPUCure healthcare platform, AI Chatbot, Predictive Maintenance, and Fraud Detection." },
      { property: "og:title", content: "Projects — A Ramcharan" },
      { property: "og:description", content: "Full stack and machine learning projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Portfolio</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Projects</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        A collection of full stack and machine learning projects — from healthcare platforms to financial ML systems.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
