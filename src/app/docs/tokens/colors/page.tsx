import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const colors = [
  {
    name: 'Confraria',
    palette: [
      { shade: '50', hex: '#F9FBEA' },
      { shade: '100', hex: '#F0F5D2' },
      { shade: '200', hex: '#E0EDA9' },
      { shade: '300', hex: '#C9DF77' },
      { shade: '400', hex: '#B1CE4D' },
      { shade: '500', hex: '#9FC132', primary: true },
      { shade: '600', hex: '#728F21' },
      { shade: '700', hex: '#576D1E' },
      { shade: '800', hex: '#47571D' },
      { shade: '900', hex: '#3C4B1C' },
    ],
  },
  {
    name: 'Slate',
    palette: [
      { shade: '50', hex: '#f8fafc' },
      { shade: '100', hex: '#f1f5f9' },
      { shade: '200', hex: '#e2e8f0' },
      { shade: '300', hex: '#cbd5e1' },
      { shade: '400', hex: '#94a3b8' },
      { shade: '500', hex: '#64748b' },
      { shade: '600', hex: '#475569' },
      { shade: '700', hex: '#334155' },
      { shade: '800', hex: '#1e293b' },
      { shade: '900', hex: '#0f172a' },
    ],
  },
  {
    name: 'Blue',
    palette: [
      { shade: '50', hex: '#eff6ff' },
      { shade: '100', hex: '#dbeafe' },
      { shade: '200', hex: '#bfdbfe' },
      { shade: '300', hex: '#93c5fd' },
      { shade: '400', hex: '#60a5fa' },
      { shade: '500', hex: '#3b82f6' },
      { shade: '600', hex: '#2563eb' },
      { shade: '700', hex: '#1d4ed8' },
      { shade: '800', hex: '#1e40af' },
      { shade: '900', hex: '#1e3a8a' },
    ],
  },
  {
    name: 'Green',
    palette: [
      { shade: '50', hex: '#f0fdf4' },
      { shade: '100', hex: '#dcfce7' },
      { shade: '200', hex: '#bbf7d0' },
      { shade: '300', hex: '#86efac' },
      { shade: '400', hex: '#4ade80' },
      { shade: '500', hex: '#22c55e' },
      { shade: '600', hex: '#16a34a' },
      { shade: '700', hex: '#15803d' },
      { shade: '800', hex: '#166534' },
      { shade: '900', hex: '#145231' },
    ],
  },
  {
    name: 'Red',
    palette: [
      { shade: '50', hex: '#fef2f2' },
      { shade: '100', hex: '#fee2e2' },
      { shade: '200', hex: '#fecaca' },
      { shade: '300', hex: '#fca5a5' },
      { shade: '400', hex: '#f87171' },
      { shade: '500', hex: '#ef4444' },
      { shade: '600', hex: '#dc2626' },
      { shade: '700', hex: '#b91c1c' },
      { shade: '800', hex: '#991b1b' },
      { shade: '900', hex: '#7f1d1d' },
    ],
  },
  {
    name: 'Amber',
    palette: [
      { shade: '50', hex: '#fffbeb' },
      { shade: '100', hex: '#fef3c7' },
      { shade: '200', hex: '#fde68a' },
      { shade: '300', hex: '#fcd34d' },
      { shade: '400', hex: '#fbbf24' },
      { shade: '500', hex: '#f59e0b' },
      { shade: '600', hex: '#d97706' },
      { shade: '700', hex: '#b45309' },
      { shade: '800', hex: '#92400e' },
      { shade: '900', hex: '#78350f' },
    ],
  },
  {
    name: 'Purple',
    palette: [
      { shade: '50', hex: '#faf5ff' },
      { shade: '100', hex: '#f3e8ff' },
      { shade: '200', hex: '#e9d5ff' },
      { shade: '300', hex: '#d8b4fe' },
      { shade: '400', hex: '#c084fc' },
      { shade: '500', hex: '#a855f7' },
      { shade: '600', hex: '#9333ea' },
      { shade: '700', hex: '#7e22ce' },
      { shade: '800', hex: '#6b21a8' },
      { shade: '900', hex: '#581c87' },
    ],
  },
]

export default function ColorsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Cores</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Paleta de cores do Confraria Design System. Baseada em Tailwind CSS com extensões
          customizadas.
        </p>
      </div>

      {/* Cores */}
      <div className="space-y-12">
        {colors.map((colorGroup) => (
          <div key={colorGroup.name}>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {colorGroup.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {colorGroup.palette.map((color) => (
                <Card key={color.shade} className="overflow-hidden">
                  <div
                    className="h-24 w-full relative"
                    style={{ backgroundColor: color.hex }}
                  >
                    {color.primary && (
                      <Badge className="absolute top-2 right-2 bg-white text-foreground">
                        Primary
                      </Badge>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground">
                      {color.shade}
                    </p>
                    <p className="text-xs text-foreground/60 font-mono">
                      {color.hex}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Uso */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Como Usar</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Em Tailwind CSS</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<div className="bg-blue-500 text-white">
  Heading
</div>

<div className="border border-slate-300">
  Card
</div>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Em CSS/CSS-in-JS</h3>
              <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`.button {
  background-color: var(--color-blue-500);
  color: var(--color-slate-50);
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </div>

      {/* Acessibilidade */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Acessibilidade</h2>
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Contraste</h3>
            <p className="text-foreground/60 mb-4">
              Todas as cores foram selecionadas para passar nos testes de contraste WCAG AA.
              Recomendamos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/60">
              <li>Text claro (50-100): use com backgrounds escuros (700-900)</li>
              <li>Text escuro (800-900): use com backgrounds claros (50-100)</li>
              <li>Text padrão: use tons médios (400-600) com backgrounds padrão</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
