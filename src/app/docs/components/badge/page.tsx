'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Copy, Check, AlertCircle, CheckCircle, Info, Star } from 'lucide-react'
import { useState } from 'react'

const variants = ['default', 'secondary', 'destructive', 'outline'] as const

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-slate-950 rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
      <pre className="text-slate-100 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function BadgePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Badge</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Componente de badge para labels, status e categorização. Suporta múltiplas
          variantes com estilos visuais distintos.
        </p>
      </div>

      {/* Variantes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Variantes</h2>
        <div className="space-y-8">
          {variants.map((variant) => (
            <Card key={variant} className="p-6">
              <h3 className="font-semibold text-lg mb-4 capitalize text-slate-900">
                {variant}
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant={variant}>Badge</Badge>
                <Badge variant={variant}>Status</Badge>
                <Badge variant={variant}>Categoria</Badge>
              </div>
              <CodeBlock
                code={`<Badge variant="${variant}">Badge</Badge>`}
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Com Ícones */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Com Ícones</h2>
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
</Badge>`}
          />
        </Card>
      </div>

      {/* Exemplos de Uso */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Exemplos de Uso</h2>
        <Card className="p-6">
          <div className="space-y-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-medium">Pedido #1234</span>
              <Badge>Aprovado</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-medium">Pedido #1235</span>
              <Badge variant="secondary">Pendente</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-medium">Pedido #1236</span>
              <Badge variant="destructive">Cancelado</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-medium">Pedido #1237</span>
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

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold">Padrão</th>
                <th className="text-left py-3 px-4 font-semibold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">variant</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;default&quot;</td>
                <td className="py-3 px-4">Variante: default, secondary, destructive, outline</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">asChild</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Renderiza como child element</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
