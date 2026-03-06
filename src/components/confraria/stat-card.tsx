import React from 'react'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from '../ui/card'
import { cn } from '../../lib/utils'

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: 'blue' | 'green' | 'red' | 'amber' | 'purple'
}

const colorMap = {
  blue: 'bg-primary/15 text-primary',
  green: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  red: 'bg-red-500/15 text-red-700 dark:text-red-300',
  amber: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  purple: 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    { icon: Icon, label, value, trend, color = 'blue', className, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn('p-6', className)}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-foreground/60 mb-2">{label}</p>
            <div className="flex items-end gap-2">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {trend && (
                <div
                  className={cn(
                    'flex items-center gap-0.5 text-xs font-medium mb-1',
                    trend.isPositive
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-red-700 dark:text-red-300'
                  )}
                >
                  {trend.isPositive ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {trend.value}%
                </div>
              )}
            </div>
          </div>
          {Icon && (
            <div className={cn('p-3 rounded-lg', colorMap[color])}>
              <Icon className="h-6 w-6" />
            </div>
          )}
        </div>
      </Card>
    )
  }
)

StatCard.displayName = 'StatCard'
