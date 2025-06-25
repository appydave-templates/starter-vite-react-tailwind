import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // Define global constants for the build
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
      __APP_ENV__: JSON.stringify(mode),
    },
    // Server configuration
    server: {
      port: parseInt(env.VITE_DEV_PORT) || 5173,
      open: env.VITE_DEV_OPEN === 'true',
    },
    // Build configuration
    build: {
      target: env.VITE_BUILD_TARGET || 'es2015',
      sourcemap: mode === 'development',
    },
  }
})