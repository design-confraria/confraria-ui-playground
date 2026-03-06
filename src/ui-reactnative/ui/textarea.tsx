/**
 * Textarea — React Native
 * Peer deps: react-native
 */
import React from 'react'
import { TextInput, type TextInputProps, type ViewStyle, type StyleProp } from 'react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize } from '../tokens'

export interface TextareaProps extends TextInputProps {
  invalid?: boolean
  style?: StyleProp<ViewStyle>
  /** Min height in pixels. Defaults to 80. */
  minHeight?: number
}

export function Textarea({ invalid = false, style, minHeight = 80, ...props }: TextareaProps) {
  const theme = useTheme()
  const [focused, setFocused] = React.useState(false)

  return (
    <TextInput
      multiline
      textAlignVertical="top"
      style={[
        {
          minHeight,
          borderRadius: radii.md,
          borderWidth: 1,
          borderColor: invalid
            ? theme.destructive
            : focused
            ? theme.ring
            : theme.input,
          backgroundColor: 'transparent',
          paddingHorizontal: spacing[3],
          paddingVertical: spacing[2],
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
