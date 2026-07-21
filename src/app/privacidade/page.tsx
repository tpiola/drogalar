import Link from "next/link";

export const metadata = { title: "Política de Privacidade | Sete Lírios" };

export default function PrivacyPage() {
  return <main className="legalPage">
    <Link className="brand" href="/"><span className="brandMark">SL</span><span>Sete Lírios<small>Farmácia de Manipulação</small></span></Link>
    <p className="eyebrow">Governança de dados</p><h1>Política de Privacidade</h1>
    <p>Esta página explica como os dados são tratados ao navegar no site e ao iniciar um atendimento pelos canais da Sete Lírios.</p>
    <h2>Dados de navegação</h2><p>Podemos registrar dados técnicos e agregados, como página acessada, origem da visita, dispositivo e interação com botões. Esses dados são usados para segurança, desempenho e melhoria da experiência.</p>
    <h2>Atendimento pelo WhatsApp</h2><p>Ao abrir o WhatsApp, você passa a utilizar um serviço externo sujeito aos termos da Meta. Envie receitas e informações de saúde somente quando necessárias ao orçamento e atendimento farmacêutico.</p>
    <h2>Finalidade e retenção</h2><p>Os dados devem ser usados apenas para responder solicitações, prestar atendimento, cumprir obrigações legais e melhorar a operação.</p>
    <h2>Seus direitos</h2><p>Você pode solicitar confirmação, acesso, correção ou exclusão de dados, observadas as hipóteses legais de retenção. Entre em contato pelos canais exibidos no site.</p>
    <h2>Atualizações</h2><p>Última revisão: julho de 2026.</p><Link className="button" href="/">Voltar ao site</Link>
  </main>;
}
