import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';
export function setupVitePlugins(viteEnv: any): (PluginOption | PluginOption[])[] {
  const vitePlugins: any[] = [vue(), vueJsx(), UnoCSS()];
  // auto import
  vitePlugins.push(setupAutoImport());
  vitePlugins.push(setupComponents(viteEnv));
  vitePlugins.push(setupIcons());
  vitePlugins.push(setupSvg(viteEnv));
  vitePlugins.push(setupStyle());
  return vitePlugins;
}

const setupAutoImport = () => {
  return AutoImport({
    imports: ['vue', 'vue-router'],
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
    dts: 'types/auto-import.d.ts',
  });
};
const setupComponents = (viteEnv: any) => {
  return Components({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        enabledCollections: [viteEnv['VITE_APP_EL_ICON_PREFIX']],
      }),
    ],
    dts: 'types/components.d.ts',
  });
};
const setupIcons = () => {
  return Icons({
    autoInstall: true,
  });
};
const setupSvg = (viteEnv: Record<string, string>) => {
  return createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
    symbolId: `${viteEnv['VITE_APP_LOCAL_ICON_PREFIX']}-[dir]-[name]`,
  });
};
const setupStyle = () => {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
  });
};
