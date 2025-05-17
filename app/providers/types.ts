export interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: string
    storageKey?: string
    attribute?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
  }