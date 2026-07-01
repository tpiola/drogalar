# 🏥 Drogalar — Farmácia & Manipulação Premium

[![Deploy to GitHub Pages](https://github.com/tpiola/drogalar/actions/workflows/deploy.yml/badge.svg)](https://github.com/tpiola/drogalar/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-c8a96e)](LICENSE)

**Site institucional premium para farmácia e manipulação**, desenvolvido com React 19, Vite 8, Tailwind CSS v4 e Framer Motion. Design dark luxury com paleta dourada, animações suaves e SEO completo.

🌐 **[Ver online →](https://tpiola.github.io/drogalar/)**

---

## ✨ Destaques

- 🎨 **Design Dark Luxury** — paleta dourada `#c8a96e` sobre fundo escuro, tipografia Playfair Display + Inter
- ⚡ **Performance máxima** — Vite 8, code splitting, lazy loading, assets otimizados
- 📱 **100% Responsivo** — mobile-first, layouts adaptados para todos os tamanhos
- 🎞️ **Animações premium** — Framer Motion com viewport detection e micro-interações
- 🔍 **SEO completo** — meta tags, Open Graph, Twitter Card, Schema.org (Pharmacy)
- 📍 **Google Maps integrado** — seção de localização com mapa embutido
- 💬 **WhatsApp CTA** — botão flutuante e CTAs em todo o site
- 🚀 **Deploy automático** — GitHub Actions → GitHub Pages

---

## 🗂️ Estrutura

```
src/
├── components/
│   ├── Header.jsx        # Navbar com scroll detection
│   ├── Hero.jsx          # Hero fullscreen com vídeo/background
│   ├── About.jsx         # Seção sobre a farmácia
│   ├── Services.jsx      # Grid de serviços
│   ├── Differentials.jsx # Diferenciais competitivos
│   ├── Process.jsx       # Passo a passo do atendimento
│   ├── Testimonials.jsx  # Depoimentos de pacientes
│   ├── CTASection.jsx    # Call-to-action intermediário
│   ├── Location.jsx      # Mapa + informações de contato
│   ├── Footer.jsx        # Rodapé completo
│   └── WhatsAppFloat.jsx # Botão flutuante WhatsApp
├── constants.js          # ← TODOS os dados do cliente aqui
├── App.jsx
├── main.jsx
└── index.css             # Design tokens, animações, utilitários
```

---

## 🚀 Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/tpiola/drogalar.git
cd drogalar

# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linter
npm run lint
```

---

## ⚙️ Personalização

Todos os dados do cliente estão centralizados em **`src/constants.js`**. Edite este arquivo para personalizar:

| Campo | Descrição |
|-------|-----------|
| `BRAND.whatsapp` | Número WhatsApp com DDI+DDD (ex: `5511999999999`) |
| `BRAND.instagram` | Handle do Instagram (ex: `@drogalar`) |
| `BRAND.address` | Endereço completo |
| `BRAND.city` | Cidade — Estado |
| `BRAND.heroVideo` | URL do vídeo de fundo do hero |
| `BRAND.expertPhoto` | URL da foto do farmacêutico |
| `SERVICES` | Lista de serviços oferecidos |
| `DIFFERENTIALS` | Diferenciais competitivos |
| `TESTIMONIALS` | Depoimentos de pacientes |

---

## 🌐 Deploy

O deploy é feito automaticamente via **GitHub Actions** para o **GitHub Pages** a cada push na branch `main`.

**URL de produção:** `https://tpiola.github.io/drogalar/`

Para habilitar o GitHub Pages:
1. Acesse **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow irá fazer o deploy automaticamente

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | v4 | Estilização utilitária |
| Framer Motion | 12 | Animações e transições |
| lucide-react | latest | Ícones SVG |
| oxlint | latest | Linting rápido |

---

## 📄 Licença

[MIT](LICENSE) © Drogalar
