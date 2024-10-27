<script setup>

import { ref } from 'vue';
import BannerCard from '@/components/Bannercard.vue'
import MyCard from '@/components/myCard.vue'

const bannerImages = ref([
  {
    id: 1,
    image: '2991.png',
    title: '任何時刻的解決方案',
    desc: '開啟一個充滿可能性的世界，再也不會感到陷入困境。讓你的每一步都越走越踏實'
  },
  {
    id: 2,
    image: '3001.png',
    title: '逐步指南',
    desc: '每個操作指南都提供了易於遵循的逐步說明，可幫助您自信地解決問題。'
  },
  {
    id: 3,
    image: '3011.png',
    title: '啟發並受到啟發',
    desc: '加入我們充滿活力的學習者和創造者社群。創造一個知識共享和賦權的社群。'
  }
])
const cardInfo = [
  {
    id: 1,
    image: '2991.png',
    name: 'Jun',
    date: 'Apr 9',
    title: '把貓變成DJ',
    desc: '訓練他們對聲音有反應',
    tags: ['貓', '聲音', 'DJ'],
    commentNum: 0,
    likeNum: 0
  },
  {
    id: 2,
    image: '2991.png',
    name: 'Jun',
    date: 'Apr 9',
    title: '把貓變成DJ',
    desc: '訓練他們對聲音有反應',
    tags: ['貓', '聲音', 'DJ'],
    commentNum: 0,
    likeNum: 0
  }
]
const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}



</script>


<template>
  <main>
    <!-- 第一個區塊 -->
    <div class="bg-primaryGrey">
      <div class="container mx-auto max-w-screen-xl px-5">
        <div class="flex justify-center items-center">
          <div>
            <h1 class="text-2xl font-bold">設計你的時刻</h1>
            <p class="text-xl font-normal">從今天起，化繁為簡</p>
          </div>
          <div class="content-images">
            <img src="@/assets/images/banner-1.png" alt="Banner">
          </div>
        </div>
      </div>
    </div>

    <!-- 第二個區塊 -->
    <div class="bg-primaryGrey">
      <div class="container mx-auto max-w-screen-xl px-5">
        <a-row :gutter="16">
          <a-col :span="8" v-for="item in bannerImages" :key="item.id">
            <banner-card :image="getImageUrl(item.image)" :title="item.title" :desc="item.desc" />
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 第三個區塊 -->
    <div class="bg-primaryGrey">
  <div class="container mx-auto max-w-screen-xl px-5">
    <div class="flex items-center justify-center py-[30px]">
      <!-- 左側骰子圖 -->
      <div class="w-[200px] h-[200px] rounded-full bg-themeColor overflow-hidden mr-8">
        <img src="@/assets/images/pic1.png" alt="Image" class="w-full h-full object-cover" />
      </div>
      
      <!-- 右側骨架屏 - 使用更合理的寬度配置 -->
      <div class="w-[1000px] border border-secondaryGrey bg-white p-6 rounded-lg flex items-start">
        <!-- 左側圖片骨架屏 -->
        <div class="w-[240px] mr-8 flex-shrink-0">
          <a-skeleton-image />
        </div>
        
        <!-- 右側文字骨架屏 -->
        <div class="flex-1">
          <a-skeleton 
            avatar 
            :paragraph="{ 
              rows: 4,
              width: ['90%', '80%', '70%', '60%']
            }" 
          />
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- seemore-container 區塊 -->
    <div class="bg-primaryGrey">
  <div class="container mx-auto max-w-screen-xl px-5">
    <div class="flex gap-5 py-5">
      <div class="flex-1">
        <img src="../assets/images/moment1.svg" alt="moment" class="w-full h-auto">
      </div>
      <div class="flex-1 flex flex-col space-y-5"> <!-- 添加 flex flex-col gap-5 -->
        <my-card 
          v-for="item in cardInfo" 
          :key="item.id" 
          :image="getImageUrl(item.image)" 
          :name="item.name"
          :title="item.title" 
          :tags="item.tags" 
          :date="item.date" 
          :desc="item.desc" 
          :comment-num="0" 
          :like-num="0" 
        />
      </div>
    </div>
  </div>
</div>
  </main>
  <LoginModal v-if="isLoginModalVisible" @close="isLoginModalVisible = false" />
</template>

<style scoped>

.content-images {
  width: 500px;
  object-fit: cover;
  margin-top: 100px;
  margin-bottom: 40px;
}

.answer1,
.step1,
.design1 {
  width: 80px;
  max-width: 100%;
  margin: 10px auto;
}

/* 移除舊的 seemore-container 相關樣式，因為已經使用 Tailwind 類替代 */

.box-footer {
  display: flex;
  gap: 10px;
  color: #aaa;
  font-size: 0.9em;
}







</style>