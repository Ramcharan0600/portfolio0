import { profile } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React & TanStack Start.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
            <Github className="size-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-smooth">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
