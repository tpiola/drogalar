# Sete Lírios Manipulação

Site da Farmácia Sete Lírios Manipulação, Homeopatia e Drogaria (Av. Brasil, 815, Vila Aparecida, Franca/SP). Estrutura de e-commerce de manipulação de alta performance (navegação por objetivo, carrossel de destaques, barra de confiança, vitrines, "manipule sua receita"), com a marca Sete Lírios: logo do lírio dourado, verde profundo e verde-limão.

Site estático publicado na Vercel a partir da pasta `public/` (sem build).

## Estrutura
- `public/index.html`: página inicial pré-renderizada (SEO e GEO); `public/app.js` assume a navegação.
- `public/blog/*.html`: artigos com URL própria.
- `public/sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`, `404.html`.
- `vercel.json`: site estático, HTTPS/HSTS, CSP, anti-clickjacking e cache.
- `brand-system/`: identidade e materiais anteriores da marca.

## Como funciona a compra
Sem preço e sem pagamento no site, como exige a regra de manipulação: o cliente monta uma lista de orçamento ou envia a receita, e o pedido vai para o WhatsApp (16) 99244-0470 com os itens, se tem receita, retirada ou entrega e observações. O farmacêutico confere e responde com valor e prazo.

## Antes de liberar a indexação
- Domínio `.com.br` (RDC 44/2009) e trocar `noindex` por `index, follow` nas páginas e remover o `X-Robots-Tag` do `vercel.json`.
- Preencher `LEGAL` no `app.js`: razão social, CNPJ, farmacêutico responsável e CRF, licença sanitária, AFE e AE (se manipular controlados), e-mail.
- Validar com o farmacêutico responsável a lista de fórmulas e os textos (RDC 67/2007 e RDC 96/2008).
