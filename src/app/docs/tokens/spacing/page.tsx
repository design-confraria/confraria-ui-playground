import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const spacingTokens = [
  { name: '0', token: '--space-0', rem: '0rem', px: '0px' },
  { name: '0.5', token: '--space-0-5', rem: '0.125rem', px: '2px' },
  { name: '1', token: '--space-1', rem: '0.25rem', px: '4px' },
  { name: '1.5', token: '--space-1-5', rem: '0.375rem', px: '6px' },
  { name: '2', token: '--space-2', rem: '0.5rem', px: '8px' },
  { name: '2.5', token: '--space-2-5', rem: '0.625rem', px: '10px' },
  { name: '3', token: '--space-3', rem: '0.75rem', px: '12px' },
  { name: '3.5', token: '--space-3-5', rem: '0.875rem', px: '14px' },
  { name: '4', token: '--space-4', rem: '1rem', px: '16px' },
  { name: '5', token: '--space-5', rem: '1.25rem', px: '20px' },
  { name: '6', token: '--space-6', rem: '1.5rem', px: '24px' },
  { name: '7', token: '--space-7', rem: '1.75rem', px: '28px' },
  { name: '8', token: '--space-8', rem: '2rem', px: '32px' },
  { name: '9', token: '--space-9', rem: '2.25rem', px: '36px' },
  { name: '10', token: '--space-10', rem: '2.5rem', px: '40px' },
  { name: '12', token: '--space-12', rem: '3rem', px: '48px' },
  { name: '14', token: '--space-14', rem: '3.5rem', px: '56px' },
  { name: '16', token: '--space-16', rem: '4rem', px: '64px' },
  { name: '20', token: '--space-20', rem: '5rem', px: '80px' },
  { name: '24', token: '--space-24', rem: '6rem', px: '96px' },
  { name: '32', token: '--space-32', rem: '8rem', px: '128px' },
]

const semanticGroups = [
  {
    name: 'Micro',
    range: '2px – 8px',
    tokens: ['--space-0-5', '--space-1', '--space-1-5', '--space-2'],
    color: 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
    when: 'Espaçamento interno de componentes atômicos: gap entre ícone e texto, padding interno de badge, distância entre checkbox e label.',
    never: 'Separar seções ou grupos maiores de conteúdo.',
  },
  {
    name: 'Componente',
    range: '12px – 24px',
    tokens: ['--space-3', '--space-4', '--space-5', '--space-6'],
    color: 'bg-primary/15 text-primary',
    when: 'Padding interno de cards, gap entre campos de formulário, espaçamento entre elementos relacionados dentro de um mesmo bloco.',
    never: 'Separar blocos distintos ou seções de página.',
  },
  {
    name: 'Layout',
    range: '32px – 64px',
    tokens: ['--space-8', '--space-10', '--space-12', '--space-16'],
    color: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    when: 'Gap entre cards em uma grade, margem entre seções de página, padding de container principal e colunas de layout.',
    never: 'Espaçamentos internos de componentes — cria cards "vazios".',
  },
  {
    name: 'Seção',
    range: '80px – 128px',
    tokens: ['--space-20', '--space-24', '--space-32'],
    color: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    when: 'Margem entre blocos de página (hero, features, rodapé), padding de página inteira e áreas com carga editorial alta.',
    never: 'Dentro de componentes ou entre elementos inline.',
  },
]

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

