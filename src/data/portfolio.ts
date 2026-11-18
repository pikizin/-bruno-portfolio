export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  repoUrl?: string;
  statusNote?: string;
  featured?: boolean;
}

export interface CapabilityGroup {
  title: string;
  description: string;
  items: string[];
}

export interface Milestone {
  title: string;
  role: string;
  description: string;
  link?: string;
}

export const PROFILE = {
  name: "Bruno Pereira",
  initials: "BP",
  role: "Estudante de Ciência da Computação na UFABC",
  availability: "Disponível para estágio em TI e projetos",
  email: "bruno_ps_silva@hotmail.com",
  github: "https://github.com/pikizin",
  githubRepos: "https://github.com/pikizin?tab=repositories",
  linkedin: "https://www.linkedin.com/in/bruno-pereira-21390526/",
  location: "São Paulo, Brasil",
};

export const PROJECTS: Project[] = [
  {
    id: "ufabc-cronos",
    title: "UFABC Cronos",
    category: "Produto web em produção",
    summary:
      "Plataforma desenvolvida para ajudar estudantes da UFABC a planejar e organizar suas matrículas sem conflitos de horário, com análise rápida de disciplinas e visualização interativa da grade.",
    impact:
      "Ferramenta prática usada pela comunidade acadêmica para simplificar escolhas de quadrimestre.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://www.ufabccronos.com.br",
    linkLabel: "Acessar projeto",
    featured: true,
  },
  {
    id: "ufabc-atlas",
    title: "UFABC Atlas",
    category: "Ecossistema UFABC",
    summary:
      "Iniciativa voltada à organização e visualização de informações acadêmicas da UFABC, facilitando a exploração de dados e caminhos dentro da universidade.",
    impact: "Centraliza referências úteis para apoiar a tomada de decisão dos estudantes.",
    tags: ["TypeScript", "Dados acadêmicos", "Web"],
    statusNote: "Em desenvolvimento • repositório privado no momento",
  },
  {
    id: "coda-ufabc",
    title: "I CODA - Semana de Computação e Dados",
    category: "Organização de evento",
    summary:
      "Idealização e organização da primeira edição da CODA na UFABC, reunindo palestras de mercado e pesquisa, oficinas e rodas de conversa sobre computação e ciência de dados.",
    impact: "Portal oficial com programação, trilhas e área do aluno para check-in nas atividades.",
    tags: ["Liderança", "Computação e dados", "Eventos"],
    link: "https://codaufabc.com/",
    linkLabel: "Acessar site da CODA",
  },
  {
    id: "fundacao-nexus",
    title: "Fundação Nexus",
    category: "Inovação estudantil",
    summary:
      "Atuação ativa no desenvolvimento de projetos e iniciativas de inovação dentro do ecossistema universitário, aplicando conhecimento técnico em demandas reais.",
    impact: "Colaboração multidisciplinar com foco em entrega e resolução de problemas.",
    tags: ["Inovação", "Pesquisa", "Desenvolvimento"],
    link: "https://fundacaonexus.com/",
    linkLabel: "Conhecer iniciativa",
  },
  {
    id: "mundo-universitario",
    title: "Mundo Universitário UFABC",
    category: "Projeto de extensão",
    summary:
      "Projeto de extensão voltado a acolher ingressantes e apoiar veteranos na adaptação e no aproveitamento da vida acadêmica dentro da UFABC.",
    impact: "Comunicação acessível e orientação contínua para novos estudantes.",
    tags: ["Extensão", "Educação", "Comunicação"],
    link: "https://www.instagram.com/mundouniversitariouf/",
    linkLabel: "Ver no Instagram",
  },
  {
    id: "projeto-memosyne",
    title: "Projeto Memosyne",
    category: "Visão computacional e IA",
    summary:
      "Sistema de reconhecimento de xadrez em tempo real construído com OpenCV e TensorFlow para identificação de peças e estados de tabuleiro.",
    impact: "Aplicação prática de visão computacional e aprendizado de máquina em Python.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    repoUrl: "https://github.com/pikizin/Projeto_Memosyne",
  },
  {
    id: "portal-ingressante-ihc",
    title: "Portal do Ingressante UFABC",
    category: "Interface e IHC",
    summary:
      "Hub interativo de acolhimento e orientação acadêmica pensado com foco em usabilidade e experiência para quem está chegando à universidade.",
    impact: "Protótipo funcional desenvolvido com princípios de interação humano-computador.",
    tags: ["JavaScript", "IHC", "Front-end"],
    repoUrl: "https://github.com/pikizin/portal-ingressante-ihc",
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: "Desenvolvimento web",
    description: "Interfaces responsivas, acessíveis e focadas em clareza de uso.",
    items: ["React", "TypeScript", "Tailwind CSS", "Front-end moderno"],
  },
  {
    title: "Dados e automação",
    description: "Scripts e análises para transformar tarefas manuais em fluxos confiáveis.",
    items: ["Python", "Análise de dados", "Automação de processos", "Estruturação lógica"],
  },
  {
    title: "Comunidade e liderança",
    description: "Experiência prática coordenando pessoas, eventos e projetos de extensão.",
    items: ["Organização de eventos", "Trabalho em equipe", "Comunicação", "Iniciativa"],
  },
];

export const MILESTONES: Milestone[] = [
  {
    title: "UFABC Cronos",
    role: "Criador e desenvolvedor",
    description: "Concepção, interface e lógica de planejamento de grade para estudantes da UFABC.",
    link: "https://www.ufabccronos.com.br",
  },
  {
    title: "I CODA - Semana de Computação e Dados",
    role: "Organizador",
    description:
      "Coordenação da primeira semana de computação e dados da UFABC, conectando academia e mercado.",
    link: "https://codaufabc.com/",
  },
  {
    title: "UFABC Atlas",
    role: "Desenvolvimento e estruturação",
    description: "Projeto voltado à organização e navegação de informações acadêmicas na UFABC.",
  },
  {
    title: "Fundação Nexus",
    role: "Membro ativo",
    description: "Desenvolvimento de soluções e projetos voltados à inovação no ambiente estudantil.",
    link: "https://fundacaonexus.com/",
  },
  {
    title: "Mundo Universitário UFABC",
    role: "Atuação em extensão",
    description: "Apoio à integração de ingressantes e disseminação de informações sobre a universidade.",
    link: "https://www.instagram.com/mundouniversitariouf/",
  },
];
