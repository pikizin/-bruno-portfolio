import { ArrowUpRight, Code2, Cpu, Users } from "lucide-react";
import { CAPABILITIES, MILESTONES } from "../data/portfolio";

const capabilityIcons = [Code2, Cpu, Users];

export default function About() {
  return (
    <div className="space-y-24">
      <section id="sobre" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Perfil</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sobre mim
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Base técnica em computação aliada à prática de construir e colocar ideias em uso.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-5">
            <p>
              Estudo Ciência da Computação na UFABC e enxergo a tecnologia como um meio direto de
              resolver problemas cotidianos com clareza e eficiência.
            </p>
            <p>
              Mais do que escrever código, gosto de entender o contexto de quem usa o produto —
              seja criando ferramentas como o UFABC Cronos, automatizando rotinas com Python ou
              organizando eventos técnicos que conectam estudantes ao mercado de trabalho.
            </p>
            <p className="rounded-xl border border-border bg-card p-4 text-sm text-foreground/90">
              Busco oportunidades de estágio em TI e desenvolvimento onde eu possa contribuir com
              front-end, dados ou automação, aprendendo rápido junto a times de engenharia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {CAPABILITIES.map((group, idx) => {
              const Icon = capabilityIcons[idx % capabilityIcons.length];
              return (
                <div
                  key={group.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5"
                >
                  <div className="space-y-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-1.5 border-t border-border/70 pt-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/85"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trajetoria" className="scroll-mt-24 space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Experiência</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Destaques da trajetória
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {MILESTONES.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted font-mono text-xs font-semibold text-accent">
                0{idx + 1}
              </span>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-base font-semibold text-foreground">{item.title}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${item.title}`}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="font-mono text-xs text-accent">{item.role}</p>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
