'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/confraria/date-picker'
import {
  Copy, Check, Search, Mail, Eye, EyeOff, AlertCircle,
  CheckCircle2, User, Phone, Lock, Globe, X, Hash,
} from 'lucide-react'
import { useState } from 'react'

// ─── Helpers ────────────────────────────────────────────────────────────────

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
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-foreground/50" />}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto pr-8"><code>{code}</code></pre>
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

// ─── Demos isolados ─────────────────────────────────────────────────────────

function PasswordInput() {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input type={show ? 'text' : 'password'} placeholder="Senha" className="pl-9 pr-9" />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}

function ClearableInput() {
  const [value, setValue] = useState('')
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar eventos..."
        className="pl-9 pr-9"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Limpar busca"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

function CharCountInput() {
  const MAX = 60
  const [value, setValue] = useState('')
  const over = value.length > MAX
  return (
    <div className="space-y-1">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nome do evento"
        aria-invalid={over || undefined}
        aria-describedby="char-hint"
        maxLength={MAX + 10}
      />
      <p
        id="char-hint"
        className={`text-xs text-right ${over ? 'text-destructive' : 'text-muted-foreground'}`}
      >
        {value.length}/{MAX}
      </p>
    </div>
  )
}

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>()
  return <DatePicker value={date} onChange={setDate} />
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function InputPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">

      {/* Header */}
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Input</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Campo de entrada de texto para formulários. Suporta todos os tipos HTML nativos, ícones decorativos,
          mensagens de validação, prefixos, sufixos e contagem de caracteres — seguindo as diretrizes de acessibilidade WCAG 2.1 AA.
        </p>
      </div>

      {/* 1 · Anatomia */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Anatomia</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Um campo de formulário completo é composto por <strong>Label</strong>, <strong>Input</strong>,
          <strong> Helper text</strong> opcional e <strong>Mensagem de erro</strong> quando inválido.
          Nunca use input sem label — mesmo que visualmente oculta, ela deve existir para leitores de tela.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-6">
            <div className="space-y-1.5">
              <Label htmlFor="anatomy-name">
                Nome completo
                <span className="text-destructive ml-1" aria-hidden="true">*</span>
              </Label>
              <Input id="anatomy-name" placeholder="Ex: João da Silva" aria-required="true" aria-describedby="anatomy-hint" />
              <p id="anatomy-hint" className="text-xs text-muted-foreground">Conforme documento de identidade.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="anatomy-email">
                Email
                <span className="text-destructive ml-1" aria-hidden="true">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="anatomy-email"
                  type="email"
                  defaultValue="email_invalido"
                  aria-invalid="true"
                  aria-describedby="anatomy-email-error"
                  className="pr-9"
                />
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive pointer-events-none" />
              </div>
              <p id="anatomy-email-error" role="alert" className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> Formato de email inválido.
              </p>
            </div>
          </div>
          <CodeBlock
            code={`{/* Label + Input + Helper text */}
<div className="space-y-1.5">
  <Label htmlFor="name">
    Nome completo
    <span className="text-destructive ml-1" aria-hidden="true">*</span>
  </Label>
  <Input
    id="name"
    placeholder="Ex: João da Silva"
    aria-required="true"
    aria-describedby="name-hint"
  />
  <p id="name-hint" className="text-xs text-muted-foreground">
    Conforme documento de identidade.
  </p>
</div>

{/* Com erro */}
<Input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error" role="alert" className="text-xs text-destructive">
  Formato de email inválido.
</p>`}
          />
        </Card>
        <UsageBox
          use={[
            'Sempre associar label via htmlFor/id',
            'Vincular helper text com aria-describedby',
            'Marcar obrigatórios com asterisco (*) visível',
            'Exibir mensagem de erro logo abaixo do campo',
          ]}
          avoid={[
            'Usar placeholder como substituto de label',
            'Labels soltas sem htmlFor associado',
            'Só mudar cor de borda para indicar erro (sem texto)',
            'Inputs sem helper text em fluxos de onboarding',
          ]}
        />
      </section>

      {/* 2 · Estados */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Estados</h2>
        <p className="text-sm text-foreground/60 mb-6">
          O Input tem 5 estados visuais: <strong>default</strong>, <strong>focus</strong> (ring automático),
          <strong> success</strong>, <strong>error</strong>, <strong>disabled</strong> e <strong>read-only</strong>.
          Estados de erro são ativados via <code className="text-primary bg-primary/10 px-1 rounded">aria-invalid=&quot;true&quot;</code>.
        </p>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <Label>Default</Label>
              <Input placeholder="Clique para focar..." />
              <p className="text-xs text-muted-foreground">Estado de repouso.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Com valor</Label>
              <Input defaultValue="luís@confraria.com" />
              <p className="text-xs text-muted-foreground">Input preenchido.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Sucesso</Label>
              <div className="relative">
                <Input defaultValue="luís@confraria.com" className="pr-9 border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/30" />
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 pointer-events-none" />
              </div>
              <p className="text-xs text-green-600">Email disponível.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Erro</Label>
              <div className="relative">
                <Input
                  aria-invalid="true"
                  defaultValue="email_invalido"
                  aria-describedby="state-error"
                  className="pr-9"
                />
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive pointer-events-none" />
              </div>
              <p id="state-error" role="alert" className="text-xs text-destructive">Formato inválido.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Desabilitado</Label>
              <Input disabled placeholder="Campo desabilitado" />
              <p className="text-xs text-muted-foreground">Não pode ser interagido.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Read-only</Label>
              <Input readOnly defaultValue="ID-20240301-001" className="cursor-default bg-muted/40" />
              <p className="text-xs text-muted-foreground">Visível mas imutável.</p>
            </div>
          </div>
          <CodeBlock
            code={`{/* Sucesso */}
<Input
  className="pr-9 border-green-500 focus-visible:ring-green-500/30"
  defaultValue="luís@confraria.com"
/>

{/* Erro — usa aria-invalid para ativar estilos */}
<Input aria-invalid="true" aria-describedby="field-error" />
<p id="field-error" role="alert" className="text-xs text-destructive">
  Formato inválido.
</p>

{/* Desabilitado */}
<Input disabled placeholder="Campo desabilitado" />

{/* Read-only */}
<Input readOnly defaultValue="ID-20240301-001" />`}
          />
        </Card>
        <UsageBox
          use={[
            'disabled para campos indisponíveis temporariamente',
            'readOnly para IDs, códigos gerados e dados não editáveis',
            'Sempre mostrar mensagem de texto junto ao erro',
            'Ícone de erro reforça mas não substitui a mensagem',
          ]}
          avoid={[
            'Desabilitar campos sem explicar o porquê',
            'Usar readOnly quando disabled seria mais claro',
            'Mudar somente a cor de borda como feedback de erro',
            'Estado success em todos os campos — use com moderação',
          ]}
        />
      </section>

      {/* 3 · Com ícones */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com ícones</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Ícones decorativos são posicionados via <code className="text-primary bg-primary/10 px-1 rounded">absolute</code> dentro
          de um wrapper relativo. Ícones de ação (ex: mostrar/ocultar senha) exigem
          <code className="text-primary bg-primary/10 px-1 rounded"> aria-label</code> acessível.
          Ajuste o padding lateral do input para não sobrepor o texto.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label>Ícone à esquerda (decorativo)</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input type="email" placeholder="seu@email.com" className="pl-9" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Telefone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input type="tel" placeholder="(11) 9 0000-0000" className="pl-9" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Senha com toggle de visibilidade</Label>
              <PasswordInput />
              <p className="text-xs text-muted-foreground">Ícone de ação — requer aria-label.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Busca com limpar</Label>
              <ClearableInput />
              <p className="text-xs text-muted-foreground">Digite algo para ver o botão &quot;×&quot;.</p>
            </div>
            <div className="space-y-1.5">
              <Label>Usuário (ambos os lados)</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input placeholder="@usuario" className="pl-9 pr-9" />
                <Hash className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          <CodeBlock
            code={`{/* Ícone decorativo à esquerda */}
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4
    text-muted-foreground pointer-events-none" />
  <Input placeholder="seu@email.com" className="pl-9" />
</div>

{/* Ícone de ação à direita (acessível) */}
function PasswordInput() {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4
        text-muted-foreground pointer-events-none" />
      <Input
        type={show ? 'text' : 'password'}
        className="pl-9 pr-9"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
        aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}`}
          />
        </Card>
        <UsageBox
          use={[
            'Ícones decorativos com pointer-events-none',
            'Ícones de ação como <button type="button">',
            'aria-label descritivo em ícones interativos',
            'pl-9/pr-9 para evitar sobreposição de texto',
          ]}
          avoid={[
            'Ícones clicáveis sem role ou aria-label',
            'Usar ícone como único indicador de campo obrigatório',
            'Ícones diferentes para o mesmo significado em contextos distintos',
            'Ícones decorativos com pointer-events ativo',
          ]}
        />
      </section>

      {/* 4 · Prefixo e sufixo */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Prefixo e sufixo</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Use prefixos e sufixos para mostrar unidade, protocolo ou domínio fixo. São puramente visuais —
          o valor do input não inclui o texto do addon. Útil para URLs, moedas, porcentagens e domínios.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label>URL do perfil</Label>
              <div className="flex rounded-md border border-input focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring overflow-hidden">
                <span className="inline-flex items-center px-3 bg-muted text-muted-foreground text-sm border-r border-input select-none">
                  https://
                </span>
                <Input placeholder="confraria.com.br/u/joao" className="border-0 shadow-none focus-visible:ring-0 rounded-none" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Slug do evento</Label>
              <div className="flex rounded-md border border-input focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring overflow-hidden">
                <Input placeholder="festival-gastronomia" className="border-0 shadow-none focus-visible:ring-0 rounded-none" />
                <span className="inline-flex items-center px-3 bg-muted text-muted-foreground text-sm border-l border-input select-none">
                  .confraria.com.br
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Preço</Label>
              <div className="flex rounded-md border border-input focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring overflow-hidden">
                <span className="inline-flex items-center px-3 bg-muted text-muted-foreground text-sm border-r border-input select-none font-medium">
                  R$
                </span>
                <Input type="number" placeholder="0,00" className="border-0 shadow-none focus-visible:ring-0 rounded-none" min="0" step="0.01" />
                <span className="inline-flex items-center px-3 bg-muted text-muted-foreground text-sm border-l border-input select-none">
                  BRL
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Desconto</Label>
              <div className="flex rounded-md border border-input focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring overflow-hidden">
                <Input type="number" placeholder="10" min="0" max="100" className="border-0 shadow-none focus-visible:ring-0 rounded-none" />
                <span className="inline-flex items-center px-3 bg-muted text-muted-foreground text-sm border-l border-input select-none">
                  %
                </span>
              </div>
            </div>
          </div>
          <CodeBlock
            code={`{/* Prefixo */}
<div className="flex rounded-md border border-input
  focus-within:ring-[3px] focus-within:ring-ring/50
  focus-within:border-ring overflow-hidden">
  <span className="inline-flex items-center px-3 bg-muted
    text-muted-foreground text-sm border-r border-input select-none">
    https://
  </span>
  <Input
    placeholder="confraria.com.br/u/joao"
    className="border-0 shadow-none focus-visible:ring-0 rounded-none"
  />
</div>

{/* Prefixo + sufixo (moeda) */}
<div className="flex rounded-md border border-input
  focus-within:ring-[3px] focus-within:ring-ring/50 overflow-hidden">
  <span className="...">R$</span>
  <Input type="number" className="border-0 shadow-none focus-visible:ring-0 rounded-none" />
  <span className="...">BRL</span>
</div>`}
          />
        </Card>
        <UsageBox
          use={[
            'Protocolo fixo de URL (https://)',
            'Unidade de medida (kg, %, km)',
            'Símbolo de moeda com código ISO',
            'Domínio fixo quando só o subpath é editável',
          ]}
          avoid={[
            'Incluir o addon no value do input',
            'Prefixo muito longo que reduz espaço de digitação',
            'Addon sem bg-muted — confunde com conteúdo editável',
            'Botões com funcionalidade dentro do addon (use trailing icon)',
          ]}
        />
      </section>

      {/* 5 · Tamanhos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Tamanhos</h2>
        <p className="text-sm text-foreground/60 mb-6">
          O Input não tem prop <code className="text-primary bg-primary/10 px-1 rounded">size</code> nativa,
          mas pode ser ajustado via <code className="text-primary bg-primary/10 px-1 rounded">className</code>.
          Use <strong>sm</strong> em filtros e tabelas, <strong>default</strong> em formulários gerais,
          <strong> lg</strong> em hero sections e campos de destaque.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide">Small · h-7</Label>
              <Input placeholder="Filtrar eventos..." className="h-7 text-xs px-2" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide">Default · h-9</Label>
              <Input placeholder="Nome do evento" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide">Large · h-11</Label>
              <Input placeholder="Buscar em todos os eventos" className="h-11 text-base px-4" />
            </div>
          </div>
          <CodeBlock
            code={`{/* Small — filtros, tabelas, toolbars */}
<Input className="h-7 text-xs px-2" placeholder="Filtrar..." />

{/* Default — formulários padrão */}
<Input placeholder="Nome do evento" />

{/* Large — hero, buscas de destaque */}
<Input className="h-11 text-base px-4" placeholder="Buscar eventos" />`}
          />
        </Card>
        <UsageBox
          use={[
            'h-7 em filtros de tabela, selects compactos',
            'h-9 (default) na maioria dos formulários',
            'h-11 em search bars de destaque ou onboarding',
            'Alinhar ao tamanho do Button no mesmo grupo',
          ]}
          avoid={[
            'Misturar tamanhos dentro do mesmo formulário',
            'Usar h-11 em formulários densos (aumenta scroll)',
            'h-7 em mobile — área de toque mínima é 44px',
            'Font-size diferente do Button adjacente',
          ]}
        />
      </section>

      {/* 6 · Validação */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Validação de formulário</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Baseado em IBM Carbon e Atlassian DS — validação inline exibida logo abaixo do campo,
          usando <code className="text-primary bg-primary/10 px-1 rounded">role=&quot;alert&quot;</code> para leitores de tela.
          Valide após submit ou onBlur, nunca durante a digitação ativa.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="val-nome">
                Nome <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <Input id="val-nome" placeholder="Campo obrigatório" aria-required="true" />
              <p className="text-xs text-muted-foreground">Este campo é obrigatório.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="val-email">
                Email <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="val-email"
                  type="email"
                  defaultValue="nao-e-um-email"
                  aria-invalid="true"
                  aria-describedby="val-email-error"
                  className="pr-9"
                />
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive pointer-events-none" />
              </div>
              <p id="val-email-error" role="alert" className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3 shrink-0" />
                Insira um endereço de email válido.
              </p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="val-cpf">CPF</Label>
              <div className="relative">
                <Input
                  id="val-cpf"
                  defaultValue="123.456.789-09"
                  className="pr-9 border-green-500 focus-visible:ring-green-500/30"
                  aria-describedby="val-cpf-hint"
                />
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 pointer-events-none" />
              </div>
              <p id="val-cpf-hint" className="text-xs text-green-600 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                CPF válido.
              </p>
            </div>
          </div>
          <CodeBlock
            code={`{/* Campo obrigatório */}
<Label htmlFor="nome">
  Nome <span className="text-destructive" aria-hidden="true">*</span>
</Label>
<Input id="nome" aria-required="true" aria-describedby="nome-hint" />
<p id="nome-hint" className="text-xs text-muted-foreground">
  Este campo é obrigatório.
</p>

{/* Erro inline com role="alert" */}
<Input
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error" role="alert" className="text-xs text-destructive">
  <AlertCircle className="h-3 w-3" />
  Insira um endereço de email válido.
</p>`}
          />
        </Card>
        <UsageBox
          use={[
            'Validar no onBlur (saiu do campo) ou no submit',
            'role="alert" para mensagens de erro (screen readers)',
            'aria-describedby ligando input à mensagem',
            'Marcar obrigatórios com * e legenda no início do form',
          ]}
          avoid={[
            'Validar a cada tecla pressionada (experiência ruim)',
            'Escrever só "Campo inválido" — diga o que está errado',
            'Limpar o campo ao detectar erro',
            'State success em campos como senha (revela dado)',
          ]}
        />
      </section>

      {/* 7 · Contagem de caracteres */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Contagem de caracteres</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão do Material Design 3 e Atlassian DS — exibe o contador abaixo à direita do campo.
          Fica vermelho ao ultrapassar o limite e ativa <code className="text-primary bg-primary/10 px-1 rounded">aria-invalid</code> para feedback auditivo.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label>Nome do evento</Label>
              <CharCountInput />
              <p className="text-xs text-muted-foreground">Máximo de 60 caracteres.</p>
            </div>
          </div>
          <CodeBlock
            code={`function CharCountInput() {
  const MAX = 60
  const [value, setValue] = useState('')
  const over = value.length > MAX

  return (
    <div className="space-y-1">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={over || undefined}
        aria-describedby="char-hint"
        maxLength={MAX + 10} // permite digitar para mostrar erro
      />
      <p
        id="char-hint"
        className={\`text-xs text-right \${over ? 'text-destructive' : 'text-muted-foreground'}\`}
      >
        {value.length}/{MAX}
      </p>
    </div>
  )
}`}
          />
        </Card>
        <UsageBox
          use={[
            'Campos onde limite de caracteres importa (títulos, bios)',
            'Contador visível o tempo todo, não só ao atingir limite',
            'Tornar o contador vermelho + aria-invalid ao ultrapassar',
            'Permitir digitar além do limite para dar feedback visual',
          ]}
          avoid={[
            'maxLength silencioso sem feedback visual',
            'Contador em todos os inputs — use com critério',
            'Bloquear digitação abruptamente sem aviso prévio',
            'Contador em campos de senha (revela comprimento)',
          ]}
        />
      </section>

      {/* 8 · Tipos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Tipos</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Use o <code className="text-primary bg-primary/10 px-1 rounded">type</code> correto — o navegador ativa teclado
          virtual adequado em mobile, autocompletar semântico e validação nativa.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            {[
              { type: 'text', label: 'text', placeholder: 'Texto livre', hint: 'Uso geral — padrão' },
              { type: 'email', label: 'email', placeholder: 'nome@email.com', hint: 'Teclado com @ em mobile' },
              { type: 'tel', label: 'tel', placeholder: '(11) 9 0000-0000', hint: 'Teclado numérico em mobile' },
              { type: 'number', label: 'number', placeholder: '42', hint: 'Aceita somente números' },
              { type: 'url', label: 'url', placeholder: 'https://exemplo.com', hint: 'Valida formato de URL' },
              { type: 'search', label: 'search', placeholder: 'Buscar...', hint: 'Pode exibir botão de limpar' },
              { type: 'password', label: 'password', placeholder: '••••••••', hint: 'Oculta o valor digitado' },
            ].map(({ type, label, placeholder, hint }) => (
              <div key={type} className="space-y-1">
                <Label className="flex items-center gap-2">
                  <code className="text-primary bg-primary/10 px-1 rounded text-xs">{label}</code>
                  <span className="text-xs text-muted-foreground">{hint}</span>
                </Label>
                <Input type={type as React.HTMLInputTypeAttribute} placeholder={placeholder} />
              </div>
            ))}
            <div className="space-y-1">
              <Label className="flex items-center gap-2">
                <code className="text-primary bg-primary/10 px-1 rounded text-xs">date (DatePicker)</code>
                <span className="text-xs text-muted-foreground">Calendário customizado</span>
              </Label>
              <DatePickerDemo />
            </div>
          </div>
          <CodeBlock
            code={`<Input type="text"     placeholder="Texto livre" />
<Input type="email"    placeholder="nome@email.com" />
<Input type="tel"      placeholder="(11) 9 0000-0000" />
<Input type="number"   placeholder="42" />
<Input type="url"      placeholder="https://exemplo.com" />
<Input type="search"   placeholder="Buscar..." />
<Input type="password" placeholder="••••••••" />

{/* Date — usar DatePicker customizado em vez de type="date" */}
<DatePicker value={date} onChange={setDate} />`}
          />
        </Card>
        <UsageBox
          use={[
            'type="email" em campos de email (autocomplete, validação)',
            'type="tel" em telefones (teclado numérico mobile)',
            'type="number" para valores numéricos com seta de incremento',
            'DatePicker customizado em vez de type="date" (cross-browser)',
          ]}
          avoid={[
            'type="text" para email ou telefone — perde semântica',
            'type="number" para CPF, CEP ou telefone (zeros iniciais)',
            'type="date" nativo — visual inconsistente entre navegadores',
            'type="file" sem customização visual (use um wrapper)',
          ]}
        />
      </section>

      {/* 9 · DatePicker */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">DatePicker</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Componente Confraria para seleção de data. Baseado em{' '}
          <code className="text-primary bg-primary/10 px-1 rounded">react-day-picker</code> e{' '}
          <code className="text-primary bg-primary/10 px-1 rounded">date-fns</code> — abre um Popover com
          calendário em vez do seletor nativo do navegador, garantindo consistência visual cross-browser.
        </p>
        <Card className="p-6">
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label>Data do evento</Label>
              <DatePickerDemo />
            </div>
            <div className="space-y-1.5">
              <Label>Data (desabilitado)</Label>
              <DatePicker placeholder="Selecione uma data" disabled />
            </div>
          </div>
          <CodeBlock
            code={`import { DatePicker } from '@confraria/ui'
import { useState } from 'react'

const [date, setDate] = useState<Date | undefined>()

{/* Padrão */}
<DatePicker value={date} onChange={setDate} />

{/* Formato personalizado */}
<DatePicker
  value={date}
  onChange={setDate}
  dateFormat="MMMM 'de' yyyy"
/>

{/* Desabilitado */}
<DatePicker disabled />`}
          />
        </Card>
      </section>

      {/* 10 · Acessibilidade */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Acessibilidade</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Seguindo WCAG 2.1 AA — os campos devem ser completamente operáveis por teclado e
          compreensíveis por leitores de tela (NVDA, VoiceOver, JAWS).
        </p>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { attr: 'htmlFor / id', desc: 'Vincula Label ao Input — obrigatório' },
              { attr: 'aria-required="true"', desc: 'Anuncia campo obrigatório ao leitor de tela' },
              { attr: 'aria-invalid="true"', desc: 'Ativa estado de erro e anuncia invalidade' },
              { attr: 'aria-describedby', desc: 'Vincula input ao helper text ou mensagem de erro' },
              { attr: 'aria-label', desc: 'Alternativa quando label visual não está visível' },
              { attr: 'role="alert"', desc: 'Na mensagem de erro — lida automaticamente ao aparecer' },
              { attr: 'autoComplete', desc: 'Sugere valores salvos: "email", "name", "tel", etc.' },
              { attr: 'inputMode', desc: '"numeric" | "email" | "tel" — teclado virtual correto' },
            ].map(({ attr, desc }) => (
              <div key={attr} className="flex gap-3 p-3 bg-muted/40 rounded-lg">
                <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs shrink-0 self-start mt-0.5">{attr}</code>
                <p className="text-sm text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>
          <CodeBlock
            code={`<div className="space-y-1.5">
  <Label htmlFor="cpf">
    CPF
    <span className="text-destructive ml-1" aria-hidden="true">*</span>
  </Label>
  <Input
    id="cpf"
    type="text"
    inputMode="numeric"
    autoComplete="off"
    aria-required="true"
    aria-invalid={hasError || undefined}
    aria-describedby="cpf-hint cpf-error"
    placeholder="000.000.000-00"
  />
  <p id="cpf-hint" className="text-xs text-muted-foreground">
    Somente números — formatação automática.
  </p>
  {hasError && (
    <p id="cpf-error" role="alert" className="text-xs text-destructive">
      CPF inválido.
    </p>
  )}
</div>`}
          />
        </Card>
      </section>

      {/* 11 · Props */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            O componente <code className="text-primary bg-primary/10 px-1 rounded">Input</code> herda todas as props
            nativas do <code className="text-primary bg-primary/10 px-1 rounded">&lt;input&gt;</code> HTML.
            Abaixo estão as mais relevantes para o DS.
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
                ['type', 'string', '"text"', 'Tipo HTML — text, email, tel, number, password, search, url, file'],
                ['placeholder', 'string', '—', 'Texto de exemplo (não substitui label)'],
                ['defaultValue', 'string', '—', 'Valor inicial não controlado'],
                ['value', 'string', '—', 'Valor controlado — use com onChange'],
                ['onChange', '(e) => void', '—', 'Callback ao alterar valor'],
                ['disabled', 'boolean', 'false', 'Desabilita o campo — sem interação'],
                ['readOnly', 'boolean', 'false', 'Campo visível mas imutável'],
                ['required', 'boolean', 'false', 'Validação HTML nativa (use aria-required também)'],
                ['maxLength', 'number', '—', 'Limite de caracteres'],
                ['autoComplete', 'string', '—', 'Sugestão de autocomplete: "email", "name", "tel"…'],
                ['inputMode', 'string', '—', '"numeric" | "email" | "tel" — teclado virtual em mobile'],
                ['aria-invalid', 'boolean | "true"', '—', 'Ativa estado de erro visual e semântico'],
                ['aria-required', '"true"', '—', 'Anuncia obrigatoriedade para leitores de tela'],
                ['aria-describedby', 'string', '—', 'ID do helper text ou mensagem de erro'],
                ['aria-label', 'string', '—', 'Label alternativa quando label visual não existe'],
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
      </section>

    </div>
  )
}
