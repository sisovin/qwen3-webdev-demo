'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  // Effect for client-side only execution
  useEffect(() => {
    setMounted(true)
  }, [])

  // Get the current theme, safely accounting for server-side rendering
  const currentTheme = mounted ? theme : 'dark'

  return {
    theme: currentTheme,
    setTheme,
    systemTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
    mounted
  }
}
