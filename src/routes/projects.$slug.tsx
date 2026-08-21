import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Moon } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.project.title} — A Ramcharan` },
    { name: "description", content: loaderData.project.short },
  ] : [{ title: "Project — A Ramcharan" }] }),
  notFoundComponent: () => <div className="max-w-3xl mx-auto px-6 py-32 text-center"><h1 className="text-3xl font-display font-bold">Project not found</h1><Link to="/projects" className="mt-6 inline-block text-primary hover:underline">← Back to projects</Link></div>,
  errorComponent: ({ error, reset }) => <div className="max-w-3xl mx-auto px-6 py-32 text-center"><h1 className="text-2xl font-display font-bold">Something went wrong</h1><p className="text-muted-foreground mt-2">{error.message}</p><button onClick={reset} className="mt-6 text-primary hover:underline">Try again</button></div>,
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-8"><ArrowLeft className="size-4" /> Back to projects</Link>
      <div className="section-kicker"><Moon className="size-3" /> {project.category} · {project.period}</div>
      <h1 className="mt-6 text-4xl md:text-6xl font-display font-black tracking-tight">{project.title}</h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-3xl">{project.short}</p>
      <div className="mt-10 project-mission overflow-hidden"><div className={`mission-art h-72 bg-gradient-to-br ${project.accent}`}><div className="mission-grid" /><div className="mission-symbol"><Moon /></div>{project.metric && <div className="mission-metric">{project.metric}</div>}</div></div>
      <div className="mt-12 grid md:grid-cols-[1fr_300px] gap-10">
        <div><h2 className="text-xl font-display font-semibold mb-3">About the project</h2><p className="text-muted-foreground leading-relaxed">{project.description}</p><h2 className="text-xl font-display font-semibold mt-10 mb-4">Highlights</h2><ul className="space-y-3">{project.highlights.map((h) => <li key={h} className="flex items-start gap-3"><CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{h}</span></li>)}</ul></div>
        <aside className="record-card h-fit"><h3 className="record-label">TECH STACK</h3><div className="flex flex-wrap gap-1.5">{project.stack.map((s) => <span key={s} className="mission-tag">{s}</span>)}</div>{project.metric && <><h3 className="record-label mt-7">KEY METRIC</h3><p className="text-2xl font-display font-black text-slate-100">{project.metric}</p></>}</aside>
      </div>
    </article>
  );
}
