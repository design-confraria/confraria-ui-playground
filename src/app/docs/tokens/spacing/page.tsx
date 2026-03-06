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

export default function SpacingPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Espaçamento</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Escala de espaçamento consistente para margens, paddings e gaps.
          Baseada em múltiplos de 4px para manter ritmo visual harmônico.
        </p>
      </div>

      {/* Escala Visual */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Escala de Espaçamento</h2>
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
        <h2 className="text-3xl font-bold mb-8 text-foreground">Tabela de Referência</h2>
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
        <h2 className="text-3xl font-bold mb-8 text-foreground">Exemplos de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Padding interno de Cards</h3>
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
            <h3 className="font-semibold text-foreground mb-4">Gap entre elementos</h3>
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

      {/* Como Usar */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Como Usar</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Em CSS</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`.card {
  padding: var(--space-4);      /* 16px */
  margin-bottom: var(--space-6); /* 24px */
  gap: var(--space-3);           /* 12px */
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Em Tailwind CSS</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{/* Os tokens de espaçamento mapeiam para a escala Tailwind */}
<div className="p-4 mb-6 gap-3">
  Conteúdo com spacing tokens
</div>

{/* Usando variáveis CSS diretamente */}
<div style={{ padding: 'var(--space-4)' }}>
  Padding customizado
</div>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Boas Práticas</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/60">
                <li>Use múltiplos de 4px para manter consistência visual</li>
                <li>Prefira tokens ao invés de valores arbitrários</li>
                <li>Use espaçamentos menores (2-4) para elementos internos</li>
                <li>Use espaçamentos maiores (6-12) para seções e blocos</li>
                <li>Use espaçamentos grandes (16-32) para layout e áreas principais</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
