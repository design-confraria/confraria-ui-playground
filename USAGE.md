# Guia de Uso - Confraria UI

Biblioteca de componentes React com Tailwind CSS, Radix UI e Lucide icons.

## 📦 Instalação

```bash
npm install @confraria/ui
```

### Componentes Adicionais com shadcn/ui

A biblioteca `@confraria/ui` fornece os componentes essenciais do design system. Para componentes adicionais que não estão incluídos (como Tooltip, Popover, Calendar, etc.), você pode usar o **shadcn/ui** diretamente no seu projeto:

```bash
# Instalar shadcn CLI
npx shadcn@latest init

# Adicionar componentes conforme necessário
npx shadcn@latest add tooltip
npx shadcn@latest add popover
npx shadcn@latest add calendar
npx shadcn@latest add form
```

Isso adiciona os componentes diretamente ao seu projeto, permitindo que você customize conforme necessário enquanto mantém consistência com o design system.

## ⚙️ Configuração Inicial

### 1. Importar estilos CSS

No arquivo principal do seu app (`app/layout.tsx` para Next.js 13+ ou `pages/_app.tsx` para Next.js Pages):

```tsx
import '@confraria/ui/styles.css'
```

### 2. Configurar Tailwind CSS

No `tailwind.config.js` ou `tailwind.config.ts`, adicione o pacote ao `content`:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@confraria/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**⚠️ Importante:** Sem essa configuração, as classes CSS dos componentes não serão processadas.

## 📚 Exemplos de Uso

### Componentes Básicos (UI)

```tsx
import { Button, Card, Input, Badge } from '@confraria/ui'

function MeuComponente() {
  return (
    <Card className="p-6">
      <h2>Formulário</h2>
      <Input placeholder="Digite seu nome" />
      <Button variant="default">Enviar</Button>
      <Badge variant="secondary">Novo</Badge>
    </Card>
  )
}
```

### Componentes Customizados (Confraria)

```tsx
import { Alert, StatCard, Avatar, EmptyState } from '@confraria/ui'
import { Users, TrendingUp } from 'lucide-react'

function Dashboard() {
  return (
    <div className="space-y-4">
      <Alert variant="success" title="Bem-vindo!">
        Sua conta foi criada com sucesso.
      </Alert>

      <StatCard
        icon={Users}
        label="Usuários Ativos"
        value={1234}
        trend={{ value: 12, isPositive: true }}
        color="blue"
      />

      <Avatar 
        src="/avatar.jpg" 
        alt="Nome do usuário" 
        fallback="UN"
        size="md"
      />

      <EmptyState
        icon={Users}
        title="Nenhum usuário encontrado"
        description="Tente ajustar os filtros de busca"
        action={{
          label: "Limpar filtros",
          onClick: () => console.log('Limpar')
        }}
      />
    </div>
  )
}
```

### Dialogs e Menus

```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Button 
} from '@confraria/ui'

function MeuDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar ação</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja continuar?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 justify-end">
          <Button variant="outline">Cancelar</Button>
          <Button>Confirmar</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### Combinando @confraria/ui com shadcn/ui

Você pode usar componentes de ambas as bibliotecas no mesmo projeto:

```tsx
// Componentes do @confraria/ui
import { Button, Alert, StatCard } from '@confraria/ui'

// Componentes adicionados via shadcn CLI (vivem no seu projeto)
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Calendar } from '@/components/ui/calendar'

