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

export default function StatCardPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">StatCard</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Card de métrica com ícone, valor e indicador de tendência. Use em dashboards e visões gerais —
          padrão IBM Carbon "Summary tile". Nunca use para métricas que exigem contexto detalhado.
        </p>
      </div>

      {/* Exemplos Básicos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Exemplos Básicos</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Grade de 2 ou 4 colunas — padrão IBM Carbon. Agrupe métricas complementares e relacionadas.
          O ícone e a cor reforçam a leitura rápida ao lado do valor numérico.
          A prop <code className="text-primary bg-primary/10 px-1 rounded">trend</code> é opcional — omita quando não há histórico suficiente.
        </p>
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
        <h2 className="text-2xl font-bold mb-2 text-foreground">Cores</h2>
        <p className="text-sm text-foreground/60 mb-6">
          A cor é semântica — escolha pelo significado da métrica, não pela preferência visual.
          Padrão Material Design 3 e IBM Carbon: cores frias para engajamento, quentes para atenção.
        </p>
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <StatCard icon={Users} label="Engajamento" value="1,234" color="blue" />
          <StatCard icon={TrendingUp} label="Crescimento" value="5,678" color="green" />
          <StatCard icon={Shield} label="Incidentes" value="234" color="red" />
          <StatCard icon={Zap} label="Atenção" value="891" color="amber" />
          <StatCard icon={Users} label="Secundário" value="456" color="purple" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {[
            { color: 'blue',   when: 'Métricas neutras, engajamento, KPIs principais' },
            { color: 'green',  when: 'Crescimento, metas atingidas, saúde do sistema' },
            { color: 'red',    when: 'Erros, incidentes, métricas críticas fora do limite' },
            { color: 'amber',  when: 'Atenção, prazos próximos, performance degradada' },
            { color: 'purple', when: 'Métricas secundárias, segmentações, categorias' },
          ].map(({ color, when }) => (
            <div key={color} className="bg-muted/40 border border-border rounded-lg p-3">
              <p className="text-xs font-mono text-primary mb-1">{color}</p>
              <p className="text-xs text-foreground/60">{when}</p>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`<StatCard color="blue"   label="Usuários Ativos"   ... /> {/* engajamento */}
<StatCard color="green"  label="Receita Mensal"   ... /> {/* crescimento */}
<StatCard color="red"    label="Erros Críticos"   ... /> {/* incidentes */}
<StatCard color="amber"  label="Tempo de Resposta" ... /> {/* atenção */}
<StatCard color="purple" label="Taxa de Conversão" ... /> {/* secundário */}`}
        />
      </div>

      {/* Tendência */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Tendência</h2>
        <p className="text-sm text-foreground/60 mb-6">
          A prop <code className="text-primary bg-primary/10 px-1 rounded">trend</code> adiciona um indicador de variação percentual.
          Atenção: <strong className="text-foreground">isPositive</strong> reflete o valor de negócio, não a direção numérica —
          uma queda no tempo de resposta pode ser positiva (padrão IBM Carbon).
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatCard
            icon={TrendingUp}
            label="Alta positiva"
            value="2,547"
            color="blue"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            icon={Zap}
            label="Queda negativa"
            value="512ms"
            color="amber"
            trend={{ value: 8, isPositive: false }}
          />
          <StatCard
            icon={Shield}
            label="Sem tendência"
            value="99.8%"
            color="purple"
          />
        </div>
        <CodeBlock
          code={`{/* Alta positiva - usuários crescendo */}
<StatCard trend={{ value: 12, isPositive: true }} ... />

{/* Queda negativa - latência aumentando */}
<StatCard trend={{ value: 8, isPositive: false }} ... />

{/* Sem tendência - omita a prop */}
<StatCard value="99.8%" color="purple" ... />`}
        />
        <UsageBox
          use={[
            'isPositive: true para crescimento positivo (usuários, receita, NPS)',
            'isPositive: false para aumento indesejável (erros, latência, churn)',
            'Omitir trend em métricas sem histórico suficiente ou de estado fixo',
            'Sempre incluir a unidade no value para contextualizar a tendência',
          ]}
          avoid={[
            'Assumir que isPositive segue a direção numérica — é semântico',
            'trend em métricas de estado fixo como "Taxa de segurança: 100%"',
            'Tendência sem período de referência — especifique no label ("vs mês anterior")',
            'trend.value acima de 999 sem formatação — trunca o layout',
          ]}
        />
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            Herda todas as props nativas do{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">&lt;div&gt;</code> via{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">Card</code> — incluindo <code className="text-primary bg-primary/10 px-1 rounded">className</code> e handlers.
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
                ['label', 'string', '—', 'Rótulo da métrica — inclua o período de referência quando relevante'],
                ['value', 'string | number', '—', 'Valor principal — inclua a unidade (%, ms, $, etc.)'],
                ['icon', 'LucideIcon', '—', 'Ícone representativo da métrica. Opcional — omita em grades densas'],
                ['color', '"blue" | "green" | "red" | "amber" | "purple"', '"blue"', 'Cor semântica do ícone — veja seção Cores'],
                ['trend', '{ value: number; isPositive: boolean }', '—', 'Indicador de variação. isPositive é semântico, não numérico'],
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
