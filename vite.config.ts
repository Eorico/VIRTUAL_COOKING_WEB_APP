import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // sql.js is CJS. Excluding it from pre-bundling made the browser import the
    // raw CJS file natively, which yields an empty module — `loadSqlJs` then
    // threw "sql.js factory not found. Keys: " and the login/name screen never
    // rendered. Letting Vite pre-bundle it restores the CJS→ESM interop.
    include: ['sql.js'],
  },
})