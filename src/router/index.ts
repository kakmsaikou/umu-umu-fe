import { ReviewPage } from '../views/ReviewPage';
import { LoginPage } from './../views/LoginPage';
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LoginPage },
  { path: '/review', component: ReviewPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
