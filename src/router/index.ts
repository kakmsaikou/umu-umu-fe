import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./../views/LoginPage') },
  { path: '/review', component: () => import('./../views/ReviewPage') },
  {path: '/word', component: ()=> import('../views/WordPage')},
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
