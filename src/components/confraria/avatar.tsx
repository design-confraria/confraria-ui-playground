import React from 'react'
import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  variant?: 'circle' | 'square'
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      size = 'md',
      fallback,
      variant = 'circle',
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false)

    const showFallback = !src || imageError

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium bg-gradient-to-br from-primary/20 to-primary/35 text-foreground',
          sizeMap[size],
          variant === 'circle' ? 'rounded-full' : 'rounded-md',
          className
        )}
        title={alt}
        {...props}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              'w-full h-full object-cover',
              variant === 'circle' ? 'rounded-full' : 'rounded-md'
            )}
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{fallback || alt[0]?.toUpperCase()}</span>
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'
