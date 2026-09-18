"use client"

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

/**
 * Lê o tema ativo do <html data-theme> e reage a mudanças.
 *
 * O ThemeToggle escreve direto no DOM em vez de usar contexto, então
 * observamos o atributo. Assim qualquer componente acompanha o tema sem
 * precisar refatorar o toggle nem introduzir um provider.
 */
export function useTheme(): Theme {
  // 'light' no primeiro render para bater com o HTML do servidor e evitar
  // hydration mismatch; o efeito corrige antes da pintura.
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const read = (): Theme =>
      document.documentElement.getAttribute('data-theme') === 'dark' ||
      document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'

    setTheme(read())

    const observer = new MutationObserver(() => setTheme(read()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    })

    return () => observer.disconnect()
  }, [])

  return theme
}
