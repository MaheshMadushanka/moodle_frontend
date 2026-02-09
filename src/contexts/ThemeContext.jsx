import React, { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      // Set custom CSS variables for blue theme
      root.style.setProperty('--sidebar-bg', '#0c4a6e') // Blue-900
      root.style.setProperty('--sidebar-border', '#075985') // Blue-800
      root.style.setProperty('--navbar-bg', '#0c4a6e') // Blue-900
      root.style.setProperty('--navbar-border', '#075985') // Blue-800
    } else {
      root.classList.remove('dark')
      // Reset to default colors
      root.style.setProperty('--sidebar-bg', '#ffffff')
      root.style.setProperty('--sidebar-border', '#f3f4f6')
      root.style.setProperty('--navbar-bg', '#ffffff')
      root.style.setProperty('--navbar-border', '#f3f4f6')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}