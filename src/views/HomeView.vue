<script setup>

import Container from '@/assets/images/pic1.png'
import { ref } from 'vue';
import container from '@/assets/images/moment1.svg'







</script>


<template>
  <main>
    <div class="container">
    <div class="flex justly-center items-center py-40 ">
    <div class=" w-52">
      <h1 class=" text-4xl font-bold">設計你的時刻</h1>
      <p class=" text-2xl font-normal">從今天起，化繁為簡</p>
    </div>
    <div class="content-images">
      <img src="@/assets/images/banner-1.png" alt="Banner">
    </div>
  </div>
  </div>
  <div class="bg-backgroundColor">
  <div style="padding: 20px;width: 100%;max-width: 1280px;margin:0 auto;" >
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card>
          <img class="answer1" src="../assets/images/2991.png" alt="img1">
          <p style="font-size: 20px;line-height: 1.5em;font-weight: bold;text-align: center;">任何時刻的解決方案</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;" >開啟一個充滿可能性的世界，再也不會感到陷入困境。讓你的每一步都越走越踏實</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card >
          <img  class="step1" src="../assets/images/3001.png" alt="img2">
          <p style="font-size: 16px;line-height: 1.5em;font-weight: bold;text-align: center;">逐步指南</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;">每個操作指南都提供了易於遵循的逐步說明，可幫助您自信地解決問題。</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <img  class="design1" src="../assets/images/3011.png" alt="img3">
          <p style="font-size: 16px;line-height: 1.5em;font-weight: bold;text-align: center;">啟發並受到啟發</p>
          <p style="font-size: 16px;line-height: 1.5em;text-align: center;">加入我們充滿活力的學習者和創造者社群。創造一個知識共享和賦權的社群。</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</div>
<div class="next-container">
<div class="container-cards">
    <div class="image-container">
      <img src="@/assets/images/pic1.png" alt="Image" />
    </div>
    <div class="loading-card">
      <p>Loading...</p>
    </div>
  </div>
</div>
<div class="seemore-container">
        <div class="left-column">
            <img src="../assets/images/moment1.svg" alt="moment">
        </div>
        <div class="right-column">
            <div class="box">
                <div class="box-header">
                    <img src="" alt="avatar" class="avatar">
                    <div class="header-info">
                        <span class="username">Jun</span>
                        <span class="date">Apr 9</span>
                    </div>
                </div>
                <div class="box-content">
                    <h2>把貓變成DJ</h2>
                    <p>訓練他們對聲音有反應</p>
                    <div class="tags">
                        <span class="tag">貓</span>
                        <span class="tag">聲音</span>
                        <span class="tag">DJ</span>
                    </div>
                </div>
                <div class="box-footer">
                    <span>0</span> <span>留言</span> <span>0</span> <span>喜歡</span>
                </div>
            </div>
            <div class="box">
                <div class="box-header">
                    <img src="" alt="avatar" class="avatar">
                    <div class="header-info">
                        <span class="username">Ray Huang</span>
                        <span class="date">Jan 12</span>
                    </div>
                </div>
                <div class="box-content">
                    <h2>dwefdw</h2>
                    <p>wefwe</p>
                    <div class="tags">
                        <span class="tag">wefw</span>
                        <span class="tag">efwefwe</span>
                    </div>
                </div>
                <div class="box-footer">
                    <span>2</span> <span>留言</span> <span>1</span> <span>喜歡</span>
                </div>
            </div>
        </div>
    </div>



  </main>
</template>

<style scoped lang="css">


.container {
  display: flex;
  align-items: center;
  justify-content: center;
   margin: 0px auto;
   background-color: #E2E6E8;

}

.content-images{
  width:500px;
  object-fit: cover;
  margin-top: 100px;
  margin-bottom: 40px;

}

.next-container{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 30px 0;
}

.container-cards{
  display: flex;
  max-width: 1280px;
  animation: shimmer 1.5s infinite linear;
  

 
}

.answer1,.step1,.design1{
  width: 80px;
  max-width: 100%;
  margin:10px auto;

}



.image-container {
  margin: 20px 0;
  border: 10px solid #59859C; ;
  border-radius: 50%;
  background-color: #59859C; ;
  

 
}

.image-container img{
  max-width:100%;
  width:200px;

}

.loading-card {
  width: 100%;
  padding: 20px 0;
 margin-left: 20px;
  border: 1px solid #E2E6E8;
  border-radius: 30px;
  background: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%);
  padding: 16px;
 
}

.seemore-container{
    display: flex;
    max-width: 1280px;
    padding: 20px;
    box-sizing: border-box;
}

.left-column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.left-column img {
    max-width: 100%;
    width: 500px;
    object-fit: cover;
    border-radius: 8px;
}

.right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box-header {
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.header-info {
    display: flex;
    flex-direction: column;
}

.username {
    font-weight: bold;
}

.date {
    color: #aaa;
    font-size: 0.8em;
}

.box-content h2 {
    margin: 0;
    font-size: 1.2em;
}

.box-content p {
    margin: 5px 0;
    color: #666;
}

.tags {
    display: flex;
    gap: 5px;
}

.tag {
    background-color: #e0e0e0;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8em;
}

.box-footer {
    display: flex;
    gap: 10px;
    color: #aaa;
    font-size: 0.9em;
}








</style>