export default function SpacingPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Espaçamento</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Escala de espaçamento baseada em múltiplos de <strong className="text-foreground">4px</strong> — o menor denominador comum de grids digitais.
          Padrão IBM Carbon, Material Design 3 e GitHub Primer: dividida em 4 grupos semânticos (micro, componente, layout, seção)
          para que o contexto determine o passo certo, não a preferência visual.
        </p>
      </div>

      {/* Grupos Semânticos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Grupos Semânticos</h2>
        <p className="text-sm text-foreground/60 mb-8">
          Padrão IBM Carbon — antes de escolher um valor, identifique o <em>contexto</em>, não o número.
          Nunca use espaçamento de Seção dentro de um componente, nem espaçamento Micro entre blocos de conteúdo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {semanticGroups.map(({ name, range, tokens, color, when, never }) => (
            <Card key={name} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-sm font-semibold px-2.5 py-0.5 rounded-md ${color}`}>{name}</span>
                <span className="text-xs font-mono text-foreground/40">{range}</span>
              </div>
              <div className="flex gap-1.5 mb-3 flex-wrap">
                {tokens.map((t) => (
                  <code key={t} className="text-xs bg-muted/60 border border-border px-1.5 py-0.5 rounded text-foreground/60">{t}</code>
                ))}
              </div>
              <p className="text-sm text-foreground/70 mb-2"><strong className="text-foreground text-xs">USE:</strong> {when}</p>
              <p className="text-sm text-foreground/50"><strong className="text-foreground/60 text-xs">NUNCA:</strong> {never}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Escala Visual */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Escala de Espaçamento</h2>
        <p className="text-sm text-foreground/60 mb-8">
          22 passos de 0 a 128px — todos múltiplos de 4px.
          A barra colorida é proporcional ao valor real, permitindo comparar visualmente o salto entre passos consecutivos.
        </p>
        <Card className="p-6">
          <div className="space-y-3">
            {spacingTokens.map((space) => (
              <div
                key={space.name}
                className="flex items-center gap-4"
              >
                <code className="text-sm font-mono text-foreground/60 w-28 shrink-0">
                  {space.token}
                </code>
                <div
                  className="h-4 rounded bg-primary"
                  style={{ width: space.rem }}
                />
                <span className="text-sm text-foreground/50 w-20 shrink-0 text-right">
                  {space.rem}
                </span>
                <span className="text-sm text-foreground/50 w-16 shrink-0 text-right">
                  {space.px}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Tabela de Referência */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Tabela de Referência</h2>
        <p className="text-sm text-foreground/60 mb-8">
          Referência completa dos tokens com valores em rem e px.
          Use rem em CSS para respeitar preferências de acessibilidade (“zoom de fonte” do usuário); px apenas em contextos que exigem valores fixos (bordas, sombras).
        </p>
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Token CSS</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Valor (rem)</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Valor (px)</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Visualização</th>
                </tr>
              </thead>
              <tbody>
                {spacingTokens.map((space) => (
                  <tr key={space.name} className="border-b border-border/60 hover:bg-card/50">
                    <td className="py-3 px-4 font-semibold text-foreground">
                      {space.name}
                    </td>
                    <td className="py-3 px-4">
                      <code className="bg-accent/50 text-foreground px-2 py-1 rounded text-xs font-mono">
                        {space.token}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-foreground/70 font-mono">
                      {space.rem}
                    </td>
                    <td className="py-3 px-4 text-foreground/70 font-mono">
                      {space.px}
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="h-3 rounded bg-primary"
                        style={{ width: space.rem, minWidth: space.name === '0' ? '2px' : undefined }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Exemplos de Uso */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Exemplos de Uso</h2>
        <p className="text-sm text-foreground/60 mb-8">
          Padrão Gestalt Proximity (Atlassian DS) — itens <em>relacionados</em> ficam mais próximos entre si
          do que de itens <em>não relacionados</em>. Isso cria agrupamento visual sem bordas ou cores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-1">Padding interno de Cards</h3>
            <p className="text-xs text-foreground/50 mb-4">Grupo Componente — --space-3 a --space-8</p>
            <div className="space-y-4">
              {['--space-3', '--space-4', '--space-6', '--space-8'].map((token) => {
                const t = spacingTokens.find((s) => s.token === token)!
                return (
                  <div key={token}>
                    <code className="text-xs font-mono text-foreground/50 block mb-1">
                      padding: var({token}) → {t.px}
                    </code>
                    <div
                      className="border border-border rounded bg-card/50"
                      style={{ padding: t.rem }}
                    >
                      <div className="bg-primary/15 text-primary text-sm rounded p-2 text-center">
                        Conteúdo
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-1">Gap entre elementos</h3>
            <p className="text-xs text-foreground/50 mb-4">Grupo Micro a Componente — --space-2 a --space-8</p>
            <div className="space-y-4">
              {['--space-2', '--space-4', '--space-6', '--space-8'].map((token) => {
                const t = spacingTokens.find((s) => s.token === token)!
                return (
                  <div key={token}>
                    <code className="text-xs font-mono text-foreground/50 block mb-1">
                      gap: var({token}) → {t.px}
                    </code>
                    <div
                      className="flex"
                      style={{ gap: t.rem }}
                    >
                      <div className="bg-primary/15 text-primary text-xs rounded p-2">A</div>
                      <div className="bg-primary/15 text-primary text-xs rounded p-2">B</div>
                      <div className="bg-primary/15 text-primary text-xs rounded p-2">C</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </section>

      {/* Ritmo Vertical */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Ritmo Vertical</h2>
        <p className="text-sm text-foreground/60 mb-8">
          Padrão IBM Carbon e GitHub Primer — o espaçamento entre elementos <em>relacionados</em>
          deve ser <strong className="text-foreground">menor</strong> que entre elementos <em>independentes</em>.
          Isso sinaliza agrupamento sem bordas extras.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-5">✓ Correto — hierarquia clara</p>
            <div className="space-y-0">
              <div className="pb-1">
                <p className="text-sm font-semibold text-foreground">Label do campo</p>
                <p className="text-xs text-foreground/50 mt-0.5">Título e descrição — gap 4px (micro)</p>
              </div>
              <div className="pt-1 pb-4">
                <div className="border border-border rounded px-3 py-2 text-sm text-foreground/60">Valor do campo</div>
              </div>
              <div className="pt-4 pb-1 border-t border-border">
                <p className="text-sm font-semibold text-foreground">Segundo campo</p>
                <p className="text-xs text-foreground/50">Separado do anterior — gap 16px (componente)</p>
              </div>
              <div className="pt-1">
                <div className="border border-border rounded px-3 py-2 text-sm text-foreground/60">Segundo valor</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-5">✗ Problema — espaçamentos iguais</p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Label do campo</p>
              <div className="border border-border rounded px-3 py-2 text-sm text-foreground/60">Valor do campo</div>
              <p className="text-sm font-semibold text-foreground">Segundo campo</p>
              <div className="border border-border rounded px-3 py-2 text-sm text-foreground/60">Segundo valor</div>
            </div>
            <p className="text-xs text-foreground/40 mt-4">
              Gap igual entre label→input e entre campos diferentes cria ambiguidade: qual label pertence a qual input?
            </p>
          </Card>
        </div>

        <UsageBox
          use={[
            'Gap 4–8px entre label e input (elementos do mesmo campo)',
            'Gap 16–24px entre campos diferentes em um formulário',
            'Gap 32–48px entre seções de formulário (dados pessoais vs. endereço)',
            'Mesmo espaçamento em todos os itens de uma lista repetida',
          ]}
          avoid={[
            'Mesmo gap entre elementos relacionados e não relacionados',
            'Valores arbitrários fora da escala de tokens (ex: 13px, 22px)',
            'Aumentar espaçamento em vez de adicionar um separator ou divider',
            'Espaçamento de Seção (80px+) dentro de componentes compactos',
          ]}
        />
      </section>

      {/* Como Usar */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Como Usar</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Em CSS</h3>
              <pre className="bg-muted/40 border border-border text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`.card {
  padding: var(--space-6);       /* 24px — grupo componente */
  margin-bottom: var(--space-8); /* 32px — grupo layout */
  gap: var(--space-3);           /* 12px — gap interno */
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Em Tailwind CSS</h3>
              <pre className="bg-muted/40 border border-border text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{/* Tokens mapeiam diretamente para a escala Tailwind */}
<div className="p-6 mb-8 gap-3">
  {/* p-6 = --space-6 = 24px, mb-8 = --space-8 = 32px */}
  Conteúdo com spacing tokens
</div>

{/* Via CSS variable para valores fora do padrão Tailwind */}
<div style={{ padding: 'var(--space-4)' }}>
  Padding via token CSS
</div>`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Boas Práticas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Boas Práticas</h2>
        <UsageBox
          use={[
            'Tokens da escala — nunca valores arbitrários como 13px ou 22px',
            'Escala semântica: Micro dentro de componentes, Layout entre blocos',
            'rem em CSS — respeita preferências de acessibilidade do usuário',
            'Espaçamento menor entre elementos relacionados (Gestalt Proximity)',
            'Consistir o mesmo token em repetições — listas, tabelas, grades',
            'Aumentar espaçamento gradualmente conforme o contexto ficar mais amplo',
          ]}
          avoid={[
            'Espaçamento de Seção (80px+) dentro de componentes compactos',
            'Valores negativos para overlap — use position/translate instead',
            'Gap igual entre elementos relacionados e não relacionados',
            'Misturar px e rem manualmente — use tokens como base',
            'Usar margin para criar gap em flex/grid — prefira a prop gap',
            'Espaçamento único em layouts responsive — use clamp() ou tokens adaptáveis',
          ]}
        />
        <Card className="p-5 mt-4">
          <p className="text-sm font-semibold text-foreground mb-3">Regras de ouro (padrão IBM Carbon)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { rule: 'Base 4px', desc: 'Todos os valores são múltiplos de 4. Nunca use valores que não estejam na escala.' },
              { rule: 'Contexto', desc: 'Identifique o grupo semântico antes do valor: Micro, Componente, Layout ou Seção.' },
              { rule: 'Proximity', desc: 'Menos espaço = mais relacionado. A distância comunica estrutura sem bordas.' },
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
