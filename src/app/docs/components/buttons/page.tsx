'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

const variants = ['default', 'secondary', 'destructive', 'outline', 'ghost'] as const
const sizes = ['sm', 'default', 'lg'] as const

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

export default function ButtonsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Button</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Componente de botão versátil construído com Radix UI. Suporta múltiplas
          variantes, tamanhos e estados.
        </p>
      </div>

      {/* Variants */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Variantes</h2>
        <div className="space-y-8">
          {variants.map((variant) => (
            <Card key={variant} className="p-6">
              <h3 className="font-semibold text-lg mb-4 capitalize text-slate-900">
                {variant}
              </h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {sizes.map((size) => (
                  <Button key={`${variant}-${size}`} variant={variant} size={size}>
                    Button {size}
                  </Button>
                ))}
                <Button variant={variant} size="default" disabled>
                  Disabled
                </Button>
              </div>
              <CodeBlock
                code={`<Button variant="${variant}" size="default">
  Button
</Button>`}
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Tamanhos</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
          <CodeBlock
            code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
          />
        </Card>
      </div>

      {/* Estados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Estados</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button disabled>Disabled</Button>
            <Button disabled variant="outline">
              Disabled Outline
            </Button>
            <Button disabled variant="ghost">
              Disabled Ghost
            </Button>
          </div>
          <CodeBlock
            code={`<Button disabled>Disabled</Button>
<Button disabled variant="outline">Disabled Outline</Button>
<Button disabled variant="ghost">Disabled Ghost</Button>`}
          />
        </Card>
      </div>

      {/* Ícones */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Com Ícones</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button>
              <span className="mr-2">📝</span>
              Edit
            </Button>
            <Button variant="outline">
              Save
              <span className="ml-2">💾</span>
            </Button>
            <Button variant="destructive">
              <span className="mr-2">🗑️</span>
              Delete
            </Button>
          </div>
          <CodeBlock
            code={`import { Edit, Save, Trash2 } from 'lucide-react'

<Button>
  <Edit className="mr-2 h-4 w-4" />
  Edit
</Button>`}
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
                <td className="py-3 px-4">
                  A variante do botão: default, secondary, destructive, outline, ghost
                </td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">size</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;default&quot;</td>
                <td className="py-3 px-4">O tamanho do botão: sm, default, lg, icon</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">disabled</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Desabilita o botão</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">asChild</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Integra o estilo com outros componentes</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
