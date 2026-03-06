import React from 'react'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  icon?: React.ReactNode
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const alertVariants = {
  default: {
    container: 'bg-card border-border text-foreground',
    icon: 'text-foreground/60',
  },
  success: {
    container:
      'bg-emerald-500/12 border-emerald-500/30 text-emerald-900 dark:text-emerald-200',
    icon: 'text-emerald-600 dark:text-emerald-300',
  },
  warning: {
    container:
      'bg-amber-500/12 border-amber-500/30 text-amber-900 dark:text-amber-200',
    icon: 'text-amber-600 dark:text-amber-300',
  },
  error: {
    container: 'bg-red-500/12 border-red-500/30 text-red-900 dark:text-red-200',
    icon: 'text-red-600 dark:text-red-300',
  },
  info: {
    container: 'bg-primary/12 border-primary/35 text-foreground',
    icon: 'text-primary',
  },
}

const defaultIcons = {
  default: AlertCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'default',
      icon,
      title,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(true)

    if (!isOpen) return null

    const DefaultIcon = defaultIcons[variant]

    const handleDismiss = () => {
      setIsOpen(false)
      onDismiss?.()
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full rounded-lg border p-4',
          alertVariants[variant].container,
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          <div className={cn('mt-0.5 flex-shrink-0', alertVariants[variant].icon)}>
            {icon ? icon : <DefaultIcon className="h-5 w-5" />}
          </div>
          <div className="flex-1">
            {title && <h5 className="mb-1 font-semibold">{title}</h5>}
            <div className="text-sm">{children}</div>
          </div>
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 opacity-70 hover:opacity-100"
              aria-label="Dismiss alert"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'
