import { ReviewPage } from '../views/ReviewPage';
import { LoginPage } from './../views/LoginPage';
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import { ReviewPage2 } from '../views/ReviewPage2';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LoginPage },
  { path: '/review', component: ReviewPage },
  { path: '/review2', component: ReviewPage2 },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
