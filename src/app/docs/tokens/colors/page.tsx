import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

// ─── Semantic color roles ────────────────────────────────────────────────────
// Pattern established by Material Design 3, Atlassian Design System,
// IBM Carbon, and Radix UI: each role exposes a consistent set of steps
// so product teams can wire up interactions without picking raw hex values.

const semanticRoles = [
  {
    role: 'Primary',
    description: 'Cor principal da marca. Usada em ações primárias, links e estados de foco.',
    palette: 'Confraria',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#F9FBEA', usage: 'Fundo de banners, chips selecionados' },
      { label: 'Background',        shade: '100', hex: '#F0F5D2', usage: 'Hover em superfícies subtis' },
      { label: 'Border',            shade: '300', hex: '#C9DF77', usage: 'Bordas de inputs, outlines' },
      { label: 'Solid',             shade: '500', hex: '#9FC132', usage: 'Botão primário, ícones de destaque', default: true },
      { label: 'Solid Hover',       shade: '600', hex: '#728F21', usage: 'Hover do botão primário' },
      { label: 'Text',              shade: '700', hex: '#576D1E', usage: 'Texto de link sobre fundo claro' },
    ],
  },
  {
    role: 'Secondary',
    description: 'Suporta a cor primária. Usada em ações secundárias, tags e elementos de apoio.',
    palette: 'Slate',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#f8fafc', usage: 'Fundo alternativo de seções' },
      { label: 'Background',        shade: '100', hex: '#f1f5f9', usage: 'Fundo de cards secundários' },
      { label: 'Border',            shade: '300', hex: '#cbd5e1', usage: 'Divisores, bordas suaves' },
      { label: 'Solid',             shade: '600', hex: '#475569', usage: 'Botão secundário, ícones secundários', default: true },
      { label: 'Solid Hover',       shade: '700', hex: '#334155', usage: 'Hover do botão secundário' },
      { label: 'Text',              shade: '800', hex: '#1e293b', usage: 'Texto de apoio sobre fundo claro' },
    ],
  },
  {
    role: 'Neutral',
    description: 'Escala neutra para texto, superfícies e bordas. Base de toda a interface.',
    palette: 'Slate',
    swatches: [
      { label: 'Surface',           shade: '50',  hex: '#f8fafc', usage: 'Fundo da página / canvas' },
      { label: 'Surface Raised',    shade: '100', hex: '#f1f5f9', usage: 'Cards, painéis elevados' },
      { label: 'Border Subtle',     shade: '200', hex: '#e2e8f0', usage: 'Divisores, bordas de inputs' },
      { label: 'Border',            shade: '300', hex: '#cbd5e1', usage: 'Bordas de cards, separadores' },
      { label: 'Text Placeholder',  shade: '400', hex: '#94a3b8', usage: 'Placeholder de inputs' },
      { label: 'Text Subtle',       shade: '500', hex: '#64748b', usage: 'Labels secundários, captions' },
      { label: 'Text',              shade: '700', hex: '#334155', usage: 'Corpo do texto', default: true },
      { label: 'Text Strong',       shade: '900', hex: '#0f172a', usage: 'Títulos, texto de alto contraste' },
    ],
  },
  {
    role: 'Success',
    description: 'Indica conclusão, aprovação ou estados positivos.',
    palette: 'Green',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#f0fdf4', usage: 'Fundo de alertas de sucesso' },
      { label: 'Background',        shade: '100', hex: '#dcfce7', usage: 'Chips de status: concluído' },
      { label: 'Border',            shade: '300', hex: '#86efac', usage: 'Borda de inputs válidos' },
      { label: 'Solid',             shade: '600', hex: '#16a34a', usage: 'Badges de sucesso, ícones', default: true },
      { label: 'Solid Hover',       shade: '700', hex: '#15803d', usage: 'Hover de elementos de sucesso' },
      { label: 'Text',              shade: '800', hex: '#166534', usage: 'Texto sobre fundo de sucesso' },
    ],
  },
  {
    role: 'Warning',
    description: 'Atenção e avisos. Indica estados que requerem ação ou revisão.',
    palette: 'Amber',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#fffbeb', usage: 'Fundo de banners de aviso' },
      { label: 'Background',        shade: '100', hex: '#fef3c7', usage: 'Chips de status: pendente' },
      { label: 'Border',            shade: '300', hex: '#fcd34d', usage: 'Borda de campos com aviso' },
      { label: 'Solid',             shade: '500', hex: '#f59e0b', usage: 'Ícones de aviso, badges', default: true },
      { label: 'Solid Hover',       shade: '600', hex: '#d97706', usage: 'Hover de elementos de aviso' },
      { label: 'Text',              shade: '800', hex: '#92400e', usage: 'Texto sobre fundo de aviso' },
    ],
  },
  {
    role: 'Danger',
    description: 'Erros, ações destrutivas e estados críticos.',
    palette: 'Red',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#fef2f2', usage: 'Fundo de alertas de erro' },
      { label: 'Background',        shade: '100', hex: '#fee2e2', usage: 'Chips de status: falha' },
      { label: 'Border',            shade: '300', hex: '#fca5a5', usage: 'Borda de inputs inválidos' },
      { label: 'Solid',             shade: '600', hex: '#dc2626', usage: 'Botão destrutivo, ícones de erro', default: true },
      { label: 'Solid Hover',       shade: '700', hex: '#b91c1c', usage: 'Hover de ações destrutivas' },
      { label: 'Text',              shade: '800', hex: '#991b1b', usage: 'Mensagens de erro em campos' },
    ],
  },
  {
    role: 'Info',
    description: 'Informação neutra, dicas e estados de carregamento.',
    palette: 'Blue',
    swatches: [
      { label: 'Subtle Background', shade: '50',  hex: '#eff6ff', usage: 'Fundo de tooltips, banners info' },
      { label: 'Background',        shade: '100', hex: '#dbeafe', usage: 'Chips de status: em andamento' },
      { label: 'Border',            shade: '300', hex: '#93c5fd', usage: 'Borda de elementos informativos' },
      { label: 'Solid',             shade: '600', hex: '#2563eb', usage: 'Links, badges informativos', default: true },
      { label: 'Solid Hover',       shade: '700', hex: '#1d4ed8', usage: 'Hover de links e ações info' },
      { label: 'Text',              shade: '800', hex: '#1e40af', usage: 'Texto de link sobre fundo claro' },
    ],
  },
]

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
  Primary:   { bg: '#9FC132', text: '#fff' },
  Secondary: { bg: '#475569', text: '#fff' },
  Neutral:   { bg: '#94a3b8', text: '#1e293b' },
  Success:   { bg: '#16a34a', text: '#fff' },
  Warning:   { bg: '#f59e0b', text: '#fff' },
  Danger:    { bg: '#dc2626', text: '#fff' },
  Info:      { bg: '#2563eb', text: '#fff' },
}

