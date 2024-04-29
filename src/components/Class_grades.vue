<template>
  <div class="container">
    <van-search v-model="keyword" placeholder="搜索" />

    <van-dropdown-menu>
      <!-- 筛选菜单 -->
      <van-dropdown-item v-model="selectedFilter" title="筛选">
        <!-- 小组任务选项 -->
        <van-cell center title="小组任务">
          <template #right-icon>
            <van-icon
              v-if="filterOptions.groupTask"
              name="team"
              size="24px"
              color="#07c160"
            />
            <van-icon
              v-else
              name="team"
              size="24px"
              color="#999"
            />
          </template>
        </van-cell>
        <!-- 我的反馈选项 -->
        <van-cell center title="我的反馈">
          <template #right-icon>
            <van-icon
              v-if="filterOptions.myFeedback"
              name="chat-o"
              size="24px"
              color="#07c160"
            />
            <van-icon
              v-else
              name="chat-o"
              size="24px"
              color="#999"
            />
          </template>
        </van-cell>
      </van-dropdown-item>
      <!-- 选择任务菜单 -->
      <van-dropdown-item v-model="selectedTask" title="选择任务" :options="tasks"/>
      <!-- 班级菜单 -->
      <van-dropdown-item v-model="selectedClass" title="班级" :options="classes"/>
    </van-dropdown-menu>

    <!-- 显示选中任务名称 -->
    <van-cell class="task-cell">
      <div>任务：<span class="task-text">{{ tasks[selectedTask].text }}</span></div>
    </van-cell>

    <!-- 折叠面板 -->
    <van-collapse v-model="activeCollapse">
      <!-- 循环显示折叠项 -->
      <van-collapse-item v-for="(item, index) in data" :key="index" :title="item.name">
        <!-- 自定义图标 -->
        <template #icon>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            shape="square"
            size="36px"
          />
        </template>
        <!-- 显示评分状态 -->
        <template #value>
          <div class="score-status" :class="submitStatusColor(item.submitStatus)">
            {{ item.scoreStatus !== -1 ? item.scoreStatus : '未评分' }}
          </div>
        </template>
        <!-- 显示提交状态 -->
        <van-cell title="完成情况：">
          <template #value>
            <div class="submit-status" :class="submitStatusColor(item.submitStatus)">
              {{ item.submitStatus }}
            </div>
          </template>
        </van-cell>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义响应式数据
const keyword = ref('');
const selectedFilter = ref([]);
const selectedTask = ref(0);
const selectedClass = ref(0);
const filterOptions = ref({
  groupTask: false,
  myFeedback: false
});
const tasks = ref([
  { text: 'Vue3开发初体验', value: 0 },
  { text: 'Vue3组件化开发', value: 1 },
  { text: 'Vue3路由的使用', value: 2 },
  { text: '电影列表项目', value: 3 },
  { text: 'Vue自动化测试', value: 4 },
  { text: '状态管理Pinia', value: 5 },
  { text: '使用UI组件库', value: 6 },
]);
const classes = ref([
  { text: '全部', value: 0 },
  { text: '22软件3班', value: 1 },
  { text: '22软件1班', value: 2 },
  { text: '21软件1班', value: 3 },
  { text: '21软件2班', value: 4 },
]);
const activeCollapse = ref([]);
const data = ref([
  { name: '王大牛', class_name:'22软件1班' ,task_name:'Vue3开发初体验' ,scoreStatus: 95, completionStatus: '完成', submitStatus: '已提交' },
  { name: '牢大', class_name:'22软件3班' ,task_name:'Vue3组件化开发' ,scoreStatus: 95, completionStatus: '完成', submitStatus: '已提交' },
  { name: '迪迦', class_name:'22软件3班' ,task_name:'Vue3组件化开发' ,scoreStatus: -1, completionStatus: '未完成', submitStatus: '未提交' },
  { name: '梅比优斯', class_name:'22软件3班' ,task_name:'Vue3组件化开发' ,scoreStatus: -1, completionStatus: '未完成', submitStatus: '未提交' },
]);

function submitStatusColor(status: string) {
  return {
    'text-green': status === '已提交',
    'text-red': status === '未提交'
  };
}
</script>

<style scoped>
.container {
  padding: 10px;
}

.task-cell {
  margin-top: 10px;
}

.task-text {
  color: red;
  font-weight: 800;
}

.score-status,
.submit-status {
  font-weight: bold;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}
</style>
