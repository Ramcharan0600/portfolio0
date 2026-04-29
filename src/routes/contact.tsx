import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — A Ramcharan" },
      { name: "description", content: "Get in touch with A Ramcharan for full stack development and machine learning opportunities." },
      { property: "og:title", content: "Contact — A Ramcharan" },
      { property: "og:description", content: "Open to internships and collaborations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Github, label: "GitHub", value: "github.com", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com", href: profile.linkedin },
  ];
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Contact</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's connect.</h1>
      <p className="text-muted-foreground text-lg max-w-xl">
        I'm open to internships, freelance projects and collaborations in full stack and machine learning.
        The fastest way to reach me is email.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        {items.map((i) => {
          const Icon = i.icon;
          const inner = (
            <div className="glass rounded-xl p-5 shadow-card hover:shadow-glow transition-smooth h-full">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gradient-hero grid place-items-center">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">{i.label}</p>
                  <p className="text-sm font-medium">{i.value}</p>
                </div>
              </div>
            </div>
          );
          return i.href ? (
            <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={i.label}>{inner}</div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
        >
          <Mail className="size-4" /> Send me an email
        </a>
      </div>
    </section>
  );
}
