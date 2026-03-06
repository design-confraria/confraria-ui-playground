/**
 * Dialog — React Native
 * Modal-based dialog (no Radix, cross-platform)
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import {
  Modal,
  View,
  Text,
  Pressable,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native'
import { X } from 'lucide-react-native'
import { useTheme } from '../utils'
import { radii, spacing, fontSize, fontWeight } from '../tokens'
import { Button } from './button'

/* ──────────────── Context ──────────────── */

interface DialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextValue>({
  open: false,
  setOpen: () => {},
})

/* ──────────────── Dialog (root) ──────────────── */

export interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen = (value: boolean) => {
    setInternalOpen(value)
    onOpenChange?.(value)
  }
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

/* ──────────────── DialogTrigger ──────────────── */

export interface DialogTriggerProps {
  children: React.ReactElement<{ onPress?: () => void }>
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const { setOpen } = React.useContext(DialogContext)
  return React.cloneElement(children, {
    onPress: () => setOpen(true),
  })
}

/* ──────────────── DialogClose ──────────────── */

export interface DialogCloseProps {
  children: React.ReactElement<{ onPress?: () => void }>
}

export function DialogClose({ children }: DialogCloseProps) {
  const { setOpen } = React.useContext(DialogContext)
  return React.cloneElement(children, {
    onPress: () => setOpen(false),
  })
}

/* ──────────────── DialogContent ──────────────── */

export interface DialogContentProps {
  children: React.ReactNode
  showCloseButton?: boolean
  style?: StyleProp<ViewStyle>
}

export function DialogContent({ children, showCloseButton = true, style }: DialogContentProps) {
  const theme = useTheme()
  const { open, setOpen } = React.useContext(DialogContext)

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => setOpen(false)}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing[4],
        }}
        onPress={() => setOpen(false)}
      >
        <Pressable onPress={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 512 }}>
          <View
            style={[
              {
                backgroundColor: theme.background,
                borderRadius: radii.lg,
                borderWidth: 1,
                borderColor: theme.border,
                padding: spacing[6],
                gap: spacing[4],
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 24,
                elevation: 16,
              },
              style,
            ]}
          >
            {children}
            {showCloseButton && (
              <Pressable
                onPress={() => setOpen(false)}
                style={{
                  position: 'absolute',
                  top: spacing[4],
                  right: spacing[4],
                  opacity: 0.7,
                }}
              >
                <X size={16} color={theme.foreground} />
              </Pressable>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

/* ──────────────── DialogHeader ──────────────── */

export function DialogHeader({ children, style }: { children?: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[{ gap: spacing[1] }, style]}>{children}</View>
}

/* ──────────────── DialogFooter ──────────────── */

export interface DialogFooterProps {
  children?: React.ReactNode
  showCloseButton?: boolean
  style?: StyleProp<ViewStyle>
}

export function DialogFooter({ children, showCloseButton = false, style }: DialogFooterProps) {
  const { setOpen } = React.useContext(DialogContext)
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'flex-end', gap: spacing[2] }, style]}>
      {children}
      {showCloseButton && (
        <Button variant="outline" onPress={() => setOpen(false)}>
          Fechar
        </Button>
      )}
    </View>
  )
}

/* ──────────────── DialogTitle ──────────────── */

export function DialogTitle({ children, style }: { children?: React.ReactNode; style?: StyleProp<TextStyle> }) {
  const theme = useTheme()
  return (
    <Text style={[{ fontSize: fontSize.lg, fontWeight: fontWeight.semibold, color: theme.foreground }, style]}>
      {children}
    </Text>
  )
}

/* ──────────────── DialogDescription ──────────────── */

export function DialogDescription({ children, style }: { children?: React.ReactNode; style?: StyleProp<TextStyle> }) {
  const theme = useTheme()
  return (
    <Text style={[{ fontSize: fontSize.sm, color: theme.mutedForeground }, style]}>
      {children}
    </Text>
  )
}
