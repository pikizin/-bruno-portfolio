import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contato" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Contato</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Estou aberto a oportunidades de estágio em TI, projetos de desenvolvimento web,
              análise de dados e colaborações. Se quiser trocar uma ideia, mande uma mensagem.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <div className="flex w-full flex-wrap gap-3 lg:justify-end">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:flex-none"
              >
                <Mail className="h-4 w-4" />
                <span>Enviar e-mail</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-muted"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-accent" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <FaLinkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <FaGithub className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
