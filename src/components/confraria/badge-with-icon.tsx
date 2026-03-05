import React from 'react'
import { Badge } from '@/components/ui/badge'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BadgeWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  label: string
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
  size?: 'sm' | 'md'
}

const iconSizeMap = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
}

export const BadgeWithIcon = React.forwardRef<HTMLDivElement, BadgeWithIconProps>(
  (
    { icon: Icon, label, variant, size = 'md', className, ...props },
    ref
  ) => {
    return (
      <Badge
        ref={ref}
        variant={variant}
        className={cn('flex items-center gap-1.5', className)}
        {...props}
      >
        <Icon className={iconSizeMap[size]} />
        {label}
      </Badge>
    )
  }
)

BadgeWithIcon.displayName = 'BadgeWithIcon'
