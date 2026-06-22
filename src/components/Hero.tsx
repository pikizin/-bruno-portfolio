export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Transformando ideias em <span className="text-blue-600 dark:text-blue-500">realidade digital</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Desenvolvedor, estudante na UFABC e apaixonado por criar soluções que impactam a comunidade acadêmica e além.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="#projetos" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Ver Projetos
        </a>
        <a href="#sobre-mim" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
          Sobre mim
        </a>
      </div>
    </section>
  );
}
