import { defineConfig, loadEnv } from 'vite';
import * as process from 'process';
import { setupVitePlugins } from './build';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: setupVitePlugins(viteEnv),
    build: {
      sourcemap: false,
    },
  };
});
