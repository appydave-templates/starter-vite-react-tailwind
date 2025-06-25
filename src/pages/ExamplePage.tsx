import React from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useTheme } from '../hooks/useTheme'

export const ExamplePage: React.FC = () => {
  const { theme } = useTheme()

  const features = [
    {
      title: 'TypeScript Ready',
      description: 'Full TypeScript support with strict mode enabled for better development experience.',
      icon: '🔷'
    },
    {
      title: 'Dark Mode Support',
      description: 'Built-in dark/light theme toggle with system preference detection and persistence.',
      icon: theme === 'dark' ? '🌙' : '☀️'
    },
    {
      title: 'Tailwind CSS',
      description: 'Pre-configured with custom color palette and responsive design utilities.',
      icon: '🎨'
    },
    {
      title: 'Vite Powered',
      description: 'Lightning-fast development server with hot module replacement (HMR).',
      icon: '⚡'
    }
  ]

  return (
    <div className="min-h-screen bg-brand-50 dark:bg-brand-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-900 dark:text-brand-100 mb-4">
            Welcome to Your Starter Template
          </h1>
          <p className="text-lg text-brand-600 dark:text-brand-400 max-w-2xl mx-auto mb-8">
            A modern React starter template with Vite, TypeScript, and TailwindCSS. 
            Everything you need to build amazing applications quickly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Color Palette Demo */}
        <Card className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-900 dark:text-brand-100 mb-6">
            Custom Color Palette
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-brand-700 dark:text-brand-300 mb-3">
                Brand Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-50" title="brand-50" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">50</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-100" title="brand-100" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">100</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-200" title="brand-200" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">200</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-300" title="brand-300" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">300</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-400" title="brand-400" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">400</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-500" title="brand-500" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">500</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-600" title="brand-600" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">600</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-700" title="brand-700" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">700</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-800" title="brand-800" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">800</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-brand-900" title="brand-900" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">900</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-brand-700 dark:text-brand-300 mb-3">
                Accent Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-50" title="accent-50" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">50</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-100" title="accent-100" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">100</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-200" title="accent-200" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">200</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-300" title="accent-300" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">300</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-400" title="accent-400" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">400</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-500" title="accent-500" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">500</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-600" title="accent-600" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">600</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-700" title="accent-700" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">700</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-800" title="accent-800" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">800</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg border border-brand-200 dark:border-brand-700 bg-accent-900" title="accent-900" />
                  <span className="text-xs text-brand-600 dark:text-brand-400 mt-1">900</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-600 dark:text-brand-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Component Demo */}
        <Card>
          <h2 className="text-2xl font-semibold text-brand-900 dark:text-brand-100 mb-6">
            Component Examples
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-brand-800 dark:text-brand-200 mb-4">
                Buttons
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-brand-800 dark:text-brand-200 mb-4">
                Button Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-brand-800 dark:text-brand-200 mb-4">
                Theme Information
              </h3>
              <div className="bg-brand-100 dark:bg-brand-800 rounded-lg p-4">
                <p className="text-brand-700 dark:text-brand-300">
                  Current theme: <span className="font-medium capitalize">{theme}</span>
                </p>
                <p className="text-sm text-brand-600 dark:text-brand-400 mt-1">
                  Theme preference is automatically persisted in localStorage and syncs with system preferences.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Getting Started */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-brand-900 dark:text-brand-100 mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-brand-600 dark:text-brand-400 mb-6">
            This template gives you everything you need to start building modern React applications.
          </p>
          <Button variant="primary" size="lg">
            Start Building
          </Button>
        </div>
      </div>
    </div>
  )
}