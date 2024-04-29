import { createI18n } from 'vue-i18n';
import { storage } from '@/utils/storage';
import en from '@/language/en';
import zhCN from '@/language/zh-cn';
import type { App } from 'vue';
const messages = {
  'zh-CN': zhCN,
  en: en,
};
const i18n = createI18n({
  globalInjection: true, //全局生效$t
  locale: storage.get('lang') || 'zh-CN',
  fallbackLocale: 'en',
  messages,
  legacy: false,
});
export default (app: App) => {
  app.use(i18n);
};
export const t = (key: string) => {
  return i18n.global.t(key);
};
