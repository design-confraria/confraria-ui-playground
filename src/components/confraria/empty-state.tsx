import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: {
    icon: 'h-12 w-12',
    title: 'text-lg',
    description: 'text-sm',
  },
  md: {
    icon: 'h-16 w-16',
    title: 'text-xl',
    description: 'text-base',
  },
  lg: {
    icon: 'h-20 w-20',
    title: 'text-2xl',
    description: 'text-lg',
  },
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon: Icon,
      title,
      description,
      action,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const sizes = sizeMap[size]

    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center gap-4 py-12', className)}
        {...props}
      >
        {Icon && (
          <div className={cn('text-slate-300', sizes.icon)}>
            <Icon className="w-full h-full" />
          </div>
        )}
        <h3 className={cn('font-semibold text-slate-900', sizes.title)}>
          {title}
        </h3>
        {description && (
          <p className={cn('text-slate-500 text-center max-w-sm', sizes.description)}>
            {description}
          </p>
        )}
        {action && (
          <Button
            onClick={action.onClick}
            className="mt-2"
          >
            {action.label}
          </Button>
        )}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'
