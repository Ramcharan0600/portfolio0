import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { profile, experience, education, certificates, skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Ramcharan" },
      { name: "description", content: "B.Tech CSE student at LPU and ML Engineer Intern at Pratinik Infotech. Passionate about MERN stack, machine learning, and cloud." },
      { property: "og:title", content: "About — A Ramcharan" },
      { property: "og:description", content: "Background, experience, education and certifications." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">About</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{profile.name}</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I'm a B.Tech Computer Science student at Lovely Professional University (graduating 2028),
        currently interning as a Machine Learning Engineer at Pratinik Infotech. I love building things
        that combine clean web experiences with intelligent data systems — from MERN stack platforms
        to ML-powered analytics.
      </p>

      {/* EXPERIENCE */}
      <div className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-display font-bold mb-6">
          <Briefcase className="size-5 text-primary" /> Experience
        </h2>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.company} className="glass rounded-xl p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-lg">{e.role}</h3>
                <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-primary mt-1">{e.company}</p>
              <p className="text-muted-foreground mt-3 leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-display font-bold mb-6">
          <GraduationCap className="size-5 text-primary" /> Education
        </h2>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="glass rounded-xl p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-lg">{e.school}</h3>
                <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-primary mt-1">{e.degree}</p>
              <p className="text-xs text-muted-foreground mt-1">{e.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATES */}
      <div className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-display font-bold mb-6">
          <Award className="size-5 text-primary" /> Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {certificates.map((c) => (
            <div key={c} className="glass rounded-xl p-4 shadow-card flex items-center gap-3">
              <div className="size-9 rounded-lg bg-gradient-hero grid place-items-center flex-shrink-0">
                <Award className="size-4 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium">{c}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-16">
        <h2 className="text-2xl font-display font-bold mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}
