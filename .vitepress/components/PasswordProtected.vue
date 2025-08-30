<template>
  <div class="password-protected">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="password-section">
      <input 
        v-model="inputPassword"
        type="password" 
        :placeholder="placeholder"
        class="password-input"
        @keypress.enter="checkPassword"
      >
      <button @click="checkPassword" class="enter-button">{{ buttonText }}</button>
    </div>
    <p v-if="hint" class="hint">{{ hint }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义组件的 props
const props = defineProps({
  // 必需的密码
  password: {
    type: String,
    required: true
  },
  // 验证成功后跳转的路径
  redirectTo: {
    type: String,
    required: true
  },
  // 可选的自定义内容
  title: {
    type: String,
    default: '🔐 输入密码'
  },
  description: {
    type: String,
    default: '请输入正确的密码来访问隐藏内容...'
  },
  placeholder: {
    type: String,
    default: '请输入密码'
  },
  buttonText: {
    type: String,
    default: '进入'
  },
  hint: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: '密码不正确，请重试 🤔'
  }
})

const inputPassword = ref('')

function checkPassword() {
  if (inputPassword.value === props.password) {
    // 密码正确，跳转到指定页面
    window.location.href = props.redirectTo
  } else {
    // 密码错误，提示用户
    alert(props.errorMessage)
    inputPassword.value = ''
  }
}
</script>

<style scoped>
.password-protected {
  background: linear-gradient(135deg, #fff5f5 0%, #ffeaa7 100%);
  border: 2px solid #fab1a0;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 5px 15px rgba(250, 177, 160, 0.3);
}

.password-protected h3 {
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
