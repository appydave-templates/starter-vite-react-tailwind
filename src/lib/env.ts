/**
 * Environment configuration utilities
 */

export const config = {
  app: {
    title: import.meta.env.VITE_APP_TITLE || 'Starter App',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    env: import.meta.env.VITE_APP_ENV || 'development',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 5000,
  },
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    debugMode: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',
  },
} as const

export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD

/**
 * Get environment variable with optional default value
 */
export function getEnvVar(key: keyof ImportMetaEnv, defaultValue?: string): string {
  return import.meta.env[key] ?? defaultValue ?? ''
}

/**
 * Get boolean environment variable
 */
export function getBooleanEnvVar(key: keyof ImportMetaEnv, defaultValue = false): boolean {
  const value = import.meta.env[key]
  if (value === undefined) return defaultValue
  return value.toLowerCase() === 'true'
}