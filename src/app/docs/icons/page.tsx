'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Home,
  Settings,
  Search,
  Bell,
  Mail,
  User,
  Heart,
  Star,
  Share2,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lock,
  Eye,
  EyeOff,
  Menu,
  Zap,
  Shield,
  Package,
  Code,
  GitBranch,
} from 'lucide-react'

const iconCategories = [
  {
    name: 'Navegação',
    icons: [
      { name: 'Home', icon: Home },
      { name: 'ChevronDown', icon: ChevronDown },
      { name: 'ChevronUp', icon: ChevronUp },
      { name: 'ChevronLeft', icon: ChevronLeft },
      { name: 'ChevronRight', icon: ChevronRight },
      { name: 'ArrowDown', icon: ArrowDown },
      { name: 'ArrowUp', icon: ArrowUp },
      { name: 'ArrowLeft', icon: ArrowLeft },
      { name: 'ArrowRight', icon: ArrowRight },
      { name: 'Menu', icon: Menu },
    ],
  },
  {
    name: 'Ações Comuns',
    icons: [
      { name: 'Search', icon: Search },
      { name: 'Settings', icon: Settings },
      { name: 'Edit', icon: Edit },
      { name: 'Copy', icon: Copy },
      { name: 'Download', icon: Download },
      { name: 'Upload', icon: Upload },
      { name: 'Trash2', icon: Trash2 },
      { name: 'Check', icon: Check },
      { name: 'X', icon: X },
      { name: 'Share2', icon: Share2 },
    ],
  },
  {
    name: 'Status & Feedback',
    icons: [
      { name: 'AlertCircle', icon: AlertCircle },
      { name: 'CheckCircle2', icon: CheckCircle2 },
      { name: 'AlertTriangle', icon: AlertTriangle },
      { name: 'Info', icon: Info },
      { name: 'Bell', icon: Bell },
      { name: 'Heart', icon: Heart },
      { name: 'Star', icon: Star },
      { name: 'Lock', icon: Lock },
      { name: 'Eye', icon: Eye },
      { name: 'EyeOff', icon: EyeOff },
    ],
  },
  {
    name: 'Interface',
    icons: [
      { name: 'User', icon: User },
      { name: 'Mail', icon: Mail },
      { name: 'Package', icon: Package },
      { name: 'Zap', icon: Zap },
      { name: 'Shield', icon: Shield },
      { name: 'Code', icon: Code },
      { name: 'GitBranch', icon: GitBranch },
    ],
  },
]

const sizeExamples = [
  { size: 16, label: 'xs' },
  { size: 20, label: 'sm' },
  { size: 24, label: 'md' },
  { size: 32, label: 'lg' },
  { size: 48, label: 'xl' },
]

export default function IconsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Recursos</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Ícones Lucide</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Biblioteca completa de ícones SVG de alta qualidade. Mais de 1000 ícones disponíveis.
        </p>
      </div>

      {/* Tamanhos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Tamanhos</h2>
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-8">
            {sizeExamples.map(({ size, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Home size={size} className="text-foreground/60" />
                <p className="text-xs text-foreground/60">
                  {label} ({size}px)
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-accent/50 rounded-lg">
            <pre className="text-sm text-foreground/70 overflow-x-auto">
              <code>{`import { Home } from 'lucide-react'

<Home size={16} />
<Home size={20} />
<Home size={24} />
<Home size={32} />
<Home size={48} />`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Cores */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Cores</h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <Search size={24} className="text-foreground/60" />
              <p className="text-xs text-foreground/60">Padrão</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Search size={24} className="text-primary" />
              <p className="text-xs text-foreground/60">Azul</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Search size={24} className="text-green-600" />
              <p className="text-xs text-foreground/60">Verde</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Search size={24} className="text-red-600" />
              <p className="text-xs text-foreground/60">Vermelho</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Search size={24} className="text-amber-600" />
              <p className="text-xs text-foreground/60">Âmbar</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-accent/50 rounded-lg">
            <pre className="text-sm text-foreground/70 overflow-x-auto">
              <code>{`<Search className="text-primary" size={24} />
<Search className="text-green-600" size={24} />
<Search className="text-red-600" size={24} />`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Galeria de Ícones */}
      <div className="space-y-12">
        {iconCategories.map((category) => (
          <div key={category.name}>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {category.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {category.icons.map((item) => {
                const Icon = item.icon
                return (
                  <Card
                    key={item.name}
                    className="p-4 flex flex-col items-center gap-2 hover:bg-card/50 transition-colors cursor-pointer"
                    title={`import { ${item.name} } from 'lucide-react'`}
                  >
                    <Icon size={24} className="text-foreground/60" />
                    <p className="text-xs text-center text-foreground/60 font-mono">
                      {item.name}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Como Usar */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Como Usar</h2>
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Instalação</h3>
            <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm mb-4">
              <code>{'npm install lucide-react'}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Importação</h3>
            <pre className="bg-card text-foreground p-4 rounded-lg overflow-x-auto text-sm mb-4">
              <code>{`import { Home, Settings, Search } from 'lucide-react'

export function MyComponent() {
  return (
    <div>
      <Home size={24} />
      <Settings className="text-primary" />
      <Search strokeWidth={1.5} />
    </div>
  )
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Props Comuns</h3>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <code className="bg-accent/50 px-2 py-1 rounded">size</code> - Tamanho do ícone
                (padrão: 24)
              </li>
              <li>
                <code className="bg-accent/50 px-2 py-1 rounded">color</code> - Cor do ícone
              </li>
              <li>
                <code className="bg-accent/50 px-2 py-1 rounded">strokeWidth</code> - Largura do
                traço (padrão: 2)
              </li>
              <li>
                <code className="bg-accent/50 px-2 py-1 rounded">className</code> - Classes Tailwind
                CSS
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Mais Informações */}
      <div className="mt-16">
        <Card className="p-6 bg-primary/15 border-primary/30">
          <p className="text-foreground/70">
            Para uma lista completa de ícones, visite{' '}
            <a
              href="https://lucide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              lucide.dev
            </a>
            . Descubra todos os ícones disponíveis e explore as possibilidades de customização.
          </p>
        </Card>
      </div>
    </div>
  )
}
