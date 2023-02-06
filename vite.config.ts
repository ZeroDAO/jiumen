import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import commonjsExternals from 'vite-plugin-commonjs-externals'
import { resolve } from 'path'
import type { UserConfig, ConfigEnv } from 'vite'

const commonjsPackages = ['stream'] as const

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  return {
    base: './',
    root,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
        {
          find: 'antd/lib',
          replacement: 'antd/es',
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        {
          find: '@antv/x6',
          replacement: '@antv/x6/dist/x6.js',
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js',
        },
      ],
    },
    server: {
      port: 3600,
      open: true,
      cors: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020',
      },
      //@ts-ignore
      exclude: commonjsPackages,
    },
    build: {
      target: 'es2020',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    define: {
      'process.env': {},
    },
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      commonjsExternals({ externals: commonjsPackages }),
    ],
  }
}
