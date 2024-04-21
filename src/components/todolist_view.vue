<template>
  <div id="app">
    <h1>任务栏</h1>
    <todoInput @addTask="addTask"></todoInput>
    <todoList :todolist="filteredTodoList" @deleteTask="deleteTask"></todoList>
    <todoButton @changeActive="changeActive"></todoButton>
  </div>
</template>

<script>
import todoList from "./todoList.vue";
import todoButton from "./todoButton.vue";
import todoInput from "./todoInput.vue";

export default {
  name: "App",
  data() {
    return {
      todoList: [
      ],
      active: 0
    };
  },
  computed: {
    filteredTodoList() {
      if (this.active === 0) {
        return this.todoList;
      } else if (this.active === 1) {
        return this.todoList.filter(item => item.isCompleted);
      } else {
        return this.todoList.filter(item => !item.isCompleted);
      }
    }
  },
  methods: {
    changeActive(active) {
      this.active = active;
    },
    addTask(taskname) {
      this.todoList.push({
        id: this.todoList.length + 1,
        task: taskname,
        isCompleted: false
      });
    },
    deleteTask(id) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    }
  },
  components: {
    todoList,
    todoButton,
    todoInput
  }
};
</script>

<style>

</style>
