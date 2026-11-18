import { PROFILE } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <p>
          {PROFILE.name} • Ciência da Computação na UFABC
        </p>
        <div className="flex items-center gap-5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="transition-colors hover:text-foreground"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
