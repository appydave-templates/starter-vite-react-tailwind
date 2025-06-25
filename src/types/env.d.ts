/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_DEBUG_MODE: string
  readonly VITE_BUILD_TARGET: string
  readonly VITE_DEV_PORT: string
  readonly VITE_DEV_OPEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Global constants defined in vite.config.ts
declare const __APP_VERSION__: string
declare const __APP_ENV__: string