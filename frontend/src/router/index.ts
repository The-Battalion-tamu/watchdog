import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import { ADD_SOURCE_PATH, AUTH_STORAGE_KEY, HOME_PATH, LOGIN_PATH } from '@/consts';
import AddSource from '@/views/AddSource.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PATH,
      name: 'home',
      component: Dashboard,
    },
    {
      path: LOGIN_PATH, 
      name: 'Login', 
      component: Login
    }, 
    {
      path: ADD_SOURCE_PATH, 
      name: "Add Source",
      component: AddSource
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
