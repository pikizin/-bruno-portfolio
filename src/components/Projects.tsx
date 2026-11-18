import { ArrowUpRight, Calendar, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROFILE, PROJECTS } from "../data/portfolio";
import CronosSvgPreview from "./CronosSvgPreview";

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projetos" className="scroll-mt-24 space-y-10">
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Portfólio</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projetos e iniciativas
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Produtos digitais, repositórios no GitHub e ações acadêmicas que combinam código,
          organização e impacto direto na comunidade.
        </p>
      </div>

      {featured && (
        <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 sm:p-8">
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="space-y-4 lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{featured.category}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featured.summary}
                  </p>
                  <p className="text-sm font-medium text-foreground/90">{featured.impact}</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(featured.link || featured.repoUrl) && (
                  <div className="flex flex-wrap items-center gap-3">
                    {featured.link && (
                      <a
                        href={featured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                      >
                        <span>{featured.linkLabel ?? "Acessar projeto"}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {featured.repoUrl && (
                      <a
                        href={featured.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-muted"
                      >
                        <FaGithub className="h-4 w-4" />
                        <span>Repositório</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <CronosSvgPreview />
            </div>
          </div>
        </article>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-accent">
                  <Layers className="h-3.5 w-3.5" />
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Repositório no GitHub de ${project.title}`}
                      title="Ver código no GitHub"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.linkLabel ?? "Abrir"} ${project.title}`}
                      title={project.linkLabel ?? "Acessar projeto"}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-border/70 pt-4">
              <p className="text-xs leading-relaxed text-foreground/80">{project.impact}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.repoUrl || project.statusNote) && (
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      <span>{project.linkLabel ?? "Acessar projeto"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      <span>Ver código no GitHub</span>
                    </a>
                  )}
                  {project.statusNote && (
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.statusNote}
                    </span>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card/60 px-6 py-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
            <FaGithub className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Mais códigos e experimentos no GitHub
            </p>
            <p className="text-xs text-muted-foreground">
              Acompanhe repositórios públicos, estudos e utilitários em desenvolvimento.
            </p>
          </div>
        </div>
        <a
          href={PROFILE.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-muted"
        >
          <span>Explorar GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
