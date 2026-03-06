'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Copy, Check,
  Plus, Trash2, Download, Upload, Settings,
  ArrowRight, ChevronRight, ChevronDown,
  Send, Save, Search, RefreshCw, Loader2,
  ExternalLink, AlertTriangle,
} from 'lucide-react'
import { useState } from 'react'

// ── variant metadata ────────────────────────────────────────────────────────
const variantMeta = [
  {
    variant: 'default' as const,
    label: 'Default (Primary)',
    intent: 'Ação principal da tela. Use no máximo uma vez por seção de interface. Alta ênfase.',
    when: 'Salvar, Confirmar, Criar, Publicar.',
  },
  {
    variant: 'secondary' as const,
    label: 'Secondary',
    intent: 'Ações de suporte ao botão primário. Ênfase média. Nunca concorra com o Default.',
    when: 'Cancelar, Voltar, Visualizar.',
  },
  {
    variant: 'outline' as const,
    label: 'Outline (Tertiary)',
    intent: 'Baixa ênfase com borda visível. Ideal quando há muitas ações no mesmo nível.',
    when: 'Filtrar, Exportar, Opções adicionais.',
  },
  {
    variant: 'ghost' as const,
    label: 'Ghost (Quiet)',
    intent: 'Ênfase mínima — sem fundo, sem borda. Use em toolbars, tabelas e ações secundárias densas.',
    when: 'Editar inline, ações em linhas de tabela, menus compactos.',
  },
  {
    variant: 'destructive' as const,
    label: 'Destructive (Danger)',
    intent: 'Ações irreversíveis ou de alto risco. Sempre acompanhe de confirmação (dialog/modal).',
    when: 'Excluir, Remover, Desfazer conta.',
  },
  {
    variant: 'link' as const,
    label: 'Link',
    intent: 'Navegação inline dentro de texto ou fluxo. Sem preenchimento, apenas underline.',
    when: 'Termos de uso, links contextuais, breadcrumb.',
  },
] as const

const sizes = ['sm', 'default', 'lg'] as const

