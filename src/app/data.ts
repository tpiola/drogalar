export const BUSINESS = {
  name: "Sete Lírios",
  whatsapp: "5516992440470",
  whatsappLabel: "(16) 99244-0470",
  phone: "(16) 3722-3777",
  phoneHref: "tel:+551637223777",
  address: "Av. Brasil, 815 — Vila Aparecida, Franca/SP",
  maps: "https://maps.google.com/?q=Av.+Brasil+815+Franca+SP",
  instagram: "https://instagram.com/farmaciasetelirios",
  hours: "Segunda a sexta, 8h–20h · Sábado, 8h–18h",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const services = [
  { title: "Medicamentos manipulados", text: "Preparações individualizadas conforme prescrição, com orientação farmacêutica." },
  { title: "Dermocosméticos", text: "Formulações personalizadas para rotinas de cuidado indicadas por profissional habilitado." },
  { title: "Vitaminas e minerais", text: "Opções sob medida, respeitando concentração, forma farmacêutica e prescrição." },
  { title: "Fitoterápicos", text: "Fórmulas de origem vegetal preparadas com rastreabilidade e critérios farmacêuticos." },
];

export const goals = [
  { label: "Imunidade", code: "IMU", tone: "lime" },
  { label: "Energia", code: "ENE", tone: "orange" },
  { label: "Sono", code: "SON", tone: "blue" },
  { label: "Foco", code: "FOC", tone: "violet" },
  { label: "Ossos", code: "OSS", tone: "sand" },
  { label: "Antioxidantes", code: "ANT", tone: "red" },
];

export const products = [
  { name: "Vitamina D3 + K2", detail: "60 cápsulas", goal: "Suporte nutricional", tone: "lime", tag: "Mais procurado" },
  { name: "Magnésio Dimalato", detail: "60 cápsulas", goal: "Rotina e disposição", tone: "orange", tag: null },
  { name: "Complexo B", detail: "60 cápsulas", goal: "Metabolismo energético", tone: "blue", tag: null },
  { name: "Coenzima Q10", detail: "60 cápsulas", goal: "Ação antioxidante", tone: "red", tag: "Destaque" },
  { name: "Ômega 3", detail: "120 cápsulas", goal: "Suplementação diária", tone: "violet", tag: null },
  { name: "Vitamina C + Zinco", detail: "60 cápsulas", goal: "Suporte nutricional", tone: "sand", tag: null },
];

export const steps = [
  { n: "01", title: "Envie sua receita", text: "Fotografe a prescrição inteira, com boa luz e sem cortar as informações." },
  { n: "02", title: "Receba o orçamento", text: "Nossa equipe confere a fórmula e retorna com prazo, condições e orientações." },
  { n: "03", title: "Confirme seu pedido", text: "Após a confirmação, a preparação segue para o fluxo farmacêutico." },
];

export const faq = [
  ["Preciso de receita?", "Depende da formulação. Medicamentos sujeitos à prescrição só podem ser preparados mediante receita válida. Envie o documento para conferência."],
  ["Como pedir um orçamento?", "Use o botão de WhatsApp e envie uma foto legível da receita. A equipe verifica a viabilidade, o prazo e as condições."],
  ["Qual é o prazo de preparo?", "O prazo varia conforme a fórmula e a disponibilidade dos insumos. A previsão é informada no orçamento."],
  ["Vocês fazem entrega?", "Consulte a equipe no momento do orçamento para confirmar regiões atendidas, prazo e eventual taxa."],
];
