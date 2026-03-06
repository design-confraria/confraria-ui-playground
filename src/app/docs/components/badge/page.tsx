'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Copy, Check, AlertCircle, CheckCircle, Info, Star,
  Clock, XCircle, CheckCircle2, Bell, ShoppingCart, MessageSquare,
  Zap, Tag, Shield,
} from 'lucide-react'
import { useState } from 'react'

const variantMeta = [
  {
    variant: 'default' as const,
    label: 'Default',
    intent: 'Ação principal ou destaque de marca',
    when: 'Plano ativo, feature nova, destaque principal do contexto',
  },
  {
    variant: 'secondary' as const,
    label: 'Secondary',
    intent: 'Informação neutra ou secundária',
    when: 'Categoria, tipo, tag informacional sem peso semântico',
  },
  {
    variant: 'destructive' as const,
    label: 'Destructive',
    intent: 'Erro, perigo ou estado crítico',
    when: 'Pagamento recusado, acesso negado, evento cancelado',
  },
  {
    variant: 'outline' as const,
    label: 'Outline',
    intent: 'Neutro, sutil — não compete com o conteúdo',
    when: 'Filtros, tags editáveis, labels secundárias',
  },
  {
    variant: 'ghost' as const,
    label: 'Ghost',
    intent: 'Ínfimo peso visual — quase invisível',
    when: 'Metadados internos, anotações, itens sem prioridade',
  },
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-muted/40 border border-border rounded-lg p-4 relative mt-4">
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

export default function BadgePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Badge</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Componente de badge para labels, status e categorização. Suporta múltiplas
          variantes com estilos visuais distintos.
        </p>
      </div>

      {/* Variantes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Variantes</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Cada variante carrega uma intenção semântica — escolha pela mensagem que precisa transmitir,
          não pela estética. Baseado nas diretrizes do GitHub Primer, Atlassian DS e IBM Carbon.
        </p>
        <div className="space-y-6">
          {variantMeta.map(({ variant, label, intent, when }) => (
            <Card key={variant} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                <Badge variant={variant} className="self-start shrink-0">{label}</Badge>
                <div>
                  <p className="font-semibold text-foreground text-sm">{intent}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Use quando: {when}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-0">
                <Badge variant={variant}>Badge</Badge>
                <Badge variant={variant}>Status</Badge>
                <Badge variant={variant}>Categoria</Badge>
              </div>
              <CodeBlock
                code={`<Badge variant="${variant}">${label}</Badge>`}
              />
            </Card>
          ))}
        </div>
        <UsageBox
          use={[
            'Uma ou duas palavras — badges são rótulos, não frases',
            'Variante coerente com a semântica (destructive = erro real)',
            'Posicionar próximo ao elemento que qualifica',
            'Consistência: mesma variante para o mesmo significado em todo o sistema',
          ]}
          avoid={[
            'Textos longos — truncar ou usar outro componente',
            'Badge como único indicador de erro (sem texto explicativo adjacente)',
            'Misturar variantes para decoração sem significado',
            'Usar default (primário) em excesso — perde impacto',
          ]}
        />
      </div>

      {/* Com Ícones */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com Ícones</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Ícones reforçam o significado, principalmente para usuários com dificuldades de percepção de cor.
          Use ícones de 12–14 px (classe <code className="text-primary bg-primary/10 px-1 rounded">h-3 w-3</code>).
          O componente já inclui gap automático via <code className="text-primary bg-primary/10 px-1 rounded">gap-1</code>.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge>
              <CheckCircle className="h-3 w-3" />
              Sucesso
            </Badge>
            <Badge variant="destructive">
              <AlertCircle className="h-3 w-3" />
              Erro
            </Badge>
            <Badge variant="secondary">
              <Info className="h-3 w-3" />
              Info
            </Badge>
            <Badge variant="outline">
              <Star className="h-3 w-3" />
              Destaque
            </Badge>
            <Badge variant="ghost">
              <Tag className="h-3 w-3" />
              Ghost
            </Badge>
          </div>
          <CodeBlock
            code={`import { CheckCircle, AlertCircle, Info, Star } from 'lucide-react'

<Badge>
  <CheckCircle className="h-3 w-3" />
  Sucesso
</Badge>
<Badge variant="destructive">
  <AlertCircle className="h-3 w-3" />
  Erro
</Badge>
<Badge variant="secondary">
  <Info className="h-3 w-3" />
  Info
</Badge>
<Badge variant="outline">
  <Star className="h-3 w-3" />
  Destaque
</Badge>
<Badge variant="ghost">
  <Tag className="h-3 w-3" />
  Ghost
</Badge>`}
          />
        </Card>
      </div>

      {/* Semântica de Status */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Semântica de status</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão Atlassian / GitHub Primer — mapeie significados de negócio às variantes do DS.
          Mantenha esse mapeamento consistente em toda a aplicação para não criar ambiguidade.
        </p>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Ciclo de vida de evento</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary"><Clock className="h-3 w-3" />Rascunho</Badge>
                <Badge variant="outline"><Shield className="h-3 w-3" />Em revisão</Badge>
                <Badge><Zap className="h-3 w-3" />Publicado</Badge>
                <Badge variant="destructive"><XCircle className="h-3 w-3" />Cancelado</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Status de pedido</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Aguardando pagamento</Badge>
                <Badge variant="secondary">Processando</Badge>
                <Badge><CheckCircle2 className="h-3 w-3" />Confirmado</Badge>
                <Badge variant="destructive"><AlertCircle className="h-3 w-3" />Recusado</Badge>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Planos e assinaturas</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="ghost">Free</Badge>
                <Badge variant="secondary">Pro</Badge>
                <Badge><Star className="h-3 w-3" />Enterprise</Badge>
              </div>
            </div>
          </div>
          <CodeBlock
            code={`{/* Ciclo de vida — mapeie variante → significado e mantenha consistente */}

{/* Rascunho → secondary (neutro) */}
<Badge variant="secondary"><Clock className="h-3 w-3" />Rascunho</Badge>

{/* Publicado → default (ativo/positivo) */}
<Badge><Zap className="h-3 w-3" />Publicado</Badge>

{/* Cancelado → destructive (encerrado com falha) */}
<Badge variant="destructive"><XCircle className="h-3 w-3" />Cancelado</Badge>`}
          />
        </Card>
        <UsageBox
          use={[
            'Mesmo mapeamento variant → status em toda a aplicação',
            'Ícone reforçando o estado para daltônicos',
            'Documentar o mapeamento no próprio DS (essa página!)',
            'Manter vocabulário curto: 1–2 palavras por status',
          ]}
          avoid={[
            'Usar cores customizadas fora do sistema de variantes',
            'Mapeamentos inconsistentes (destructive = cancelado em A, pendente em B)',
            'Status que não cabem numa palavra — prefira um chip ou tag',
            'Badge como único indicador de estado crítico sem nenhum texto explicativo',
          ]}
        />
      </div>

      {/* Contagem e Notificação */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Contagem e notificação</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão Material Design 3 — badges numéricos indicam quantidade de itens não lidos
          ou pendentes. Use com moderação: nunca empilhe múltiplos badges em um componente.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="relative inline-flex">
              <Bell className="h-6 w-6 text-foreground" />
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 text-[10px] flex items-center justify-center">3</Badge>
            </div>
            <div className="relative inline-flex">
              <ShoppingCart className="h-6 w-6 text-foreground" />
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 text-[10px] flex items-center justify-center">12</Badge>
            </div>
            <div className="relative inline-flex">
              <MessageSquare className="h-6 w-6 text-foreground" />
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 text-[10px] flex items-center justify-center">99+</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground font-medium">Notificações</span>
              <Badge variant="destructive" className="h-5 min-w-5 px-1.5 text-[11px]">7</Badge>
            </div>
          </div>
          <CodeBlock
            code={`{/* Badge numérico sobre ícone */}
<div className="relative inline-flex">
  <Bell className="h-6 w-6" />
  <Badge
    className="absolute -top-2 -right-2 h-5 min-w-5 px-1 text-[10px]
      flex items-center justify-center"
    aria-label="3 notificações não lidas"
  >
    3
  </Badge>
</div>

{/* Inline ao lado de label */}
<span>Notificações</span>
<Badge variant="destructive" aria-label="7 itens pendentes">7</Badge>`}
          />
        </Card>
        <UsageBox
          use={[
            'aria-label descritivo no badge numérico ("3 notificações")',
            'Truncar com "99+" ao ultrapassar 2 dígitos',
            'Posição absolute -top-2 -right-2 sobre o ícone pai',
            'Variante destructive para contagens que exigem atenção imediata',
          ]}
          avoid={[
            'Badge numérico sem aria-label (inacessível)',
            'Exibir 0 — remova o badge ou omita quando zerado',
            'Stacking: dois badges no mesmo elemento',
            'Números grandes (>3 dígitos) — use "999+"',
          ]}
        />
      </div>

      {/* Exemplos de Uso */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Exemplos de uso em contexto</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Badges sempre acompanham outro elemento — nunca flutuam sozinhos. Veja como integrar
          ao lado de texto, dentro de listas e em tabelas.
        </p>
        <Card className="p-6">
          <div className="space-y-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-foreground font-medium">Pedido #1234</span>
              <Badge>Aprovado</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-medium">Pedido #1235</span>
              <Badge variant="secondary">Pendente</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-medium">Pedido #1236</span>
              <Badge variant="destructive">Cancelado</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-medium">Pedido #1237</span>
              <Badge variant="outline">Em análise</Badge>
            </div>
          </div>
          <CodeBlock
            code={`<div className="flex items-center gap-3">
  <span>Pedido #1234</span>
  <Badge>Aprovado</Badge>
</div>
<div className="flex items-center gap-3">
  <span>Pedido #1235</span>
  <Badge variant="secondary">Pendente</Badge>
</div>`}
          />
        </Card>
      </div>

      {/* Acessibilidade */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Acessibilidade</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Badge é um elemento <code className="text-primary bg-primary/10 px-1 rounded">span</code> — lido inline pelo texto ao redor.
          Para badges autônomos ou numéricos, forneça contexto explícito via <code className="text-primary bg-primary/10 px-1 rounded">aria-label</code>.
        </p>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { attr: 'aria-label', desc: 'Descreve o badge quando o texto é ambíguo ou numérico ("3 notificações não lidas")' },
              { attr: 'role="status"', desc: 'Use quando o badge atualiza dinamicamente (contagem em tempo real)' },
              { attr: 'aria-live="polite"', desc: 'Para badges que mudam de valor sem recarregar a página' },
              { attr: 'title', desc: 'Tooltip acessível para ícones sem texto adjacente' },
            ].map(({ attr, desc }) => (
              <div key={attr} className="flex gap-3 p-3 bg-muted/40 rounded-lg">
                <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs shrink-0 self-start mt-0.5">{attr}</code>
                <p className="text-sm text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>
          <CodeBlock
            code={`{/* Badge autônomo — contexto via aria-label */}
<Badge aria-label="Status: pedido aprovado">Aprovado</Badge>

{/* Contagem dinâmica */}
<Badge
  role="status"
  aria-live="polite"
  aria-label={\`\${count} notificações não lidas\`}
>
  {count}
</Badge>

{/* Só ícone — use title ou aria-label */}
<Badge aria-label="Sucesso">
  <CheckCircle2 className="h-3 w-3" />
</Badge>`}
          />
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            Herda todas as props nativas do <code className="text-primary bg-primary/10 px-1 rounded">&lt;span&gt;</code>.
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
                ['variant', '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', '"default"', 'Controla aparência e semântica visual'],
                ['asChild', 'boolean', 'false', 'Compõe com outro elemento via Radix Slot — útil para <a> ou <button>'],
                ['aria-label', 'string', '—', 'Contexto para leitores de tela em badges numéricos ou sem texto'],
                ['role', 'string', '—', '"status" para badges que atualizam dinamicamente'],
                ['aria-live', 'string', '—', '"polite" para anunciar mudanças de valor sem interrupção'],
                ['className', 'string', '—', 'Classes Tailwind adicionais (tamanho, sombra, posição absoluta)'],
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
