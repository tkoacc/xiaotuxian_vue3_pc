import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value
      }
    })
  }
})
