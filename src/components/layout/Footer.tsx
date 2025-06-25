import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-200 bg-white dark:border-brand-700 dark:bg-brand-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="text-center">
            <p className="text-sm text-brand-600 dark:text-brand-400">
              Built with Vite, React, TypeScript, and TailwindCSS
            </p>
            <p className="mt-1 text-xs text-brand-500 dark:text-brand-500">
              A starter template for rapid development
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}