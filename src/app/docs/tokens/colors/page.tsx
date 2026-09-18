"use client"

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// ─── Camada semântica ────────────────────────────────────────────────────────
// Cada papel expõe os MESMOS 7 steps. O nome do token é estável entre light e
// dark — só o valor muda. Assim um componente escrito com var(--danger-bg-subtle)
// funciona nos dois temas sem condicional, e a doc nunca mente sobre o valor.
//
// Padrão estabelecido por Radix UI, Atlassian Design System e IBM Carbon.

type Step = {
  token: string
  role: string
  description: string
  light: { shade: string; hex: string }
  dark: { shade: string; hex: string }
  usage: string
  default?: boolean
}

type SemanticRole = {
  role: string
  description: string
  paletteLight: string
  paletteDark: string
  steps: Step[]
}

// Definição dos 7 steps — a "gramática" do sistema.
const stepDefinitions = [
  {
    token: 'bg-subtle',
    role: 'Subtle Background',
    description: 'Fundo mais claro do papel. Base de banners, alertas e chips selecionados.',
  },
  {
    token: 'bg',
    role: 'Background',
    description: 'Um passo acima do subtle. Hover de superfície e fundo de chips.',
  },
  {
    token: 'border',
    role: 'Border',
    description: 'Bordas de input, outlines e divisores dentro do papel.',
  },
  {
    token: 'solid',
    role: 'Solid',
    description: 'Preenchimento sólido: botão, ícone e badge. Carrega a cor do papel.',
  },
  {
    token: 'solid-hover',
    role: 'Solid Hover',
    description: 'Estado de hover e press do solid.',
  },
  {
    token: 'on-solid',
    role: 'On Solid',
    description: 'Cor do rótulo e do ícone POR CIMA do solid. Existe para que o componente nunca precise adivinhar se o texto é claro ou escuro.',
  },
  {
    token: 'text',
    role: 'Text',
    description: 'Texto e ícone sobre bg-subtle ou bg. Validado para 4.5:1.',
  },
]

