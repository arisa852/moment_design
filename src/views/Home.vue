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
 
    <div class="bg-primaryGrey flex justify-center items-center py-40 px-5">
      <div class="w-52">
        <h1 class=" text-4xl font-bold">設計你的時刻</h1>
        <p class=" text-2xl font-normal">從今天起，化繁為簡</p>
      </div>
      <div class="content-images">
        <img src="@/assets/images/banner-1.png" alt="Banner">
      </div>
    </div>
    <div class="bg-primaryGrey">
      <div class="p-5 w-full container mx-auto">
        <a-row :gutter="16">
          <a-col :span="8" v-for="item in bannerImages" :key="item.id">
            <banner-card :image="getImageUrl(item.image)" :title="item.title" :desc="item.desc" />
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="py-[30px] bg-primaryGrey">
      <div class="flex items-center justify-center">
        <div class="w-[200px] h-[200px] rounded-full bg-themeColor overflow-hidden mr-5">
          <img src="@/assets/images/pic1.png" alt="Image" class="w-[200px] h-[200px] object-cover" />
        </div>
        <div class="border-secondaryGrey border border-solid bg-white p-4 rounded-lg flex items-center w-[600px]">
          <a-skeleton-image class="mr-10" />
          <a-skeleton avatar :paragraph="{ rows: 4 }" />
        </div>
      </div>
    </div>
    <div class="bg-primaryGrey seemore-container">
      <div class="left-column">
        <img src="../assets/images/moment1.svg" alt="moment">
      </div>
      <div class="right-column">
        <my-card v-for="item in cardInfo" :key="item.id" :image="getImageUrl(item.image)" :name="item.name"
          :title="item.title" :tags="item.tags" :date="item.date" :desc="item.desc" :comment-num="0" :like-num="0" />
      </div>
    </div>
  </main>
  <LoginModal v-if="isLoginModalVisible" @close="isLoginModalVisible = false" />

</template>

<style scoped>

.box-footer {
  display: flex;
  gap: 10px;
  color: #aaa;
  font-size: 0.9em;
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
  /* width: 100%; */
  padding: 30px 0;
}

.answer1,.step1,.design1{
  width: 80px;
  max-width: 100%;
  margin:10px auto;

}

.seemore-container{
    display: flex;

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








</style>