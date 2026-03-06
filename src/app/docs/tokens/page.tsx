import Link from 'next/link'
import { ArrowRight, Palette, Type, Ruler } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const tokenSections = [
  {
    title: 'Cores',
    description: 'Paleta principal, cores semanticas e aplicacao por contexto.',
    href: '/docs/tokens/colors',
    icon: Palette,
  },
  {
    title: 'Tipografia',
    description: 'Escala tipografica, pesos e uso da fonte DM Sans no sistema.',
    href: '/docs/tokens/typography',
    icon: Type,
  },
  {
    title: 'Espacamento',
    description: 'Sistema de espacamento para manter ritmo visual consistente.',
    href: '/docs/tokens/spacing',
    icon: Ruler,
  },
]

export default function TokensIndexPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Design Tokens</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Visao Geral de Tokens</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Explore os fundamentos visuais do Confraria Design System: cores, tipografia e
          espacamento.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tokenSections.map((section) => {
          const Icon = section.icon
          return (
            <Link key={section.href} href={section.href}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">{section.title}</h2>
                <p className="text-foreground/70 mb-6">{section.description}</p>
                <div className="inline-flex items-center text-primary font-medium">
                  Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