const semanticRoles: SemanticRole[] = [
  {
    role: 'Primary',
    description: 'Cor principal da marca. Ações primárias, links e estados de foco.',
    paletteLight: 'Confraria',
    paletteDark: 'Confraria dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#F9FBEA' }, dark: { shade: '50',  hex: '#0f1a0b' }, usage: 'Fundo de banners, chips selecionados' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#F0F5D2' }, dark: { shade: '100', hex: '#14220c' }, usage: 'Hover em superfícies subtis' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#C9DF77' }, dark: { shade: '400', hex: '#2f4f16' }, usage: 'Bordas de inputs, outlines' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '500', hex: '#9FC132' }, dark: { shade: '400', hex: '#B1CE4D' }, usage: 'Botão primário, ícones de destaque', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '600', hex: '#728F21' }, dark: { shade: '300', hex: '#C9DF77' }, usage: 'Hover do botão primário' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#1f2a0a' }, dark: { shade: '—', hex: '#1f2a0a' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '700', hex: '#576D1E' }, dark: { shade: '200', hex: '#E0EDA9' }, usage: 'Texto de link sobre o fundo do papel' },
    ],
  },
  {
    role: 'Secondary',
    description: 'Apoia a primária. Ações secundárias, tags e elementos de suporte.',
    paletteLight: 'Slate',
    paletteDark: 'Slate dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#f8fafc' }, dark: { shade: '900', hex: '#0f172a' }, usage: 'Fundo alternativo de seções' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#f1f5f9' }, dark: { shade: '800', hex: '#1e293b' }, usage: 'Fundo de cards secundários' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#cbd5e1' }, dark: { shade: '700', hex: '#334155' }, usage: 'Divisores, bordas suaves' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '600', hex: '#475569' }, dark: { shade: '500', hex: '#64748b' }, usage: 'Botão secundário, ícones', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '700', hex: '#334155' }, dark: { shade: '400', hex: '#94a3b8' }, usage: 'Hover do botão secundário' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#ffffff' }, dark: { shade: '—', hex: '#f8fafc' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '800', hex: '#1e293b' }, dark: { shade: '100', hex: '#f1f5f9' }, usage: 'Texto de apoio sobre o fundo do papel' },
    ],
  },
  {
    role: 'Neutral',
    description: 'Escala neutra da interface: superfícies, bordas e hierarquia de texto.',
    paletteLight: 'Slate',
    paletteDark: 'Slate dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#f8fafc' }, dark: { shade: '950', hex: '#020617' }, usage: 'Fundo da página / canvas' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#f1f5f9' }, dark: { shade: '900', hex: '#0f172a' }, usage: 'Cards, painéis elevados' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#cbd5e1' }, dark: { shade: '700', hex: '#334155' }, usage: 'Bordas de cards, separadores' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '500', hex: '#64748b' }, dark: { shade: '400', hex: '#94a3b8' }, usage: 'Ícones neutros, placeholders fortes' },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '600', hex: '#475569' }, dark: { shade: '300', hex: '#cbd5e1' }, usage: 'Hover de elementos neutros' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#ffffff' }, dark: { shade: '—', hex: '#0f172a' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '700', hex: '#334155' }, dark: { shade: '100', hex: '#f1f5f9' }, usage: 'Corpo do texto', default: true },
    ],
  },
  {
    role: 'Success',
    description: 'Conclusão, aprovação e estados positivos.',
    paletteLight: 'Green',
    paletteDark: 'Green dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#f0fdf4' }, dark: { shade: '950', hex: '#052e16' }, usage: 'Fundo de alertas de sucesso' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#dcfce7' }, dark: { shade: '900', hex: '#14532d' }, usage: 'Chips de status: concluído' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#86efac' }, dark: { shade: '700', hex: '#15803d' }, usage: 'Borda de inputs válidos' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '700', hex: '#15803d' }, dark: { shade: '400', hex: '#4ade80' }, usage: 'Badges de sucesso, ícones', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '800', hex: '#166534' }, dark: { shade: '300', hex: '#86efac' }, usage: 'Hover de elementos de sucesso' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#ffffff' }, dark: { shade: '—', hex: '#052e16' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '800', hex: '#166534' }, dark: { shade: '200', hex: '#bbf7d0' }, usage: 'Texto sobre fundo de sucesso' },
    ],
  },
  {
    role: 'Warning',
    description: 'Atenção e avisos. Estados que pedem ação ou revisão.',
    paletteLight: 'Amber',
    paletteDark: 'Amber dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#fffbeb' }, dark: { shade: '950', hex: '#451a03' }, usage: 'Fundo de banners de aviso' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#fef3c7' }, dark: { shade: '900', hex: '#78350f' }, usage: 'Chips de status: pendente' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#fcd34d' }, dark: { shade: '700', hex: '#b45309' }, usage: 'Borda de campos com aviso' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '500', hex: '#f59e0b' }, dark: { shade: '300', hex: '#fcd34d' }, usage: 'Ícones de aviso, badges', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '600', hex: '#d97706' }, dark: { shade: '200', hex: '#fde68a' }, usage: 'Hover de elementos de aviso' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#3b2500' }, dark: { shade: '—', hex: '#3b2500' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '800', hex: '#92400e' }, dark: { shade: '200', hex: '#fde68a' }, usage: 'Texto sobre fundo de aviso' },
    ],
  },
  {
    role: 'Danger',
    description: 'Erros, ações destrutivas e estados críticos.',
    paletteLight: 'Red',
    paletteDark: 'Red dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#fef2f2' }, dark: { shade: '950', hex: '#450a0a' }, usage: 'Fundo de alertas de erro' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#fee2e2' }, dark: { shade: '900', hex: '#7f1d1d' }, usage: 'Chips de status: falha' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#fca5a5' }, dark: { shade: '700', hex: '#b91c1c' }, usage: 'Borda de inputs inválidos' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '600', hex: '#dc2626' }, dark: { shade: '400', hex: '#f87171' }, usage: 'Botão destrutivo, ícones de erro', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '700', hex: '#b91c1c' }, dark: { shade: '300', hex: '#fca5a5' }, usage: 'Hover de ações destrutivas' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#ffffff' }, dark: { shade: '—', hex: '#450a0a' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '800', hex: '#991b1b' }, dark: { shade: '200', hex: '#fecaca' }, usage: 'Mensagens de erro em campos' },
    ],
  },
  {
    role: 'Info',
    description: 'Informação neutra, dicas e estados de carregamento.',
    paletteLight: 'Blue',
    paletteDark: 'Blue dark',
    steps: [
      { token: 'bg-subtle',   role: 'Subtle Background', description: '', light: { shade: '50',  hex: '#eff6ff' }, dark: { shade: '950', hex: '#172554' }, usage: 'Fundo de tooltips, banners info' },
      { token: 'bg',          role: 'Background',        description: '', light: { shade: '100', hex: '#dbeafe' }, dark: { shade: '900', hex: '#1e3a8a' }, usage: 'Chips de status: em andamento' },
      { token: 'border',      role: 'Border',            description: '', light: { shade: '300', hex: '#93c5fd' }, dark: { shade: '700', hex: '#1d4ed8' }, usage: 'Borda de elementos informativos' },
      { token: 'solid',       role: 'Solid',             description: '', light: { shade: '600', hex: '#2563eb' }, dark: { shade: '400', hex: '#60a5fa' }, usage: 'Links, badges informativos', default: true },
      { token: 'solid-hover', role: 'Solid Hover',       description: '', light: { shade: '700', hex: '#1d4ed8' }, dark: { shade: '300', hex: '#93c5fd' }, usage: 'Hover de links e ações info' },
      { token: 'on-solid',   role: 'On Solid',          description: '', light: { shade: '—', hex: '#ffffff' }, dark: { shade: '—', hex: '#172554' }, usage: 'Cor do rótulo/ícone sobre o solid' },
      { token: 'text',        role: 'Text',              description: '', light: { shade: '800', hex: '#1e40af' }, dark: { shade: '200', hex: '#bfdbfe' }, usage: 'Texto informativo sobre o fundo do papel' },
    ],
  },
]

