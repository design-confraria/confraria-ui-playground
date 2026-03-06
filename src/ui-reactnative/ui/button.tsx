/**
 * Button — React Native
 * Peer deps: react-native
 */
import React from 'react'
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  type PressableProps,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, fontSize, fontWeight, spacing } from '../tokens'

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'xs' | 'icon' | 'icon-sm' | 'icon-lg'

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export function Button({
  variant = 'default',
  size = 'default',
  loading = false,
  children,
  disabled,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  const theme = useTheme()
  const isDisabled = disabled || loading

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [
        getContainerStyle(variant, size, theme),
        pressed && !isDisabled && { opacity: 0.85 },
        isDisabled && { opacity: 0.5 },
        style,
      ]}
      {...props}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={getTextStyle(variant, theme).color as string}
        />
      )}
      {typeof children === 'string' ? (
        <Text style={[getTextStyle(variant, theme), getLabelSize(size), textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}

function getContainerStyle(
  variant: ButtonVariant,
  size: ButtonSize,
  theme: ReturnType<typeof useTheme>
): ViewStyle {
  const base: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.md,
    gap: spacing[2],
    ...getSizeStyle(size),
  }

  switch (variant) {
    case 'destructive':
      return { ...base, backgroundColor: theme.destructive }
    case 'outline':
      return {
        ...base,
        backgroundColor: theme.background,
        borderWidth: 1,
        borderColor: theme.border,
      }
    case 'secondary':
      return { ...base, backgroundColor: theme.secondary }
    case 'ghost':
      return { ...base, backgroundColor: 'transparent' }
    case 'link':
      return { ...base, backgroundColor: 'transparent', paddingHorizontal: 0 }
    default:
      return { ...base, backgroundColor: theme.primary }
  }
}

function getTextStyle(variant: ButtonVariant, theme: ReturnType<typeof useTheme>): TextStyle {
  const base: TextStyle = {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  }
  switch (variant) {
    case 'destructive':
      return { ...base, color: theme.destructiveForeground }
    case 'outline':
      return { ...base, color: theme.foreground }
    case 'secondary':
      return { ...base, color: theme.secondaryForeground }
    case 'ghost':
      return { ...base, color: theme.foreground }
    case 'link':
      return { ...base, color: theme.primary, textDecorationLine: 'underline' }
    default:
      return { ...base, color: theme.primaryForeground }
  }
}

function getSizeStyle(size: ButtonSize): ViewStyle {
  switch (size) {
    case 'xs':
      return { height: 24, paddingHorizontal: spacing[2] }
    case 'sm':
      return { height: 32, paddingHorizontal: spacing[3] }
    case 'lg':
      return { height: 40, paddingHorizontal: spacing[6] }
    case 'icon':
      return { width: 36, height: 36, paddingHorizontal: 0 }
    case 'icon-sm':
      return { width: 32, height: 32, paddingHorizontal: 0 }
    case 'icon-lg':
      return { width: 40, height: 40, paddingHorizontal: 0 }
    default:
      return { height: 36, paddingHorizontal: spacing[4] }
  }
}

function getLabelSize(size: ButtonSize): TextStyle {
  switch (size) {
    case 'xs':
      return { fontSize: fontSize.xs }
    case 'sm':
      return { fontSize: fontSize.sm }
    case 'lg':
      return { fontSize: fontSize.base }
    default:
      return { fontSize: fontSize.sm }
  }
}
