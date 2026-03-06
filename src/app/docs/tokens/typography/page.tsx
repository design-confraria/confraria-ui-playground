'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const typographyStyles = [
  {
    name: 'H1',
    element: 'h1',
    description: 'Exatamente um por página (regra HTML semântica). Use em títulos de páginas, dashboards e modais de destaque. Nunca em cards, banners ou listas.',
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
    description: 'Títulos de seções de primeiro nível — visíveis no índice de navegação. Divida a página em grandes blocos temáticos. Múltiplos H2 por página são esperados.',
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
    description: 'Subsections dentro de H2. Padrão para títulos de cards, painéis e grupos de conteúdo. Mais comum que H1 e H2 na maioria das interfaces.',
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
    description: 'Grupos dentro de seções. Use em tabelas, formulários agrupados, listas com categorias e painéis colapsáveis.',
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
    description: 'Use com parcimônia — indica complexidade estrutural. Prefira H3 + espaçamento generoso antes de descer para H5.',
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
    description: 'Raramente necessário em UI. Prefira <strong> dentro de parágrafo antes de H6. Reservado para documentação técnica com 6+ níveis de profundidade.',
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
    description: 'Corpo de texto padrão. Ideal até ~75 caracteres por linha (padrão WCAG legibilidade). Use line-height: relaxed (1.75) — nunca comprima para 1.2 em textos longos.',
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
    description: 'Labels, captions e metadados auxiliares. Nunca use como corpo principal de texto — abaixo de 14px a legibilidade em corpo longo cai abaixo do mínimo WCAG AA.',
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
          Sistema baseado em DM Sans com escala harmônica de 9 passos.
          Tokens reutilizáveis para consistência visual — padrão IBM Carbon Type Scale, com pesos de fonte alinhados ao Material Design 3.
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

      {/* Escala Visual */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Escala Visual</h2>
        <p className="text-sm text-foreground/60 mb-8">
          9 passos de 12px a 48px — escala harmônica padrão IBM Carbon.
          Nunca salte mais de 2 degraus consecutivos entre elementos relacionados;
          use espaçamento para criar ritmo entre passos adjacentes.
        </p>
        <Card className="p-6">
          <div className="space-y-1">
            {[
              { size: '48px', label: '5xl', tailwind: 'text-5xl' },
              { size: '36px', label: '4xl', tailwind: 'text-4xl' },
              { size: '30px', label: '3xl', tailwind: 'text-3xl' },
              { size: '24px', label: '2xl', tailwind: 'text-2xl' },
              { size: '20px', label: 'xl',  tailwind: 'text-xl'  },
              { size: '18px', label: 'lg',  tailwind: 'text-lg'  },
              { size: '16px', label: 'base',tailwind: 'text-base'},
              { size: '14px', label: 'sm',  tailwind: 'text-sm'  },
              { size: '12px', label: 'xs',  tailwind: 'text-xs'  },
            ].map(({ size, label, tailwind }) => (
              <div key={label} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                <span className="w-12 shrink-0 text-xs font-mono text-foreground/40 text-right">{size}</span>
                <code className="w-20 shrink-0 text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">{label}</code>
                <span className={`${tailwind} text-foreground leading-none truncate`}>Confraria Design System</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Pesos de Fonte */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Pesos de Fonte</h2>
        <p className="text-sm text-foreground/60 mb-8">
          DM Sans oferece 5 pesos. Regra Material Design 3: corpo sempre em 400 ou 500;
          display e headings em 600 ou 700. Nunca use mais de 2 pesos em um mesmo componente.
        </p>
        <Card className="p-6">
          <div className="space-y-1">
            {[
              { value: '300', name: 'Light',    tw: 'font-light',    token: '--font-weight-light',    when: 'Numerais decorativos em hero sections. Nunca em corpo de texto.' },
              { value: '400', name: 'Normal',   tw: 'font-normal',   token: '--font-weight-normal',   when: 'Corpo de texto padrão, descrições, parágrafos longos.' },
              { value: '500', name: 'Medium',   tw: 'font-medium',   token: '--font-weight-medium',   when: 'Labels, links e metadados destacados dentro de blocos de parágrafo.' },
              { value: '600', name: 'Semibold', tw: 'font-semibold', token: '--font-weight-semibold', when: 'H3–H6, títulos de cards, nomes de seção e labels de botão.' },
              { value: '700', name: 'Bold',     tw: 'font-bold',     token: '--font-weight-bold',     when: 'H1–H2, valores em stat cards, destaques editoriais.' },
            ].map(({ value, name, tw, token, when }) => (
              <div key={value} className="flex items-start gap-6 py-4 border-b border-border last:border-0">
                <span className="w-10 shrink-0 text-xs font-mono text-foreground/40 mt-1.5">{value}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-2xl text-foreground ${tw} leading-tight mb-0.5 truncate`}>
                    {name} — Confraria Design
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">{token}</code>
                    <span className="text-xs text-foreground/50">{when}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
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
                    <p className="text-foreground/60 text-sm mt-2 leading-relaxed">{style.description}</p>
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

      {/* Line Height */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Line Height</h2>
        <p className="text-sm text-foreground/60 mb-8">
          O espaço entre linhas afeta diretamente a legibilidade. Regra WCAG 1.4.12:
          line-height mínimo de 1.5× para corpo de texto. Use <code className="text-primary bg-primary/10 px-1 rounded">tight</code> só em displays grandes.
        </p>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { token: 'tight',   value: '1.2', tw: 'leading-tight',   when: 'H1–H3 em tamanhos acima de 24px. Nunca em corpo de texto.', sample: 'Título de\npágina' },
              { token: 'normal',  value: '1.5', tw: 'leading-normal',  when: 'H4–H6 e labels de UI. Mínimo WCAG para texto de suporte.', sample: 'Título de\nsubseção' },
              { token: 'relaxed', value: '1.75',tw: 'leading-relaxed', when: 'Parágrafo e corpo. Máxima legibilidade em textos longos.', sample: 'Texto de\nparágrafo' },
              { token: 'loose',   value: '2.0', tw: 'leading-loose',   when: 'Listas de items espaçados, formulários com campo por linha.', sample: 'Item de\nlista' },
            ].map(({ token, value, tw, when, sample }) => (
              <div key={token} className="bg-muted/40 border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">--line-height-{token}</code>
                  <span className="text-xs font-mono text-foreground/40">{value}</span>
                </div>
                <p className={`text-base text-foreground whitespace-pre-line mb-3 ${tw}`}>{sample}</p>
                <p className="text-xs text-foreground/50">{when}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Hierarquia na Prática */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Hierarquia na Prática</h2>
        <p className="text-sm text-foreground/60 mb-8">
          Padrão IBM Carbon "Type pairing" — como heading, body e caption se combinam em uma composição real.
          O contraste de peso e tamanho cria ritmo visual sem depender de cor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wide mb-6">✓ Composição correta</p>
            <h3 className="text-foreground mb-1">Resumo do Evento</h3>
            <p className="text-xs text-foreground/50 mb-4 font-medium uppercase tracking-wider">Sábado, 15 de Março · São Paulo</p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              A Confraria reúne motociclistas apaixonados por longas estradas, boa companhia e
              o prazer de explorar novos destinos juntos.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">LC</div>
              <div>
                <p className="text-sm font-semibold text-foreground">Luis Carneiro</p>
                <p className="text-xs text-foreground/50">Organizador</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-6">✗ Antipadrões</p>
            <div className="space-y-4">
              <div className="p-3 bg-muted/40 rounded-lg">
                <p className="text-xs text-foreground/40 mb-1">Pesos iguais — sem hierarquia</p>
                <div className="flex gap-3 items-baseline">
                  <span className="text-base font-normal text-foreground">Título</span>
                  <span className="text-sm font-normal text-foreground/70">Descrição do evento</span>
                </div>
              </div>
              <div className="p-3 bg-muted/40 rounded-lg">
                <p className="text-xs text-foreground/40 mb-1">Muitos tamanhos sem relação</p>
                <div className="flex gap-2 items-baseline flex-wrap">
                  <span className="text-2xl font-bold text-foreground">Grande</span>
                  <span className="text-xl text-foreground">Médio</span>
                  <span className="text-lg text-foreground/70">Normal</span>
                  <span className="text-base text-foreground/50">Pequeno</span>
                </div>
              </div>
              <div className="p-3 bg-muted/40 rounded-lg">
                <p className="text-xs text-foreground/40 mb-1">Corpo com line-height: tight</p>
                <p className="text-sm text-foreground leading-tight">
                  Texto de parágrafo longocomplexo dificulta leitura quando o espaço entre linhas é mínimo.
                </p>
              </div>
            </div>
          </Card>
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
            <pre className="bg-muted/40 border border-border text-foreground p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Parágrafo de conteúdo principal</p>
<small>Texto pequeno</small>

{/* Variações com Tailwind */}
<p className="text-sm font-medium">Label de campo</p>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              CSS Variables
            </h3>
            <pre className="bg-muted/40 border border-border text-foreground p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`.custom-heading {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);  /* só >24px */
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed); /* 1.75 para legibilidade */
  font-family: var(--font-dm-sans);
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Boas Práticas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Boas Práticas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-5">
            <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-3">✓ Use</p>
            <ul className="space-y-2">
              {[
                'Elementos semânticos <h1>–<h6> e <p> — melhor SEO e a11y que divs estilizados',
                'Um único H1 por página — regra HTML5 semântica',
                'line-height: relaxed (1.75) em qualquer corpo de texto corrido',
                'No máximo 2 pesos de fonte diferentes em um mesmo componente',
                'Manter o token de tamanho na escala — nunca valores arbitrários',
                'Testar legibilidade com contraste mínimo 4.5:1 (WCAG AA)',
              ].map((t) => <li key={t} className="text-sm text-green-800 dark:text-green-300">• {t}</li>)}
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-5">
            <p className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide mb-3">✗ Evite</p>
            <ul className="space-y-2">
              {[
                'Saltar níveis de heading (H1 → H4) — quebra leitores de tela',
                'line-height: tight em parágrafos — mínimo WCAG é 1.5×',
                'font-weight: light em textos abaixo de 18px — contraste insuficiente',
                'Mais de 3 tamanhos de fonte diferentes em uma mesma seção',
                'Sobrescrever font-size com px arbitrários fora da escala de tokens',
                'Usar <small> como corpo principal — reservado a captions e metadata',
              ].map((t) => <li key={t} className="text-sm text-red-800 dark:text-red-300">• {t}</li>)}
            </ul>
          </div>
        </div>
        <Card className="p-5">
          <p className="text-sm font-semibold text-foreground mb-3">Regras de ouro (padrão IBM Carbon)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { rule: 'Escala', desc: 'Nunca salte mais de 2 degraus na escala entre elementos relacionados.' },
              { rule: 'Peso',   desc: 'Body em 400–500; display em 600–700. Um contraste de 2 degraus é suficiente.' },
              { rule: 'Linha',  desc: 'tight só acima de 24px. relaxed em todo texto de leitura contínua.' },
            ].map(({ rule, desc }) => (
              <div key={rule} className="bg-muted/40 border border-border rounded-lg p-3">
                <p className="text-xs font-semibold text-primary mb-1">{rule}</p>
                <p className="text-xs text-foreground/60">{desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
