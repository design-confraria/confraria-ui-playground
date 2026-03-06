/**
 * Label — React Native
 * Peer deps: react-native
 */
import React from 'react'
import { Text, type TextProps, type TextStyle, type StyleProp } from 'react-native'
import { useTheme } from '../utils'
import { fontSize, fontWeight } from '../tokens'

export interface LabelProps extends TextProps {
  style?: StyleProp<TextStyle>
}

export function Label({ children, style, ...props }: LabelProps) {
  const theme = useTheme()
  return (
    <Text
      style={[
        {
          fontSize: fontSize.sm,
          fontWeight: fontWeight.medium,
          color: theme.foreground,
          lineHeight: fontSize.sm * 1.4,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
