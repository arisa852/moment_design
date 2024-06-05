<script>
import Banner from '@/assets/images/banner-1.png'
import Container from '@/assets/images/pic1.png'
import { ref } from 'vue';
export default {
  name: 'Banner',
  name:'container'
  


}
const loading = ref(true);

const handleClick = () => {
  loading.value = !loading.value;
};

</script>


<template>
  <main>
    <div class="banner">
    <div class="text-block">
      <h1>設計你的時刻</h1>
      <p>從今天起，化繁為簡</p>
    </div>
    <div class="image-block">
      <img src="@/assets/images/banner-1.png" alt="Banner">
    </div>
  </div>
  <div class="cards">
  <div style="padding: 20px;width: 100%;max-width: 1280px;margin:0 auto;" >
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card>
          <p style="font-size: 20px;line-height: 1.5em;font-weight: bold;text-align: center;">任何時刻的解決方案</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;" >開啟一個充滿可能性的世界，再也不會感到陷入困境。讓你的每一步都越走越踏實</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card >
          <p style="font-size: 16px;line-height: 1.5em;font-weight: bold;text-align: center;">逐步指南</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;">每個操作指南都提供了易於遵循的逐步說明，可幫助您自信地解決問題。</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <p style="font-size: 16px;line-height: 1.5em;font-weight: bold;text-align: center;">啟發並受到啟發</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;">加入我們充滿活力的學習者和創造者社群。創造一個知識共享和賦權的社群。</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</div>
<div class="container">
    <div class="image-container">
      <img src="@/assets/images/pic1.png" alt="Image" />
    </div>
    <div class="loading-card">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
   
<div class="card-container">
  <div class="image-container">
      <img src="@/assets/images/pic1.png" alt="Image" />
    </div>
    <div style="background: #ececec; padding: 30px">
    <a-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      
    </a-card>
  </div>
  <div style="background: #ececec; padding: 30px">
    <a-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
    
    </a-card>
  </div>


</div>

  </main>
</template>

<style scoped lang="scss">


h1{
  font-size: 40px;
  line-height: 1.5em;
}
p{
  font-size: 28px;
}
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E2E6E8;
  width: 100%;
  overflow: hidden;
 

  .text-block, .image-block {
    flex: 1;
    margin-top: 20px;
    margin-left: 150px;
    margin-right: 150px;
    padding:20px;
    
  }

  .image-block img {
    width: 100%;
   
   
  }
 .cards{
  background-color: #E2E6E8;

 }

 .container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
}

.image-container {
 
  display: flex;
  align-items: center;
  justify-content: center;

}

.image-container img{
  max-width: 100%;
  width: 100px;
}

.loading-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
 
}

.spinner {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}
.card-container{
  display: flex;
}




}


</style>