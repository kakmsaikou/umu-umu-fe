import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import { About } from '../views/About';
import { Home } from '../views/home';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
