'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EventCard } from '@/components/confraria/event-card'
import {
  Copy, Check, ArrowRight, MoreHorizontal,
  TrendingUp, Users, Star, MapPin, Clock,
  Shield, Zap, ChevronRight, ExternalLink,
  Image as ImageIcon,
} from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-card border border-border rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copy code"
        aria-label="Copiar código"
      >
        {copied
          ? <Check className="h-4 w-4 text-primary" />
          : <Copy className="h-4 w-4 text-foreground/50" />
        }
      </button>
      <pre className="text-foreground text-sm overflow-x-auto pr-8">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function UsageBox({ use, avoid }: { use: string; avoid: string }) {
  return (
    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
      <div className="rounded-lg border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40 px-4 py-3">
        <p className="font-medium text-green-800 dark:text-green-300 mb-1">✓ Use para</p>
        <p className="text-green-700 dark:text-green-400">{use}</p>
      </div>
      <div className="rounded-lg border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40 px-4 py-3">
        <p className="font-medium text-red-800 dark:text-red-300 mb-1">✗ Evite</p>
        <p className="text-red-700 dark:text-red-400">{avoid}</p>
      </div>
    </div>
  )
}

export default function CardPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">

      {/* ── Header ── */}
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Card</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Cards agrupam conteúdo relacionado em uma superfície elevada. São o bloco
          construtivo mais versátil do DS — usados em dashboards, listas, formulários,
          pricing e navegação.
        </p>
      </div>

      {/* ── 1. Anatomia ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Anatomia</h2>
        <p className="text-foreground/60 mb-6 max-w-2xl">
          Um card é composto por até 5 zonas. Nenhuma é obrigatória — use apenas o que o
          conteúdo exige.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>CardTitle</CardTitle>
              <CardDescription>CardDescription — subtítulo ou contexto.</CardDescription>
              <CardAction>
                <Button size="icon-sm" variant="ghost" aria-label="Mais opções">
                  <MoreHorizontal />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                <strong>CardContent</strong> — corpo principal do card. Recebe qualquer
                conteúdo: texto, inputs, gráficos, listas.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">Cancelar</Button>
              <Button size="sm">Confirmar</Button>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-3 text-sm">
            {[
              { name: 'CardHeader', desc: 'Zona de identificação. Contém título, descrição e ação de menu.' },
              { name: 'CardTitle', desc: 'Nome do card. Use h-semantics via asChild quando necessário.' },
              { name: 'CardDescription', desc: 'Subtítulo ou contexto complementar ao título.' },
              { name: 'CardAction', desc: 'Área direita do header para ícones de ação (menu, fechar, editar).' },
              { name: 'CardContent', desc: 'Corpo principal — recebe qualquer conteúdo.' },
              { name: 'CardFooter', desc: 'Rodapé para ações primárias e secundárias.' },
            ].map(({ name, desc }) => (
              <div key={name} className="flex gap-3 items-start">
                <code className="shrink-0 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                  {name}
                </code>
                <p className="text-foreground/60 pt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Subtítulo</CardDescription>
    <CardAction>
      <Button size="icon-sm" variant="ghost" aria-label="Opções">
        <MoreHorizontal />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* conteúdo */}
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancelar</Button>
    <Button>Confirmar</Button>
  </CardFooter>
</Card>`} />
      </section>

      {/* ── 2. Card bare (container) ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Container simples</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Apenas a superfície elevada, sem subestrutura. Ideal para agrupar conteúdo
          já organizado internamente.
        </p>
        <UsageBox
          use="Painéis de dashboard, blocos de métricas, seções de conteúdo livre."
          avoid="Conteúdo com título + ações — use CardHeader + CardFooter."
        />
        <Card className="p-6 max-w-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2.547</p>
              <p className="text-sm text-foreground/50">Usuários ativos</p>
            </div>
          </div>
        </Card>
        <CodeBlock code={`<Card className="p-6">
  <div className="flex items-center gap-4">
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
      <TrendingUp className="h-6 w-6 text-primary" />
    </div>
    <div>
      <p className="text-2xl font-bold">2.547</p>
      <p className="text-sm text-muted-foreground">Usuários ativos</p>
    </div>
  </div>
