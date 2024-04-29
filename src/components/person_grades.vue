<template>
  <van-search v-model="keyword" placeholder="搜索" />

  <van-dropdown-menu>
    <van-dropdown-item v-model="selectedCourse" title="选择课程" :options="courses"/>
    <van-dropdown-item v-model="projectType" title="任务类型" :options="projects"/>
  </van-dropdown-menu>

  <div class="info-section">
    <van-row justify="center">
      <van-col style="display: flex;flex-wrap: nowrap;">
        <van-divider dashed>{{data[0].name}}</van-divider>
        <van-divider dashed>{{data[0].stuId}}</van-divider>
      </van-col>
    </van-row>

    <van-notice-bar color="#1989fa" background="#ecf9ff">
      <template #left-icon>
        <van-icon name="success" />
      </template>
      任务：{{courses[selectedCourse].text}}
    </van-notice-bar>
  </div>

  <van-collapse v-model="activeCollapse" accordion>
    <van-collapse-item v-for="(item, index) in data" :key="index" :title="item.name" icon="description-o" v-show="item.course_name === courses[selectedCourse].text">
      <template #title>
        <span>{{item.task_name}}</span>
      </template>
      <template #value>
        <div class="score-status" :class="{ 'text-green': item.scoreStatus !== -1 }">{{ item.scoreStatus !== -1 ? item.scoreStatus : '未评分' }}</div>
      </template>
      <van-cell>
        <template #title>
          <span class="custom-title">完成情况：</span>
        </template>
        <template #value>
          <div class="submit-status" :class="{ 'text-green': item.submitStatus === '已提交', 'text-red': item.submitStatus === '未提交' }">{{ item.submitStatus }}</div>
        </template>
      </van-cell>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      selectedCourse: 0,
      projectType: 0,
      courses: [
        { text: '前端框架应用项目开发', value: 0 },
        { text: '专业技能综合实践(2024春季)', value: 1 },
        { text: '24春季进销存系统设计与实现', value: 2 },
        { text: '后端技术与项目开发', value: 3 },
        { text: '软件测试技术', value: 4 }
      ],
      projects: [
        { text: '全部', value: 0 },
        { text: '刷题', value: 1 },
        { text: '作品', value: 2 },
      ],
      activeCollapse: '',
      data: [
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"前端框架应用项目开发" ,task_name:'Vue3开发初体验' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"前端框架应用项目开发" ,task_name:'电影列表项目' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"前端框架应用项目开发" ,task_name:'Vue自动化测试' ,scoreStatus: 75, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"24春季进销存系统设计与实现" ,task_name:'库表设计' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"24春季进销存系统设计与实现" ,task_name:'员工管理' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"软件测试技术" ,task_name:'白盒测试-路径覆盖' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
        { name: '咖喱饭', class_name:'22软件3班' ,stuId:22002303 ,course_name:"专业技能综合实践(2024春季)" ,task_name:'填写实践计划' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
      ]
    };
  }
};
</script>

<style scoped>
.info-section {
  margin-bottom: 20px;
}

.score-status {
  font-weight: bold;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}
</style>
