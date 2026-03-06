/**
 * EventCard — React Native
 * Card de evento com imagem, badge de avaliação, nome, categoria e CTA.
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native'
import { Star, Flame } from 'lucide-react-native'
import { useTheme } from '../utils'

export interface EventCardProps {
  /** URL da imagem de capa do evento */
  imageSrc?: string
  /** Nome do evento */
  name: string
  /** Categoria ou tipo do evento */
  category: string
  /** Nota média (0–5). Padrão: 4.9 */
  rating?: number
  /** Total de avaliações. Padrão: 999 */
  reviewCount?: number
  /** Callback ao pressionar "Ver evento" */
  onEventPress?: () => void
  style?: StyleProp<ViewStyle>
}

export function EventCard({
  imageSrc,
  name,
  category,
  rating = 4.9,
  reviewCount = 999,
  onEventPress,
  style,
}: EventCardProps) {
  const theme = useTheme()

  const ratingLabel = `${rating.toFixed(1).replace('.', ',')} (${reviewCount})`

  return (
    <View
      style={[
        styles.card,
        { borderColor: theme.border, backgroundColor: theme.card },
        style,
      ]}
    >
      {/* Imagem */}
      <View style={[styles.imageContainer, { backgroundColor: theme.muted }]}>
        {imageSrc ? (
          <Image
            source={{ uri: imageSrc }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.imagePlaceholder, { backgroundColor: theme.muted }]} />
        )}

        {/* Badge de avaliação */}
        <View style={styles.ratingBadge}>
          <Star size={11} color="#FBBF24" fill="#FBBF24" />
          <Text style={styles.ratingText}>{ratingLabel}</Text>
        </View>
      </View>

      {/* Informações */}
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.foreground }]} numberOfLines={2}>
          {name}
        </Text>
        <Text style={[styles.category, { color: theme.mutedForeground }]} numberOfLines={1}>
          {category}
        </Text>
      </View>

      {/* Separador */}
      <View style={[styles.separator, { backgroundColor: theme.border }]} />

      {/* CTA */}
      <Pressable
        onPress={onEventPress}
        style={({ pressed }) => [
          styles.button,
          { borderColor: theme.border },
          pressed && { opacity: 0.8 },
        ]}
      >
        <Flame size={16} color="#F97316" />
        <Text style={[styles.buttonText, { color: theme.foreground }]}>Ver evento</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 264,
    padding: 8,
    flexDirection: 'column',
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#111827',
  },
  info: {
    paddingHorizontal: 4,
    gap: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  category: {
    fontSize: 12,
    lineHeight: 16,
  },
  separator: {
    height: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '500',
  },
})
