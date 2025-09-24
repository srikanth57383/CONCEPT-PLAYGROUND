import React from 'react'
import { useTheme } from '../hooks/useTheme'
const Home = () => {

  const { theme, toggleTheme } = useTheme()
  
  return (
    <>
    <div>Home</div>
     <button
          onClick={toggleTheme}
          className="m-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
</>
  )
}

export default Home