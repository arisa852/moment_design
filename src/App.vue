<script setup>
import Layout from '@/components/layout.vue'

import Login from './components/Login.vue'; 

const isLoginModalVisible = ref(false);

const showLoginModal = () => {
  isLoginModalVisible.value = true;
};



</script>


<template>
  <layout>
    <router-view />
  </layout>
</template>

<style scoped></style>




 