</Card>`} />
      </section>

      {/* ── 3. Card informacional ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card informacional</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Header + Content sem Footer. Apresenta dados sem exigir ação imediata.
        </p>
        <UsageBox
          use="Resumos de perfil, detalhes de item, seções de configuração read-only."
          avoid="Quando o usuário precisa agir — adicione CardFooter."
        />
        <Card className="max-w-sm mb-6">
          <CardHeader>
            <CardTitle>Resumo do evento</CardTitle>
            <CardDescription>Detalhes e localização</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 text-foreground/40" />
              <span>Av. Paulista, 1578 — São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock className="h-4 w-4 shrink-0 text-foreground/40" />
              <span>Sábado, 14 de março · 10h às 18h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Users className="h-4 w-4 shrink-0 text-foreground/40" />
              <span>342 confirmados</span>
            </div>
          </CardContent>
        </Card>
        <CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Resumo do evento</CardTitle>
    <CardDescription>Detalhes e localização</CardDescription>
  </CardHeader>
  <CardContent className="space-y-3">
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <MapPin className="h-4 w-4" />
      <span>Av. Paulista, 1578 — São Paulo, SP</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>Sábado, 14 de março · 10h às 18h</span>
    </div>
  </CardContent>
</Card>`} />
      </section>

      {/* ── 4. Card de ação ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card de ação</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Estrutura completa — Header + Content + Footer. A ação principal fica no Footer,
          separando visualmente intenção de conteúdo.
        </p>
        <UsageBox
          use="Formulários inline, confirmações, cards com CTA claro."
          avoid="Colocar botões dentro de CardContent — isso quebra a hierarquia visual."
        />
        <Card className="max-w-sm mb-6">
          <CardHeader>
            <CardTitle>Convidar membro</CardTitle>
            <CardDescription>Envie um link de acesso por e-mail.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="invite-email">E-mail</Label>
              <Input id="invite-email" type="email" placeholder="nome@exemplo.com" />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" className="flex-1">Cancelar</Button>
            <Button className="flex-1">Enviar convite</Button>
          </CardFooter>
        </Card>
        <CodeBlock code={`<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Convidar membro</CardTitle>
    <CardDescription>Envie um link de acesso por e-mail.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-1.5">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" placeholder="nome@exemplo.com" />
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" className="flex-1">Cancelar</Button>
    <Button className="flex-1">Enviar convite</Button>
  </CardFooter>
</Card>`} />
      </section>

      {/* ── 5. Card de autenticação ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card de autenticação</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Padrão estabelecido para login, cadastro e recuperação de senha. Largura fixa
          (<code className="text-xs bg-accent px-1 rounded">max-w-sm</code>), alinhado à
          esquerda seguindo o fluxo de leitura.
        </p>
        <UsageBox
          use="Login, cadastro, redefinição de senha, 2FA."
          avoid="Centralizar verticalmente na viewport — prejudica acessibilidade em telas pequenas."
        />
        <div className="flex justify-start mb-6">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Entrar na sua conta</CardTitle>
              <CardDescription>
                Digite seu e-mail abaixo para continuar.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="login-email">E-mail</Label>
                <Input id="login-email" type="email" placeholder="nome@exemplo.com" />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center">
                  <Label htmlFor="login-password">Senha</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline text-primary">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input id="login-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full" size="lg">Entrar</Button>
              <Button variant="outline" className="w-full" size="lg">
                Entrar com Google
              </Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Entrar na sua conta</CardTitle>
    <CardDescription>Digite seu e-mail abaixo para continuar.</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-4">
    <div className="grid gap-1.5">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" placeholder="nome@exemplo.com" />
    </div>
    <div className="grid gap-1.5">
      <div className="flex items-center">
        <Label htmlFor="password">Senha</Label>
        <a href="#" className="ml-auto text-sm hover:underline text-primary">
          Esqueceu a senha?
        </a>
      </div>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button className="w-full">Entrar</Button>
    <Button variant="outline" className="w-full">Entrar com Google</Button>
  </CardFooter>
</Card>`} />
      </section>

      {/* ── 6. Card selecionável ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card selecionável</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Cards clicáveis com estado de seleção. Padrão central em onboarding, escolha
          de planos, configurações de preferência e filtros visuais.
        </p>
        <UsageBox
          use="Seleção de plano, escolha de tipo de conta, preferências, filtros visuais."
          avoid="Usar sem feedback visual claro — o outline é obrigatório para acessibilidade."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { id: 'starter', icon: Zap, title: 'Starter', desc: 'Para começar rápido', price: 'Grátis' },
            { id: 'pro', icon: TrendingUp, title: 'Pro', desc: 'Para profissionais', price: 'R$ 49/mês' },
            { id: 'enterprise', icon: Shield, title: 'Enterprise', desc: 'Para grandes times', price: 'R$ 199/mês' },
          ].map(({ id, icon: Icon, title, desc, price }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className="text-left"
              aria-pressed={selected === id}
            >
              <Card
                className={`cursor-pointer transition-all ${
                  selected === id
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'hover:border-foreground/30'
                }`}
              >
                <CardHeader>
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center mb-1 ${selected === id ? 'bg-primary/10' : 'bg-accent'}`}>
                    <Icon className={`h-4 w-4 ${selected === id ? 'text-primary' : 'text-foreground/60'}`} />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">{price}</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
        <p className="text-xs text-foreground/40 mb-4 italic">Clique em um card para ver o estado de seleção.</p>
        <CodeBlock code={`const [selected, setSelected] = useState<string | null>(null)

<button onClick={() => setSelected('pro')} aria-pressed={selected === 'pro'}>
  <Card className={
    selected === 'pro'
      ? 'border-primary ring-2 ring-primary/20'
      : 'hover:border-foreground/30'
  }>
    <CardHeader>
      <CardTitle>Pro</CardTitle>
      <CardDescription>Para profissionais</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="font-semibold">R$ 49/mês</p>
    </CardContent>
  </Card>
</button>`} />
      </section>

      {/* ── 7. Card de mídia ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card de mídia</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Imagem no topo sem padding, conteúdo abaixo. Padrão ubíquo em produtos de
          conteúdo — blogs, eventos, produtos de e-commerce.
        </p>
        <UsageBox
          use="Listas de artigos, produtos, eventos, galeria de conteúdo."
          avoid="Colocar padding no Card pai — use pt-0 no CardContent ou overflow-hidden."
        />
        <div className="flex flex-wrap gap-6 mb-6">
          <Card className="w-64 overflow-hidden pt-0">
            <div className="bg-accent h-40 flex items-center justify-center">
              <ImageIcon className="h-10 w-10 text-foreground/20" />
            </div>
            <CardHeader>
              <Badge variant="secondary" className="self-start">Gastronomia</Badge>
              <CardTitle className="text-base mt-1">Festival de Verão SP</CardTitle>
              <CardDescription>14 de março · Av. Paulista</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Ver detalhes <ChevronRight />
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-64 overflow-hidden pt-0">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=512&q=80"
              alt="Evento"
              className="h-40 w-full object-cover"
            />
            <CardHeader>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                <Star className="h-3 w-3 fill-amber-400" /> 4.8 · 1.2k avaliações
              </div>
              <CardTitle className="text-base">Festival de Gastronomia</CardTitle>
              <CardDescription>São Paulo · 342 confirmados</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size="sm" className="w-full">Confirmar presença <ArrowRight /></Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`<Card className="w-64 overflow-hidden pt-0">
  <img
    src="foto.jpg"
    alt="Descrição da imagem"
    className="h-40 w-full object-cover"
  />
  <CardHeader>
    <Badge variant="secondary">Gastronomia</Badge>
    <CardTitle>Festival de Gastronomia</CardTitle>
    <CardDescription>São Paulo · 342 confirmados</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button size="sm" className="w-full">
      Confirmar presença <ArrowRight />
    </Button>
  </CardFooter>
</Card>`} />
      </section>

      {/* ── 8. Card de navegação ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Card de navegação</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Card inteiramente clicável que leva a outra rota. Comum em dashboards e
          menus de funcionalidades.
        </p>
        <UsageBox
          use="Menus de funcionalidades, dashboards de acesso rápido, categorias."
          avoid="Aninhar links ou botões dentro — o card inteiro já é interativo."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Users, label: 'Membros', desc: 'Gerencie os membros da confraria', href: '#' },
            { icon: TrendingUp, label: 'Relatórios', desc: 'Métricas e análises de desempenho', href: '#' },
            { icon: Shield, label: 'Segurança', desc: 'Permissões e controle de acesso', href: '#' },
          ].map(({ icon: Icon, label, desc }) => (
            <Card
              key={label}
              className="cursor-pointer hover:border-foreground/30 hover:shadow-md transition-all group"
              role="link"
              tabIndex={0}
            >
              <CardHeader>
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base flex items-center justify-between">
                  {label}
                  <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                </CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <CodeBlock code={`<Card
  className="cursor-pointer hover:border-foreground/30 hover:shadow-md transition-all group"
  role="link"
  tabIndex={0}
  onClick={() => router.push('/membros')}
>
  <CardHeader>
    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
      <Users className="h-5 w-5 text-primary" />
    </div>
    <CardTitle className="flex items-center justify-between">
      Membros
      <ExternalLink className="h-4 w-4 text-muted-foreground" />
    </CardTitle>
    <CardDescription>Gerencie os membros da confraria</CardDescription>
  </CardHeader>
</Card>`} />
      </section>

      {/* ── 9. Pricing grid ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Grid de pricing</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Padrão de apresentação de planos lado a lado. Destaque o plano recomendado
          com borda colorida e badge.
        </p>
        <UsageBox
          use="Páginas de pricing, comparação de planos, upgrade flows."
          avoid="Mais de 4 planos na mesma linha — quebre em grupos ou use tabs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Para começar</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">R$ 0</p>
              <p className="text-sm text-foreground/60">por mês</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" size="lg">Começar grátis</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary ring-2 ring-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pro</CardTitle>
                <Badge>Recomendado</Badge>
              </div>
              <CardDescription>Para profissionais</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">R$ 49</p>
              <p className="text-sm text-foreground/60">por mês</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Assinar Pro</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Para grandes times</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">R$ 199</p>
              <p className="text-sm text-foreground/60">por mês</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full" size="lg">Falar com vendas</Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`{/* Plano em destaque: borda colorida + badge */}
