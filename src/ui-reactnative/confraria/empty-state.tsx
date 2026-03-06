/**
 * EmptyState — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import { View, Text, type ViewStyle, type StyleProp } from 'react-native'
import type { LucideIcon } from 'lucide-react-native'
import { Button } from '../ui/button'
import { useTheme } from '../utils'
import { spacing, fontSize, fontWeight } from '../tokens'

export type EmptyStateSize = 'sm' | 'md' | 'lg'

export interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: {
    label: string
    onPress: () => void
  }
  size?: EmptyStateSize
  style?: StyleProp<ViewStyle>
}

const sizeMap: Record<EmptyStateSize, { icon: number; title: number; description: number }> = {
  sm: { icon: 40, title: fontSize.lg, description: fontSize.sm },
  md: { icon: 56, title: fontSize.xl, description: fontSize.base },
  lg: { icon: 72, title: fontSize['2xl'], description: fontSize.lg },
}

export function EmptyState({ icon: Icon, title, description, action, size = 'md', style }: EmptyStateProps) {
  const theme = useTheme()
  const sizes = sizeMap[size]

  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center', gap: spacing[4], paddingVertical: spacing[12] }, style]}>
      {Icon && (
        <View style={{ opacity: 0.35 }}>
          <Icon size={sizes.icon} color={theme.foreground} />
        </View>
      )}
      <Text style={{ fontSize: sizes.title, fontWeight: fontWeight.semibold, color: theme.foreground, textAlign: 'center' }}>
        {title}
      </Text>
      {description && (
        <Text style={{ fontSize: sizes.description, color: theme.mutedForeground, textAlign: 'center', maxWidth: 320 }}>
          {description}
        </Text>
      )}
      {action && (
        <Button onPress={action.onPress} style={{ marginTop: spacing[2] }}>
          {action.label}
        </Button>
      )}
    </View>
  )
}
