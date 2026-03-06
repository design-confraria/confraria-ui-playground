'use client'

import { Alert } from '@/components/confraria/alert'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Zap, RefreshCcw, ArrowRight, ShieldAlert, Rocket } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-muted/40 border border-border rounded-lg p-4 relative mt-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 hover:bg-accent rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4 text-foreground/50" />
        )}
      </button>
      <pre className="text-foreground text-sm overflow-x-auto pr-8">
        <code>{code}</code>
      </pre>
    </div>
  )
}

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
        <h2 className="text-2xl font-bold mb-2 text-foreground">Variantes</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Cada variante carrega uma intenção semântica. Escolha pela mensagem que precisa transmitir,
          não pela estética — baseado em IBM Carbon, Atlassian DS e Material Design 3.
        </p>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-0.5 text-foreground">Padrão</h3>
            <p className="text-xs text-muted-foreground mb-4">Informação neutra sem urgência. Use para dicas e contexto adicional sem carga semântica.</p>
            <Alert variant="default">
              Esta é uma mensagem padrão de alerta.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-0.5 text-foreground">Informação</h3>
            <p className="text-xs text-muted-foreground mb-4">Dado informativo que o usuário deve notar, mas que não requer ação imediata.</p>
            <Alert variant="info">
              Informação importante para você.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-0.5 text-foreground">Sucesso</h3>
            <p className="text-xs text-muted-foreground mb-4">Confirmação de que uma ação foi concluída com êxito. Mostre brevemente — pode ser descartável.</p>
            <Alert variant="success">
              Operação realizada com sucesso!
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-0.5 text-foreground">Aviso</h3>
            <p className="text-xs text-muted-foreground mb-4">Situação que requer atenção mas não impede o avanço. Use para prazos, dados incompletos ou ações irreversíveis.</p>
            <Alert variant="warning">
              Atenção! Verifique as alterações antes de continuar.
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-0.5 text-foreground">Erro</h3>
            <p className="text-xs text-muted-foreground mb-4">Falha que impede o sistema de avançar. Sempre explique a causa e ofereça um caminho de recuperação.</p>
            <Alert variant="error">
              Houve um erro ao processar sua solicitação.
            </Alert>
          </Card>
        </div>
        <CodeBlock
          code={`<Alert variant="default">Mensagem neutra.</Alert>
<Alert variant="info">Informação relevante.</Alert>
<Alert variant="success">Operação realizada com sucesso!</Alert>
<Alert variant="warning">Verifique antes de continuar.</Alert>
<Alert variant="error">Erro ao processar sua solicitação.</Alert>`}
        />
        <UsageBox
          use={[
            'success após salvar, enviar ou confirmar pagamento',
            'warning antes de ações irreversíveis ou prazos',
            'error com causa e caminho de recuperação claros',
            'info para novidades, tutoriais e contexto adicional',
          ]}
          avoid={[
            'Usar error para aviso — erro real bloqueia o fluxo',
            'Empilhar múltiplos alertas do mesmo tipo',
            'Alertas sem mensagem acionável (especialmente error)',
            'success permanente na tela — descarte após 3-5 s ou user dismiss',
          ]}
        />
      </div>

      {/* Com Título */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com Título</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Use <code className="text-primary bg-primary/10 px-1 rounded">title</code> quando o alerta precisa de um cabeçalho escaneável.
          O título deve ser conciso (2–4 palavras) e a mensagem deve expandir o contexto sem repetir.
          Padrão IBM Carbon e Atlassian DS.
        </p>
        <div className="space-y-4">
          <Card className="p-6">
            <Alert variant="success" title="Arquivo salvo">
              Seu arquivo foi salvo com sucesso.
            </Alert>
          </Card>

          <Card className="p-6">
            <Alert variant="error" title="Erro ao salvar">
              Verifique sua conexão e tente novamente.
            </Alert>
          </Card>

          <Card className="p-6">
            <Alert variant="warning" title="Ação irreversível">
              As alterações serão permanentes. Você tem certeza?
            </Alert>
          </Card>

          <Card className="p-6">
            <Alert variant="info" title="Novidade">
              Uma nova versão do aplicativo está disponível.
            </Alert>
          </Card>
        </div>
        <CodeBlock
          code={`<Alert variant="success" title="Arquivo salvo">
  Seu arquivo foi salvo com sucesso.
</Alert>

<Alert variant="error" title="Erro ao salvar">
  Verifique sua conexão e tente novamente.
</Alert>

<Alert variant="warning" title="Ação irreversível">
  As alterações serão permanentes. Você tem certeza?
</Alert>`}
        />
      </div>

      {/* Descartável */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Descartável</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Prop <code className="text-primary bg-primary/10 px-1 rounded">dismissible</code> adiciona um botão ×
          e chama <code className="text-primary bg-primary/10 px-1 rounded">onDismiss</code> ao fechar.
          Use para alertas informativos e de sucesso — nunca para erros críticos que bloqueiam o fluxo.
        </p>
        <Card className="p-6">
          <div className="space-y-3">
            <Alert variant="success" dismissible title="Perfil atualizado">
              Suas alterações foram salvas.
            </Alert>
            <Alert variant="info" dismissible title="Dica">
              Clique no X para fechar este alerta.
            </Alert>
            <Alert variant="warning" dismissible>
              Sua sessão expira em 10 minutos.
            </Alert>
          </div>
          <CodeBlock
            code={`<Alert variant="success" dismissible title="Perfil atualizado">
  Suas alterações foram salvas.
</Alert>

{/* Com callback */}
<Alert
  variant="info"
  dismissible
  onDismiss={() => console.log('closed')}
>
  Clique no X para fechar este alerta.
</Alert>`}
          />
        </Card>
        <UsageBox
          use={[
            'success e info — o usuário confirma que leu',
            'warning transitório (sessão expirando, quota próxima)',
            'onDismiss para registrar analytics ou persistir preferência',
            'Banners de página que não precisam retornar',
          ]}
          avoid={[
            'dismissible em error que bloqueia o formulário',
            'dismissible em warning de segurança crítica',
            'Ocultar permanentemente sem salvar preferência do usuário',
            'Remover sem animação — abrupto demais',
          ]}
        />
      </div>

      {/* Com ação */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Com ação</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Padrão IBM Carbon e Atlassian DS — inclua um link ou botão dentro do <code className="text-primary bg-primary/10 px-1 rounded">children</code> do alerta
          quando houver um caminho claro de resolução. A ação deve ser específica, nunca genérica como "clique aqui".
        </p>
        <Card className="p-6">
          <div className="space-y-3">
            <Alert variant="error" title="Pagamento recusado">
              Seu cartão foi recusado.{' '}
              <a href="#" className="font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1">
                Atualizar forma de pagamento <ArrowRight className="h-3 w-3" />
              </a>
            </Alert>
            <Alert variant="warning" title="Sessão expirando">
              Você será desconectado em 5 minutos.{' '}
              <a href="#" className="font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1">
                Renovar sessão <RefreshCcw className="h-3 w-3" />
              </a>
            </Alert>
            <Alert variant="info" title="Nova versão disponível">
              A versão 2.4.0 está pronta.{' '}
              <a href="#" className="font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1">
                Ver novidades <ArrowRight className="h-3 w-3" />
              </a>
            </Alert>
          </div>
          <CodeBlock
            code={`<Alert variant="error" title="Pagamento recusado">
  Seu cartão foi recusado.{' '}
  <a href="/billing" className="font-semibold underline underline-offset-2">
    Atualizar forma de pagamento
  </a>
</Alert>`}
          />
        </Card>
        <UsageBox
          use={[
            'Ação diretamente relacionada à resolução do problema',
            'Link inline dentro do children — texto descritivo do destino',
            'Verbo específico: "Atualizar", "Renovar", "Ver" — nunca "clique aqui"',
            'No máximo uma ação por alerta',
          ]}
          avoid={[
            'Dois ou mais links/botões no mesmo alerta',
            'Ação que desvia do fluxo sem aviso (nova aba sem ícone)',
            'Texto de ação genérico como "Saiba mais" ou "Clique aqui"',
            'Botão primário dentro de alerta — cria competição visual',
          ]}
        />
      </div>

      {/* Ícone customizado */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Ícone customizado</h2>
        <p className="text-sm text-foreground/60 mb-6">
          Prop <code className="text-primary bg-primary/10 px-1 rounded">icon</code> sobrepõe o ícone automático.
          Use para alinhar o ícone ao contexto de negócio sem criar uma nova variante.
        </p>
        <Card className="p-6">
          <div className="space-y-3">
            <Alert variant="info" icon={<Rocket className="h-5 w-5" />} title="Implantação em andamento">
              Seu ambiente está sendo atualizado. O processo leva cerca de 2 minutos.
            </Alert>
            <Alert variant="warning" icon={<ShieldAlert className="h-5 w-5" />} title="Permissões insuficientes">
              Você não tem acesso a este recurso. Solicite ao administrador.
            </Alert>
            <Alert variant="success" icon={<Zap className="h-5 w-5" />} title="Integração ativada">
              O webhook foi configurado e está recebendo eventos.
            </Alert>
          </div>
          <CodeBlock
            code={`import { Rocket } from 'lucide-react'

<Alert
  variant="info"
  icon={<Rocket className="h-5 w-5" />}
  title="Implantação em andamento"
>
  Seu ambiente está sendo atualizado.
</Alert>`}
          />
        </Card>
      </div>

      {/* Acessibilidade */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Acessibilidade</h2>
        <p className="text-sm text-foreground/60 mb-6">
          O componente renderiza um <code className="text-primary bg-primary/10 px-1 rounded">&lt;div&gt;</code> padrão.
          Para alertas que aparecem dinamicamente (sem recarga), adicione semântica ARIA para que
          leitores de tela (VoiceOver, NVDA) anunciem o conteúdo automaticamente.
        </p>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { attr: 'role="alert"', desc: 'Anuncia imediatamente ao leitor de tela. Use em error e warning crítico.' },
              { attr: 'role="status"', desc: 'Anuncia quando o leitor de tela estiver ocioso. Use em success e info.' },
              { attr: 'aria-live="assertive"', desc: 'Interrompe a leitura atual — reservado para erros bloqueantes.' },
              { attr: 'aria-live="polite"', desc: 'Aguarda pausa do leitor — adequado para success e info transitórios.' },
              { attr: 'aria-atomic="true"', desc: 'Lê o conteúdo completo do alerta a cada mudança, não só o delta.' },
              { attr: 'aria-label no dismiss', desc: 'O botão × já inclui aria-label="Dismiss alert" — não remova.' },
            ].map(({ attr, desc }) => (
              <div key={attr} className="flex gap-3 p-3 bg-muted/40 rounded-lg">
                <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs shrink-0 self-start mt-0.5 whitespace-nowrap">{attr}</code>
                <p className="text-sm text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>
          <CodeBlock
            code={`{/* Erro bloqueante — anuncia imediatamente */}
<Alert
  variant="error"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  title="Falha na autenticação"
>
  Usuário ou senha incorretos.
</Alert>

{/* Sucesso transitório — aguarda pausa */}
<Alert
  variant="success"
  role="status"
  aria-live="polite"
  title="Salvo"
>
  Suas alterações foram salvas.
</Alert>`}
          />
        </Card>
      </div>

      {/* Props */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Props</h2>
        <Card className="p-6 overflow-x-auto">
          <p className="text-sm text-foreground/60 mb-4">
            Herda todas as props nativas do <code className="text-primary bg-primary/10 px-1 rounded">&lt;div&gt;</code> — incluindo <code className="text-primary bg-primary/10 px-1 rounded">role</code>, <code className="text-primary bg-primary/10 px-1 rounded">aria-live</code> e <code className="text-primary bg-primary/10 px-1 rounded">className</code>.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Prop</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Padrão</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['variant', '"default" | "success" | "warning" | "error" | "info"', '"default"', 'Variante semântica — define cor, ícone e intenção'],
                ['title', 'string', '—', 'Título em negrito acima da mensagem (2–4 palavras)'],
                ['icon', 'ReactNode', 'Auto', 'Sobrepõe o ícone padrão da variante'],
                ['dismissible', 'boolean', 'false', 'Exibe botão × para o usuário fechar o alerta'],
                ['onDismiss', '() => void', '—', 'Callback acionado ao fechar — use para analytics ou persistência'],
                ['role', 'string', '—', '"alert" (error/warning crítico) ou "status" (success/info)'],
                ['aria-live', 'string', '—', '"assertive" (erros) ou "polite" (success/info transitório)'],
                ['aria-atomic', 'string', '—', '"true" — lê o conteúdo completo ao atualizar'],
                ['className', 'string', '—', 'Classes Tailwind adicionais'],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop} className="border-b border-border hover:bg-accent/30">
                  <td className="py-3 px-4 font-mono text-primary text-xs">{prop}</td>
                  <td className="py-3 px-4 text-foreground/70 font-mono text-xs">{type}</td>
                  <td className="py-3 px-4 text-foreground/60 text-xs">{def}</td>
                  <td className="py-3 px-4 text-foreground/70 text-sm">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
