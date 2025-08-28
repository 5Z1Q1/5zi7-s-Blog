import DefaultTheme from 'vitepress/theme'
import SecretEntrance from '../components/SecretEntrance.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SecretEntrance', SecretEntrance)
  }
}
