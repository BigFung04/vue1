<template>
    <div class="input-container">
      <el-input v-if="isMobile" v-model="taskname" placeholder="请输入任务" clearable></el-input>
      <van-field v-else v-model="taskname" label="新建任务" placeholder="请输入任务" clearable></van-field>
      <el-button v-if="isMobile" type="primary" @click="onsubmit">提交</el-button>
      <van-button v-else type="primary" @click="onsubmit">提交</van-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taskname: "",
        isMobile: false
      };
    },
    mounted() {
      this.checkDeviceType();
      window.addEventListener("resize", this.checkDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkDeviceType);
    },
    methods: {
      checkDeviceType() {
        this.isMobile = window.innerWidth <= 768; 
      },
      onsubmit() {
        this.$emit("addTask", this.taskname);
        this.taskname = "";
      }
    }
  };
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  </style>
  