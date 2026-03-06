'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Avatar } from '@/components/confraria/avatar'
import { Copy, Check, Bike, Motorbike } from 'lucide-react'
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

export default function AvatarPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Avatar</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Identidade visual de um usuário, organização ou entidade. Suporta imagem com fallback automático para iniciais, variantes circle/square e quatro tamanhos padronizados.
        </p>
      </div>

      {/* Tamanhos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Tamanhos</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Escolha pelo contexto, não pela preferência estética — padrão Material Design 3 e GitHub Primer.
          <strong className="text-foreground"> sm</strong> para listas densas,
          <strong className="text-foreground"> md</strong> como padrão universal,
          <strong className="text-foreground"> lg</strong> para cards de perfil,
          <strong className="text-foreground"> xl</strong> exclusivamente em cabeçalhos de página.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap items-end gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Maria Santos" size="sm" fallback="MS" />
              <p className="text-xs text-foreground/60">sm · 32px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="João Silva" size="md" fallback="JS" />
              <p className="text-xs text-foreground/60">md · 40px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Carlos Lima" size="lg" fallback="CL" />
              <p className="text-xs text-foreground/60">lg · 48px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Ana Costa" size="xl" fallback="AC" />
              <p className="text-xs text-foreground/60">xl · 64px</p>
            </div>
          </div>
          <CodeBlock
            code={`<Avatar alt="Maria Santos" size="sm" fallback="MS" /> {/* listas densas */}
<Avatar alt="João Silva"  size="md" fallback="JS" />  {/* padrão universal */}
<Avatar alt="Carlos Lima" size="lg" fallback="CL" /> {/* cards de perfil */}
<Avatar alt="Ana Costa"   size="xl" fallback="AC" />  {/* cabeçalhos de página */}`}
          />
          <UsageBox
            use={[
              'sm em linhas de tabela, comentários e menções inline',
              'md como tamanho implícito — omita a prop quando for padrão',
              'lg em cards de usuário e painéis de detalhes laterais',
              'xl exclusivamente em cabeçalhos de perfil ou páginas de conta',
            ]}
            avoid={[
              'Misturar tamanhos diferentes em um mesmo grupo ou lista',
              'xl dentro de componentes compactos como cards ou tabelas',
              'sm onde a identidade do usuário precisa ser reconhecida',
              'Redimensionar via className — prefira sempre as props size',
            ]}
          />
        </Card>
      </div>

      {/* Com Imagem */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com Imagem</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Passe <code className="text-primary bg-primary/10 px-1 rounded">src</code> para exibir uma foto.
          Se a imagem falhar, o componente reverte automaticamente para iniciais —
          padrão GitHub Primer e Atlassian DS de graceful degradation. Sem <code className="text-primary bg-primary/10 px-1 rounded">fallback</code>, usa <code className="text-primary bg-primary/10 px-1 rounded">alt[0]</code>.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap items-end gap-8 mb-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar
                alt="Ana Lima"
                src="https://i.pravatar.cc/150?u=anadesign"
                size="lg"
                fallback="AL"
              />
              <p className="text-xs text-foreground/60">Imagem carregada</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                alt="Carlos Dias"
                src="https://broken-url.invalid/avatar.jpg"
                size="lg"
                fallback="CD"
              />
              <p className="text-xs text-foreground/60">Fallback automático</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Beatriz Rocha" size="lg" />
              <p className="text-xs text-foreground/60">Sem src (alt[0])</p>
            </div>
          </div>
          <CodeBlock
            code={`{/* Com imagem */}
<Avatar alt="Ana Lima" src="https://..." size="lg" fallback="AL" />

{/* Sem src — usa fallback */}
<Avatar alt="Carlos Dias" fallback="CD" />

