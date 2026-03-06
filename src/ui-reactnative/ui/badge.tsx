/**
 * Badge — React Native
 * Peer deps: react-native
 */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, fontSize, fontWeight, spacing } from '../tokens'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export function Badge({ children, variant = 'default', style, textStyle }: BadgeProps) {
  const theme = useTheme()

  const containerStyles: ViewStyle = {
    ...baseContainer,
    ...getContainerVariant(variant, theme),
  }

  const labelStyles: TextStyle = {
    ...baseLabel,
    ...getLabelVariant(variant, theme),
  }

  return (
    <View style={[containerStyles, style]}>
      {typeof children === 'string' ? (
        <Text style={[labelStyles, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </View>
  )
}

const baseContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: radii.full,
  paddingHorizontal: spacing[2],
  paddingVertical: spacing[0.5],
  borderWidth: 1,
  borderColor: 'transparent',
  alignSelf: 'flex-start',
}

const baseLabel: TextStyle = {
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
}

function getContainerVariant(variant: BadgeVariant, theme: ReturnType<typeof useTheme>): ViewStyle {
  switch (variant) {
    case 'secondary':
      return { backgroundColor: theme.secondary, borderColor: 'transparent' }
    case 'destructive':
      return { backgroundColor: theme.destructive, borderColor: 'transparent' }
    case 'outline':
      return { backgroundColor: 'transparent', borderColor: theme.border }
    case 'ghost':
      return { backgroundColor: 'transparent', borderColor: 'transparent' }
    default:
      return { backgroundColor: theme.primary, borderColor: 'transparent' }
  }
}

function getLabelVariant(variant: BadgeVariant, theme: ReturnType<typeof useTheme>): TextStyle {
  switch (variant) {
    case 'secondary':
      return { color: theme.secondaryForeground }
    case 'destructive':
      return { color: theme.destructiveForeground }
    case 'outline':
      return { color: theme.foreground }
    case 'ghost':
      return { color: theme.foreground }
    default:
      return { color: theme.primaryForeground }
  }
}
