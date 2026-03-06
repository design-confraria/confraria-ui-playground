/**
 * Input — React Native
 * Peer deps: react-native
 */
import React from 'react'
import {
  TextInput,
  type TextInputProps,
  type ViewStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize } from '../tokens'

export interface InputProps extends TextInputProps {
  invalid?: boolean
  containerStyle?: StyleProp<ViewStyle>
}

export function Input({ invalid = false, style, containerStyle, ...props }: InputProps) {
  const theme = useTheme()
  const [focused, setFocused] = React.useState(false)

  return (
    <TextInput
      style={[
        {
          height: 36,
          borderRadius: radii.md,
          borderWidth: 1,
          borderColor: invalid
            ? theme.destructive
            : focused
            ? theme.ring
            : theme.input,
          backgroundColor: 'transparent',
          paddingHorizontal: spacing[3],
          fontSize: fontSize.sm,
          color: theme.foreground,
        },
        style,
      ]}
      placeholderTextColor={theme.mutedForeground}
      onFocus={(e) => {
        setFocused(true)
        props.onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        props.onBlur?.(e)
      }}
      {...props}
    />
  )
}
