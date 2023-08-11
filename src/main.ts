import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloabComponent from './components'
import './permission'
import { isHasButton } from './directive/has'

const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(ElementPlus, {
  locale: zhCn
})

app.use(gloabComponent)

isHasButton(app)

app.mount('#app')
