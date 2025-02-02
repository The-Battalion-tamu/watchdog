import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import { AUTH_STORAGE_KEY, LOGIN_PATH } from '@/consts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/login', 
      name: 'Login', 
      component: Login
    }
  ],
}); 

async function verifyAuthToken(token: string) {
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    const data = await response.json();

    if (data.error) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
}

router.beforeEach(async (to, format, next) => {
  const token = localStorage.getItem(AUTH_STORAGE_KEY);

  if (to.path === LOGIN_PATH) next();

  if (!token) {
    next(LOGIN_PATH);
  }else {
    const userInfo = await verifyAuthToken(token);
    if (!userInfo){
      next(LOGIN_PATH);
    } else {
      next();
    }
  }
});


export default router