<Card className="border-primary ring-2 ring-primary/20">
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Pro</CardTitle>
      <Badge>Recomendado</Badge>
    </div>
    <CardDescription>Para profissionais</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold">R$ 49</p>
    <p className="text-sm text-muted-foreground">por mês</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Assinar Pro</Button>
  </CardFooter>
</Card>`} />
      </section>

      {/* ── 10. EventCard ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">EventCard</h2>
        <p className="text-foreground/60 mb-1 max-w-2xl">
          Componente Confraria pronto — dimensões fixas 264px, imagem de capa 4:3,
          badge de avaliação, categoria e CTA.
        </p>
        <UsageBox
          use="Listagem de eventos, carrosséis, grids de descoberta."
          avoid="Redimensionar via className de largura — use o wrapper para controle de grid."
        />
        <div className="flex flex-wrap gap-6 mb-6">
          <EventCard name="Nome do Evento" category="Categoria" />
          <EventCard
            imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=496&q=80"
            name="Festival de Gastronomia SP"
            category="Gastronomia · São Paulo"
            rating={4.7}
            reviewCount={1240}
          />
        </div>
        <CodeBlock code={`import { EventCard } from '@confraria/ui'

// Sem imagem (placeholder automático)
<EventCard
  name="Nome do Evento"
  category="Categoria"