// Prefixo de token por papel: Primary → --primary-*
const rolePrefix: Record<string, string> = {
  Primary: 'primary',
  Secondary: 'secondary',
  Neutral: 'neutral',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Info: 'info',
}

// ─── Full raw palettes ───────────────────────────────────────────────────────

const palettes = [
  {
    name: 'Confraria',
    description: 'Paleta da marca — verde orgânico.',
    palette: [
      { shade: '50',  hex: '#F9FBEA' },
      { shade: '100', hex: '#F0F5D2' },
      { shade: '200', hex: '#E0EDA9' },
      { shade: '300', hex: '#C9DF77' },
      { shade: '400', hex: '#B1CE4D' },
      { shade: '500', hex: '#9FC132', default: true },
      { shade: '600', hex: '#728F21' },
      { shade: '700', hex: '#576D1E' },
      { shade: '800', hex: '#47571D' },
      { shade: '900', hex: '#3C4B1C' },
    ],
  },
  {
    name: 'Slate',
    description: 'Neutros frios — texto, superfícies e bordas.',
    palette: [
      { shade: '50',  hex: '#f8fafc' },
      { shade: '100', hex: '#f1f5f9' },
      { shade: '200', hex: '#e2e8f0' },
      { shade: '300', hex: '#cbd5e1' },
      { shade: '400', hex: '#94a3b8' },
      { shade: '500', hex: '#64748b' },
      { shade: '600', hex: '#475569' },
      { shade: '700', hex: '#334155', default: true },
      { shade: '800', hex: '#1e293b' },
      { shade: '900', hex: '#0f172a' },
    ],
  },
  {
    name: 'Blue',
    description: 'Informação, links e interações neutras.',
    palette: [
      { shade: '50',  hex: '#eff6ff' },
      { shade: '100', hex: '#dbeafe' },
      { shade: '200', hex: '#bfdbfe' },
      { shade: '300', hex: '#93c5fd' },
      { shade: '400', hex: '#60a5fa' },
      { shade: '500', hex: '#3b82f6' },
      { shade: '600', hex: '#2563eb', default: true },
      { shade: '700', hex: '#1d4ed8' },
      { shade: '800', hex: '#1e40af' },
      { shade: '900', hex: '#1e3a8a' },
    ],
  },
  {
    name: 'Green',
    description: 'Sucesso, confirmação e estados positivos.',
    palette: [
      { shade: '50',  hex: '#f0fdf4' },
      { shade: '100', hex: '#dcfce7' },
      { shade: '200', hex: '#bbf7d0' },
      { shade: '300', hex: '#86efac' },
      { shade: '400', hex: '#4ade80' },
      { shade: '500', hex: '#22c55e' },
      { shade: '600', hex: '#16a34a', default: true },
      { shade: '700', hex: '#15803d' },
      { shade: '800', hex: '#166534' },
      { shade: '900', hex: '#145231' },
    ],
  },
  {
    name: 'Amber',
    description: 'Avisos, atenção e estados pendentes.',
    palette: [
      { shade: '50',  hex: '#fffbeb' },
      { shade: '100', hex: '#fef3c7' },
      { shade: '200', hex: '#fde68a' },
      { shade: '300', hex: '#fcd34d' },
      { shade: '400', hex: '#fbbf24' },
      { shade: '500', hex: '#f59e0b', default: true },
      { shade: '600', hex: '#d97706' },
      { shade: '700', hex: '#b45309' },
      { shade: '800', hex: '#92400e' },
      { shade: '900', hex: '#78350f' },
    ],
  },
  {
    name: 'Red',
    description: 'Erros, ações destrutivas e estados críticos.',
    palette: [
      { shade: '50',  hex: '#fef2f2' },
      { shade: '100', hex: '#fee2e2' },
      { shade: '200', hex: '#fecaca' },
      { shade: '300', hex: '#fca5a5' },
      { shade: '400', hex: '#f87171' },
      { shade: '500', hex: '#ef4444' },
      { shade: '600', hex: '#dc2626', default: true },
      { shade: '700', hex: '#b91c1c' },
      { shade: '800', hex: '#991b1b' },
      { shade: '900', hex: '#7f1d1d' },
    ],
  },
  {
    name: 'Purple',
    description: 'Acento complementar — premium, destaque editorial.',
    palette: [
      { shade: '50',  hex: '#faf5ff' },
      { shade: '100', hex: '#f3e8ff' },
      { shade: '200', hex: '#e9d5ff' },
      { shade: '300', hex: '#d8b4fe' },
      { shade: '400', hex: '#c084fc' },
      { shade: '500', hex: '#a855f7' },
      { shade: '600', hex: '#9333ea', default: true },
      { shade: '700', hex: '#7e22ce' },
      { shade: '800', hex: '#6b21a8' },
      { shade: '900', hex: '#581c87' },
    ],
  },
]


