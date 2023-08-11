/// <reference types="vite/client" />
/// <reference types="element-plus/global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'element-plus'
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'nprogress'