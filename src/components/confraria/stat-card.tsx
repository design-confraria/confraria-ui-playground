import React from 'react'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

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
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
  red: 'bg-red-50 text-red-700',
  amber: 'bg-amber-50 text-amber-700',
  purple: 'bg-purple-50 text-purple-700',
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
            <p className="text-sm text-slate-600 mb-2">{label}</p>
            <div className="flex items-end gap-2">
              <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
              {trend && (
                <div
                  className={cn(
                    'flex items-center gap-0.5 text-xs font-medium mb-1',
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
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
