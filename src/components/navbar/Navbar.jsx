import React, { useState, useRef, useEffect } from 'react'
import { Bell, Search, User, LogOut, Settings, HelpCircle, Menu, X } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

function Navbar({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [searchFocus, setSearchFocus] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)
  const { isDarkMode } = useTheme()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus search input when mobile search is shown
  useEffect(() => {
    if (showMobileSearch && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMobileSearch])

  const handleLogout = () => {
    console.log('Logging out...')
  }

  return (
    <div 
      className={`
        h-16 px-4 sm:px-6
        ${isDarkMode ? 'dark:bg-gray-900 dark:border-blue-800' : 'bg-white border-gray-100'}
        border-b
        flex items-center justify-between gap-4
        font-sans
        ${showMobileSearch ? 'flex-row-reverse' : ''}
      `}
    >
      {/* Mobile Menu Button - Hide when search is active */}
      {!showMobileSearch && (
        <button
          onClick={onMenuClick}
          className={`
            lg:hidden p-2 rounded-lg
            ${isDarkMode 
              ? 'dark:hover:bg-gray-800 dark:text-gray-200' 
              : 'hover:bg-gray-50 text-gray-600'
            }
          `}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Left Section - Search */}
      <div className={`${showMobileSearch ? 'flex-1' : 'flex-1 max-w-xl hidden md:block'}`}>
        <div className={`
          relative flex items-center
          ${searchFocus 
            ? isDarkMode ? 'ring-2 ring-blue-500' : 'ring-2 ring-blue-400'
            : ''
          }
          rounded-lg transition-all
        `}>
          <Search className={`
            absolute left-3 w-5 h-5
            ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}
          `} />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search courses, assessments..."
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            className={`
              w-full pl-10 pr-4 py-2.5 rounded-lg
              ${isDarkMode 
                ? 'dark:bg-blue-900/20 dark:text-blue-100 dark:placeholder-blue-400' 
                : 'bg-gray-50 text-gray-900 placeholder-gray-400'
              }
              border ${isDarkMode ? 'dark:border-blue-800' : 'border-transparent'}
              focus:outline-none
              transition-all
              text-sm sm:text-base
            `}
          />
          {showMobileSearch && (
            <button
              onClick={() => setShowMobileSearch(false)}
              className="md:hidden absolute right-3 p-1"
            >
              <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
          )}
        </div>
      </div>

      {/* Right Section - Notifications & Profile - Hide when mobile search is active */}
      {!showMobileSearch && (
        <div className="flex items-center gap-3">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowMobileSearch(true)}
            className={`
              md:hidden p-2 rounded-lg
              ${isDarkMode 
                ? 'dark:hover:bg-gray-800 dark:text-gray-200' 
                : 'hover:bg-gray-50 text-gray-600'
              }
            `}
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`
                flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg
                transition-all
                ${isDarkMode 
                  ? 'dark:hover:bg-blue-800 dark:text-blue-100' 
                  : 'hover:bg-gray-50 text-gray-900'
                }
              `}
            >
              {/* Profile Icon with Blue Transparent Background */}
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              
              <div className="text-left hidden sm:block">
                <p className={`text-sm font-medium ${isDarkMode ? 'dark:text-blue-100' : 'text-gray-900'}`}>
                  John Doe
                </p>
                <p className={`text-xs ${isDarkMode ? 'dark:text-blue-400' : 'text-gray-500'}`}>
                  Student
                </p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div 
                className={`
                  absolute right-0 mt-2 w-56 rounded-xl shadow-lg
                  ${isDarkMode ? 'dark:bg-blue-900 dark:border-blue-800' : 'bg-white border border-gray-100'}
                  overflow-hidden z-50
                `}
              >
                {/* User Info */}
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'dark:border-blue-800' : 'border-gray-100'}`}>
                  <p className={`text-sm font-medium ${isDarkMode ? 'dark:text-blue-100' : 'text-gray-900'}`}>
                    John Doe
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'dark:text-blue-400' : 'text-gray-500'}`}>
                    john.doe@vtc.edu
                  </p>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5
                      transition-all
                      ${isDarkMode 
                        ? 'dark:hover:bg-blue-800 dark:text-blue-200' 
                        : 'hover:bg-gray-50 text-gray-700'
                      }
                    `}
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">My Profile</span>
                  </button>

                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5
                      transition-all
                      ${isDarkMode 
                        ? 'dark:hover:bg-blue-800 dark:text-blue-200' 
                        : 'hover:bg-gray-50 text-gray-700'
                      }
                    `}
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </button>

                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5
                      transition-all
                      ${isDarkMode 
                        ? 'dark:hover:bg-blue-800 dark:text-blue-200' 
                        : 'hover:bg-gray-50 text-gray-700'
                      }
                    `}
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-sm">Help & Support</span>
                  </button>
                </div>

                {/* Logout */}
                <div className={`border-t ${isDarkMode ? 'dark:border-blue-800' : 'border-gray-100'} py-2`}>
                  <button
                    onClick={handleLogout}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5
                      transition-all
                      ${isDarkMode 
                        ? 'dark:hover:bg-red-900/20 dark:text-red-400' 
                        : 'hover:bg-red-50 text-red-600'
                      }
                    `}
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar