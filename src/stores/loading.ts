import { defineStore } from 'pinia'

export const useLoading = defineStore('loading', () => {
  let loadingcontrol = ref(false)
  const refresh = () => {
    loadingcontrol.value = true
    // console.log('loadingcontrol', loadingcontrol.value)
    setTimeout(() => {
      loadingcontrol.value = false
    }, 500)
  }
  return { loadingcontrol, refresh }
})
