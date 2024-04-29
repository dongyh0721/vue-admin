import type { App } from 'vue';
import { constantRoutes } from '@/router/static';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
