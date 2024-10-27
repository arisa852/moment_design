<script setup>
import { ref } from 'vue';
import LoginModal from '@/views/LoginModal.vue'; // 修改為正確的登入組件路徑

// 搜索功能
const value = ref('');
const onSearch = (searchValue) => {
  console.log('search:', searchValue);
};

// 登入彈窗控制
const isLoginModalVisible = ref(false);

const showLoginModal = () => {
  isLoginModalVisible.value = true;
};

const handleCloseLogin = () => {
  isLoginModalVisible.value = false;
};
</script>

<template>
  <div class="layout-container"> <!-- 添加外層容器 -->
    <header>
      <div class="head-content">
        <div class="left-content">
          <a-page-header 
            class="demo-page-header" 
            style="color: #fff;" 
            title="Moment-Design" 
            sub-title="專屬你的時刻，由你來設計" 
          />
        </div>
        <div class="center-content">
          <a-input-search 
            v-model:value="value" 
            placeholder="input search text" 
            style="width: 300px;"
            @search="onSearch" 
          />
        </div>
        <div class="right-content">
          <a-button 
            @click="showLoginModal" 
            key="1" 
            class="action-button"
          >
            登入
          </a-button>
          <a-button 
            key="2" 
            class="action-button"
          >
            EN
          </a-button>
          <a-button 
            key="3" 
            class="action-button"
          >
            白
          </a-button>
        </div>
      </div>
    </header>

    <main> <!-- 添加主要內容區域 -->
      <slot/>
    </main>

    <footer>
      <div class="imagesrc">
        <p>Freepik插圖資源</p>
      </div>
      <div class="ccsrc">
        <p>版權所有 © 2024 arisa</p>
      </div>
      <div class="srcicon">
      </div>
    </footer>

    <!-- 登入彈窗 -->
    <LoginModal 
      v-if="isLoginModalVisible" 
      @close="handleCloseLogin"
    />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 確保最小高度佔滿視窗 */
}

header {
  background-color: #a7e0cb;
  color: #7a7a7a;
  width: 100%;
  position: sticky; /* 可選：使header固定在頂部 */
  top: 0;
  z-index: 10;
}

.head-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1280px; /* 添加最大寬度 */
  margin: 0 auto; /* 居中對齊 */
}

.left-content {
  flex: 1;
  display: flex;
  align-items: center;
  color: #fff;
}

.center-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 20px; /* 使用gap替代margin-right */
}

/* 替換原來的按鈕樣式 */
.action-button {
  font-size: 16px;
}

main {
  flex: 1; /* 讓主要內容區域填充剩餘空間 */
}

footer {
  display: flex;
  background-color: #a7e0cb;
  color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.imagesrc,
.ccsrc p {
  font-size: 16px;
  line-height: 1.5em;
  margin: 0 10px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .head-content {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  .center-content {
    width: 100%;
  }

  .right-content {
    width: 100%;
    justify-content: center;
  }
}
</style>