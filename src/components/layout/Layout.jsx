// Layout.jsx
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { useTheme } from '../../contexts/ThemeContext'

function Layout({ children }) {
  const { isDarkMode } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'dark:bg-gray-950' : 'bg-gray-50'}`}>
      {/* Sidebar - Fixed on left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full lg:w-auto lg:ml-0">
        {/* Navbar at top */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Layout