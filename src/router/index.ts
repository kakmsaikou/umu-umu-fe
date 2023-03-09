import { ReviewPage } from '../views/ReviewPage';
import { LoginPage } from './../views/LoginPage';
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./../views/LoginPage') },
  { path: '/review', component: () => import('./../views/ReviewPage') },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
