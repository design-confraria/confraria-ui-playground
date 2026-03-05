'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Avatar } from '@/components/confraria/avatar'
import { StatCard } from '@/components/confraria/stat-card'
import { EmptyState } from '@/components/confraria/empty-state'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Users, TrendingUp, Shield, Zap } from 'lucide-react'

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

export default function AvatarPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Avatar</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Componente de avatar para exibir imagens de usuários com fallback automático.
        </p>
      </div>

      {/* Exemplos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Exemplos</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="João Silva" size="md" fallback="JS" />
              <p className="text-xs text-slate-600">Default</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Maria Santos" size="sm" fallback="MS" />
              <p className="text-xs text-slate-600">Small</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Carlos Lima" size="lg" fallback="CL" />
              <p className="text-xs text-slate-600">Large</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Ana Costa" size="xl" fallback="AC" />
              <p className="text-xs text-slate-600">Extra Large</p>
            </div>
          </div>
          <CodeBlock
            code={`<Avatar alt="João Silva" size="md" fallback="JS" />
<Avatar alt="Maria Santos" size="sm" fallback="MS" />
<Avatar alt="Carlos Lima" size="lg" fallback="CL" />`}
          />
        </Card>
      </div>

      {/* Variantes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Variantes</h2>
        <Card className="p-6">
          <div className="flex gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Circular" variant="circle" fallback="C" />
              <p className="text-xs text-slate-600">Circle</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Square" variant="square" fallback="S" />
              <p className="text-xs text-slate-600">Square</p>
            </div>
          </div>
          <CodeBlock
            code={`<Avatar alt="Circular" variant="circle" fallback="C" />
<Avatar alt="Square" variant="square" fallback="S" />`}
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
                <td className="py-3 px-4 font-mono text-blue-600">alt</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Texto alternativo obrigatório</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">src</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">URL da imagem</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">size</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;md&quot;</td>
                <td className="py-3 px-4">Tamanho: sm, md, lg, xl</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">fallback</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">alt[0]</td>
                <td className="py-3 px-4">Fallback quando imagem não carrega</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">variant</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;circle&quot;</td>
                <td className="py-3 px-4">Variante: circle, square</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
