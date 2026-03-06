'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const typographyStyles = [
  {
    name: 'H1',
    element: 'h1',
    description: 'Título principal, usado para headings da página',
    tokens: {
      fontSize: 'var(--font-size-5xl) / 48px',
      lineHeight: 'var(--line-height-tight) / 1.2',
      fontWeight: 'var(--font-weight-bold) / 700',
    },
    example: 'Confraria Design System',
  },
  {
    name: 'H2',
    element: 'h2',
    description: 'Títulos de seção principal',
    tokens: {
      fontSize: 'var(--font-size-4xl) / 36px',
      lineHeight: 'var(--line-height-tight) / 1.2',
      fontWeight: 'var(--font-weight-bold) / 700',
    },
    example: 'Componentes & Tokens',
  },
  {
    name: 'H3',
    element: 'h3',
    description: 'Subtítulos de seção',
    tokens: {
      fontSize: 'var(--font-size-3xl) / 30px',
      lineHeight: 'var(--line-height-tight) / 1.2',
      fontWeight: 'var(--font-weight-semibold) / 600',
    },
    example: 'Tipografia & Espaçamento',
  },
  {
    name: 'H4',
    element: 'h4',
    description: 'Títulos menores para subsections',
    tokens: {
      fontSize: 'var(--font-size-2xl) / 24px',
      lineHeight: 'var(--line-height-normal) / 1.5',
      fontWeight: 'var(--font-weight-semibold) / 600',
    },
    example: 'Como Usar',
  },
  {
    name: 'H5',
    element: 'h5',
    description: 'Títulos secundários',
    tokens: {
      fontSize: 'var(--font-size-xl) / 20px',
      lineHeight: 'var(--line-height-normal) / 1.5',
      fontWeight: 'var(--font-weight-semibold) / 600',
    },
    example: 'Descrição Geral',
  },
  {
    name: 'H6',
    element: 'h6',
    description: 'Títulos terciários',
    tokens: {
      fontSize: 'var(--font-size-lg) / 18px',
      lineHeight: 'var(--line-height-normal) / 1.5',
      fontWeight: 'var(--font-weight-medium) / 500',
    },
    example: 'Informação Adicional',
  },
  {
    name: 'Parágrafo',
    element: 'p',
    description: 'Texto corporal padrão',
    tokens: {
      fontSize: 'var(--font-size-base) / 16px',
      lineHeight: 'var(--line-height-relaxed) / 1.75',
      fontWeight: 'var(--font-weight-normal) / 400',
    },
    example: 'Esta é uma tipografia de parágrafo. Use para conteúdo principal e descrições detalhadas.',
  },
  {
    name: 'Small',
    element: 'small',
    description: 'Texto pequeno, labels e captions',
    tokens: {
      fontSize: 'var(--font-size-sm) / 14px',
      lineHeight: 'var(--line-height-normal) / 1.5',
      fontWeight: 'var(--font-weight-normal) / 400',
    },
    example: 'Texto pequeno para labels e informações auxiliares',
  },
]

const fontFamilies = [
  {
    name: 'DM Sans',
    variable: 'var(--font-dm-sans)',
    usage: 'Tipografia padrão do sistema, UI components',
    example: 'The quick brown fox jumps over the lazy dog',
  },
  {
    name: 'Geist Mono',
    variable: 'var(--font-geist-mono)',
    usage: 'Código, snippets, monoespaciada',
    example: 'const message = "Hello, Confraria!"',
    mono: true,
  },
]

