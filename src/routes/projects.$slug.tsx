import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — A Ramcharan` },
          { name: "description", content: loaderData.project.short },
          { property: "og:title", content: `${loaderData.project.title} — A Ramcharan` },
          { property: "og:description", content: loaderData.project.short },
          { property: "og:image", content: loaderData.project.image },
          { name: "twitter:image", content: loaderData.project.image },
        ]
      : [{ title: "Project — A Ramcharan" }],
  }),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-display font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-2xl font-display font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button onClick={reset} className="mt-6 text-primary hover:underline">Try again</button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-8"
      >
        <ArrowLeft className="size-4" /> Back to projects
      </Link>

      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{project.category}</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">{project.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.short}</p>

      <div className="mt-10 rounded-2xl overflow-hidden glass shadow-card">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={1024}
          height={768}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-display font-semibold mb-3">About the project</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <h2 className="text-xl font-display font-semibold mt-10 mb-4">Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="glass rounded-xl p-5 h-fit shadow-card">
          <h3 className="text-sm font-mono text-primary mb-3">Tech stack</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
