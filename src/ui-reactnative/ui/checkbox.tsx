/**
 * Checkbox — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import {
  Pressable,
  View,
  type PressableProps,
  type ViewStyle,
  type StyleProp,
} from 'react-native'
import { Check } from 'lucide-react-native'
import { useTheme } from '../utils'
import { radii, spacing } from '../tokens'

export interface CheckboxProps extends Omit<PressableProps, 'style'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  style?: StyleProp<ViewStyle>
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled,
  style,
  ...props
}: CheckboxProps) {
  const theme = useTheme()

  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onPress={() => onCheckedChange?.(!checked)}
      style={({ pressed }) => [
        {
          width: 16,
          height: 16,
          borderRadius: radii.xs,
          borderWidth: 1,
          borderColor: checked ? theme.primary : theme.input,
          backgroundColor: checked ? theme.primary : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        },
        pressed && { opacity: 0.7 },
        disabled && { opacity: 0.5 },
        style,
      ]}
      {...props}
    >
      {checked && <Check size={11} color={theme.primaryForeground} strokeWidth={3} />}
    </Pressable>
  )
}
