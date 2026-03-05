import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, Palette, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Palette,
    title: 'Design Tokens',
    description: 'Sistema de cores, tipografia e espaçamento consistente',
  },
  {
    icon: Zap,
    title: 'Componentes Rápidos',
    description: 'Componentes construídos com Radix UI e shadcn',
  },
  {
    icon: Shield,
    title: 'Acessibilidade',
    description: 'Totalmente acessível com WCAG 2.1 AA compliance',
  },
]

const sections = [
  {
    title: 'Componentes Base',
    description: 'Componentes fundamentais para construir interfaces',
    href: '/docs/components/buttons',
  },
  {
    title: 'Componentes Confraria',
    description: 'Componentes customizados específicos do Confraria',
    href: '/docs/components/alert',
  },
  {
    title: 'Design Tokens',
    description: 'Cores, tipografia e espaçamento padronizados',
    href: '/docs/tokens/colors',
  },
  {
    title: 'Ícones',
    description: 'Biblioteca completa de ícones Lucide',
    href: '/docs/icons',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-6">
            <Badge variant="outline" className="text-sm">
              Design System v1.0
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Confraria Design System
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Uma biblioteca completa de componentes React construída com shadcn/ui, Radix UI
            e Lucide icons. Pronta para produção com suporte total a acessibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/components/buttons">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar Componentes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs/tokens">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver Design Tokens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Características Principais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">
            Documentação
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{section.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-600 text-sm">
            Confraria Design System • Construído com React, TypeScript, Tailwind CSS, shadcn/ui
            e Radix UI
          </p>
        </div>
      </footer>
    </main>
  )
}
