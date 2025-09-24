// ThemeToggle.tsx
import { useTheme } from "../../react/hooks/useTheme"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}