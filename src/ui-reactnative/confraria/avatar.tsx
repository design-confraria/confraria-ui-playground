/**
 * Avatar — React Native
 * Peer deps: react-native
 */
import React from 'react'
import {
  View,
  Text,
  Image,
  type ViewStyle,
  type StyleProp,
} from 'react-native'
import { useTheme } from '../utils'
import { radii, fontSize, fontWeight } from '../tokens'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarVariant = 'circle' | 'square'

export interface AvatarProps {
  src?: string
  alt: string
  size?: AvatarSize
  fallback?: string
  variant?: AvatarVariant
  style?: StyleProp<ViewStyle>
}

const sizeMap: Record<AvatarSize, { container: number; text: number }> = {
  sm: { container: 32, text: fontSize.xs },
  md: { container: 40, text: fontSize.sm },
  lg: { container: 48, text: fontSize.base },
  xl: { container: 64, text: fontSize.lg },
}

export function Avatar({ src, alt, size = 'md', fallback, variant = 'circle', style }: AvatarProps) {
  const theme = useTheme()
  const [imageError, setImageError] = React.useState(false)
  const { container: dim, text: textSize } = sizeMap[size]
  const borderRadius = variant === 'circle' ? radii.full : radii.md
  const showFallback = !src || imageError
  const initials = (fallback || alt[0] || '?').toUpperCase()

  return (
    <View
      style={[
        {
          width: dim,
          height: dim,
          borderRadius,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primary + '30',
          overflow: 'hidden',
        },
        style,
      ]}
    >
      {!showFallback ? (
        <Image
          source={{ uri: src }}
          style={{ width: dim, height: dim, borderRadius }}
          onError={() => setImageError(true)}
          accessibilityLabel={alt}
        />
      ) : (
        <Text style={{ fontSize: textSize, fontWeight: fontWeight.medium, color: theme.foreground }}>
          {initials}
        </Text>
      )}
    </View>
  )
}
