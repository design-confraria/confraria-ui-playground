/**
 * Select — React Native
 * Custom modal-based select (no Radix, cross-platform)
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import {
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  SafeAreaView,
  type ViewStyle,
  type StyleProp,
} from 'react-native'
import { ChevronDown, Check } from 'lucide-react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize, fontWeight } from '../tokens'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'default'
  style?: StyleProp<ViewStyle>
}

export function Select({
  value,
  onValueChange,
  options,
  placeholder = 'Selecionar…',
  disabled = false,
  size = 'default',
  style,
}: SelectProps) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const selected = options.find((o) => o.value === value)
  const triggerHeight = size === 'sm' ? 32 : 36

  return (
    <>
      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        style={({ pressed }) => [
          {
            height: triggerHeight,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: spacing[2],
            borderRadius: radii.md,
            borderWidth: 1,
            borderColor: theme.input,
            backgroundColor: 'transparent',
            paddingHorizontal: spacing[3],
          },
          pressed && { opacity: 0.7 },
          disabled && { opacity: 0.5 },
          style,
        ]}
      >
        <Text
          style={{
            fontSize: fontSize.sm,
            color: selected ? theme.foreground : theme.mutedForeground,
            flex: 1,
          }}
          numberOfLines={1}
        >
          {selected ? selected.label : placeholder}
        </Text>
        <ChevronDown size={16} color={theme.mutedForeground} />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}
          onPress={() => setOpen(false)}
        >
          <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Pressable onPress={(e) => e.stopPropagation()}>
              <View
                style={{
                  backgroundColor: theme.popover,
                  borderTopLeftRadius: radii.xl,
                  borderTopRightRadius: radii.xl,
                  borderWidth: 1,
                  borderColor: theme.border,
                  maxHeight: 360,
                  paddingBottom: spacing[4],
                }}
              >
                {/* Handle bar */}
                <View style={{ alignItems: 'center', paddingVertical: spacing[3] }}>
                  <View
                    style={{
                      width: 40,
                      height: 4,
                      borderRadius: radii.full,
                      backgroundColor: theme.mutedForeground,
                      opacity: 0.3,
                    }}
                  />
                </View>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => {
                    const isSelected = item.value === value
                    return (
                      <Pressable
                        onPress={() => {
                          onValueChange?.(item.value)
                          setOpen(false)
                        }}
                        style={({ pressed }) => ({
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: spacing[4],
                          paddingVertical: spacing[3],
                          backgroundColor: pressed ? theme.accent : 'transparent',
                        })}
                      >
                        <Text
                          style={{
                            flex: 1,
                            fontSize: fontSize.sm,
                            color: theme.popoverForeground,
                            fontWeight: isSelected ? fontWeight.semibold : fontWeight.normal,
                          }}
                        >
                          {item.label}
                        </Text>
                        {isSelected && (
                          <Check size={16} color={theme.primary} />
                        )}
                      </Pressable>
                    )
                  }}
                />
              </View>
            </Pressable>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </>
  )
}