function CodeBlock({ code }: { code: string }) {
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
        title="Copy code"
        aria-label="Copiar código"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/50" />
        )}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto pr-8">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function IntentBox({ intent, when }: { intent: string; when: string }) {
  return (
    <div className="mb-5 flex flex-col gap-1 rounded-lg border border-border bg-accent/30 px-4 py-3 text-sm">
      <p className="text-foreground/80">{intent}</p>
      <p className="text-foreground/50"><span className="font-medium text-foreground/70">Use quando:</span> {when}</p>
    </div>
  )
}

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">

      {/* ── Header ── */}
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Button</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Botões comunicam ações. Cada variante tem um nível de ênfase específico —
          misturá-las sem critério reduz a clareza visual. Use a hierarquia: Default → Secondary → Outline → Ghost.
        </p>
      </div>

      {/* ── 1. Variantes e intenção ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Variantes e intenção</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Cada variante corresponde a um nível de ênfase. Defina a hierarquia visual antes
          de escolher a variante — não o contrário.
        </p>
        <div className="space-y-8">
          {variantMeta.map(({ variant, label, intent, when }) => (
            <Card key={variant} className="p-6">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-lg text-foreground">{label}</h3>
                <Badge variant="outline" className="font-mono text-xs">{variant}</Badge>
              </div>
              <IntentBox intent={intent} when={when} />
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {sizes.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {label.split(' ')[0]}
                  </Button>
                ))}
                <Button variant={variant} disabled>Disabled</Button>
              </div>
              <CodeBlock code={`<Button variant="${variant}">Label</Button>`} />
            </Card>
          ))}
        </div>
      </section>

      {/* ── 2. Escala de tamanhos ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Escala de tamanhos</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Tamanhos disponíveis para botões com texto. Para botões icon-only veja a seção de Ícones.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex flex-col items-center gap-2">
              <Button size="xs">Extra Small</Button>
              <span className="text-xs text-foreground/40 font-mono">xs · h-6</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="sm">Small</Button>
              <span className="text-xs text-foreground/40 font-mono">sm · h-8</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="default">Default</Button>
              <span className="text-xs text-foreground/40 font-mono">default · h-9</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="lg">Large</Button>
              <span className="text-xs text-foreground/40 font-mono">lg · h-10</span>
            </div>
          </div>
          <CodeBlock code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`} />
        </Card>
      </section>

      {/* ── 3. Estados ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Estados</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Botões comunicam estado ao usuário. O estado <code className="text-xs bg-accent px-1 py-0.5 rounded">loading</code> é
          especialmente crítico em ações assíncronas — previne double-submit e dá feedback imediato.
        </p>

        {/* Disabled */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3 text-foreground">Disabled</h3>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
              <Button variant="destructive" disabled>Destructive</Button>
            </div>
            <CodeBlock code={`<Button disabled>Label</Button>`} />
          </Card>
        </div>

        {/* Loading */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3 text-foreground">
            Loading
            <Badge variant="secondary" className="ml-2 text-xs">recomendado em ações async</Badge>
          </h3>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button disabled={loading} onClick={handleLoadingDemo}>
                {loading ? <><Loader2 className="animate-spin" /> Salvando…</> : <><Save /> Salvar</>}
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="animate-spin" /> Carregando…
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="animate-spin" /> Processando…
              </Button>
            </div>
            <p className="text-xs text-foreground/40 mb-4">Clique em "Salvar" para ver a transição em tempo real.</p>
            <CodeBlock code={`import { Loader2, Save } from 'lucide-react'

const [loading, setLoading] = useState(false)

<Button disabled={loading} onClick={handleSubmit}>
  {loading
    ? <><Loader2 className="animate-spin" /> Salvando…</>
    : <><Save /> Salvar</>
  }
</Button>`} />
          </Card>
        </div>

        {/* Full-width */}
        <div>
          <h3 className="font-semibold text-base mb-1 text-foreground">Full-width</h3>
          <p className="text-sm text-foreground/50 mb-3">Padrão em formulários mobile, modals e painéis laterais.</p>
          <Card className="p-6">
            <div className="flex flex-col gap-3 max-w-sm mb-6">
              <Button className="w-full" size="lg">Continuar</Button>
              <Button variant="outline" className="w-full" size="lg">Cancelar</Button>
            </div>
            <CodeBlock code={`<Button className="w-full" size="lg">Continuar</Button>
<Button variant="outline" className="w-full" size="lg">Cancelar</Button>`} />
          </Card>
        </div>
      </section>

      {/* ── 4. Botões com ícone ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Botões com ícone</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Três padrões de posicionamento. Use ícones que reforcem o label — nunca como decoração.
        </p>

        {/* icon | Text */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3 text-foreground flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">icon | Text</Badge>
            Ícone à esquerda
          </h3>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button><Plus /> Novo item</Button>
              <Button variant="secondary"><Download /> Exportar</Button>
              <Button variant="outline"><Search /> Buscar</Button>
              <Button variant="ghost"><Settings /> Configurações</Button>
              <Button variant="destructive"><Trash2 /> Excluir</Button>
            </div>
            <CodeBlock code={`import { Plus } from 'lucide-react'

<Button>
  <Plus />
  Novo item
</Button>`} />
          </Card>
        </div>

        {/* Text | icon */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3 text-foreground flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">Text | icon</Badge>
            Ícone à direita
          </h3>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button>Continuar <ArrowRight /></Button>
              <Button variant="secondary">Próxima etapa <ChevronRight /></Button>
              <Button variant="outline">Expandir <ChevronDown /></Button>
              <Button variant="ghost">Enviar <Send /></Button>
              <Button variant="link">Ver documentação <ExternalLink /></Button>
            </div>
            <CodeBlock code={`import { ArrowRight } from 'lucide-react'

<Button>
  Continuar
  <ArrowRight />
</Button>`} />
          </Card>
        </div>

        {/* icon | Text | icon */}
        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3 text-foreground flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">icon | Text | icon</Badge>
            Ícones nos dois lados
          </h3>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button><Upload /> Fazer upload <ChevronDown /></Button>
              <Button variant="secondary"><RefreshCw /> Sincronizar <ArrowRight /></Button>
              <Button variant="outline"><Save /> Salvar rascunho <ChevronDown /></Button>
            </div>
            <CodeBlock code={`import { Upload, ChevronDown } from 'lucide-react'

<Button>
  <Upload />
  Fazer upload
  <ChevronDown />
</Button>`} />
          </Card>
        </div>

        {/* Icon-only */}
        <div>
          <h3 className="font-semibold text-base mb-1 text-foreground">Somente ícone (icon-only)</h3>
          <p className="text-sm text-foreground/50 mb-3">
            Sempre inclua <code className="text-xs bg-accent px-1 py-0.5 rounded">aria-label</code> — obrigatório para acessibilidade (WCAG 2.1 SC 1.1.1).
          </p>
          <Card className="p-6">
            <div className="flex flex-wrap items-end gap-4 mb-6">
              <div className="flex flex-col items-center gap-2">
                <Button size="icon-xs" variant="outline" aria-label="Buscar"><Search /></Button>
                <span className="text-xs text-foreground/40 font-mono">icon-xs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="icon-sm" variant="outline" aria-label="Buscar"><Search /></Button>
                <span className="text-xs text-foreground/40 font-mono">icon-sm</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="icon" aria-label="Adicionar"><Plus /></Button>
                <span className="text-xs text-foreground/40 font-mono">icon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="icon-lg" variant="ghost" aria-label="Configurações"><Settings /></Button>
                <span className="text-xs text-foreground/40 font-mono">icon-lg</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button size="icon" variant="destructive" aria-label="Excluir"><Trash2 /></Button>
                <span className="text-xs text-foreground/40 font-mono">destructive</span>
              </div>
            </div>
            <CodeBlock code={`{/* Sempre inclua aria-label em icon-only buttons */}
<Button size="icon-sm" variant="outline" aria-label="Buscar">
  <Search />
</Button>

<Button size="icon" aria-label="Adicionar">
  <Plus />
</Button>

<Button size="icon-lg" variant="ghost" aria-label="Configurações">
  <Settings />
</Button>`} />
          </Card>
        </div>
      </section>

      {/* ── 5. Padrão destrutivo com confirmação ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Padrão de confirmação destrutiva</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl">
          Ações irreversíveis nunca devem ser executadas com um único clique.
          Use um Dialog de confirmação — padrão recomendado pelo Material Design 3 e Atlassian.
        </p>
        <Card className="p-6">
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-5 flex flex-col gap-4 max-w-md mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Excluir conta permanentemente</p>
                <p className="text-xs text-foreground/60 mt-1">
                  Todos os dados serão removidos e não poderão ser recuperados.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="destructive" size="sm"><Trash2 /> Excluir</Button>
              <Button variant="outline" size="sm">Cancelar</Button>
            </div>
          </div>
          <CodeBlock code={`import { AlertTriangle, Trash2 } from 'lucide-react'

{/* Dentro de um Dialog/Modal de confirmação */}
<div className="flex items-start gap-3">
  <AlertTriangle className="text-destructive" />
  <div>
    <p className="font-semibold">Excluir conta permanentemente</p>
    <p className="text-sm text-muted-foreground">
      Todos os dados serão removidos e não poderão ser recuperados.
    </p>
  </div>
</div>
<div className="flex gap-2 mt-4">
  <Button variant="destructive"><Trash2 /> Excluir</Button>
  <Button variant="outline">Cancelar</Button>
</div>`} />
        </Card>
      </section>

      {/* ── 6. Props ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Prop</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Padrão</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-accent/30">
                <td className="py-3 px-4 font-mono text-primary">variant</td>
                <td className="py-3 px-4 text-foreground/70 font-mono text-xs">
                  default | secondary | destructive | outline | ghost | link
                </td>
                <td className="py-3 px-4 text-foreground/70">&quot;default&quot;</td>
                <td className="py-3 px-4 text-foreground/70">Nível de ênfase visual do botão.</td>
              </tr>
              <tr className="border-b border-border hover:bg-accent/30">
                <td className="py-3 px-4 font-mono text-primary">size</td>
                <td className="py-3 px-4 text-foreground/70 font-mono text-xs">
                  xs | sm | default | lg | icon-xs | icon-sm | icon | icon-lg
                </td>
                <td className="py-3 px-4 text-foreground/70">&quot;default&quot;</td>
                <td className="py-3 px-4 text-foreground/70">Tamanho do botão. Prefixo <code className="text-xs bg-accent px-1 rounded">icon-</code> para icon-only.</td>
              </tr>
              <tr className="border-b border-border hover:bg-accent/30">
                <td className="py-3 px-4 font-mono text-primary">disabled</td>
                <td className="py-3 px-4 text-foreground/70">boolean</td>
                <td className="py-3 px-4 text-foreground/70">false</td>
                <td className="py-3 px-4 text-foreground/70">Desabilita interação e aplica opacidade.</td>
              </tr>
              <tr className="border-b border-border hover:bg-accent/30">
                <td className="py-3 px-4 font-mono text-primary">asChild</td>
                <td className="py-3 px-4 text-foreground/70">boolean</td>
                <td className="py-3 px-4 text-foreground/70">false</td>
                <td className="py-3 px-4 text-foreground/70">Transfere estilos para o elemento filho via Radix Slot (útil com <code className="text-xs bg-accent px-1 rounded">Link</code>).</td>
              </tr>
              <tr className="hover:bg-accent/30">
                <td className="py-3 px-4 font-mono text-primary">aria-label</td>
                <td className="py-3 px-4 text-foreground/70">string</td>
                <td className="py-3 px-4 text-foreground/70">—</td>
                <td className="py-3 px-4 text-foreground/70">Obrigatório em icon-only buttons para acessibilidade (WCAG 2.1).</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}
