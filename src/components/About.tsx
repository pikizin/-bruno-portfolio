export default function About() {
  return (
    <section id="sobre-mim" className="scroll-m-20 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight border-b pb-4">Sobre mim</h2>
      <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed text-muted-foreground">
        <div>
          <p className="mb-4">
            Sou estudante de Ciência da Computação na UFABC e busco sempre envolver tecnologia com o impacto na comunidade. Acredito que a computação é uma ferramenta poderosa para resolver problemas reais e facilitar a vida das pessoas.
          </p>
          <p>
            Ao longo da minha jornada, tenho me dedicado a criar plataformas e organizar eventos que fomentem o ecossistema tecnológico dentro e fora da universidade.
          </p>
          
          <h3 className="font-semibold text-foreground mb-4 text-xl mt-8">Habilidades & Interesses</h3>
          <div className="flex flex-wrap gap-2">
            {["Análise de Dados", "Desenvolvedor Web", "Desenvolvedor Front-End", "Estágio em TI", "Automação com Python"].map(skill => (
              <span key={skill} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold text-foreground mb-4 text-xl">Destaques</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span>Organizador da I Semana da Computação UFABC</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span>Criador do UFABC Cronos</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span>Membro ativo da Fundação Nexus</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span>Atuante no projeto de extensão Mundo Universitário UFABC</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
