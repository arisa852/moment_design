<!-- LoginModal.vue -->
<script setup>
import { ref } from 'vue'

// 響應式數據
const form = ref({
  username: '',
  password: '',
  remember: false
})

// 方法
const handleLogin = () => {
  console.log('Login form:', form.value)
}

// 向父組件發送事件（關閉彈窗）
const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}
</script>



<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-black bg-opacity-50" @click="closeModal"></div>
    
    <!-- 彈窗內容 -->
    <div class="relative bg-white rounded-lg shadow-xl flex w-[900px] overflow-hidden">
      <!-- 左側圖片 -->
      <div class="w-[400px] bg-gray-100">
        <img 
          src="@/assets/images/login-bg.png" 
          alt="Login Background" 
          class="w-full h-full object-cover"
        >
      </div>
      
      <!-- 右側登入表單 -->
      <div class="flex-1 p-8">
        <!-- 關閉按鈕 -->
        <button 
          @click="closeModal" 
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- 登入表單 -->
        <div class="max-w-[400px] mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">登入帳號</h2>
          
          <!-- 帳號輸入 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">帳號</label>
            <input 
              type="text"
              v-model="form.username"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入帳號"
            >
          </div>
          
          <!-- 密碼輸入 -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">密碼</label>
            <input 
              type="password"
              v-model="form.password"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入密碼"
            >
          </div>
          
          <!-- 其他選項 -->
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center">
              <input 
                type="checkbox"
                v-model="form.remember"
                class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
              <span class="ml-2 text-sm text-gray-600">記住我</span>
            </label>
            <a href="#" class="text-sm text-blue-600 hover:text-blue-800">忘記密碼？</a>
          </div>
          
          <!-- 登入按鈕 -->
          <button 
            @click="handleLogin"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            登入
          </button>
          
          <!-- 註冊提示 -->
          <p class="mt-4 text-center text-sm text-gray-600">
            還沒有帳號？
            <a href="#" class="text-blue-600 hover:text-blue-800">立即註冊</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
 