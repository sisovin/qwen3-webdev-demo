'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, User, UserCircle, Settings, LogOut, Laptop } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine current theme - use a fallback during server render
  const currentTheme = mounted ? theme : undefined
  
  return (
    <nav className="sticky top-0 z-50 p-4 md:p-6 flex justify-between items-center border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm">
      <h1 className="text-xl md:text-2xl font-bold">Qwen 3 WebDev</h1>
      
      {/* Center menu */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
          <li><a href="#demo" className="hover:text-blue-400 transition">Demo</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle - only rendered on client-side */}
        {mounted && (
          <DropdownMenu>            <DropdownMenuTrigger asChild>
              <button aria-label="Toggle theme" className="p-1 rounded-md focus:outline-none">
                {currentTheme === 'dark' ? (
                  <Moon className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Avatar with Dropdown */}
        <DropdownMenu>          <DropdownMenuTrigger asChild>
            <button aria-label="User menu" className="focus:outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/sisovin.png" alt="User" />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="p-2 text-white hover:text-blue-400 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 p-4 border-b border-gray-700">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#about" className="block p-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#features" className="block p-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#demo" className="block p-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Demo
              </a>
            </li>
            <li>
              <a href="#contact" className="block p-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
