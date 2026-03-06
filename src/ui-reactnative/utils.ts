import { useColorScheme } from 'react-native'
import { lightTheme, darkTheme, type Theme } from './tokens'

/**
 * Returns the active theme object based on the device color scheme.
 */
export function useTheme(): Theme {
  const scheme = useColorScheme()
  return scheme === 'dark' ? darkTheme : lightTheme
}

/**
 * Merges an array of style objects, filtering out falsy values.
 * Useful to conditionally compose styles without spreading undefined.
 *
 * @example
 * style={cx(styles.base, disabled && styles.disabled, style)}
 */
export function cx<T>(...styles: (T | undefined | null | false)[]): T[] {
  return styles.filter(Boolean) as T[]
}
