/**
 * Confraria Design System — React Native Tokens
 * Mirrors the web CSS variables from globals.css / tokens.css
 */

export const palette = {
  confraria: {
    50: '#F9FBEA',
    100: '#F0F5D2',
    200: '#E0EDA9',
    300: '#C9DF77',
    400: '#B1CE4D',
    500: '#9FC132',
    600: '#728F21',
    700: '#576D1E',
    800: '#47571D',
    900: '#3C4B1C',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  blue: {
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  green: {
    500: '#22c55e',
    600: '#16a34a',
  },
  emerald: {
    300: '#6ee7b7',
    500: '#10b981',
    700: '#047857',
  },
  red: {
    500: '#ef4444',
    700: '#b91c1c',
  },
  amber: {
    300: '#fcd34d',
    500: '#f59e0b',
    700: '#b45309',
  },
  violet: {
    500: '#a855f7',
    700: '#7c3aed',
  },
} as const

export type Theme = {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
}

export const lightTheme: Theme = {
  background: '#FFFFFF',
  foreground: '#1A1A1A',
  card: '#FFFFFF',
  cardForeground: '#1A1A1A',
  popover: '#FFFFFF',
  popoverForeground: '#1A1A1A',
  primary: '#9FC132',
  primaryForeground: '#1A1A1A',
  secondary: '#F5F5F5',
  secondaryForeground: '#1A1A1A',
  muted: '#F5F5F5',
  mutedForeground: '#737373',
  accent: '#F5F5F5',
  accentForeground: '#1A1A1A',
  destructive: '#ef4444',
  destructiveForeground: '#FFFFFF',
  border: '#E5E5E5',
  input: '#E5E5E5',
  ring: '#A3A3A3',
}

export const darkTheme: Theme = {
  background: '#1C1C1C',
  foreground: '#F9F9F9',
  card: '#262626',
  cardForeground: '#F9F9F9',
  popover: '#262626',
  popoverForeground: '#F9F9F9',
  primary: '#9FC132',
  primaryForeground: '#1A1A1A',
  secondary: '#363636',
  secondaryForeground: '#F9F9F9',
  muted: '#363636',
  mutedForeground: '#A3A3A3',
  accent: '#363636',
  accentForeground: '#F9F9F9',
  destructive: '#ef4444',
  destructiveForeground: '#FFFFFF',
  border: '#363636',
  input: '#363636',
  ring: '#737373',
}

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const

export const radii = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
} as const

export const fontSize = {
  xs: 11,
  sm: 13,
  base: 15,
  lg: 17,
  xl: 19,
  '2xl': 23,
  '3xl': 29,
  '4xl': 35,
} as const

export const fontWeight = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
}
