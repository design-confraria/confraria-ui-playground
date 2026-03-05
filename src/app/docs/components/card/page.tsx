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
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-slate-950 rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
      <pre className="text-slate-100 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function CardPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Base</Badge>
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Card</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Componente de card para agrupar conteúdo relacionado com bordas, sombras e padding consistentes.
        </p>
      </div>

      {/* Card Básico */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Card Básico</h2>
        <Card className="p-6 mb-6">
          <p className="text-slate-700">
            Este é um card simples com padding. Pode ser usado para agrupar qualquer conteúdo.
          </p>
        </Card>
        <CodeBlock
          code={`<Card className="p-6">
  <p>Conteúdo do card</p>
</Card>`}
        />
      </div>

      {/* Login Card */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Login Card</h2>
        <div className="flex justify-center mb-6">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="login-password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="login-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full">Login</Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock
          code={`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login to your account</CardTitle>
    <CardDescription>
      Enter your email below to login to your account
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-6">
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" />
    </div>
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor="password">Password</Label>
        <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
          Forgot your password?
        </a>
      </div>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button className="w-full">Login</Button>
    <Button variant="outline" className="w-full">Login with Google</Button>
  </CardFooter>
</Card>`}
        />
      </div>

      {/* Card com Header */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Card com Header</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Título do Card</CardTitle>
            <CardDescription>Descrição breve do conteúdo do card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              Conteúdo principal do card. Use CardContent para o corpo do card.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Cancelar</Button>
            <Button size="sm" className="ml-2">Salvar</Button>
          </CardFooter>
        </Card>
        <CodeBlock
          code={`<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição breve.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Cancelar</Button>
    <Button size="sm">Salvar</Button>
  </CardFooter>
</Card>`}
        />
      </div>

      {/* Grid de Cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Grid de Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Plano Free</CardTitle>
              <CardDescription>Para começar</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">R$ 0</p>
              <p className="text-sm text-slate-500">por mês</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Selecionar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Plano Pro</CardTitle>
              <CardDescription>Para profissionais</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">R$ 49</p>
              <p className="text-sm text-slate-500">por mês</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Selecionar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Plano Enterprise</CardTitle>
              <CardDescription>Para grandes times</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">R$ 199</p>
              <p className="text-sm text-slate-500">por mês</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Contato</Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Plano Free</CardTitle>
      <CardDescription>Para começar</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">R$ 0</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">Selecionar</Button>
    </CardFooter>
  </Card>
</div>`}
        />
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Subcomponentes</h2>
        <Card className="p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Componente</th>
                <th className="text-left py-3 px-4 font-semibold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">Card</td>
                <td className="py-3 px-4">Container principal com borda e sombra</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">CardHeader</td>
                <td className="py-3 px-4">Cabeçalho do card com título e descrição</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">CardTitle</td>
                <td className="py-3 px-4">Título do card</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">CardDescription</td>
                <td className="py-3 px-4">Descrição/subtítulo do card</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">CardContent</td>
                <td className="py-3 px-4">Corpo do card para conteúdo principal</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-blue-600">CardFooter</td>
                <td className="py-3 px-4">Rodapé do card, ideal para ações</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
