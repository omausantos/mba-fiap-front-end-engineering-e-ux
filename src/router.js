import { createRouter, createWebHashHistory } from 'vue-router';
import Login from './pages/login.vue';
import Lista from './pages/lista.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/lista', component: Lista }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;