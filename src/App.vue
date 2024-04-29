<template>
  <div id="app" :class="backgroundClass">
    <router-link to="/" class="rt">Home</router-link>
    <router-link to="/todolist" class="rt">todoList</router-link>
    <router-link to="/Biography" class="rt">Biography</router-link>
    <router-link to="/Class_grades" class="rt">Class_grades</router-link>
    <router-link to="/person_grades" class="rt">person_grades</router-link>
  </div>
  <router-view></router-view>
  <Login v-if="!authStore.isAuthenticated" />
</template>

<script>
import { useAuthStore } from './store'; 
import Login from './components/login.vue';
import { ref, watchEffect } from 'vue';

export default {
  name: "App",
  components: {
    Login,
  },
  setup() {
    const authStore = useAuthStore(); 
    const backgroundClass = ref('');

    const checkScreenWidth = () => {
      backgroundClass.value = window.innerWidth <= 768 ? 'app-background-mobile' : 'app-background-desktop';
    };

    watchEffect(() => {
      window.addEventListener('resize', checkScreenWidth);
      checkScreenWidth();
      return () => window.removeEventListener('resize', checkScreenWidth);
    });

    return {
      authStore,
      backgroundClass,
    };
  },
};
</script>

<style scoped>
.app-background {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 0 70px;
  border-bottom: 2px solid #f38181;
}

.app-background-mobile {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}

.app-background-desktop {
  background: linear-gradient(to bottom, #ff7e5f, #feb47b);
}

.rt {
  width: 20px;
  margin-left: 20px;
  color: #fff;
}
</style>