export default function ColorsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Cores</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Sistema de cores do Confraria Design System. Organizado em papéis semânticos —
          como nos principais DSs de mercado (Material Design 3, Atlassian, IBM Carbon,
          Radix UI) — para que a equipe use tokens com intenção, não valores arbitrários.
        </p>
      </div>

      {/* ── 1. Semantic roles ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Papéis semânticos</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Cada papel define um conjunto fixo de passos — Background, Border, Solid,
          Hover e Text — para que qualquer componente possa ser construído sem adivinhar qual
          shade usar.
        </p>

        <div className="space-y-10">
          {semanticRoles.map((role) => {
            const accent = roleAccent[role.role]
            return (
              <div key={role.role}>
                {/* Role header */}
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shrink-0"
                    style={{ backgroundColor: accent.bg, color: accent.text }}
                  >
                    {role.role}
                  </span>
                  <p className="text-sm text-foreground/60 pt-1">{role.description}</p>
                </div>

                {/* Swatches */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {role.swatches.map((swatch) => (
                    <Card
                      key={swatch.label}
                      className="overflow-hidden pt-0 gap-0"
                      style={swatch.default ? { outline: `2px solid ${accent.bg}`, outlineOffset: '2px' } : {}}
                    >
                      <div className="h-16 w-full" style={{ backgroundColor: swatch.hex }} />
                      <div className="p-2.5">
                        <p className="font-semibold text-xs text-foreground leading-tight">
                          {swatch.label}
                        </p>
                        <p className="text-[11px] text-foreground/50 font-mono mt-0.5">
                          {swatch.shade}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono">
                          {swatch.hex}
                        </p>
                        <p className="text-[10px] text-foreground/40 mt-1 leading-tight">
                          {swatch.usage}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 2. Full palettes ── */}
      <section>
        <h2 className="text-2xl font-bold mb-2 text-foreground">Paletas completas</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Todas as escalas de 50 a 900 disponíveis como tokens CSS e classes Tailwind.
          O shade marcado com borda é o valor padrão recomendado para cada paleta.
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

      {/* ── 3. Usage guide ── */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Como usar</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Via Tailwind CSS</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{/* Botão primário */}
<button className="bg-[#9FC132] hover:bg-[#728F21] text-white">
  Salvar
</button>

{/* Badge de erro */}
<span className="bg-red-100 text-red-800 border border-red-300">
  Falha no pagamento
</span>

{/* Texto secundário */}
<p className="text-slate-500">Última atualização há 2 dias</p>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Via CSS custom properties</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`.btn-primary {
  background-color: var(--confraria-500); /* Solid */
  color: #fff;
}
.btn-primary:hover {
  background-color: var(--confraria-600); /* Solid Hover */
}

.input-error {
  border-color: var(--color-red-300);   /* Border */
  background-color: var(--color-red-50); /* Subtle Background */
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* ── 4. Accessibility ── */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Acessibilidade</h2>
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-2">Contraste WCAG AA</h3>
          <p className="text-foreground/60 mb-4">
            Os tokens Solid e Text de cada papel foram validados para atingir contraste
            mínimo de 4.5:1 sobre os respectivos tokens de Background:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/60 text-sm">
            <li><strong>Subtle Background (50)</strong> + <strong>Text (700–900)</strong>: uso seguro para blocos de texto longos</li>
            <li><strong>Solid (500–600)</strong> sobre branco: botões e badges — verificar individualmente por paleta</li>
            <li><strong>Background (100)</strong> + <strong>Solid Hover (700)</strong>: chips e tags coloridas</li>
            <li>Nunca use tons 200–400 como cor de texto sobre branco — contraste insuficiente</li>
          </ul>
        </Card>
      </section>
    </div>
  )
}
