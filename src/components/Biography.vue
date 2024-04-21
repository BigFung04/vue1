<template>
  <div class="biography-container">
    <h1 class="title">个人简介</h1>
    <h2 class="subtitle">Biography</h2>
    <div class="info">
      <div class="left-info">
        <p><strong>Name:</strong> 咖喱饭</p>
        <p><strong>Class:</strong> 22软件3班</p>
      </div>
      <div class="right-info">
        <p><strong>Tel:</strong> 46854654</p>
        <p><strong>E-mail:</strong> 4654644@163.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Biography'
}
</script>

<style scoped>
.biography-container {
  text-align: center;
  margin-top: 50px;
  background: linear-gradient(to bottom right, #ffa07a, #87ceeb);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 32px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  color: #555;
  margin-bottom: 20px;
}

.info {
  display: flex;
  border: 2px solid #26b3de;
  border-radius: 20px;
  overflow: hidden; 
}

.left-info, .right-info {
  flex: 1;
  padding: 20px;
}

.left-info {
  background-color: #87ceeb; 
  color: #fff; 
}

.right-info {
  background-color: #fff; 
}

.left-info p, .right-info p {
  margin: 0;
}

.left-info p:first-child, .right-info p:first-child {
  margin-top: 0;
}

.left-info p:last-child, .right-info p:last-child {
  margin-bottom: 0;
}
</style>
