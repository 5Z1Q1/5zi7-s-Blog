<template>
  <div class="secret-entrance">
    <h3>🎁 七夕惊喜</h3>
    <p>亲爱的小李同学，这里有一份特别的礼物等着你...</p>
    <div class="password-section">
      <input 
        v-model="password"
        type="password" 
        placeholder="请输入我们的秘密密码" 
        class="password-input"
        @keypress.enter="checkPassword"
      >
      <button @click="checkPassword" class="enter-button">进入</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')

function checkPassword() {
  const correctPassword = '20061228' // 特殊日期
  
  if (password.value === correctPassword) {
    // 密码正确，跳转到表白页面
    window.location.href = '/confession'
  } else {
    // 密码错误，提示用户
    alert('密码不对哦～再想想我们的特殊日子 💕')
    password.value = ''
  }
}
</script>

<style scoped>
.secret-entrance {
  background: linear-gradient(135deg, #fff5f5 0%, #ffeaa7 100%);
  border: 2px solid #fab1a0;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 5px 15px rgba(250, 177, 160, 0.3);
}

.secret-entrance h3 {
  color: #d63384;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.password-section {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.password-input {
  padding: 12px 16px;
  border: 2px solid #fab1a0;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 200px;
}

.password-input:focus {
  border-color: #d63384;
  box-shadow: 0 0 10px rgba(214, 51, 132, 0.3);
  transform: scale(1.02);
}

.enter-button {
  background: linear-gradient(135deg, #fab1a0 0%, #d63384 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.enter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(214, 51, 132, 0.4);
}

.enter-button:active {
  transform: translateY(0);
}

.hint {
  font-size: 0.9rem;
  color: #74b9ff;
  font-style: italic;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .password-section {
    flex-direction: column;
    align-items: center;
  }
  
  .password-input {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
}
</style>
