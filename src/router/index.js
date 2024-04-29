import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import TodoList from '../components/todolist_view.vue'
import Biography from '../components/Biography.vue'
import Class_grades from '../components/Class_grades.vue'
import person_grades from '../components/person_grades.vue'



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
      },
      {
        path: '/Class_grades',
        name: 'Class_grades',
        component: Class_grades
      },
      {
        path: '/person_grades',
        name: 'person_grades',
        component: person_grades
      },
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
