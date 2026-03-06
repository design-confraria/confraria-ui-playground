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

type PropRow = { prop: string; type: string; default?: string; description: string }
type UsageGuide = { do: string[]; dont: string[] }

interface ComponentItem {
  name: string
  description: string
  props: string
  propRows: PropRow[]
  usage?: UsageGuide
  code: string
}

interface ComponentGroup {
  category: string
  items: ComponentItem[]
}

function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="w-full overflow-x-auto mt-4 -mb-1">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 pr-4 font-semibold text-foreground/50 w-28 text-xs uppercase tracking-wide">Prop</th>
            <th className="text-left py-2 pr-4 font-semibold text-foreground/50 w-44 text-xs uppercase tracking-wide">Tipo</th>
            <th className="text-left py-2 pr-4 font-semibold text-foreground/50 w-20 text-xs uppercase tracking-wide">Padrão</th>
            <th className="text-left py-2 font-semibold text-foreground/50 text-xs uppercase tracking-wide">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ prop, type, default: def, description }) => (
            <tr key={prop} className="border-b border-border/40 last:border-0">
              <td className="py-2 pr-4"><code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">{prop}</code></td>
              <td className="py-2 pr-4 font-mono text-xs text-foreground/55 break-all">{type}</td>
              <td className="py-2 pr-4 text-xs text-foreground/45">{def ?? '—'}</td>
              <td className="py-2 text-xs text-foreground/65">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function UsageBox({ do: doItems, dont: dontItems }: UsageGuide) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
        <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">Use quando</p>
        <ul className="space-y-1.5">
          {doItems.map((item, i) => (
            <li key={i} className="text-xs text-foreground/70 flex gap-1.5 items-start"><span className="text-green-500 shrink-0 mt-px">✓</span>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
        <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">Evite</p>
        <ul className="space-y-1.5">
          {dontItems.map((item, i) => (
            <li key={i} className="text-xs text-foreground/70 flex gap-1.5 items-start"><span className="text-red-500 shrink-0 mt-px">✗</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const components: ComponentGroup[] = [
  {
    category: 'UI Base',
    items: [
      {
        name: 'Button',
        description: 'Botão com variantes e tamanhos. Estende PressableProps do React Native — use onPress, onLongPress, hitSlop, etc. diretamente.',
        props: 'variant, size, loading, disabled, style, textStyle',
        propRows: [
          { prop: 'variant', type: "'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'", default: "'default'", description: 'Estilo visual do botão' },
          { prop: 'size', type: "'xs'|'sm'|'default'|'lg'|'icon'|'icon-sm'|'icon-lg'", default: "'default'", description: 'Tamanho e padding do botão' },
          { prop: 'loading', type: 'boolean', default: 'false', description: 'Exibe ActivityIndicator e desabilita a interação' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container Pressable' },
          { prop: 'textStyle', type: 'StyleProp<TextStyle>', default: '—', description: 'Estilo extra do texto (só funciona com children string)' },
          { prop: 'onPress', type: '() => void', default: '—', description: 'Callback ao pressionar (herdado de PressableProps)' },
        ],
        usage: {
          do: ['Ações primárias de confirmação', 'CTAs de navegação de fluxo principal', 'variant="link" para ações inline de baixa prioridade'],
          dont: ['Mais de 1 botão "default" na mesma tela', 'Substituir Tabs por vários botões ghost', 'Listas longas — prefira Pressable direto'],
        },
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
        propRows: [
          { prop: 'variant', type: "'default'|'secondary'|'destructive'|'outline'|'ghost'", default: "'default'", description: 'Estilo visual do badge' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
          { prop: 'textStyle', type: 'StyleProp<TextStyle>', default: '—', description: 'Estilo extra do texto' },
        ],
        code: `import { Badge } from '@confraria/ui/react-native'

<Badge variant="default">Ativo</Badge>
<Badge variant="destructive">Erro</Badge>
<Badge variant="outline">Rascunho</Badge>`,
      },
      {
        name: 'Card',
        description: 'Container de superfície com sombra, borda e suporte a sub-componentes: CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.',
        props: 'style',
        propRows: [
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container principal (View)' },
        ],
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
        description: 'Campo de texto com suporte a estado de foco, inválido e placeholder estilizado. Estende TextInputProps — use keyboardType, autoCapitalize, returnKeyType, etc. diretamente.',
        props: 'invalid, placeholder, value, onChangeText',
        propRows: [
          { prop: 'invalid', type: 'boolean', default: 'false', description: 'Ativa borda e feedback visual de erro' },
          { prop: 'placeholder', type: 'string', default: '—', description: 'Texto exibido quando o campo está vazio' },
          { prop: 'value', type: 'string', default: '—', description: 'Valor controlado do campo' },
          { prop: 'onChangeText', type: '(text: string) => void', default: '—', description: 'Callback disparado ao digitar' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
          { prop: 'keyboardType', type: 'KeyboardTypeOptions', default: 'default', description: 'Tipo de teclado nativo (herdado de TextInputProps)' },
        ],
        usage: {
          do: ['Campos de texto de linha única: e-mail, nome, busca', 'Combine com Label acima e mensagem de erro abaixo', 'Use keyboardType="email-address" e autoCapitalize="none" para e-mail'],
          dont: ['Múltiplas linhas de texto (use Textarea)', 'Seleção de opções (use Select)', 'Ícones internos sem um wrapper personalizado'],
        },
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
        description: 'Área de texto multilinha com altura mínima configurável. Estende TextInputProps — use maxLength, autoCorrect, etc. diretamente.',
        props: 'invalid, minHeight, placeholder',
        propRows: [
          { prop: 'invalid', type: 'boolean', default: 'false', description: 'Ativa borda de erro' },
          { prop: 'minHeight', type: 'number', default: '100', description: 'Altura mínima da área de texto em pixels' },
          { prop: 'placeholder', type: 'string', default: '—', description: 'Texto de placeholder' },
          { prop: 'value', type: 'string', default: '—', description: 'Valor controlado' },
          { prop: 'onChangeText', type: '(text: string) => void', default: '—', description: 'Callback ao digitar' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra' },
        ],
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
        propRows: [
          { prop: 'checked', type: 'boolean', default: 'false', description: 'Estado atual do checkbox' },
          { prop: 'onCheckedChange', type: '(checked: boolean) => void', default: '—', description: 'Callback ao alternar o estado' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita a interação' },
        ],
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
        propRows: [
          { prop: 'children', type: 'React.ReactNode', default: '—', description: 'Conteúdo do rótulo' },
          { prop: 'style', type: 'StyleProp<TextStyle>', default: '—', description: 'Estilo extra do Text nativo' },
        ],
        code: `import { Label } from '@confraria/ui/react-native'

<Label>Nome completo</Label>`,
      },
      {
        name: 'Select',
        description: 'Seletor de opção único com modal fullscreen cross-platform. Usa Modal nativo do React Native — sem dependências externas. Em iOS comporta-se como ActionSheet; em Android exibe modal centralizado.',
        props: 'value, onValueChange, options, placeholder, disabled, size',
        propRows: [
          { prop: 'options', type: 'SelectOption[]', default: '—', description: 'Array de opções: { label: string; value: string }' },
          { prop: 'value', type: 'string', default: '—', description: 'Valor da opção selecionada' },
          { prop: 'onValueChange', type: '(value: string) => void', default: '—', description: 'Callback ao selecionar uma opção' },
          { prop: 'placeholder', type: 'string', default: "'Selecionar…'", description: 'Texto exibido quando nenhuma opção está selecionada' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o seletor' },
          { prop: 'size', type: "'sm'|'default'", default: "'default'", description: 'Tamanho do trigger (sm: 32px, default: 36px)' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do trigger' },
        ],
        usage: {
          do: ['Listas de 3–20 opções mutuamente exclusivas', 'Filtros de categoria, região, status', 'Substitui Picker nativo com estilo consistente cross-platform'],
          dont: ['Listas de 2 opções (prefira Checkbox ou Switch)', 'Mais de 30 opções (use busca + FlatList customizada)', 'Usar Picker.Item nativo ao lado deste componente'],
        },
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
        propRows: [
          { prop: 'value', type: 'string', default: '—', description: 'Aba ativa (controlado)' },
          { prop: 'onValueChange', type: '(value: string) => void', default: '—', description: 'Callback ao trocar de aba' },
          { prop: 'TabsTrigger value', type: 'string', default: '—', description: 'Identificador único da aba no TabsTrigger' },
          { prop: 'TabsContent value', type: 'string', default: '—', description: 'Identificador único no TabsContent — deve casar com TabsTrigger' },
        ],
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
        description: 'Modal acessível com overlay, animação fade e botão de fechar. Suporta controle externo ou interno. Para formulários no interior, envolva o conteúdo com KeyboardAvoidingView para evitar que o teclado sobreponha os campos.',
        props: 'open, onOpenChange',
        propRows: [
          { prop: 'open', type: 'boolean', default: '—', description: 'Estado controlado externo do modal' },
          { prop: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback ao abrir/fechar' },
          { prop: 'DialogFooter showCloseButton', type: 'boolean', default: 'false', description: 'Exibe botão "Cancelar" automático no footer' },
          { prop: 'DialogContent style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container do conteúdo modal' },
        ],
        usage: {
          do: ['Confirmações destrutivas que requerem ação explícita', 'Formulários curtos (2–3 campos) sem scroll', 'Notificações importantes que bloqueiam o fluxo'],
          dont: ['Formulários longos com scroll (use uma nova tela)', 'Informações que podem ser exibidas inline', 'Formulários com teclado sem KeyboardAvoidingView'],
        },
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
        propRows: [
          { prop: 'variant', type: "'default'|'success'|'warning'|'error'|'info'", default: "'default'", description: 'Estilo semântico (cor + ícone padrão da variante)' },
          { prop: 'title', type: 'string', default: '—', description: 'Título em negrito exibido acima do children' },
          { prop: 'dismissible', type: 'boolean', default: 'false', description: 'Exibe botão X para fechar o alerta' },
          { prop: 'onDismiss', type: '() => void', default: '—', description: 'Callback ao fechar manualmente' },
          { prop: 'icon', type: 'React.ReactNode', default: '—', description: 'Ícone customizado — substitui o ícone padrão da variante' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
        ],
        usage: {
          do: ['Feedback pós-ação: salvo, enviado, erro de rede', 'Avisos contextuais dentro de seções', 'variant="error" no topo de formulários com falhas de validação'],
          dont: ['Toasts de sistema globais (use biblioteca externa)', 'Diálogos nativos — use Alert.alert() do RN para ações destrutivas do sistema'],
        },
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
        propRows: [
          { prop: 'alt', type: 'string', default: '—', description: 'Texto alternativo e base para iniciais de fallback — ex: "Luis Nalon" → "L"' },
          { prop: 'src', type: 'string', default: '—', description: 'URI da imagem (http, https ou asset local)' },
          { prop: 'size', type: "'sm'|'md'|'lg'|'xl'", default: "'md'", description: 'sm=32, md=40, lg=48, xl=64 (pixels)' },
          { prop: 'fallback', type: 'string', default: '—', description: 'Iniciais explícitas exibidas sem imagem (sobrescreve alt[0])' },
          { prop: 'variant', type: "'circle'|'square'", default: "'circle'", description: 'Forma do avatar' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
        ],
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
        propRows: [
          { prop: 'icon', type: 'LucideIcon', default: '—', description: 'Componente de ícone Lucide (ex: Star, AlertCircle)' },
          { prop: 'label', type: 'string', default: '—', description: 'Texto do badge' },
          { prop: 'variant', type: "'default'|'secondary'|'destructive'|'outline'|'ghost'", default: "'default'", description: 'Estilo visual' },
          { prop: 'size', type: "'sm'|'default'", default: "'default'", description: 'Tamanho do badge e do ícone' },
        ],
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
        propRows: [
          { prop: 'title', type: 'string', default: '—', description: 'Título principal (obrigatório)' },
          { prop: 'icon', type: 'LucideIcon', default: '—', description: 'Ícone central exibido com opacidade reduzida' },
          { prop: 'description', type: 'string', default: '—', description: 'Texto descritivo abaixo do título' },
          { prop: 'action', type: '{ label: string; onPress: () => void }', default: '—', description: 'Botão de ação primária' },
          { prop: 'size', type: "'sm'|'md'|'lg'", default: "'md'", description: 'Tamanho dos elementos (sm: ícone 40, md: ícone 56, lg: ícone 72)' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
        ],
        usage: {
          do: ['Telas de lista quando não há resultados', 'Primeiro acesso a uma feature (onboarding inline)', 'Resultados de busca vazios com sugestão de ação'],
          dont: ['Estados de loading (use ActivityIndicator)', 'Erros de rede (use Alert variant="error")', 'Conteúdo parcial — só exiba quando NENHUM item existir'],
        },
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
        description: 'Botão de ícone quadrado sem rótulo visível. A prop label é obrigatória para acessibilidade — é passada como accessibilityLabel ao Pressable. Sem label, leitores de tela descrevem o botão como "sem rótulo".',
        props: 'icon, variant, size, label, disabled',
        propRows: [
          { prop: 'icon', type: 'LucideIcon', default: '—', description: 'Componente de ícone Lucide (obrigatório)' },
          { prop: 'label', type: 'string', default: '—', description: 'accessibilityLabel — obrigatório para leitores de tela (VoiceOver / TalkBack)' },
          { prop: 'variant', type: 'ButtonVariant', default: "'ghost'", description: 'Estilo visual (mesmos valores de Button)' },
          { prop: 'size', type: "'sm'|'md'|'lg'", default: "'md'", description: 'sm=32, md=40, lg=48 (pixels)' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container' },
        ],
        usage: {
          do: ['Ações de ícone onde não há espaço para rótulo (headers, rows de lista)', 'Sempre forneça label para acessibilidade', 'variant="ghost" para ações secundárias; "default" para CTAs primários'],
          dont: ['Omitir a prop label — viola WCAG 2.1 SC 1.1.1', 'Agrupar mais de 3–4 IconButtons sem espaçamento adequado (hitSlop não se sobrepõe)'],
        },
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
        propRows: [
          { prop: 'label', type: 'string', default: '—', description: 'Rótulo da métrica — ex: "Membros ativos"' },
          { prop: 'value', type: 'string | number', default: '—', description: 'Valor principal exibido em destaque' },
          { prop: 'icon', type: 'LucideIcon', default: '—', description: 'Ícone decorativo no canto superior direito' },
          { prop: 'trend', type: '{ value: number; isPositive: boolean }', default: '—', description: 'Exibe seta + % de variação (↑ verde / ↓ vermelho)' },
          { prop: 'color', type: "'blue'|'green'|'red'|'amber'|'purple'", default: "'blue'", description: 'Cor do fundo do ícone decorativo' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra passado ao Card container' },
        ],
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
        description: 'Card de evento com imagem de capa, badge de avaliação (estrela + nota), nome, categoria e botão "Ver evento". Largura padrão: 264px — ideal para carrosséis horizontais.',
        props: 'imageSrc, name, category, rating, reviewCount, onEventPress',
        propRows: [
          { prop: 'name', type: 'string', default: '—', description: 'Nome do evento (obrigatório)' },
          { prop: 'category', type: 'string', default: '—', description: 'Categoria ou tipo do evento (obrigatório)' },
          { prop: 'imageSrc', type: 'string', default: '—', description: 'URI da imagem de capa. Sem URI exibe placeholder' },
          { prop: 'rating', type: 'number', default: '4.9', description: 'Nota média de 0 a 5 (exibida com 1 decimal)' },
          { prop: 'reviewCount', type: 'number', default: '999', description: 'Total de avaliações exibido entre parênteses' },
          { prop: 'onEventPress', type: '() => void', default: '—', description: 'Callback ao pressionar o botão "Ver evento"' },
          { prop: 'style', type: 'StyleProp<ViewStyle>', default: '—', description: 'Estilo extra do container (largura padrão: 264px)' },
        ],
        usage: {
          do: ['FlatList horizontal de eventos em destaque', 'Carrosséis em telas Home/Discover', 'Sempre forneça onEventPress para navegação'],
          dont: ['Listas verticais densas (prefira um layout de linha compacto)', 'Alterar a largura sem testar o layout da imagem de capa'],
        },
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

      {/* Acessibilidade */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Acessibilidade no React Native</h2>
        <p className="text-sm text-foreground/60 mb-6 max-w-2xl">
          React Native não tem semântica HTML. Sem as tags corretas, leitores de tela (VoiceOver no iOS, TalkBack no Android) não conseguem descrever os elementos. Use sempre as props de acessibilidade nativas.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { prop: 'accessibilityLabel', desc: 'Descreve o elemento para o leitor de tela. Obrigatório em botões de ícone, imagens e qualquer elemento sem texto visível.' },
            { prop: 'accessibilityRole', desc: 'Define o papel semântico: "button", "link", "image", "header", "checkbox", "tab", etc.' },
            { prop: 'accessibilityState', desc: 'Estado atual: { disabled, selected, checked, busy, expanded }. Obrigatório em checkboxes e tabs.' },
            { prop: 'accessibilityHint', desc: 'Descrição opcional da ação esperada. Complementa o label quando a ação não é óbvia.' },
          ].map(({ prop, desc }) => (
            <Card key={prop} className="p-4">
              <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono block mb-1">{prop}</code>
              <p className="text-xs text-foreground/60">{desc}</p>
            </Card>
          ))}
        </div>
        <CodeBlock
          code={`// Botão de ícone acessível
<Pressable
  accessibilityLabel="Favoritar evento"
  accessibilityRole="button"
  accessibilityState={{ disabled: isLoading }}
  onPress={handleFavorite}
>
  <Heart size={20} color={theme.foreground} />
</Pressable>

// Checkbox acessível
<Pressable
  accessibilityRole="checkbox"
  accessibilityState={{ checked: isChecked }}
  accessibilityLabel="Aceitar termos de uso"
  onPress={() => setChecked(!isChecked)}
>
  {/* ... */}
</Pressable>

// IconButton já cuida disso via a prop label:
<IconButton icon={Heart} label="Favoritar" variant="ghost" />`}
        />
      </div>

      {/* Extensão de Estilos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Extensão de Estilos com <code className="text-primary bg-primary/10 px-1 rounded text-xl">cx()</code></h2>
        <p className="text-sm text-foreground/60 mb-6 max-w-2xl">
          Todos os componentes aceitam uma prop <code className="text-primary bg-primary/10 px-1 rounded">style</code> compatível com StyleProp do React Native. Use o utilitário <code className="text-primary bg-primary/10 px-1 rounded">cx()</code> para compor estilos de forma segura, filtrando valores falsy.
        </p>
        <CodeBlock
          code={`import { cx } from '@confraria/ui/react-native'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fullWidth: { width: '100%' },
  marginTop: { marginTop: 16 },
})

// cx() mescla StyleProp[] filtrando null/undefined/false
<Button
  style={cx(styles.fullWidth, isFirst && styles.marginTop)}
>
  Salvar
</Button>

// Compor com estilo inline
<Input
  style={cx({ borderColor: isValid ? 'green' : undefined })}
  value={value}
  onChangeText={setValue}
/>

// Usar com condicional
const cardStyle = cx(
  { flex: 1 },
  isSelected && { borderColor: theme.primary, borderWidth: 2 },
  style,  // prop style vinda do componente pai
)`}
        />
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
                  <h3 className="text-xl font-bold text-foreground mb-1">{component.name}</h3>
                  <p className="text-sm text-foreground/60">{component.description}</p>
                  {component.propRows.length > 0 && (
                    <PropsTable rows={component.propRows} />
                  )}
                  {component.usage && (
                    <UsageBox do={component.usage.do} dont={component.usage.dont} />
                  )}
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
        <Card className="p-6 mb-4">
          <p className="text-sm text-foreground/60 mb-4">
            Todos os componentes consomem o tema via <code className="text-primary bg-primary/10 px-1 rounded">useTheme()</code>.
            O hook detecta automaticamente o color scheme do dispositivo via <code className="text-primary bg-primary/10 px-1 rounded">useColorScheme()</code> do React Native.
          </p>
          <CodeBlock
            code={`import { useTheme, lightTheme, darkTheme, palette } from '@confraria/ui/react-native'

// Num componente — resolve automaticamente light/dark
function MyComponent() {
  const theme = useTheme()

  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.foreground }}>Olá!</Text>
    </View>
  )
}

// Tokens do tema disponíveis
theme.primary           // '#9FC132' — cor de ação principal
theme.background        // '#FFFFFF' (light) / '#09090B' (dark)
theme.foreground        // '#09090B' (light) / '#FAFAFA' (dark)
theme.muted             // Fundo de elementos secundários
theme.mutedForeground   // Texto secundário / placeholder
theme.card              // Fundo de cards
theme.border            // Cor de bordas
theme.destructive       // Vermelho de erro / ações perigosas
theme.accent            // Fundo de hover / active`}
          />
        </Card>
        <Card className="p-6 mb-4">
          <p className="text-sm font-semibold text-foreground mb-3">Paleta de cores completa</p>
          <p className="text-sm text-foreground/60 mb-4">
            Acesse a paleta completa para criar componentes fora do DS que ainda seguem as cores da marca.
          </p>
          <CodeBlock
            code={`import { palette } from '@confraria/ui/react-native'

// palette.confraria — cor principal da marca (50–900)
palette.confraria[500]  // '#9FC132'
palette.confraria[700]  // '#6E8722'

// Outras escalas de cor disponíveis:
// palette.slate, palette.blue, palette.green
// palette.emerald, palette.red, palette.amber, palette.violet`}
          />
        </Card>
        <Card className="p-6">
          <p className="text-sm font-semibold text-foreground mb-3">Sobrescrever tokens em componentes</p>
          <p className="text-sm text-foreground/60 mb-4">
            Use a prop <code className="text-primary bg-primary/10 px-1 rounded">style</code> com <code className="text-primary bg-primary/10 px-1 rounded">cx()</code> para sobrescrever qualquer token pontualmente.
          </p>
          <CodeBlock
            code={`import { useTheme, cx } from '@confraria/ui/react-native'

function BrandCard() {
  const theme = useTheme()
  return (
    // Sobrescreve apenas a cor de fundo do Card
    <Card style={{ backgroundColor: theme.primary + '15' }}>
      <CardContent>
        <Text style={{ color: theme.primary }}>Destaque da marca</Text>
      </CardContent>
    </Card>
  )
}`}
          />
        </Card>
      </div>

      {/* Diferenças da API Web */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Diferenças da API Web</h2>
        <p className="text-sm text-foreground/60 mb-6 max-w-2xl">
          Se você já usa o Confraria DS na web, estas são as principais diferenças ao migrar para React Native.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-6 font-semibold text-foreground/50 text-xs uppercase tracking-wide w-1/3">Web (Next.js)</th>
                <th className="text-left py-3 font-semibold text-foreground/50 text-xs uppercase tracking-wide w-1/3">React Native</th>
                <th className="text-left py-3 pl-6 font-semibold text-foreground/50 text-xs uppercase tracking-wide">Observação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { web: 'onClick', rn: 'onPress', note: 'Todos os elementos interativos usam onPress' },
                { web: 'className="..."', rn: 'style={...}', note: 'Sem Tailwind — StyleSheet nativo ou style inline' },
                { web: 'cn() / tw()', rn: 'cx()', note: 'cx() filtra falsy; não aceita strings de classe' },
                { web: '<div>, <span>, <p>', rn: '<View>, <Text>', note: 'Todo texto deve estar dentro de <Text>' },
                { web: 'href / <a>', rn: 'onPress + Linking.openURL()', note: 'Sem links HTML — use Linking do RN' },
                { web: 'useColorScheme (next-themes)', rn: 'useColorScheme (react-native)', note: 'useTheme() abstrai isso automaticamente' },
                { web: 'import from "@confraria/ui"', rn: 'import from "@confraria/ui/react-native"', note: 'Caminho de importação diferente' },
                { web: 'Radix UI / HeadlessUI', rn: 'Modal nativo + Context', note: 'Select e Dialog reimplementados sem Radix' },
              ].map(({ web, rn, note }) => (
                <tr key={web} className="border-b border-border/40 last:border-0">
                  <td className="py-2.5 pr-6"><code className="text-xs text-foreground/70 font-mono">{web}</code></td>
                  <td className="py-2.5"><code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">{rn}</code></td>
                  <td className="py-2.5 pl-6 text-xs text-foreground/55">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
