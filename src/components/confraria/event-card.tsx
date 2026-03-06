import React from 'react'
import { Star, Flame } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

export interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL da imagem de capa do evento */
  imageSrc?: string
  /** Nome do evento */
  name: string
  /** Categoria ou tipo do evento */
  category: string
  /** Nota média (0–5). Padrão: 4.9 */
  rating?: number
  /** Total de avaliações. Padrão: 999 */
  reviewCount?: number
  /** Callback ao clicar em "Ver evento" */
  onEventClick?: () => void
}

export const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  (
    {
      imageSrc,
      name,
      category,
      rating = 4.9,
      reviewCount = 999,
      onEventClick,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-[264px] flex-col gap-2 rounded-2xl border border-gray-300 bg-white p-2',
          'dark:border-gray-700 dark:bg-card',
          className
        )}
        {...props}
      >
        {/* Imagem */}
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <svg
                className="text-gray-300 dark:text-gray-600"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <rect x="8" y="8" width="48" height="36" rx="4" fill="currentColor" />
                <circle cx="32" cy="50" r="6" fill="currentColor" />
                <rect x="20" y="50" width="24" height="6" rx="3" fill="currentColor" />
              </svg>
            </div>
          )}

          {/* Badge de avaliação */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-sm">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-900">
              {rating.toFixed(1).replace('.', ',')} ({reviewCount.toLocaleString('pt-BR')})
            </span>
          </div>
        </div>

        {/* Informações */}
        <div className="flex flex-col gap-0.5 px-1">
          <p className="font-semibold text-sm leading-tight text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>

        {/* Separador */}
        <div className="h-px bg-border" />

        {/* Ação */}
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2"
          onClick={onEventClick}
        >
          <Flame className="h-4 w-4 text-orange-500" />
          Ver evento
        </Button>
      </div>
    )
  }
)

EventCard.displayName = 'EventCard'
