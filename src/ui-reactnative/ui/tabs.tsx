/**
 * Tabs — React Native
 * State-based tabs (no Radix, cross-platform)
 * Peer deps: react-native
 */
import React from 'react'
import {
  View,
  Text,
  Pressable,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize, fontWeight } from '../tokens'

/* ──────────────── Context ──────────────── */

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue>({
  value: '',
  onValueChange: () => {},
})

/* ──────────────── Tabs (root) ──────────────── */

export interface TabsProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function Tabs({ value, onValueChange, children, style }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <View style={[{ gap: spacing[2] }, style]}>{children}</View>
    </TabsContext.Provider>
  )
}

/* ──────────────── TabsList ──────────────── */

export interface TabsListProps {
  children: React.ReactNode
  variant?: 'default' | 'line'
  style?: StyleProp<ViewStyle>
}

export function TabsList({ children, variant = 'default', style }: TabsListProps) {
  const theme = useTheme()
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: radii.lg,
          padding: 3,
          backgroundColor: variant === 'default' ? theme.muted : 'transparent',
          height: 36,
          alignSelf: 'flex-start',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

/* ──────────────── TabsTrigger ──────────────── */

export interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export function TabsTrigger({ value, children, disabled, style, textStyle }: TabsTriggerProps) {
  const theme = useTheme()
  const ctx = React.useContext(TabsContext)
  const isActive = ctx.value === value

  return (
    <Pressable
      disabled={disabled}
      onPress={() => ctx.onValueChange(value)}
      style={({ pressed }) => [
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: radii.md,
          paddingHorizontal: spacing[2],
          paddingVertical: spacing[1],
          backgroundColor: isActive ? theme.background : 'transparent',
          shadowColor: isActive ? '#000' : 'transparent',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: isActive ? 0.05 : 0,
          shadowRadius: 1,
        },
        pressed && { opacity: 0.7 },
        disabled && { opacity: 0.5 },
        style,
      ]}
    >
      {typeof children === 'string' ? (
        <Text
          style={[
            {
              fontSize: fontSize.sm,
              fontWeight: fontWeight.medium,
              color: isActive ? theme.foreground : theme.mutedForeground,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}

/* ──────────────── TabsContent ──────────────── */

export interface TabsContentProps {
  value: string
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function TabsContent({ value, children, style }: TabsContentProps) {
  const ctx = React.useContext(TabsContext)
  if (ctx.value !== value) return null
  return <View style={style}>{children}</View>
}
