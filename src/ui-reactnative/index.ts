/**
 * Confraria Design System — React Native
 *
 * Peer dependencies:
 *   react-native
 *   lucide-react-native
 *
 * Usage:
 *   import { Button, Badge, Card, Alert } from '@confraria/ui/react-native'
 */

// ── Tokens & utilities ────────────────────────────────────────────────────────
export { palette, lightTheme, darkTheme, spacing, radii, fontSize, fontWeight } from './tokens'
export type { Theme } from './tokens'
export { useTheme, cx } from './utils'

// ── UI base components ────────────────────────────────────────────────────────
export { Badge } from './ui/badge'
export type { BadgeProps, BadgeVariant } from './ui/badge'

export { Button } from './ui/button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './ui/button'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './ui/card'

export { Checkbox } from './ui/checkbox'
export type { CheckboxProps } from './ui/checkbox'

export { Input } from './ui/input'
export type { InputProps } from './ui/input'

export { Label } from './ui/label'
export type { LabelProps } from './ui/label'

export { Select } from './ui/select'
export type { SelectProps, SelectOption } from './ui/select'

export { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './ui/tabs'

export { Textarea } from './ui/textarea'
export type { TextareaProps } from './ui/textarea'

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './ui/dialog'
export type {
  DialogProps,
  DialogTriggerProps,
  DialogCloseProps,
  DialogContentProps,
  DialogFooterProps,
} from './ui/dialog'

// ── Confraria components ──────────────────────────────────────────────────────
export { Alert } from './confraria/alert'
export type { AlertProps, AlertVariant } from './confraria/alert'

export { Avatar } from './confraria/avatar'
export type { AvatarProps, AvatarSize, AvatarVariant } from './confraria/avatar'

export { BadgeWithIcon } from './confraria/badge-with-icon'
export type { BadgeWithIconProps, BadgeWithIconSize } from './confraria/badge-with-icon'

export { EmptyState } from './confraria/empty-state'
export type { EmptyStateProps, EmptyStateSize } from './confraria/empty-state'

export { IconButton } from './confraria/icon-button'
export type { IconButtonProps, IconButtonSize } from './confraria/icon-button'

export { StatCard } from './confraria/stat-card'
export type { StatCardProps, StatCardColor, StatCardTrend } from './confraria/stat-card'

export { EventCard } from './confraria/event-card'
export type { EventCardProps } from './confraria/event-card'
