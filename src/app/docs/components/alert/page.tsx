'use client'

import { Alert } from '@/components/confraria/alert'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
    <div className="bg-card rounded-lg p-4 relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/50" />
        )}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function AlertPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-12">
        <Badge className="mb-4">Componentes Confraria</Badge>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Alert</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Componente de alerta para exibir mensagens de sucesso, erro, aviso e informação
          com ícones automáticos.
        </p>
      </div>

      {/* Variantes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Variantes</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Padrão</h3>
            <Alert variant="default">
              Esta é uma mensagem padrão de alerta.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Sucesso</h3>
            <Alert variant="success">
              Operação realizada com sucesso!
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Aviso</h3>
            <Alert variant="warning">
              Atenção! Verifique as alterações antes de continuar.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Erro</h3>
            <Alert variant="error">
              Houve um erro ao processar sua solicitação.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Informações</h3>
            <Alert variant="info">
              Informação importante para você.
            </Alert>
          </Card>
        </div>
      </div>

      {/* Com Título */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Com Título</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <Alert variant="success" title="Sucesso!" dismissible>
              Seu arquivo foi salvo com sucesso.
            </Alert>
          </Card>

          <Card className="p-6">
            <Alert variant="error" title="Erro ao salvar" dismissible>
              Verifique sua conexão e tente novamente.
            </Alert>
          </Card>

          <Card className="p-6">
            <Alert variant="warning" title="Aviso Importante" dismissible>
              As alterações serão permanentes. Você tem certeza?
            </Alert>
          </Card>
        </div>
      </div>

      {/* Dismissible */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Descartável</h2>
        <Card className="p-6">
          <p className="text-foreground/60 mb-4">
            Adicione o prop <code className="bg-accent/50 px-2 py-1 rounded">dismissible</code> para
            permitir que o usuário feche o alerta.
          </p>
          <Alert variant="info" dismissible title="Dica">
            Clique no X para fechar este alerta.
          </Alert>
          <CodeBlock
            code={`<Alert variant="info" dismissible title="Dica">
  Clique no X para fechar este alerta.
</Alert>`}
          />
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold">Padrão</th>
                <th className="text-left py-3 px-4 font-semibold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">variant</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">&quot;default&quot;</td>
                <td className="py-3 px-4">
                  A variante: default, success, warning, error, info
                </td>
              </tr>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">title</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Título opcional do alerta</td>
              </tr>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">dismissible</td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Permite fechar o alerta</td>
              </tr>
              <tr className="border-b hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">onDismiss</td>
                <td className="py-3 px-4">() =&gt; void</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">Callback quando alerta é descartado</td>
              </tr>
              <tr className="hover:bg-card/50">
                <td className="py-3 px-4 font-mono text-primary">icon</td>
                <td className="py-3 px-4">ReactNode</td>
                <td className="py-3 px-4">Auto</td>
                <td className="py-3 px-4">Ícone customizado</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
