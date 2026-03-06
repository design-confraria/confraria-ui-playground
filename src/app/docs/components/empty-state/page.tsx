'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EmptyState } from '@/components/confraria/empty-state'
import { Copy, Check, Construction, Wrench, Hammer, Cog, Motorbike, Search, Inbox } from 'lucide-react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-muted/40 border border-border rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copy code"
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

function UsageBox({ use, avoid }: { use: string[]; avoid: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
        <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-2">✓ Use para</p>
        <ul className="space-y-1">{use.map((t) => <li key={t} className="text-sm text-green-800 dark:text-green-300">• {t}</li>)}</ul>
      </div>
      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
        <p className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide mb-2">✗ Evite</p>
        <ul className="space-y-1">{avoid.map((t) => <li key={t} className="text-sm text-red-800 dark:text-red-300">• {t}</li>)}</ul>
      </div>
    </div>
  )
}

function UnderConstructionIllustration() {
  return (
    <div className="relative mx-auto flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/60 px-6 py-5">
      <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-primary/10" />
      <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-primary/10" />

      <div className="relative flex items-center gap-6">
        <div className="flex items-end gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Construction className="h-10 w-10" />
          </div>
          <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <Motorbike className="h-7 w-7" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-foreground/70">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="text-sm">Ajustando estrutura</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Hammer className="h-4 w-4 text-primary" />
            <span className="text-sm">Construindo experiência</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Cog className="h-4 w-4 text-primary" />
            <span className="text-sm">Polindo os detalhes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EmptyStatePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Empty State</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Comunica o motivo de uma tela ou lista estar vazia e oferece um caminho claro de ação.
          Padrão IBM Carbon, Atlassian DS e GitHub Primer: mensagem específica ao contexto, nunca genérica.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Imagem Em Construção</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Ilustração para recursos indisponíveis temporariamente. Use quando a funcionalidade existe
          mas ainda está sendo desenvolvida — diferente de "sem dados" (recurso vazio) ou "sem resultados" (busca vazia).
        </p>
        <Card className="p-8 space-y-8">
          <UnderConstructionIllustration />
          <p className="text-sm text-foreground/60">
            Ilustração para estados de recurso indisponível temporariamente.
          </p>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Contextos de Uso</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão IBM Carbon e Atlassian DS — adapte a mensagem ao motivo do estado vazio.
          Cada contexto tem intenção diferente: "em construção" é transitório, "sem resultados" é reversível pelo usuário, "sem dados" é o ponto de partida.
        </p>
        <div className="space-y-6">
          <Card className="p-6">
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-4">Em construção</p>
            <EmptyState
              icon={Construction}
              title="Funcionalidade em construção"
              description="Estamos preparando esta área. Em breve ela estará disponível para você."
              action={{
                label: 'Voltar para Home',
                onClick: () => window.location.assign('/'),
              }}
            />
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-4">Sem resultados (busca)</p>
            <EmptyState
              icon={Search}
              title="Nenhum resultado encontrado"
              description="Tente outros termos ou remova os filtros aplicados."
            />
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-4">Sem dados (primeiro uso)</p>
            <EmptyState
              icon={Inbox}
              title="Nenhum item ainda"
              description="Crie seu primeiro item para começar."
              action={{
                label: 'Criar item',
                onClick: () => {},
              }}
            />
          </Card>
        </div>
        <UsageBox
          use={[
            'Mensagem específica ao contexto — nunca "Não há dados"',
            'CTA quando houver ação clara de criação ou navegação',
            'Omitir CTA em empty states de busca — o usuário já sabe o que fazer',
            'Descrição que explica o porquê + sugere o próximo passo',
          ]}
          avoid={[
            'Dois botões de ação — um máximo por empty state',
            'Textos genéricos como "Vazio" ou "Sem dados disponíveis"',
            'Ícones decorativos sem relação com o conteúdo ausente',
            'Empty state em listas parcialmente preenchidas — só em listas completamente vazias',
          ]}
        />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Código</h2>
        <CodeBlock
          code={`import { EmptyState } from '@/components/confraria/empty-state'
import { Construction } from 'lucide-react'

<EmptyState
  icon={Construction}
  title="Funcionalidade em construção"
  description="Estamos preparando esta área. Em breve ela estará disponível para você."
  action={{
    label: 'Voltar para Home',
    onClick: () => window.location.assign('/'),
  }}
/>`}
        />
      </div>

      {/* Tamanhos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Tamanhos</h2>
        <p className="text-sm text-foreground/60 mb-6">
          <strong className="text-foreground">sm</strong> para painéis e sidebars,
          <strong className="text-foreground"> md</strong> como padrão universal (painel principal),
          <strong className="text-foreground"> lg</strong> para páginas inteiras sem conteúdo.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Card key={size} className="p-6">
              <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-4">size="{size}"</p>
              <EmptyState
                icon={Inbox}
                size={size}
                title="Sem itens"
                description="Crie um para começar."
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Orientação de Escrita */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Orientação de Escrita</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão IBM Carbon — título ativo, descrição explicativa, CTA específico.
        </p>
        <Card className="p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: '✓ Correto',
                color: 'text-green-700 dark:text-green-400',
                bg: 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900',
                items: [
                  { title: 'Nenhum pedido encontrado', desc: 'Tente ajustar os filtros ou fazer uma nova busca.' },
                  { title: 'Comece adicionando membros', desc: 'Seu time ainda não tem membros. Convide colaboradores.' },
                ],
              },
              {
                label: '✗ Evite',
                color: 'text-red-700 dark:text-red-400',
                bg: 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900',
                items: [
                  { title: 'Não há dados', desc: 'Não há dados disponíveis no momento.' },
                  { title: 'Vazio', desc: 'Esta seção não possui conteúdo.' },
                ],
              },
            ].map(({ label, color, bg, items }) => (
              <div key={label} className={`rounded-lg p-4 ${bg}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${color}`}>{label}</p>
                <div className="space-y-3">
                  {items.map(({ title, desc }) => (
                    <div key={title} className="bg-background/60 rounded p-3">
                      <p className="text-sm font-semibold text-foreground">{title}</p>
                      <p className="text-xs text-foreground/60 mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            Herda todas as props nativas do{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">&lt;div&gt;</code> — incluindo{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">className</code> e handlers.
          </p>
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
              {[
                ['icon', 'LucideIcon', '—', 'Ícone representativo do conteúdo ausente'],
                ['title', 'string', '—', 'Obrigatório — frase ativa descrevendo o estado vazio'],
                ['description', 'string', '—', 'Explica o porquê + sugere o próximo passo'],
                ['action', '{ label: string; onClick: () => void }', '—', 'CTA primário — use no máximo um por empty state'],
                ['size', '"sm" | "md" | "lg"', '"md"', 'sm para painéis inline, md universal, lg para páginas inteiras'],
                ['className', 'string', '—', 'Classes Tailwind adicionais'],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop} className="border-b border-border hover:bg-accent/30">
                  <td className="py-3 px-4 font-mono text-primary text-xs">{prop}</td>
                  <td className="py-3 px-4 text-foreground/70 font-mono text-xs">{type}</td>
                  <td className="py-3 px-4 text-foreground/60 text-xs">{def}</td>
                  <td className="py-3 px-4 text-foreground/70 text-sm">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