export default function TypographyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-5xl font-bold mb-3 text-foreground">Tipografia</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Sistema de tipografia baseado em DM Sans Font Family. Escalas harmônicas
          com tokens reutilizáveis para consistência visual.
        </p>
      </div>

      {/* Famílias de Fonte */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Famílias de Fonte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fontFamilies.map((font) => (
            <Card key={font.name} className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {font.name}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-foreground/60 block mb-1">Variable</label>
                  <code className="bg-accent/50 text-foreground px-3 py-2 rounded block text-sm font-mono">
                    {font.variable}
                  </code>
                </div>
                <div>
                  <label className="text-sm text-foreground/60 block mb-1">Uso</label>
                  <p className="text-foreground/70">{font.usage}</p>
                </div>
                <div>
                  <label className="text-sm text-foreground/60 block mb-1">Exemplo</label>
                  <div
                    className={`${font.mono ? 'font-mono' : ''} text-foreground p-3 bg-card/50 rounded border border-border`}
                  >
                    {font.example}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Estilos de Tipografia */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Estilos de Tipografia</h2>
        <div className="space-y-8">
          {typographyStyles.map((style) => (
            <Card key={style.name} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Exemplo */}
                <div className="md:col-span-1">
                  {style.element === 'p' && <p>{style.example}</p>}
                  {style.element === 'small' && <small>{style.example}</small>}
                  {style.element === 'h1' && <h1>{style.example}</h1>}
                  {style.element === 'h2' && <h2>{style.example}</h2>}
                  {style.element === 'h3' && <h3>{style.example}</h3>}
                  {style.element === 'h4' && <h4>{style.example}</h4>}
                  {style.element === 'h5' && <h5>{style.example}</h5>}
                  {style.element === 'h6' && <h6>{style.example}</h6>}
                </div>

                {/* Informações */}
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {style.name}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground">
                      &lt;{style.element}&gt;
                    </h3>
                    <p className="text-foreground/60 text-sm mt-2">{style.description}</p>
                  </div>

                  <div className="space-y-2 bg-card/50 p-4 rounded border border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground/60 block mb-1">Font Size</span>
                        <code className="text-foreground font-semibold">
                          {style.tokens.fontSize.split(' / ')[1]}
                        </code>
                        <span className="text-xs text-foreground/50 block">
                          {style.tokens.fontSize.split(' / ')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-foreground/60 block mb-1">Line Height</span>
                        <code className="text-foreground font-semibold">
                          {style.tokens.lineHeight.split(' / ')[1]}
                        </code>
                        <span className="text-xs text-foreground/50 block">
                          {style.tokens.lineHeight.split(' / ')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-foreground/60 block mb-1">Font Weight</span>
                        <code className="text-foreground font-semibold">
                          {style.tokens.fontWeight.split(' / ')[1]}
                        </code>
                        <span className="text-xs text-foreground/50 block">
                          {style.tokens.fontWeight.split(' / ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Como Usar */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Como Usar</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Em HTML/JSX
            </h3>
            <pre className="bg-card text-foreground p-4 rounded overflow-x-auto text-sm">
              <code>{`<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Parágrafo de conteúdo principal</p>
<small>Texto pequeno</small>

{/* Variações com Tailwind */}
<h1 className="font-bold text-3xl">Heading com classe</h1>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              CSS Variables
            </h3>
            <pre className="bg-card text-foreground p-4 rounded overflow-x-auto text-sm">
              <code>{`.custom-heading {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  font-family: var(--font-dm-sans);
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Boas Práticas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Boas Práticas</h2>
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">✓ Use os estilos nativos</h3>
            <p className="text-foreground/60 text-sm">
              Prefira &lt;h1&gt;, &lt;h2&gt;, etc. aos invés de divs. Melhor semântica e SEO.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">✓ Respeite a hierarquia</h3>
            <p className="text-foreground/60 text-sm">
              Use h1 para o título principal, h2 para seções, h3 para subsections, etc.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">✓ Contraste adequado</h3>
            <p className="text-foreground/60 text-sm">
              Todos os estilos passam em testes WCAG AA. Mantenha contraste ao sobrescrever cores.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">✓ Line-height para legibilidade</h3>
            <p className="text-foreground/60 text-sm">
              Não modifique line-height padrão. Foram calibrados para máxima legibilidade.
            </p>
          </div>
        </Card>
      </section>
    </div>
  )
}
