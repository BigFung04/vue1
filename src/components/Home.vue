<template>
  <div class="home-container">
    <h1>主页</h1>
    <h2 class="subtitle">Homepage</h2>
    <el-image src="https://codelover.club/files/stutasks/userID_767/currNo_43/FiHNsMxsJUqhG0w0EPljRts9s4XX.png" alt="" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { ElImage } from 'element-plus';
import { Image } from 'vant';

export default {
  name: 'Home',
  components: {
    ElImage,
    Image
  },
  setup() {
    const isMobile = ref(false);
    const imageComponent = ref(null);

    onMounted(() => {
      checkDeviceType();
      window.addEventListener('resize', checkDeviceType);
    });

    const checkDeviceType = () => {
      isMobile.value = window.innerWidth <= 768;
      imageComponent.value = isMobile.value ? Image : ElImage;
    };

    return {
      isMobile,
      imageComponent
    };
  }
}
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
  background: linear-gradient(to bottom right, #ffa07a, #87ceeb); 
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 32px;
  color: #fff;
}

.subtitle {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}
</style>
