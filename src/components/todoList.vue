<template>
  <ul class="list-group">
    <li v-if="isMobile"
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="item in todolist"
        :key="item.id">
      <van-checkbox v-model="item.isCompleted" :label="item.task" class="task-item">{{ item.task }}</van-checkbox>
      <van-tag v-if="item.isCompleted" type="primary">已完成</van-tag>
      <van-tag v-else type="warning">未完成</van-tag>
      <van-button type="danger" size="small" @click="deleteTask(item.id)">删除</van-button>
    </li>
    <li v-else
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="item in todolist"
        :key="item.id">
      <el-checkbox v-model="item.isCompleted" class="task-item">{{ item.task }}</el-checkbox>
      <el-tag v-if="item.isCompleted" type="primary">已完成</el-tag>
      <el-tag v-else type="warning">未完成</el-tag>
      <el-button type="danger" size="mini" @click="deleteTask(item.id)">删除</el-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todolist: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
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
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
    checkDeviceType() {
      this.isMobile = window.innerWidth <= 768; 
    }
  }
};
</script>

<style scoped>
.list-group {
  width: 500px;
  margin: 0 auto;
}

.task-item {
  flex: 1;
}

.delete {
  text-decoration: line-through;
}
</style>
