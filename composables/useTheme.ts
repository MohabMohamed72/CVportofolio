// composables/useTheme.ts
// Manages dark / light mode across the whole application.
// Persists the user's preference in localStorage and falls back to the
// operating-system preference (prefers-color-scheme) on first visit.

const STORAGE_KEY = 'mohab-theme'

type Theme = 'dark' | 'light'

// Shared reactive state across all component instances
const isDark = ref<boolean>(true)

export function useTheme() {
  const theme = computed<Theme>(() => (isDark.value ? 'dark' : 'light'))

  /**
   * Applies the current theme by setting `data-theme` on <html>.
   * The CSS variables in main.css react to this attribute.
   */
  function applyTheme(dark: boolean) {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    }
  }

  function initTheme() {
    if (!import.meta.client) return

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      // Respect the OS colour-scheme preference
      isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches
    }
    applyTheme(isDark.value)
  }

  return { isDark, theme, toggleTheme, initTheme }
}
