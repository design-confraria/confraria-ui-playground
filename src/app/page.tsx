import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, Palette, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ui/theme-toggle'
import WhiteConfraLogo from '@/images/White_Confra_Logotipo.svg'
import BlackConfraLogo from '@/images/Black_Confra_Logotipo.svg'

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
    href: '/docs/tokens',
  },
  {
    title: 'Ícones',
    description: 'Biblioteca completa de ícones Lucide',
    href: '/docs/icons',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src={WhiteConfraLogo}
              alt="Confraria"
              className="block w-[128px] h-auto dark:hidden"
              priority
            />
            <Image
              src={BlackConfraLogo}
              alt="Confraria"
              className="hidden w-[128px] h-auto dark:block"
              priority
            />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-6">
            <Badge variant="outline" className="text-sm">
              Design System v1.0
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Confraria Design System
          </h1>
          <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto">
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
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Características Principais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6">
                  <div className="mb-4 p-3 bg-primary/15 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Documentação
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{section.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-foreground/60 text-sm">
            Confraria Design System • Construído com React, TypeScript, Tailwind CSS, shadcn/ui
            e Radix UI
          </p>
        </div>
      </footer>
    </main>
  )
}
