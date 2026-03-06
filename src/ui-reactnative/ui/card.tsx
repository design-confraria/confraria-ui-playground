/**
 * Card — React Native
 * Peer deps: react-native
 */
import React from 'react'
import {
  View,
  Text,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize, fontWeight } from '../tokens'

interface CardProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function Card({ children, style }: CardProps) {
  const theme = useTheme()
  return (
    <View
      style={[
        {
          backgroundColor: theme.card,
          borderRadius: radii.xl,
          borderWidth: 1,
          borderColor: theme.border,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

interface CardHeaderProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CardHeader({ children, style }: CardHeaderProps) {
  return (
    <View style={[{ paddingHorizontal: spacing[6], paddingTop: spacing[6], gap: spacing[1] }, style]}>
      {children}
    </View>
  )
}

interface CardTitleProps {
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
}

export function CardTitle({ children, style }: CardTitleProps) {
  const theme = useTheme()
  return (
    <Text style={[{ fontSize: fontSize.base, fontWeight: fontWeight.semibold, color: theme.cardForeground }, style]}>
      {children}
    </Text>
  )
}

interface CardDescriptionProps {
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
}

export function CardDescription({ children, style }: CardDescriptionProps) {
  const theme = useTheme()
  return (
    <Text style={[{ fontSize: fontSize.sm, color: theme.mutedForeground }, style]}>
      {children}
    </Text>
  )
}

interface CardContentProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CardContent({ children, style }: CardContentProps) {
  return (
    <View style={[{ paddingHorizontal: spacing[6], paddingVertical: spacing[4] }, style]}>
      {children}
    </View>
  )
}

interface CardFooterProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CardFooter({ children, style }: CardFooterProps) {
  const theme = useTheme()
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: spacing[6],
          paddingBottom: spacing[6],
          paddingTop: spacing[4],
          borderTopWidth: 1,
          borderTopColor: theme.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

interface CardActionProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CardAction({ children, style }: CardActionProps) {
  return (
    <View style={[{ alignSelf: 'flex-start', marginLeft: 'auto' }, style]}>
      {children}
    </View>
  )
}
