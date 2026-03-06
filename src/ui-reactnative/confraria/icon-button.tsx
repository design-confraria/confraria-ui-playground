/**
 * IconButton — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import { Pressable, type PressableProps, type ViewStyle, type StyleProp } from 'react-native'
import type { LucideIcon } from 'lucide-react-native'
import { useTheme } from '../utils'
import { radii } from '../tokens'
import type { ButtonVariant } from '../ui/button'

export type IconButtonSize = 'sm' | 'md' | 'lg'

export interface IconButtonProps extends Omit<PressableProps, 'style'> {
  icon: LucideIcon
  variant?: ButtonVariant
  size?: IconButtonSize
  label?: string
  style?: StyleProp<ViewStyle>
}

const sizeMap: Record<IconButtonSize, { container: number; icon: number }> = {
  sm: { container: 32, icon: 16 },
  md: { container: 40, icon: 20 },
  lg: { container: 48, icon: 24 },
}

export function IconButton({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  label,
  disabled,
  style,
  ...props
}: IconButtonProps) {
  const theme = useTheme()
  const { container: dim, icon: iconSize } = sizeMap[size]
  const iconColor = variant === 'default' ? theme.primaryForeground
    : variant === 'destructive' ? theme.destructiveForeground
    : theme.foreground

  const bgColor = variant === 'default' ? theme.primary
    : variant === 'destructive' ? theme.destructive
    : variant === 'secondary' ? theme.secondary
    : variant === 'outline' ? theme.background
    : 'transparent'

  return (
    <Pressable
      accessibilityLabel={label}
      disabled={disabled}
      style={({ pressed }) => [
        {
          width: dim,
          height: dim,
          borderRadius: radii.md,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: pressed && variant === 'ghost' ? theme.accent : bgColor,
          borderWidth: variant === 'outline' ? 1 : 0,
          borderColor: theme.border,
        },
        disabled && { opacity: 0.5 },
        style,
      ]}
      {...props}
    >
      <Icon size={iconSize} color={iconColor} />
    </Pressable>
  )
}
