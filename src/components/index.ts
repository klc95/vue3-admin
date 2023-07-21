import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon.vue'

const components: { [name: string]: Component } = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(components).forEach(key => {
      app.component(key, components[key])
    })
  }
}