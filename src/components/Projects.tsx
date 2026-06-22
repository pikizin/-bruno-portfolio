import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UFABC Cronos",
    description: "Sistema web desenvolvido para auxiliar estudantes da UFABC no planejamento e organização de suas matrículas, oferecendo ferramentas de análise de disciplinas e visualização de horários.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://www.ufabccronos.com.br",
    featured: true,
  },
  {
    title: "I Semana da Computação UFABC",
    description: "Organizador da primeira edição do evento, conectando estudantes com o mercado de trabalho através de palestras, workshops e minicursos de tecnologia.",
    tags: ["Evento", "Comunidade", "Liderança"],
    link: "#",
    featured: false,
  },
  {
    title: "Mundo Universitário UFABC",
    description: "Projeto de extensão com o objetivo de ajudar ingressantes e veteranos a se adaptarem e aproveitarem ao máximo a vida universitária na UFABC.",
    tags: ["Extensão", "Educação"],
    link: "https://www.instagram.com/mundouniversitariouf/",
    featured: false,
  },
  {
    title: "Fundação Nexus",
    description: "Membro ativo focado em desenvolver projetos e inovações dentro do ecossistema estudantil, aplicando conhecimentos técnicos em demandas reais.",
    tags: ["Inovação", "Pesquisa", "Desenvolvimento"],
    link: "https://fundacaonexus.com/",
    featured: false,
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="scroll-m-20 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight border-b pb-4">Projetos & Ideias</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`group rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md p-6 flex flex-col h-full ${project.featured ? 'border-blue-500/50 dark:border-blue-500/30 ring-1 ring-blue-500/20' : 'border-border'}`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-xl leading-none tracking-tight">{project.title}</h3>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
