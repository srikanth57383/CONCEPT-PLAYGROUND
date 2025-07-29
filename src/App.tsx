import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Tailwind is Working 🎉</h1>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
