/**
 * BadgeWithIcon — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import { View, Text, type ViewStyle, type StyleProp } from 'react-native'
import type { LucideIcon } from 'lucide-react-native'
import { Badge, type BadgeVariant } from '../ui/badge'
import { useTheme } from '../utils'
import { fontSize } from '../tokens'

export type BadgeWithIconSize = 'sm' | 'md'

export interface BadgeWithIconProps {
  icon: LucideIcon
  label: string
  variant?: BadgeVariant
  size?: BadgeWithIconSize
  style?: StyleProp<ViewStyle>
}

const iconSizeMap: Record<BadgeWithIconSize, number> = {
  sm: 12,
  md: 14,
}

const labelSizeMap: Record<BadgeWithIconSize, number> = {
  sm: fontSize.xs,
  md: fontSize.xs,
}

export function BadgeWithIcon({ icon: Icon, label, variant = 'default', size = 'md', style }: BadgeWithIconProps) {
  const theme = useTheme()

  return (
    <Badge variant={variant} style={[{ flexDirection: 'row', alignItems: 'center', gap: 4 }, style]}>
      <Icon size={iconSizeMap[size]} color={variant === 'default' ? theme.primaryForeground : theme.foreground} />
      <Text style={{ fontSize: labelSizeMap[size], color: variant === 'default' ? theme.primaryForeground : theme.foreground }}>
        {label}
      </Text>
    </Badge>
  )
}
