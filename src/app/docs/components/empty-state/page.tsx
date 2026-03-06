'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EmptyState } from '@/components/confraria/empty-state'
import { Button } from '@/components/ui/button'
import { Copy, Check, Construction, Wrench, Hammer, Cog, Motorbike } from 'lucide-react'

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
      >
        {copied ? (
          <Check className="h-4 w-4 text-confraria-500" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/50" />
        )}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
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
          Componente para telas sem dados, com mensagem clara e ação principal.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Imagem Em Construção</h2>
        <Card className="p-8 space-y-8">
          <UnderConstructionIllustration />
          <p className="text-sm text-foreground/60">
            Ilustração para estados de recurso indisponível temporariamente.
          </p>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Exemplo de Uso</h2>
        <Card className="p-6">
          <EmptyState
            icon={Construction}
            title="Funcionalidade em construção"
            description="Estamos preparando esta área. Em breve ela estará disponível para você."
            action={{
              label: 'Voltar para Home',
              onClick: () => window.location.assign('/'),
            }}
          />
          <div className="mt-6">
            <Button size="lg" variant="outline">
              Ação Secundária
            </Button>
          </div>
        </Card>
      </div>

      <div>
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
    </div>
  )
}
