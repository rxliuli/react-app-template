import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

const config = defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      TanStackRouterVite({
        target: 'react',
        autoCodeSplitting: true,
      }),
    ],
    build: {
      rollupOptions: {
        external: ['node:path', 'node:fs', 'node:stream'],
      },
    },
  },
  server: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})

export default config
