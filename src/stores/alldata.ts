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
      name: 'main',
      svg: '',
    },
    {
      name: 'test',
      svg: '',
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
