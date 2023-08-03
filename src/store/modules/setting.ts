import { defineStore } from 'pinia'
import { Names } from '../store-namespace'

const useLayOutSettingStore = defineStore(Names.SettingStore, {
  state: () => {
    return {
      fold: false,
      refresh: false,
    }
  },
})

export default useLayOutSettingStore
