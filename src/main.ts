import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';
import setupAll from '@/plugins';
import { createPinia } from 'pinia';
const setupApp = async () => {
  const app = createApp(App);
  setupAll(app);
  app.use(createPinia());
  await setupRouter(app);
  app.mount('#app');
};
void setupApp();
