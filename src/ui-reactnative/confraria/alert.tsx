/**
 * Alert — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import {
  View,
  Text,
  Pressable,
  type ViewStyle,
  type StyleProp,
} from 'react-native'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize, fontWeight } from '../tokens'

export type AlertVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

export interface AlertProps {
  variant?: AlertVariant
  icon?: React.ReactNode
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const DefaultIcon: Record<AlertVariant, React.ComponentType<{ size: number; color: string }>> = {
  default: AlertCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
}

export function Alert({
  variant = 'default',
  icon,
  title,
  dismissible = false,
  onDismiss,
  children,
  style,
}: AlertProps) {
  const theme = useTheme()
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  const { container, iconColor } = getVariantStyles(variant, theme)
  const Icon = DefaultIcon[variant]

  return (
    <View style={[{ borderRadius: radii.lg, borderWidth: 1, padding: spacing[4], ...container }, style]}>
      <View style={{ flexDirection: 'row', gap: spacing[3] }}>
        <View style={{ marginTop: 2 }}>
          {icon ?? <Icon size={20} color={iconColor} />}
        </View>
        <View style={{ flex: 1, gap: spacing[1] }}>
          {title && (
            <Text style={{ fontSize: fontSize.sm, fontWeight: fontWeight.semibold, color: container.color }}>
              {title}
            </Text>
          )}
          {typeof children === 'string' ? (
            <Text style={{ fontSize: fontSize.sm, color: container.color }}>{children}</Text>
          ) : (
            children
          )}
        </View>
        {dismissible && (
          <Pressable onPress={handleDismiss} style={{ opacity: 0.7 }}>
            <X size={20} color={container.color} />
          </Pressable>
        )}
      </View>
    </View>
  )
}

function getVariantStyles(variant: AlertVariant, theme: ReturnType<typeof useTheme>) {
  switch (variant) {
    case 'success':
      return {
        container: { backgroundColor: 'rgba(16,185,129,0.09)', borderColor: 'rgba(16,185,129,0.3)', color: '#047857' },
        iconColor: '#059669',
      }
    case 'warning':
      return {
        container: { backgroundColor: 'rgba(245,158,11,0.09)', borderColor: 'rgba(245,158,11,0.3)', color: '#b45309' },
        iconColor: '#d97706',
      }
    case 'error':
      return {
        container: { backgroundColor: 'rgba(239,68,68,0.09)', borderColor: 'rgba(239,68,68,0.3)', color: '#b91c1c' },
        iconColor: '#dc2626',
      }
    case 'info':
      return {
        container: { backgroundColor: 'rgba(159,193,50,0.09)', borderColor: 'rgba(159,193,50,0.35)', color: theme.foreground },
        iconColor: theme.primary,
      }
    default:
      return {
        container: { backgroundColor: theme.card, borderColor: theme.border, color: theme.foreground },
        iconColor: theme.mutedForeground,
      }
  }
}
