<template>
    <div>
      <h2>登录地球</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">大名:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">进入地球</button>
      </form>
      <p v-if="loginError" style="color: red;">用户名或密码错误，看来你不是村里人。</p>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'; 
  import { useAuthStore } from '../store'; 
  
  export default defineComponent({
    data() {
      return {
        username: '',
        password: '',
        loginError: false, 
      };
    },
    methods: {
      login() {
        const isAuthenticated = useAuthStore().login(this.username,this.password);
        if (!isAuthenticated) {
          this.loginError = true;
        } else {
          this.$router.push('/');
        }
      },
    },
  });
  </script>
  
  <style scoped>
  form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  label {
    font-weight: bold;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0 15px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button[type="submit"] {
    background-color: #4CAF50; 
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }

  p {
    color: red;
    font-style: italic;
  }
  </style>