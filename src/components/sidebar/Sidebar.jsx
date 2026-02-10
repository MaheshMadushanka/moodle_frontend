import React, { useState } from 'react'
import { 
  Home, 
  BookOpen, 
  Calendar,
  FileText,
  Award,
  MessageSquare,
  User,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react'
import vtclogo from "../../assets/vtclogo2.png"
import { useTheme } from '../../contexts/ThemeContext'

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isDarkMode, setTheme } = useTheme()

  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: BookOpen, label: 'My Courses' },
    { icon: FileText, label: 'Assessments' },
    { icon: Calendar, label: 'Attendance' },
    { icon: Award, label: 'Results' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: User, label: 'Profile' }
  ]

  const handleThemeChange = (theme) => {
    setTheme(theme)
  }

  const handleMenuItemClick = (label) => {
    setActiveItem(label)
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`
          lg:hidden fixed top-4 left-4 z-40
          p-2 rounded-lg
          ${isDarkMode 
            ? 'bg-gray-800 text-gray-200' 
            : 'bg-blue-50 text-blue-700 shadow-md'
          }
        `}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 h-screen
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'}
          border-r ${isDarkMode ? 'border-gray-800' : 'border-blue-200'}
          flex flex-col
          font-sans
        `}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1"
        >
          <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`} />
        </button>

        {/* Logo Section */}
        <div className={`p-6 flex items-center justify-center border-b ${isDarkMode ? 'border-gray-800' : 'border-blue-200'}`}>
          <img 
            src={vtclogo} 
            alt="VTC Logo" 
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.label
              
              return (
                <div key={item.label}>
                  <button
                    onClick={() => handleMenuItemClick(item.label)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-200 group relative
                      ${isActive
                        ? isDarkMode 
                          ? 'bg-blue-900/30 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'
                        : isDarkMode
                          ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                          : 'text-blue-800 hover:bg-blue-100 hover:text-blue-900'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 text-left text-sm font-medium">
                      {item.label}
                    </span>
                  </button>
                </div>
              )
            })}
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className={`
          px-4 py-3 mx-4 mb-4 rounded-xl
          ${isDarkMode ? 'bg-gray-800' : 'bg-blue-100'}
          flex items-center justify-center gap-2
        `}>
          <button
            onClick={() => handleThemeChange('light')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-all
              ${!isDarkMode 
                ? 'bg-blue-50 text-blue-900 shadow-sm' 
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            <Sun className="w-4 h-4" />
            <span className="text-sm font-medium">Light</span>
          </button>
          
          <button
            onClick={() => handleThemeChange('dark')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-all
              ${isDarkMode 
                ? 'bg-blue-700 text-white shadow-sm' 
                : 'text-blue-700 hover:text-blue-900'
              }
            `}
          >
            <Moon className="w-4 h-4" />
            <span className="text-sm font-medium">Dark</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar