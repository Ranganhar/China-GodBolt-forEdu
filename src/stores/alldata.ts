// import { defineStore } from 'pinia'
// import { ref, watch, reactive } from 'vue'
// import { useFetch } from '@vueuse/core'

export const useDataStore = defineStore('alldata', () => {
  const code = ref('')
  const version = ref('')
  const option = ref('')
  const compiler = ref('')
  const execution = ref('')
  //后续支持
  // const execution = ref('')
  // const optimization = ref('')
  // const LLVMIR = ref('')
  const AST = ref('')
  const pipe = ref([])
  const pipeline = ref([])
  const CFG = ref([
    {
      name: '111',
      // svg: 'aaa',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g fill="#888888" clip-path="url(#fluentEmojiHighContrastBentoBox0)"><path d="M12.685 10.67h.04c.65-.03 1.24-.36 1.65-.87c.38-.49.98-.8 1.65-.8c.67 0 1.26.31 1.65.8c.4.51 1 .84 1.65.87h.04c1.04.07 1.88.91 1.96 1.96c.01.04.01.09.01.13v.05l8.31 4.08a.71.71 0 0 1 .4.73v5.35c0 .26-.13.52-.4.65l-12.41 6.1a2.768 2.768 0 0 1-1.235.277v-5.44a2.764 2.764 0 0 1-1.185-.277l-12.41-6.1a.704.704 0 0 1-.4-.56a.71.71 0 0 1 .4-.73l1.85-.908a3.991 3.991 0 0 1-1.057-1.709l-1.67.82a2.707 2.707 0 0 0-1.523 2.605v5.272a2.717 2.717 0 0 0 1.518 2.445l12.41 6.1l.007.003a4.777 4.777 0 0 0 4.17 0l12.412-6.1c1.049-.51 1.523-1.531 1.523-2.448v-5.272a2.707 2.707 0 0 0-1.524-2.606l-7.413-3.638a4.117 4.117 0 0 0-3.705-2.784a.269.269 0 0 1-.154-.104l-.01-.011A4.096 4.096 0 0 0 16.026 7a4.08 4.08 0 0 0-3.214 1.554c-.074.088-.137.11-.165.116l-.075.003a4.072 4.072 0 0 0-2.928 1.5c.67.298 1.164.916 1.29 1.661a2.103 2.103 0 0 1 1.752-1.164"/><path d="M5.485 15.67a2.995 2.995 0 0 1-1.374-1.845a2.927 2.927 0 0 1-.086-.705v-.91c0-.67.54-1.23 1.22-1.23c.68 0 1.23.55 1.23 1.23v.91c0 .28.23.51.51.51s.51-.23.51-.51v-.957A1.245 1.245 0 0 1 9.1 11.035c.502.155.866.622.866 1.175v.91a2.943 2.943 0 0 1-.763 1.976l-.007.008a5.728 5.728 0 0 1-.126.131c-.17.166-.36.313-.564.435l.003.017l.004.02c.015.09.023.185.023.273l.003.129c.033.64.308 1.216.736 1.638a2.472 2.472 0 0 0 1.741.713c.06 0 .119.003.177.01l.006.001c.422.051.792.276 1.037.6l-2.15 1.059c-.28.14-.62.14-.9 0l-3.059-1.506a5.524 5.524 0 0 1-.671-2.644c0-.11.01-.21.03-.31m11.834-3.35a2.488 2.488 0 0 0-.605.25c-.42.25-.95.25-1.37 0a2.267 2.267 0 0 0-.71-.278a2.345 2.345 0 0 0-.67-.042a2.384 2.384 0 0 0-1.973 1.345l-.015.03a2.331 2.331 0 0 0-.212.825a2.4 2.4 0 0 0 .028.577l3.742 1.843c.28.14.62.14.9 0l3.84-1.89a2.406 2.406 0 0 0-.179-1.325a2.384 2.384 0 0 0-2.74-1.344z"/><path fill-rule="evenodd" d="m25.065 16.29l2.41 1.18c.2.1.2.38 0 .49l-10.9 5.33c-.28.14-.62.14-.9 0l-3.47-1.71c2.76-4.27 7.55-6.72 12.86-5.29m-4.7.8l.36-.46c.08-.1.23-.12.33-.04c.1.08.12.23.04.33l-.36.46c-.08.1-.23.12-.33.04a.237.237 0 0 1-.04-.33m2.41.34l.57.13c.13.03.25-.05.28-.18a.231.231 0 0 0-.18-.28l-.57-.13a.231.231 0 0 0-.28.18c-.02.12.06.25.18.28m-2.97 1.02a.237.237 0 1 0-.07.47l.58.09a.237.237 0 1 0 .07-.47zm-.54 2.2a.235.235 0 1 0 .43.19l.24-.53c.05-.12 0-.26-.12-.31c-.12-.05-.25 0-.31.12zm-1.79 1.07c.13.03.25-.05.28-.18a.231.231 0 0 0-.18-.28l-.57-.13a.231.231 0 0 0-.28.18c-.03.12.05.25.18.28zm5.29-2.25l.41-.41c.09-.09.09-.24 0-.33a.235.235 0 0 0-.33 0l-.41.41c-.09.09-.09.24 0 .33c.09.09.24.09.33 0m-4.68-1.37l.41-.41c.09-.09.09-.24 0-.33a.235.235 0 0 0-.33 0l-.41.41c-.09.09-.09.24 0 .33c.09.09.24.09.33 0m7.99-.24l-.47-.35a.237.237 0 0 0-.33.04c-.08.1-.06.25.04.33l.46.36c.1.08.25.06.33-.04c.09-.11.07-.26-.03-.34m-9.66 1.88l.44-.38c.1-.08.11-.23.03-.33a.236.236 0 0 0-.33-.03l-.44.38c-.1.08-.11.23-.03.33s.23.11.33.03m-2.27 1.18l.22.54c.05.12.19.18.31.13a.24.24 0 0 0 .13-.31l-.22-.54a.24.24 0 0 0-.31-.13c-.13.06-.18.2-.13.31" clip-rule="evenodd"/></g><defs><clipPath id="fluentEmojiHighContrastBentoBox0"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></g></svg>`,
    },
    {
      name: '222',
      svg: 'bbb',
    },
    {
      name: '333',
      svg: 'ccc',
    },
  ])
  const isFinished = ref(false)

  const fetchOptions = reactive({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code: code.value,
      version: version.value,
      option: option.value,
    }),
  })

  watch([code, version, option], async () => {
    // console.log('code:', code.value)
    // console.log('version:', version.value)
    // console.log('option:', option.value)

    fetchOptions.body = JSON.stringify({
      code: code.value,
      version: version.value,
      option: option.value,
    })

    const fetchInstance = useFetch(
      'http://47.109.200.112/receive_string',
      fetchOptions,
      {
        immediate: false, // 不立即执行请求
      },
    )

    const response = await fetchInstance.execute()
    isFinished.value = fetchInstance.isFinished
    if (response.ok) {
      const data = await response.json()
      compiler.value = data.source_code
      // optimization.value = data.optimization
      // LLVMIR.value = data.LLVMIR
      AST.value = data.ast
      pipe.value = data.pipe
      pipeline.value = data.pipeline
      CFG.value = data.graph
      execution.value = data.exe
    }
  })

  return {
    code,
    version,
    option,
    compiler,
    // optimization,
    // LLVMIR,
    execution,
    AST,
    pipe,
    pipeline,
    CFG,
    isFinished,
  }
})