/>

// Com imagem e dados reais
<EventCard
  imageSrc="https://exemplo.com/foto.jpg"
  name="Festival de Gastronomia SP"
  category="Gastronomia · São Paulo"
  rating={4.7}
  reviewCount={1240}
  onEventClick={() => router.push('/evento/123')}
/>`} />
      </section>

      {/* ── 11. Acessibilidade ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Acessibilidade</h2>
        <Card className="p-6">
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-2"><span className="text-primary font-bold shrink-0">→</span> Cards clicáveis devem ter <code className="text-xs bg-accent px-1 rounded">role=&quot;link&quot;</code> ou <code className="text-xs bg-accent px-1 rounded">role=&quot;button&quot;</code> + <code className="text-xs bg-accent px-1 rounded">tabIndex=0</code> e responder ao <kbd className="text-xs bg-accent px-1 rounded border">Enter</kbd>.</li>
            <li className="flex gap-2"><span className="text-primary font-bold shrink-0">→</span> Cards selecionáveis usam <code className="text-xs bg-accent px-1 rounded">aria-pressed</code> para anunciar estado a leitores de tela.</li>
            <li className="flex gap-2"><span className="text-primary font-bold shrink-0">→</span> <code className="text-xs bg-accent px-1 rounded">CardTitle</code> deve ter semântica de heading — use <code className="text-xs bg-accent px-1 rounded">asChild</code> com <code className="text-xs bg-accent px-1 rounded">h2</code>/<code className="text-xs bg-accent px-1 rounded">h3</code> quando dentro de uma região com landmark.</li>
            <li className="flex gap-2"><span className="text-primary font-bold shrink-0">→</span> Imagens em cards de mídia precisam de <code className="text-xs bg-accent px-1 rounded">alt</code> descritivo — nunca vazio a não ser que seja decorativa pura.</li>
            <li className="flex gap-2"><span className="text-primary font-bold shrink-0">→</span> O estado de foco (<code className="text-xs bg-accent px-1 rounded">focus-visible</code>) deve ser visível — o ring do tema já cuida disso, mas não remova via <code className="text-xs bg-accent px-1 rounded">outline-none</code>.</li>
          </ul>
        </Card>
      </section>

      {/* ── 12. Subcomponentes ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Subcomponentes</h2>
        <Card className="p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Componente</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Obrigatório</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Card', req: 'Sim', desc: 'Container principal — borda, sombra, border-radius e fundo.' },
                { name: 'CardHeader', req: 'Não', desc: 'Grid de 2 colunas: título+descrição à esquerda, CardAction à direita.' },
                { name: 'CardTitle', req: 'Não', desc: 'Título do card. Use asChild com h2/h3 para semântica correta em páginas.' },
                { name: 'CardDescription', req: 'Não', desc: 'Subtítulo muted — complementa o título sem substituí-lo.' },
                { name: 'CardAction', req: 'Não', desc: 'Área direita do header para botões de menu, fechar ou editar.' },
                { name: 'CardContent', req: 'Não', desc: 'Corpo principal com padding horizontal. Recebe qualquer conteúdo.' },
                { name: 'CardFooter', req: 'Não', desc: 'Rodapé para ações. Por padrão flex row — use flex-col para stack vertical.' },
              ].map(({ name, req, desc }, i, arr) => (
                <tr key={name} className={`${i < arr.length - 1 ? 'border-b border-border' : ''} hover:bg-accent/30`}>
                  <td className="py-3 px-4 font-mono text-primary">{name}</td>
                  <td className="py-3 px-4 text-foreground/50 text-xs">{req}</td>
                  <td className="py-3 px-4 text-foreground/70">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  )
}
