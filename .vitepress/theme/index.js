import DefaultTheme from 'vitepress/theme'
import SecretEntrance from '../components/SecretEntrance.vue'
import PasswordProtected from '../components/PasswordProtected.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SecretEntrance', SecretEntrance)
    app.component('PasswordProtected', PasswordProtected)
  }
}
