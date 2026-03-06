'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Copy, Check, Smartphone, Package, Palette, Layers } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copiar código"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/50" />
        )}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto pr-10">
        <code>{code}</code>
      </pre>
    </div>
  )
}

const components = [
  {
    category: 'UI Base',
    items: [
      {
        name: 'Button',
        description: 'Botão com variantes (default, outline, ghost, destructive, secondary, link) e tamanhos (xs, sm, default, lg, icon).',
        props: 'variant, size, loading, disabled',
        code: `import { Button } from '@confraria/ui/react-native'

<Button variant="default" size="lg">
  Confirmar
</Button>

<Button variant="outline" loading>
  Carregando…
</Button>

<Button variant="ghost" disabled>
  Desabilitado
</Button>`,
      },
      {
        name: 'Badge',
        description: 'Indicador de estado ou categoria. Variantes: default, secondary, destructive, outline, ghost.',
        props: 'variant, style, textStyle',
        code: `import { Badge } from '@confraria/ui/react-native'

<Badge variant="default">Ativo</Badge>
<Badge variant="destructive">Erro</Badge>
<Badge variant="outline">Rascunho</Badge>`,
      },
      {
        name: 'Card',
        description: 'Container de superfície com sombra, borda e suporte a sub-componentes: CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.',
        props: 'style',
        code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@confraria/ui/react-native'

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    {/* conteúdo */}
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>`,
      },
      {
        name: 'Input',
        description: 'Campo de texto com suporte a estado de foco, inválido e placeholder estilizado.',
        props: 'invalid, placeholder, value, onChangeText',
        code: `import { Input, Label } from '@confraria/ui/react-native'

<Label>E-mail</Label>
<Input
  placeholder="seu@email.com"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>

{/* Estado inválido */}
<Input invalid placeholder="Campo obrigatório" />`,
      },
      {
        name: 'Textarea',
        description: 'Área de texto multilinha com altura mínima configurável.',
        props: 'invalid, minHeight, placeholder',
        code: `import { Textarea } from '@confraria/ui/react-native'

<Textarea
  placeholder="Escreva aqui…"
  minHeight={120}
  value={text}
  onChangeText={setText}
/>`,
      },
      {
        name: 'Checkbox',
        description: 'Caixa de seleção controlada com ícone de check nativo.',
        props: 'checked, onCheckedChange, disabled',
        code: `import { Checkbox, Label } from '@confraria/ui/react-native'
import { View } from 'react-native'

const [checked, setChecked] = useState(false)

<View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
  <Checkbox
    checked={checked}
    onCheckedChange={setChecked}
  />
  <Label>Aceito os termos de uso</Label>
</View>`,
      },
      {
        name: 'Label',
        description: 'Texto de rótulo semântico para campos de formulário.',
        props: 'style',
        code: `import { Label } from '@confraria/ui/react-native'

<Label>Nome completo</Label>`,
      },
      {
        name: 'Select',
        description: 'Seletor de opção único com bottom sheet modal nativo. Sem dependências externas.',
        props: 'value, onValueChange, options, placeholder, disabled, size',
        code: `import { Select } from '@confraria/ui/react-native'

const options = [
  { label: 'Confraria SP', value: 'sp' },
  { label: 'Confraria RJ', value: 'rj' },
  { label: 'Confraria BH', value: 'bh' },
]

<Select
  value={selected}
  onValueChange={setSelected}
  options={options}
  placeholder="Escolha uma unidade"
/>`,
      },
      {
        name: 'Tabs',
        description: 'Navegação por abas controlada. Composto por Tabs, TabsList, TabsTrigger e TabsContent.',
        props: 'value, onValueChange',
        code: `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@confraria/ui/react-native'

const [tab, setTab] = useState('visao-geral')

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
    <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
  </TabsList>
  <TabsContent value="visao-geral">
    {/* conteúdo */}
  </TabsContent>
  <TabsContent value="detalhes">
    {/* conteúdo */}
  </TabsContent>
</Tabs>`,
      },
      {
        name: 'Dialog',
        description: 'Modal acessível com overlay, animação fade e botão de fechar. Suporta controle externo ou interno.',
        props: 'open, onOpenChange',
        code: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from '@confraria/ui/react-native'

<Dialog>
  <DialogTrigger>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar ação</DialogTitle>
      <DialogDescription>
        Esta ação não pode ser desfeita.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button variant="destructive">Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      },
    ],
  },
  {
    category: 'Componentes Confraria',
    items: [
      {
        name: 'Alert',
        description: 'Alerta contextual com variantes: default, success, warning, error, info. Suporta título, ícone customizado e dismiss.',
        props: 'variant, title, dismissible, onDismiss, icon',
        code: `import { Alert } from '@confraria/ui/react-native'

<Alert variant="success" title="Salvo com sucesso!">
  Suas alterações foram aplicadas.
</Alert>

<Alert variant="error" title="Erro" dismissible onDismiss={handleDismiss}>
  Não foi possível completar a ação.
</Alert>

<Alert variant="warning">
  Sua sessão expira em 5 minutos.
</Alert>`,
      },
      {
        name: 'Avatar',
        description: 'Imagem de perfil com fallback para iniciais. Variantes circle e square em 4 tamanhos (sm, md, lg, xl).',
        props: 'src, alt, size, fallback, variant',
        code: `import { Avatar } from '@confraria/ui/react-native'

{/* Com imagem */}
<Avatar
  src="https://example.com/foto.jpg"
  alt="Luis Nalon"
  size="lg"
/>

{/* Sem imagem — exibe iniciais */}
<Avatar alt="Luis Nalon" size="md" fallback="LN" />

{/* Quadrado */}
<Avatar alt="Confraria" size="xl" variant="square" />`,
      },
      {
        name: 'BadgeWithIcon',
        description: 'Badge com ícone Lucide à esquerda. Mesmas variantes do Badge base.',
        props: 'icon, label, variant, size',
        code: `import { BadgeWithIcon } from '@confraria/ui/react-native'
import { Star, AlertCircle } from 'lucide-react-native'

<BadgeWithIcon
  icon={Star}
  label="Destaque"
  variant="default"
/>

<BadgeWithIcon
  icon={AlertCircle}
  label="Pendente"
  variant="destructive"
/>`,
      },
      {
        name: 'EmptyState',
        description: 'Estado vazio composável com ícone, título, descrição e ação. Tamanhos: sm, md, lg.',
        props: 'icon, title, description, action, size',
        code: `import { EmptyState } from '@confraria/ui/react-native'
import { ShoppingBag } from 'lucide-react-native'

<EmptyState
  icon={ShoppingBag}
  title="Nenhum pedido ainda"
  description="Seus pedidos aparecerão aqui após a primeira compra."
  action={{
    label: 'Ver cardápio',
    onPress: () => navigation.navigate('Menu'),
  }}
  size="md"
/>`,
      },
      {
        name: 'IconButton',
        description: 'Botão de ícone quadrado sem rótulo visível. Acessível via aria-label. Variantes e tamanhos do Button.',
        props: 'icon, variant, size, label, disabled',
        code: `import { IconButton } from '@confraria/ui/react-native'
import { Heart, Share2, MoreVertical } from 'lucide-react-native'

<IconButton icon={Heart} variant="ghost" label="Favoritar" />
<IconButton icon={Share2} variant="outline" size="sm" label="Compartilhar" />
<IconButton icon={MoreVertical} variant="ghost" size="md" label="Mais opções" />`,
      },
      {
        name: 'StatCard',
        description: 'Card de métrica com ícone, valor, rótulo e indicador de tendência (positivo/negativo).',
        props: 'icon, label, value, trend, color',
        code: `import { StatCard } from '@confraria/ui/react-native'
import { Users } from 'lucide-react-native'

<StatCard
  icon={Users}
  label="Membros ativos"
  value="1.240"
  trend={{ value: 12, isPositive: true }}
  color="blue"
/>

<StatCard
  label="Cancelamentos"
  value="34"
  trend={{ value: 5, isPositive: false }}
  color="red"
/>`,
      },
      {
        name: 'EventCard',
        description: 'Card de evento com imagem de capa, badge de avaliação (estrela + nota), nome, categoria e botão "Ver evento". Dimensões fixas: 264 × auto.',
        props: 'imageSrc, name, category, rating, reviewCount, onEventPress',
        code: `import { EventCard } from '@confraria/ui/react-native'

// Sem imagem (placeholder)
<EventCard
  name="Nome do Evento"
  category="Categoria"
/>

// Com imagem e dados reais
<EventCard
  imageSrc="https://exemplo.com/foto.jpg"
  name="Festival de Gastronomia SP"
  category="Gastronomia · São Paulo"
  rating={4.7}
  reviewCount={1240}
  onEventPress={() => navigation.navigate('EventDetail', { id: '123' })}
/>`,
      },
    ],
  },
]

const installSteps = [
  {
    step: '1',
    title: 'Instale as dependências',
    code: `# No seu projeto Expo / React Native
npm install lucide-react-native react-native-svg

# Instale o pacote Confraria UI
npm install @confraria/ui`,
  },
  {
    step: '2',
    title: 'Configure o metro.config.js (Expo)',
    code: `// Necessário para resolver os arquivos do pacote
const { getDefaultConfig } = require('expo/metro-config')
const config = getDefaultConfig(__dirname)
module.exports = config`,
  },
  {
    step: '3',
    title: 'Importe e use',
    code: `import { Button, Alert, StatCard } from '@confraria/ui/react-native'
import { TrendingUp } from 'lucide-react-native'

export default function Screen() {
  return (
    <View>
      <StatCard
        icon={TrendingUp}
        label="Receita mensal"
        value="R$ 48.200"
        trend={{ value: 8, isPositive: true }}
        color="green"
      />
      <Button variant="default" size="lg">
        Ver detalhes
      </Button>
    </View>
  )
}`,
  },
]

export default function MobilePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">React Native</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">
          Mobile — Componentes React Native
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Todos os componentes do Confraria Design System portados para React Native e Expo.
          Mesma API, mesmos tokens de design, zero dependência de Tailwind ou DOM.
        </p>
      </div>

      {/* Destaques */}
      <div className="grid md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: Smartphone, label: 'iOS & Android', sub: 'React Native + Expo' },
          { icon: Package, label: '16 componentes', sub: 'UI base + Confraria' },
          { icon: Palette, label: 'Tokens unificados', sub: 'Light e Dark theme' },
          { icon: Layers, label: 'Zero Tailwind', sub: 'StyleSheet nativo' },
        ].map(({ icon: Icon, label, sub }) => (
          <Card key={label} className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{label}</p>
                <p className="text-xs text-foreground/50">{sub}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Instalação */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Instalação</h2>
        <div className="space-y-4">
          {installSteps.map(({ step, title, code }) => (
            <div key={step} className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-1">
                {step}
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-semibold text-foreground">{title}</p>
                <CodeBlock code={code} language="bash" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estrutura de arquivos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Estrutura do pacote</h2>
        <Card className="p-6">
          <CodeBlock
            code={`src/ui-reactnative/
  tokens.ts          ← paleta, light/dark theme, spacing, radii, fontSize
  utils.ts           ← useTheme(), cx()
  index.ts           ← barrel de todas as exportações
  ui/
    badge.tsx
    button.tsx
    card.tsx
    checkbox.tsx
    dialog.tsx
    input.tsx
    label.tsx
    select.tsx
    tabs.tsx
    textarea.tsx
  confraria/
    alert.tsx
    avatar.tsx
    badge-with-icon.tsx
    empty-state.tsx
    event-card.tsx
    icon-button.tsx
    stat-card.tsx`}
          />
        </Card>
      </div>

      {/* Componentes */}
      {components.map((group) => (
        <div key={group.category} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">{group.category}</h2>
          <div className="space-y-6">
            {group.items.map((component) => (
              <Card key={component.name} className="overflow-hidden pt-0 gap-0">
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{component.name}</h3>
                    <code className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-mono shrink-0">
                      {component.props}
                    </code>
                  </div>
                  <p className="text-sm text-foreground/60">{component.description}</p>
                </div>
                {/* Code */}
                <div className="p-6">
                  <CodeBlock code={component.code} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Theming */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Theming</h2>
        <Card className="p-6">
          <p className="text-sm text-foreground/60 mb-4">
            Todos os componentes consomem o tema via <code className="text-primary bg-primary/10 px-1 rounded">useTheme()</code>.
            O hook detecta automaticamente o color scheme do dispositivo via <code className="text-primary bg-primary/10 px-1 rounded">useColorScheme()</code> do React Native.
          </p>
          <CodeBlock
            code={`import { useTheme, lightTheme, darkTheme } from '@confraria/ui/react-native'

// Num componente — resolve automaticamente light/dark
function MyComponent() {
  const theme = useTheme()

  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.foreground }}>Olá!</Text>
    </View>
  )
}

// Valores do tema light (exemplo)
lightTheme.primary          // '#9FC132'
lightTheme.background       // '#FFFFFF'
lightTheme.mutedForeground  // '#737373'`}
          />
        </Card>
      </div>
    </div>
  )
}