function Dashboard() {
  return (
    <div>
      {/* Componente da lib */}
      <Alert variant="info" title="Dica">
        Use o calendário abaixo para agendar
      </Alert>

      {/* Componente do shadcn adicionado localmente */}
      <Calendar mode="single" />

      {/* Combinando ambos */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Ver estatísticas</Button>
          </TooltipTrigger>
          <TooltipContent>
            Clique para ver detalhes
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Componente customizado da lib */}
      <StatCard 
        label="Total" 
        value={1234} 
        trend={{ value: 12, isPositive: true }}
      />
    </div>
  )
}
```

## 🎨 Componentes Disponíveis

### UI Base (shadcn/ui)
- **Button** - Botões com variantes (default, destructive, outline, ghost, link)
- **Card** - Cards com header, content, footer
- **Input** - Campos de texto
- **Textarea** - Área de texto
- **Badge** - Badges/tags
- **Label** - Labels para formulários
- **Checkbox** - Checkboxes
- **Select** - Seleção dropdown
- **Dialog** - Modais/dialogs
- **DropdownMenu** - Menus dropdown
- **Tabs** - Navegação por abas

### Confraria (Customizados)
- **Alert** - Alertas com variantes (success, warning, error, info)
- **Avatar** - Avatar com fallback automático
- **BadgeWithIcon** - Badge com ícone integrado
- **StatCard** - Card para exibir estatísticas com trend
- **EmptyState** - Estado vazio com ícone e ação
- **IconButton** - Botão circular apenas com ícone

### Utilitários
- **cn** - Helper para combinar classes CSS condicionalmente
- **ThemeToggle** - Toggle dark/light mode

## 🎯 Props Principais

### Button
```tsx
variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon'
asChild?: boolean
```

### Alert
```tsx
variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
title?: string
dismissible?: boolean
onDismiss?: () => void
icon?: ReactNode
```

### StatCard
```tsx
icon?: LucideIcon
label: string
value: string | number
trend?: { value: number; isPositive: boolean }
color?: 'blue' | 'green' | 'red' | 'amber' | 'purple'
```

### Avatar
```tsx
src?: string
alt: string
size?: 'sm' | 'md' | 'lg' | 'xl'
fallback?: string
variant?: 'circle' | 'square'
```

## 🔧 Utilitário cn()

Use o helper `cn()` para combinar classes condicionalmente:

```tsx
import { cn, Button } from '@confraria/ui'

function MeuBotao({ isActive }: { isActive: boolean }) {
  return (
    <Button 
      className={cn(
        "base-classes",
        isActive && "active-classes",
        !isActive && "inactive-classes"
      )}
    >
      Clique
    </Button>
  )
}
```

## 📋 Requisitos

- **React** >= 18
- **React DOM** >= 18
- **Tailwind CSS** configurado no projeto
- **lucide-react** (para ícones nos componentes Confraria)

## 🔄 @confraria/ui vs shadcn/ui

### Use `@confraria/ui` quando:
- O componente já está disponível na biblioteca (Button, Card, Alert, StatCard, etc.)
- Você precisa dos componentes customizados da Confraria (Alert, StatCard, EmptyState, etc.)
- Quer garantir consistência com o design system core

### Use `shadcn/ui add <componente>` quando:
- Precisa de componentes não incluídos na lib (Tooltip, Calendar, Form, Popover, Sheet, etc.)
- Quer customizar profundamente um componente específico para o seu projeto
- Precisa de um componente experimental ou recém-lançado do shadcn

**Importante:** Ambos usam as mesmas CSS variables e são totalmente compatíveis entre si!

## 🎨 Temas e CSS Variables

Os componentes usam CSS variables para temas. Você pode customizar no seu `globals.css`:

```css
:root {
  --primary: oklch(0.76 0.16 120);
  --secondary: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  /* ... outras variáveis */
}
```

## 💡 Dicas

1. **Sempre importe os estilos** no topo da aplicação
2. **Configure o Tailwind** para processar as classes do pacote
3. **Use TypeScript** para aproveitar a tipagem automática
4. **Combine com lucide-react** para ícones consistentes
5. **Use a função `cn()`** para classes condicionais
6. **Componentes faltantes?** Use `npx shadcn@latest add <componente>` para adicionar componentes que não estão na lib
7. **Mantenha a consistência** - Os componentes shadcn/ui usam as mesmas CSS variables do design system

## 📖 Documentação Completa

Para ver todos os componentes em ação, rode o playground local:

```bash
git clone <repositorio>
cd confraria-ui-playground
npm install
npm run dev
```

Acesse `http://localhost:3000/docs` para ver a documentação interativa.

## 🐛 Problemas Comuns

### Estilos não aparecem
✅ Verifique se importou `@confraria/ui/styles.css`  
✅ Verifique se o Tailwind está configurado com o path do pacote

### Componentes quebram
✅ Verifique se tem React >= 18  
✅ Verifique se instalou todas as peer dependencies

### TypeScript reclama
✅ O pacote já exporta tipos, mas certifique-se de ter `@types/react` instalado

### Preciso de um componente que não está na lib
✅ Use `npx shadcn@latest add <componente>` para adicionar componentes adicionais do shadcn/ui  
✅ Os componentes shadcn funcionam perfeitamente com os componentes da lib

---

**Versão:** 0.1.0  
**Repositório:** [Link do Git]  
**Suporte:** [Canal do time]
