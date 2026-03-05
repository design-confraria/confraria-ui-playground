'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { StatCard } from '@/components/confraria/stat-card'
import { Copy, Check, Users, TrendingUp, Shield, Zap } from 'lucide-react'
import { useState } from 'react'

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

export default function StatCardPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-slate-900">StatCard</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Card para exibir estatísticas com ícone, valor e tendência.
        </p>
      </div>

      {/* Exemplos Básicos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Exemplos Básicos</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <StatCard
            icon={Users}
            label="Usuários Ativos"
            value="2,547"
            color="blue"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            icon={TrendingUp}
            label="Receita Mensal"
            value="$45,231"
            color="green"
            trend={{ value: 8.5, isPositive: true }}
          />
          <StatCard
            icon={Shield}
            label="Taxa de Segurança"
            value="99.8%"
            color="purple"
          />
          <StatCard
            icon={Zap}
            label="Performance"
            value="512ms"
            color="amber"
            trend={{ value: 5, isPositive: false }}
          />
        </div>
        <CodeBlock
          code={`<StatCard
  icon={Users}
  label="Usuários Ativos"
  value="2,547"
  color="blue"
  trend={{ value: 12, isPositive: true }}
/>`}
        />
      </div>

      {/* Cores */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Cores</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-6">
          <StatCard icon={Users} label="Blue" value="1,234" color="blue" />
          <StatCard icon={Users} label="Green" value="5,678" color="green" />
          <StatCard icon={Users} label="Red" value="234" color="red" />
          <StatCard icon={Users} label="Amber" value="891" color="amber" />
          <StatCard icon={Users} label="Purple" value="456" color="purple" />
        </div>
        <CodeBlock
          code={`<StatCard label="Blue" value="1,234" color="blue" />
<StatCard label="Green" value="5,678" color="green" />
<StatCard label="Red" value="234" color="red" />
<StatCard label="Amber" value="891" color="amber" />
<StatCard label="Purple" value="456" color="purple" />`}
        />
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
                <td className="py-3 px-4 font-mono text-blue-600">label</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Rótulo da estatística</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">value</td>
                <td className="py-3 px-4">string | number</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Valor a exibir</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">icon</td>
                <td className="py-3 px-4">LucideIcon</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Ícone do card</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">trend</td>
                <td className="py-3 px-4">object</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">
                  {'{ value: number, isPositive: boolean }'}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">color</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;blue&quot;</td>
                <td className="py-3 px-4">
                  Cor do ícone: blue, green, red, amber, purple
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
