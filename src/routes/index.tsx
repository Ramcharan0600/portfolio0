import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, Moon, Sparkles, Star, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { profile, projects, skills, certificates, achievements, experience } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Ramcharan — AI/ML Engineer | Generative AI" },
      { name: "description", content: "A Ramcharan's AI/ML portfolio featuring Generative AI, RAG, computer vision, and applied machine learning projects." },
    ],
  }),
  component: HomePage,
});

function MoonPortrait() {
  return (
    <div className="moon-portrait-wrap group" aria-label="Portrait — hover to activate Moon Knight mode">
      <div className="moon-ring" />
      <div className="moon-portrait">
        <img src={profile.portrait} alt="A Ramcharan portrait" />
        <div className="moon-costume" aria-hidden="true">
          <div className="moon-hood" />
          <div className="moon-eyes"><i /><i /></div>
          <div className="moon-crescent">☾</div>
          <div className="moon-cowl" />
          <div className="moon-armor" />
          <div className="moon-cape" />
        </div>
        <div className="portrait-scan" />
      </div>
      <div className="portrait-hint"><Moon className="size-3" /> Hover to enter Moon mode</div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="moon-site">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden flex items-center">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="moon-sky" />
        <div className="stars" />
        <div className="moon-orb"><Moon className="size-24 md:size-36" /></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-2 moon-chip"><Sparkles className="size-3.5" /> AI/ML ENGINEER · GENERATIVE AI · COMPUTER VISION</div>
            <p className="mt-7 text-sm font-mono tracking-[.35em] text-slate-400">THE NIGHT SHIFT / 2026</p>
            <h1 className="mt-4 text-5xl md:text-7xl xl:text-8xl font-display font-black leading-[.92] tracking-[-.05em]">
              I BUILD <span className="moon-text">INTELLIGENT</span><br />SYSTEMS.
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">{profile.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="moon-button">Explore the work <ArrowRight className="size-4" /></Link>
              <Link to="/contact" className="moon-button ghost">Contact me</Link>
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button"><Github className="size-5" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-button"><Linkedin className="size-5" /></a>
              <a href={`mailto:${profile.email}`} className="icon-button"><Mail className="size-5" /></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-xs font-mono text-slate-500">
              <span>JALANDHAR, INDIA</span><span>9.22 CGPA</span><span>AI-102 CERTIFIED</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end reveal-up delay-2"><MoonPortrait /></div>
        </div>
        <div className="scroll-mark">SCROLL TO EXPLORE <ArrowRight className="size-3 rotate-90" /></div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="section-kicker"><Terminal className="size-4" /> SELECTED MISSIONS</div>
        <div className="flex items-end justify-between gap-4 mb-10"><div><h2 className="section-title">Projects in the dark.</h2><p className="text-slate-400 mt-3 max-w-xl">Applied AI work spanning computer vision, RAG, healthcare and algorithmic systems.</p></div><Link to="/projects" className="hidden sm:inline-flex moon-link">View all <ArrowRight className="size-4" /></Link></div>
        <div className="grid md:grid-cols-2 gap-6">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[.8fr_1.2fr] gap-12">
        <div><div className="section-kicker"><Star className="size-4" /> CAPABILITIES</div><h2 className="section-title">Tools of the night.</h2><p className="text-slate-400 mt-4 leading-relaxed">From classical ML to modern retrieval pipelines, I focus on systems that can be explained, evaluated and shipped.</p></div>
        <div className="grid sm:grid-cols-2 gap-4">{skills.map((s) => <div key={s.group} className="skill-panel"><h3>{s.group}</h3><div>{s.items.map((i) => <span key={i}>{i}</span>)}</div></div>)}</div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="section-kicker"><Sparkles className="size-4" /> FIELD RECORD</div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="record-card lg:col-span-2"><p className="record-label">EXPERIENCE</p>{experience.map((e) => <div key={e.company}><h3>{e.role}</h3><p className="text-slate-300">{e.company} · {e.period}</p><p className="mt-3 text-slate-400">{e.description}</p></div>)}</div>
          <div className="record-card"><p className="record-label">CERTIFICATIONS</p><ul>{certificates.map((c) => <li key={c}>{c}</li>)}</ul></div>
          <div className="record-card lg:col-span-3"><p className="record-label">ACHIEVEMENTS</p><div className="grid md:grid-cols-3 gap-5">{achievements.map((a) => <p key={a} className="text-slate-300">{a}</p>)}</div></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 pt-10"><div className="moon-cta"><div className="moon-cta-orb"><Moon /></div><div className="relative z-10"><p className="section-kicker justify-center">THE NEXT MISSION</p><h2 className="text-4xl md:text-6xl font-display font-black">LET'S BUILD SOMETHING <span className="moon-text">USEFUL.</span></h2><p className="mt-4 text-slate-400">Open to AI/ML, Generative AI and engineering opportunities.</p><Link to="/contact" className="moon-button mt-8">Start a conversation <ArrowRight className="size-4" /></Link></div></div></section>
    </main>
  );
}