{/* Sem fallback — usa alt[0] automaticamente */}
<Avatar alt="Beatriz Rocha" />`}
          />
        </Card>
      </div>

      {/* Com Ícones de Moto */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com Ícones de Moto</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão Confraria para avatares de entidades sem identidade fotográfica — veículos, categorias e emblemas.
          Use o gradiente de marca{' '}(<code className="text-primary bg-primary/10 px-1 rounded">from-confraria-300 to-confraria-600</code>)
          para consistência visual com o sistema.
        </p>
        <Card className="p-6">
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
                <Bike className="h-5 w-5" />
              </div>
              <p className="text-xs text-foreground/60">Bike SM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
                <Bike className="h-6 w-6" />
              </div>
              <p className="text-xs text-foreground/60">Bike MD</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
                <Motorbike className="h-8 w-8" />
              </div>
              <p className="text-xs text-foreground/60">Motorbike LG</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-md bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
                <Motorbike className="h-8 w-8" />
              </div>
              <p className="text-xs text-foreground/60">Motorbike Square</p>
            </div>
          </div>
          <CodeBlock
            code={`import { Bike, Motorbike } from 'lucide-react'

{/* Avatar com ícone de moto */}
<div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
  <Bike className="h-6 w-6" />
</div>

<div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-confraria-300 to-confraria-600 text-white">
  <Motorbike className="h-8 w-8" />
</div>`}
          />
        </Card>
      </div>

      {/* Variantes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Variantes</h2>
        <p className="text-sm text-foreground/60 mb-6">
          A forma é semântica, não decorativa — padrão GitHub Primer e Atlassian DS.
          <strong className="text-foreground"> circle</strong> para pessoas;
          <strong className="text-foreground"> square</strong> para organizações, times e bots.
          Nunca misture formas em um mesmo contexto.
        </p>
        <Card className="p-6">
          <div className="flex gap-12 mb-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="João Silva" variant="circle" fallback="JS" size="lg" />
              <p className="text-xs text-foreground/60 font-medium">circle</p>
              <p className="text-xs text-foreground/40">Pessoas</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar alt="Confraria Team" variant="square" fallback="CT" size="lg" />
              <p className="text-xs text-foreground/60 font-medium">square</p>
              <p className="text-xs text-foreground/40">Times / Orgs</p>
            </div>
          </div>
          <CodeBlock
            code={`{/* Pessoas — sempre circle (padrão) */}
<Avatar alt="João Silva" variant="circle" fallback="JS" />

{/* Organizações, times, bots — square */}
<Avatar alt="Confraria Team" variant="square" fallback="CT" />`}
          />
          <UsageBox
            use={[
              'circle para perfis de usuário, comentários e menções',
              'square para times, organizações, contas de serviço e bots',
              'circle como padrão — pode omitir a prop variant',
              'Manter a mesma forma em todos os avatares de um mesmo contexto',
            ]}
            avoid={[
              'circle para organizações — rompe convenção universal',
              'square para fotos de perfil pessoal',
              'Mudar a forma por preferência estética — a forma é semântica',
              'Fallbacks genéricos ("A", "B") — use as iniciais reais do nome',
            ]}
          />
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            Herda todas as props nativas do{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">&lt;div&gt;</code> — incluindo{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">className</code>,{' '}
            <code className="text-primary bg-primary/10 px-1 rounded">onClick</code> e outros handlers.
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
                ['alt', 'string', '—', 'Obrigatório — texto alternativo para a11y e base do fallback automático'],
                ['src', 'string', '—', 'URL da imagem. Se falhar no carregamento, exibe o fallback automaticamente'],
                ['fallback', 'string', 'alt[0]', 'Texto exibido quando src falha ou está ausente. Padrão: primeira letra do alt'],
                ['size', '"sm" | "md" | "lg" | "xl"', '"md"', 'Tamanho: sm=32px, md=40px, lg=48px, xl=64px'],
                ['variant', '"circle" | "square"', '"circle"', 'circle para pessoas; square para times, orgs e bots'],
                ['className', 'string', '—', 'Classes Tailwind adicionais — evite sobrescrever dimensões de size'],
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
