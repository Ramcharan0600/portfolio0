import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { profile, projects, skills } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Ramcharan — Full Stack Developer & ML Engineer" },
      { name: "description", content: "Portfolio of A Ramcharan — MERN stack developer and ML engineer building healthcare platforms, AI chatbots, predictive maintenance, and fraud detection systems." },
      { property: "og:title", content: "A Ramcharan — Full Stack Developer & ML Engineer" },
      { property: "og:description", content: "Featured projects: LPUCure, AI Chatbot, Predictive Maintenance, Fraud Detection." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs font-mono text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Available for Full Stack & ML internships
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">{profile.name}</span>.
            <br />
            I build intelligent web apps.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
            >
              View my work <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 text-sm font-medium hover:bg-secondary transition-smooth"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-1 ml-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
                <Github className="size-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
                <Linkedin className="size-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Featured work</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Selected Projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Toolkit</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Skills & Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.group} className="glass rounded-xl p-5 shadow-card">
              <h3 className="text-sm font-mono text-primary mb-3">{s.group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="glass rounded-3xl p-10 md:p-16 text-center shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Let's <span className="text-gradient">build</span> something great.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Open to internships and collaborative projects in full stack development and machine learning.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
            >
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
