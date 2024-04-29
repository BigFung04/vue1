<template>
    <div class="btn-group" role="group" aria-label="Basic example">
      <el-button v-if="isMobile" 
                 :type="active === 0 ? 'primary' : 'default'" 
                 @click="changeActive(0)">
        全部
      </el-button>
  
      <van-button v-else 
                  :type="active === 0 ? 'primary' : 'default'" 
                  @click="changeActive(0)">
        全部
      </van-button>
  
      <el-button v-if="isMobile" 
                 :type="active === 1 ? 'primary' : 'default'" 
                 @click="changeActive(1)">
        已完成
      </el-button>
  
      <van-button v-else 
                  :type="active === 1 ? 'primary' : 'default'" 
                  @click="changeActive(1)">
        已完成
      </van-button>
  
      <el-button v-if="isMobile" 
                 :type="active === 2 ? 'primary' : 'default'" 
                 @click="changeActive(2)">
        未完成
      </el-button>
  
      <van-button v-else 
                  :type="active === 2 ? 'primary' : 'default'" 
                  @click="changeActive(2)">
        未完成
      </van-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        active: 0,
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
      changeActive(index) {
        this.active = index;
        this.$emit("changeActive", index);
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  </style>
  