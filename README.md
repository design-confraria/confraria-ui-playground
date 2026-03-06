# Confraria Design System

Uma biblioteca completa de componentes React construída com **shadcn/ui**, **Radix UI** e **Lucide icons**. Pronta para produção com suporte total a acessibilidade e TypeScript.

## ✨ Características

- **Componentes Base**: Botões, cards, inputs, badges, dialogs e mais
- **Componentes Customizados**: Alert, Avatar, StatCard, EmptyState, IconButton e mais
- **Ícones**: +1000 ícones SVG do Lucide inclusos
- **Design Tokens**: Paleta de cores, tipografia e espaçamento standardizados
- **100% TypeScript**: Type-safe em todo o projeto
- **Totalmente Acessível**: WCAG 2.1 AA compliance
- **Tailwind CSS**: Estilização utilitária e flexível
- **Documentação Interativa**: Showcase de componentes com código

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar ou navegar para o projeto
cd confraria-ui-playground

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a documentação.

## 📦 Usar Como Pacote npm

Este projeto agora tambem pode ser publicado como biblioteca npm para reutilizar componentes em outros apps React/Next.

### 1. Build da biblioteca

```bash
npm run build:package
```

Isso gera a pasta `dist/` com JavaScript e tipagens TypeScript.

### 2. Publicar no npm

Antes de publicar, ajuste `name` e `version` no `package.json`.

```bash
npm login
npm publish --access public
```

### 3. Instalar em outro projeto

```bash
npm install confraria-ui-playground
```

### 4. Importar componentes

```tsx
import { Button, StatCard, Alert } from 'confraria-ui-playground'
import 'confraria-ui-playground/styles.css'
```

### 5. Configurar Tailwind no projeto consumidor

Os componentes usam classes utilitarias. No Tailwind do projeto consumidor, inclua o pacote na leitura de classes:

```js
// tailwind.config.js / tailwind.config.ts
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/confraria-ui-playground/dist/**/*.{js,mjs}',
    ],
}
```

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── docs/
│   │   ├── components/       # Documentação de componentes
│   │   ├── tokens/           # Design tokens (cores, tipografia)
│   │   ├── icons/            # Galeria de ícones
│   │   └── layout.tsx        # Layout da documentação
│   ├── layout.tsx
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   └── confraria/            # Componentes customizados
└── lib/
    └── utils.ts              # Funções utilitárias
```

## 🧩 Componentes Disponíveis

### Componentes Base (shadcn/ui)

- Button, Card, Input, Textarea, Label, Badge
- Dialog, Dropdown Menu, Tabs, Select, Checkbox

### Componentes Customizados (Confraria)

- **Alert** - Alerta com variantes automáticas
- **Avatar** - Avatar com fallback automático
- **BadgeWithIcon** - Badge com ícone integrado
- **StatCard** - Card para exibir estatísticas
- **EmptyState** - Estado vazio elegante
- **IconButton** - Botão apenas com ícone

## 🎨 Design Tokens

### Cores
Paleta completa: Slate, Blue, Green, Red, Amber, Purple

### Tipografia e Espaçamento
Baseados em Tailwind CSS com escala 4px

### Ícones Lucide
+1000 ícones SVG disponíveis

## 🚢 Building para Produção

```bash
npm run build
npm start
```

Para build da biblioteca npm:

```bash
npm run build:package
```

## 📚 Documentação

Acesse a documentação interativa em:
- `/docs/components/` - Componentes
- `/docs/tokens/` - Design tokens
- `/docs/icons/` - Galeria de ícones

## 🔗 Stack

- [Next.js](https://nextjs.org) - Framework React
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [shadcn/ui](https://ui.shadcn.com) - Componentes base
- [Radix UI](https://www.radix-ui.com) - Primitivos
- [Lucide Icons](https://lucide.dev) - Ícones

---

**Confraria Design System** - Pronto para produção
