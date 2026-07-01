// ─────────────────────────────────────────────
//  DADOS DO CLIENTE — Drogalar
// ─────────────────────────────────────────────

export const BRAND = {
  name: "Drogalar",
  tagline: "Farmácia & Manipulação",
  description:
    "Cuidado farmacêutico personalizado, com excelência, precisão e confiança para cada paciente.",

  // Contato
  whatsapp: "5511999999999",
  whatsappMessage: "Olá! Vim pelo site da Drogalar e gostaria de mais informações sobre os serviços.",
  instagram: "@drogalar",

  // Localização
  address: "Av. Paulista, 1234 — Bela Vista, São Paulo — SP, 01310-100",
  city: "São Paulo — SP",
  mapsQuery: "Av. Paulista, 1234, Bela Vista, São Paulo, SP",

  // Mídia — substitua pelas URLs reais
  heroVideo: "", // URL do vídeo de fundo do hero
  expertPhoto: "", // URL da foto do especialista/profissional
  expertPhotoAlt: "Farmacêutico responsável da Drogalar",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES = [
  {
    icon: "🧪",
    title: "Manipulação Personalizada",
    description:
      "Fórmulas desenvolvidas com precisão técnica para atender às necessidades específicas de cada paciente, conforme prescrição médica.",
    benefits: [
      "Dosagem exata conforme receituário",
      "Insumos farmacêuticos certificados",
      "Prazo ágil de produção",
    ],
  },
  {
    icon: "💊",
    title: "Medicamentos e Correlatos",
    description:
      "Amplo portfólio de medicamentos, suplementos, cosméticos e produtos farmacêuticos para toda a família.",
    benefits: [
      "Marcas de referência e genéricos",
      "Controle rigoroso de estoque",
      "Orientação farmacêutica inclusiva",
    ],
  },
  {
    icon: "🌿",
    title: "Fitoterápicos e Homeopatia",
    description:
      "Linha completa de produtos naturais, fitoterápicos e homeopáticos manipulados com rigor técnico e qualidade assegurada.",
    benefits: [
      "Ativos de origem natural certificados",
      "Fórmulas exclusivas",
      "Orientação especializada",
    ],
  },
  {
    icon: "🧴",
    title: "Dermocosméticos Manipulados",
    description:
      "Cremes, séruns, loções e produtos estéticos desenvolvidos sob medida, com ativos de alta performance.",
    benefits: [
      "Formulações anti-aging e clareamento",
      "Tratamentos para pele e cabelo",
      "Alta concentração de ativos",
    ],
  },
];

export const DIFFERENTIALS = [
  {
    icon: "🎯",
    title: "Atendimento Personalizado",
    text: "Cada cliente recebe atenção individual, com análise cuidadosa da prescrição e das necessidades específicas.",
  },
  {
    icon: "🔬",
    title: "Tecnologia de Precisão",
    text: "Equipamentos de última geração garantem exatidão nas fórmulas e segurança terapêutica em cada produto.",
  },
  {
    icon: "🏆",
    title: "Excelência Comprovada",
    text: "15 anos de atuação no mercado com histórico de confiança e satisfação dos nossos pacientes.",
  },
  {
    icon: "🤝",
    title: "Equipe Especializada",
    text: "Farmacêuticos qualificados, comprometidos com a ética, o cuidado humanizado e a saúde de cada paciente.",
  },
  {
    icon: "✅",
    title: "Processo Claro e Seguro",
    text: "Da receita à entrega, cada etapa é monitorada com controle de qualidade rigoroso e rastreabilidade total.",
  },
  {
    icon: "🚀",
    title: "Agilidade e Confiança",
    text: "Entrega rápida, comunicação transparente e acompanhamento contínuo para uma experiência sem fricção.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Primeiro Contato",
    description:
      "Entre em contato pelo WhatsApp, telefone ou presencialmente. Nossa equipe está pronta para receber sua demanda com atenção e cordialidade.",
  },
  {
    number: "02",
    title: "Análise da Prescrição",
    description:
      "O farmacêutico responsável avalia sua receita, esclarece dúvidas e orienta sobre o melhor produto ou formulação para o seu caso.",
  },
  {
    number: "03",
    title: "Manipulação ou Seleção",
    description:
      "Seu medicamento é manipulado com precisão técnica ou selecionado do nosso portfólio, sempre com controle de qualidade garantido.",
  },
  {
    number: "04",
    title: "Entrega e Acompanhamento",
    description:
      "Produto entregue com orientações claras de uso. Estamos disponíveis para dúvidas, retornos e acompanhamento da evolução do tratamento.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "A Drogalar transformou meu tratamento. A atenção do farmacêutico e a qualidade das fórmulas manipuladas são incomparáveis. Me sinto segura em cada consulta.",
    name: "Ana Carolina M.",
    context: "Paciente de manipulação",
  },
  {
    quote: "Já sou cliente há mais de 8 anos. A equipe é extremamente profissional, o atendimento é sempre personalizado e os produtos chegam impecáveis. Recomendo a todos.",
    name: "Ricardo Fernandes",
    context: "Cliente fidelizado",
  },
  {
    quote: "Meu médico me indicou a Drogalar para manipulação de hormônios e foi a melhor indicação que recebi. Serviço ágil, transparente e de altíssima qualidade.",
    name: "Patrícia Souza",
    context: "Indicação médica",
  },
];
