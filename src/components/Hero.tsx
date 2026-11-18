import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Copy, Terminal } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section className="relative pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-7 lg:col-span-7">
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>{PROFILE.availability}</span>
          </div>

          <div className="animate-fade-up-delay-1 space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Construo software web, automações e soluções para problemas reais.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sou <strong className="font-semibold text-foreground">{PROFILE.name}</strong>,
              estudante de Ciência da Computação na UFABC. Desenvolvo interfaces com React e
              TypeScript, exploro análise de dados e automação com Python e atuo em projetos que
              fortalecem a comunidade acadêmica.
            </p>
          </div>

          <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              <span>Explorar projetos</span>
              <ArrowDownRight className="h-4 w-4" />
            </a>

            <a
              href="#contato"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-muted/60"
            >
              <span>Entrar em contato</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-transparent px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-foreground">E-mail copiado</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copiar e-mail</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-accent">
                  <Terminal className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Resumo técnico</p>
                  <p className="text-sm font-semibold text-foreground">UFABC • Ciência da Computação</p>
                </div>
              </div>
              <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground">
                SP, BR
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-border/80 bg-muted/40 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      Projeto principal
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground">UFABC Cronos</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Planejamento de matrículas e visualização de horários para estudantes da
                      universidade.
                    </p>
                  </div>
                  <a
                    href="https://www.ufabccronos.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir UFABC Cronos"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
                  <p className="font-mono text-[11px] text-muted-foreground">Stack principal</p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    React, TypeScript, Python
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-background/60 p-3.5">
                  <p className="font-mono text-[11px] text-muted-foreground">Atuação atual</p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    Web, dados e extensão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
