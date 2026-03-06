'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/confraria/date-picker'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-card rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
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

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>()
  return <DatePicker value={date} onChange={setDate} />
}

export default function InputPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Input</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Componente de input para formulários. Suporta todos os tipos HTML nativos
          com estilos consistentes.
        </p>
      </div>

      {/* Input Básico */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Input Básico</h2>
        <Card className="p-6">
          <div className="max-w-sm space-y-4 mb-6">
            <Input placeholder="Digite algo..." />
          </div>
          <CodeBlock code={`<Input placeholder="Digite algo..." />`} />
        </Card>
      </div>

      {/* Com Label */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Com Label</h2>
        <Card className="p-6">
          <div className="max-w-sm space-y-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </div>
          <CodeBlock
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" />
</div>`}
          />
        </Card>
      </div>

      {/* Tipos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Tipos</h2>
        <Card className="p-6">
          <div className="max-w-sm space-y-4 mb-6">
            <div className="space-y-2">
              <Label>Texto</Label>
              <Input type="text" placeholder="Texto normal" />
            </div>
            <div className="space-y-2">
              <Label>Número</Label>
              <Input type="number" placeholder="123" />
            </div>
            <div className="space-y-2">
              <Label>Data</Label>
              <DatePickerDemo />
            </div>
            <div className="space-y-2">
              <Label>Busca</Label>
              <Input type="search" placeholder="Buscar..." />
            </div>
            <div className="space-y-2">
              <Label>Arquivo</Label>
              <Input type="file" />
            </div>
          </div>
          <CodeBlock
            code={`<Input type="text" placeholder="Texto normal" />
<Input type="number" placeholder="123" />
<DatePicker value={date} onChange={setDate} />
<Input type="search" placeholder="Buscar..." />
<Input type="file" />`}
          />
        </Card>
      </div>

      {/* Estados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Estados</h2>
        <Card className="p-6">
          <div className="max-w-sm space-y-4 mb-6">
            <div className="space-y-2">
              <Label>Normal</Label>
              <Input placeholder="Input normal" />
            </div>
            <div className="space-y-2">
              <Label>Desabilitado</Label>
              <Input disabled placeholder="Input desabilitado" />
            </div>
            <div className="space-y-2">
              <Label>Com erro</Label>
              <Input aria-invalid="true" placeholder="Input com erro" />
            </div>
          </div>
          <CodeBlock
            code={`<Input placeholder="Input normal" />
<Input disabled placeholder="Input desabilitado" />
<Input aria-invalid="true" placeholder="Input com erro" />`}
          />
        </Card>
      </div>

      {/* DatePicker */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Date Picker</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Seletor de data com calendário personalizado via Popover — sem abrir o seletor nativo do navegador.
          Baseado em <code className="text-primary bg-primary/10 px-1 rounded">react-day-picker</code> e formatado com
          <code className="text-primary bg-primary/10 px-1 rounded"> date-fns</code>.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4 mb-6">
            <div className="space-y-2">
              <Label>Data</Label>
              <DatePickerDemo />
            </div>
            <div className="space-y-2">
              <Label>Desabilitado</Label>
              <DatePicker placeholder="Selecione uma data" disabled />
            </div>
          </div>
          <CodeBlock
            code={`import { DatePicker } from '@confraria/ui'
import { useState } from 'react'

const [date, setDate] = useState<Date | undefined>()

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Selecione uma data"
/>

// Formato personalizado
<DatePicker
  value={date}
  onChange={setDate}
  dateFormat="MMMM 'de' yyyy"
/>

// Desabilitado
<DatePicker placeholder="Selecione uma data" disabled />`}
          />
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
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
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">type</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;text&quot;</td>
                <td className="py-3 px-4">Tipo do input HTML</td>
              </tr>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">placeholder</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Placeholder do input</td>
              </tr>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">disabled</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Desabilita o input</td>
              </tr>
              <tr className="hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">aria-invalid</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Marca o campo como inválido com estilo de erro</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
