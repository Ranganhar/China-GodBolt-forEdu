import { defineStore } from 'pinia'

export const useEventBus = defineStore('bus', () => {
  const trigger = ref(false)

  return { trigger }
})
