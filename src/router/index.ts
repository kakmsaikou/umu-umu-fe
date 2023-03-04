import { WordPage } from './../views/WordPage';
import { LoginPage } from './../views/LoginPage';
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: LoginPage },
  { path: '/word', component: WordPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
