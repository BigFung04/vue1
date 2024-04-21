<template>
  <div id="app" class="app-background">
    <router-link to="/" class="rt">Home</router-link>
    <router-link to="/todolist" class="rt">todoList</router-link>
    <router-link to="/Biography" class="rt">Biography</router-link>
  </div>
  <router-view></router-view>
  <Login v-if="!authStore.isAuthenticated" />
</template>

<script>
import { useAuthStore } from './store'; 
import Login from './components/login.vue';

export default {
  name: "App",
  setup() {
    const authStore = useAuthStore(); 
    return {
      authStore, 
    };
  },
  components: {
    Login, 
  },
}
</script>

<style scoped>
.rt
{
  width: 20px;
  margin-left: 20px;
  color: #fff;
}
.app-background
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 70px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  border-bottom: 2px solid #f38181;
}
</style>