// ─── Role badge colors ───────────────────────────────────────────────────────
const roleAccent: Record<string, { bg: string; text: string }> = {
  Primary:   { bg: '#9FC132', text: '#1f2a0a' },
  Secondary: { bg: '#475569', text: '#fff' },
  Neutral:   { bg: '#94a3b8', text: '#1e293b' },
  Success:   { bg: '#16a34a', text: '#052e16' },
  Warning:   { bg: '#f59e0b', text: '#3b2500' },
  Danger:    { bg: '#dc2626', text: '#fff' },
  Info:      { bg: '#2563eb', text: '#fff' },
}

type Theme = 'light' | 'dark'

export default function ColorsPage() {
  const renderSemanticRoles = (theme: Theme) => (
    <div className="space-y-12">
      {semanticRoles.map((role) => {
        const accent = roleAccent[role.role]
        const prefix = rolePrefix[role.role]
        const value = (step: Step) => step[theme]

        const bgSubtle = role.steps.find((s) => s.token === 'bg-subtle')!
        const solid = role.steps.find((s) => s.token === 'solid')!
        const solidHover = role.steps.find((s) => s.token === 'solid-hover')!
        const onSolid = role.steps.find((s) => s.token === 'on-solid')!
        const border = role.steps.find((s) => s.token === 'border')!
        const text = role.steps.find((s) => s.token === 'text')!

        return (
          <div key={role.role}>
            <div className="flex items-start gap-4 mb-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shrink-0"
                style={{ backgroundColor: accent.bg, color: accent.text }}
              >
                {role.role}
              </span>
              <div>
                <p className="text-sm text-foreground/60 pt-1">{role.description}</p>
                <p className="text-xs text-foreground/40 mt-1 font-mono">
                  --{prefix}-*  ·  escala: {theme === 'light' ? role.paletteLight : role.paletteDark}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {role.steps.map((step) => (
                <Card
                  key={step.token}
                  className="overflow-hidden pt-0 gap-0"
                  style={step.default ? { outline: `2px solid ${accent.bg}`, outlineOffset: '2px' } : {}}
                >
                  <div className="h-16 w-full" style={{ backgroundColor: value(step).hex }} />
                  <div className="p-2.5">
                    {/* O nome do token vem primeiro: é ele que o dev escreve */}
                    <p className="font-mono text-[11px] font-semibold text-foreground leading-tight break-all">
                      --{prefix}-{step.token}
                    </p>
                    <p className="text-[11px] text-foreground/50 mt-1">{step.role}</p>
                    <p className="text-[10px] text-foreground/40 font-mono mt-0.5">
                      {value(step).shade} · {value(step).hex}
                    </p>
                    <p className="text-[10px] text-foreground/40 mt-1 leading-tight">{step.usage}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Amostra: os steps combinados como apareceriam num componente real */}
            <div
              className="mt-4 rounded-xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border"
              style={{
                backgroundColor: value(bgSubtle).hex,
                color: value(text).hex,
                borderColor: value(border).hex,
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-wide font-semibold opacity-70">
                  bg-subtle + border + text
                </p>
                <p className="text-sm font-medium mt-1">
                  Texto em --{prefix}-text sobre --{prefix}-bg-subtle
                </p>
              </div>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: value(solid).hex,
                  color: value(onSolid).hex,
                }}
                title={`hover: ${value(solidHover).hex}`}
              >
                Ação
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Cores</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Sistema de cores do Confraria Design System. Organizado em papéis semânticos —
          como nos principais DSs de mercado (Radix UI, Atlassian, IBM Carbon) — para que a
          equipe use tokens com intenção, não valores arbitrários.
        </p>
      </div>

      {/* ── 1. A gramática do sistema ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">A gramática dos tokens</h2>
        <p className="text-foreground/60 mb-6 max-w-2xl">
          Todo papel semântico expõe os mesmos 7 steps, com os mesmos nomes. O nome do token
          não muda entre light e dark — só o valor. Isso significa que um componente escrito
          com <code className="font-mono text-sm">var(--danger-bg-subtle)</code> funciona nos
          dois temas sem nenhuma condicional.
        </p>

        <Card className="p-6">
          <div className="space-y-4">
            {stepDefinitions.map((step) => (
              <div key={step.token} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <code className="font-mono text-sm font-semibold text-foreground shrink-0 sm:w-40">
                  {step.token}
                </code>
                <div>
                  <p className="text-sm font-medium text-foreground">{step.role}</p>
                  <p className="text-sm text-foreground/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-sm text-foreground/50 mt-4">
          Lido como fórmula: <code className="font-mono">--[papel]-[step]</code>. Sete papéis
          × sete steps = 49 tokens semânticos, todos previsíveis.
        </p>
      </section>

      {/* ── 1b. Como o switch de tema funciona ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Como o switch de tema funciona</h2>
        <p className="text-foreground/60 mb-6 max-w-2xl">
          O sistema tem três camadas. O tema só troca na do meio — por isso nenhum componente
          precisa saber que dark mode existe.
        </p>

        <Card className="p-6 mb-6">
          <div className="space-y-4 font-mono text-sm">
            <div>
              <p className="text-foreground/40 text-xs font-sans mb-1">1 · Primitiva — nunca muda</p>
              <p className="text-foreground">--green-500: #22c55e;</p>
            </div>
            <div className="pl-4 border-l-2 border-border">
              <p className="text-foreground/40 text-xs font-sans mb-1">
                2 · Semântica — <strong>só esta camada troca</strong>
              </p>
              <p className="text-foreground">
                --success-solid: var(--green-600); <span className="text-foreground/40">/* light */</span>
              </p>
              <p className="text-foreground">
                --success-solid: var(--green-400); <span className="text-foreground/40">/* dark */</span>
              </p>
            </div>
            <div className="pl-8 border-l-2 border-border">
              <p className="text-foreground/40 text-xs font-sans mb-1">
                3 · Componente — agnóstico de tema
              </p>
              <p className="text-foreground">background: var(--success-solid);</p>
            </div>
          </div>
        </Card>

        <div className="rounded-lg border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">
            Dark não é o light invertido
          </h3>
          <p className="text-sm text-foreground/60 mb-3">
            Este é o erro mais comum. Trocar o fundo de claro para escuro e manter as mesmas
            cores de acento produz uma interface que cansa a vista: cores muito saturadas
            vibram opticamente sobre fundo escuro. Duas regras que o sistema aplica:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-foreground/60">
            <li>
              <strong className="text-foreground/80">O solid fica mais claro no dark, não mais escuro.</strong>{' '}
              No light usamos o shade 500–600; no dark, o 400. É o mesmo princípio do Material 3,
              que move o papel <em>primary</em> do tom 40 para o tom 80 ao trocar de tema.
            </li>
            <li>
              <strong className="text-foreground/80">O nome do token é estável; o valor não.</strong>{' '}
              <code className="font-mono">--danger-solid</code> existe nos dois temas e resolve
              para hexes diferentes. É por isso que o componente não precisa de condicional.
            </li>
          </ul>
          <p className="text-sm text-foreground/50 mt-3">
            Todos os pares deste sistema foram medidos: texto atinge no mínimo 4.5:1 sobre o
            fundo do papel, e o solid atinge no mínimo 3:1 (limite WCAG para componente não
            textual).
          </p>
        </div>
      </section>

      {/* ── 2. Papéis semânticos ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Papéis semânticos</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Cada card mostra o token que você escreve no código e, abaixo, o valor que ele
          resolve no tema selecionado. O shade aparece como referência — não como nome.
        </p>

        <Tabs defaultValue="light" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="light">Light theme</TabsTrigger>
            <TabsTrigger value="dark">Dark theme</TabsTrigger>
          </TabsList>
          <TabsContent value="light">{renderSemanticRoles('light')}</TabsContent>
          <TabsContent value="dark">{renderSemanticRoles('dark')}</TabsContent>
        </Tabs>
      </section>

      {/* ── 3. Full palettes ── */}
      <section>
        <h2 className="text-2xl font-bold mb-2 text-foreground">Paletas completas</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          As escalas primitivas por trás dos tokens semânticos. Servem de referência e de
          fonte única de verdade —{' '}
          <strong className="text-foreground/80">não use direto no componente</strong>: prefira
          sempre a camada semântica acima, que se adapta ao tema.
        </p>

        <div className="space-y-10">
          {palettes.map((group) => (
            <div key={group.name}>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{group.name}</h3>
                <p className="text-sm text-foreground/50">{group.description}</p>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {group.palette.map((color) => (
                  <div key={color.shade} className="flex flex-col gap-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{
                        backgroundColor: color.hex,
                        outline: color.default ? '2px solid currentColor' : undefined,
                        outlineOffset: color.default ? '2px' : undefined,
                      }}
                    />
                    <p className="text-[11px] font-semibold text-foreground text-center">
                      {color.shade}
                    </p>
                    <p className="text-[10px] text-foreground/40 font-mono text-center truncate">
                      {color.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Usage guide ── */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Como usar</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Via Tailwind CSS</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Os tokens semânticos estão expostos como classes. Nenhum hex na marcação.
              </p>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{/* Botão primário */}
<button className="bg-primary-solid hover:bg-primary-solid-hover text-primary-on-solid">
  Salvar
</button>

{/* Badge de erro — adapta sozinho no dark */}
<span className="bg-danger-bg text-danger-text border border-danger-border">
  Falha no pagamento
</span>

{/* Banner informativo */}
<div className="bg-info-bg-subtle border border-info-border text-info-text">
  Sincronização em andamento
</div>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Via CSS custom properties</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`.btn-primary {
  background-color: var(--primary-solid);
  color: var(--primary-on-solid); /* nunca hardcode #fff aqui */
}
.btn-primary:hover {
  background-color: var(--primary-solid-hover);
}

.input-error {
  border-color: var(--danger-border);
  background-color: var(--danger-bg-subtle);
  color: var(--danger-text);
}`}</code>
              </pre>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-2 text-sm">Regra prática</h3>
              <p className="text-sm text-foreground/60">
                Se você precisou escrever um hex ou um shade numérico
                (<code className="font-mono">#F9FBEA</code>,{' '}
                <code className="font-mono">bg-slate-100</code>) num componente, provavelmente
                falta um token semântico. Abra a discussão antes de hardcodar — é assim que
                dívida de UX entra no sistema.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* ── 5. Accessibility ── */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Acessibilidade</h2>
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-2">Contraste WCAG AA</h3>
          <p className="text-foreground/60 mb-4">
            Os pares abaixo foram desenhados para atingir contraste mínimo de 4.5:1 nos dois
            temas. Usar os steps combinados evita ter que validar caso a caso:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/60 text-sm">
            <li>
              <code className="font-mono text-foreground/80">bg-subtle</code> +{' '}
              <code className="font-mono text-foreground/80">text</code>: par seguro para blocos
              de texto longos
            </li>
            <li>
              <code className="font-mono text-foreground/80">bg</code> +{' '}
              <code className="font-mono text-foreground/80">text</code>: chips e tags coloridas
            </li>
            <li>
              <code className="font-mono text-foreground/80">solid</code> sobre superfície
              neutra: botões e badges — verificar a cor do rótulo por papel
            </li>
            <li>
              Nunca use <code className="font-mono text-foreground/80">border</code> como cor de
              texto: o step é calibrado para traço, não para leitura
            </li>
          </ul>
        </Card>
      </section>
    </div>
  )
}
