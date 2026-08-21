import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [
    { title: "Projects — A Ramcharan" },
    { name: "description", content: "AI/ML, Generative AI, computer vision and full-stack projects by A Ramcharan." },
  ] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <section className="max-w-7xl mx-auto px-6 py-20"><div className="section-kicker">SELECTED MISSIONS</div><h1 className="section-title mt-5">Projects in the dark.</h1><p className="text-slate-400 max-w-2xl mt-4 mb-12">A collection of applied AI work spanning computer vision, RAG, healthcare, and algorithmic systems.</p><div className="grid md:grid-cols-2 gap-6">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></section>;
}
