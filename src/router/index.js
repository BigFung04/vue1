import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import TodoList from '../components/todolist_view.vue'
import Biography from '../components/Biography.vue'
import { useAuthStore } from '../store';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: '/todolist',
        name: 'todoList',
        component: TodoList,
        meta: { requiresAuth: true }
      },
      {
        path: '/Biography',
        name: 'Biography',
        component: Biography,
        meta: { requiresAuth: true }
      }
    ],
  })


  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      next('/login'); 
    } else {
      next(); 
    }
  });

export default router
