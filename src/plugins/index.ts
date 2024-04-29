import setupAssert from './assert';
import setupElement from './element';
import setupI18n from './i18n';
import type { App } from 'vue';
export default (app: App) => {
  setupAssert();
  setupElement(app);
  setupI18n(app);
};
