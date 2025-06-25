import React from 'react'
import { ThemeToggle } from '../theme/ThemeToggle'

export const Header: React.FC = () => {
  return (
    <header className="border-b border-brand-200 bg-white/80 backdrop-blur-sm dark:border-brand-700 dark:bg-brand-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-brand-900 dark:text-brand-100">
              Vite React Template
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}