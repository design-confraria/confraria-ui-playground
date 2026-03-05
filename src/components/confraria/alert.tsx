import React from 'react'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  icon?: React.ReactNode
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const alertVariants = {
  default: {
    container: 'bg-slate-50 border-slate-200 text-slate-900',
    icon: 'text-slate-500',
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-900',
    icon: 'text-green-500',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: 'text-amber-500',
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900',
    icon: 'text-red-500',
  },
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: 'text-blue-500',
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
