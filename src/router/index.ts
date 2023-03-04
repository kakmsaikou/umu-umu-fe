import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import { LoginPage } from './../views/LoginPage';
import { About } from '../views/About';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LoginPage },
  { path: '/about', component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
