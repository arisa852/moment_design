<script setup>
import { ref } from 'vue';

// 模拟的用户数据
const validUser = {
  email: 'JohnDoe@example.com',
  password: 'password123'
};

// 组件状态
const isVisible = ref(true);
const email = ref('');
const password = ref('');


const closeModal = () => {
  isVisible.value = false;
};


const login = () => {
  if (email.value === validUser.email && password.value === validUser.password) {
    alert('登錄成功');
    closeModal();
  } else {
    alert('密碼錯誤');
  }
};



</script>
<template>
  <div class="login" v-if="isVisible">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <div class="modal-left">
        <h2>Welcome back</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="JohnDoe@example.com" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Minimum 6 characters" required />
          </div>
          <button type="submit" class="login-button">Log in</button>
        </form>
        <p class="signup-text">Don't have an account yet? <a href="#" @click="signUp">Sign up</a></p>
      </div>
      <div class="modal-right">
        <img src="https://via.placeholder.com/300x400" alt="Illustration" />
      </div>
    </div>
  </div>

</template>
<style scoped>

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal-content {
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  max-width: 800px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-left {
  padding: 40px;
  flex: 1;
}

.modal-left h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #a7e0cb;
 color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signup-text {
  margin-top: 20px;
  text-align: center;
}

.signup-text a {
  color: #4c7e6c;
  text-decoration: none;
}

.modal-right {
  background-color: #a7e0cb;
  display: flex;q
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.modal-right img {
  max-width: 100%;
  height: auto;
}

</style>