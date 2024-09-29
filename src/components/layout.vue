
<script setup>

import { ref } from 'vue';
import LoginModal from '@/components/Login.vue'; // 确保路径正确

const isLoginModalVisible = ref(false);

const showLoginModal = () => {
  isLoginModalVisible.value = true;
};

</script>

<template>
  <header>
    <div class="head-content">
      <div class="left-content">
        <a-page-header class="demo-page-header" style="color: #fff;" title="Moment-Design" sub-title="專屬你的時刻，由你來設計" />
      </div>
      <div class="center-content">
        <a-input-search v-model:value="value" placeholder="input search text" style="width: 300px;"
          @search="onSearch" />
      </div>
      <div class="right-content">
        <a-button @click="showLoginModal" key="1" style="margin-right: 20px; font-size: 16px;">登入</a-button>
        <a-button key="2" style="margin-right: 20px; font-size: 16px;">EN</a-button>
        <a-button key="3" style="margin-right: 20px; font-size: 16px;">白</a-button>
      </div>
    </div>
  </header>
  <slot/>
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
</template>

<style scoped>
header {
  background-color: #a7e0cb;
  color: #7a7a7a;
  width: 100%;
}

.head-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
</style>