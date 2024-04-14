// import { defineStore } from 'pinia'
// import { ref, watch, reactive } from 'vue'
// import { useFetch } from '@vueuse/core'

export const useDataStore = defineStore('alldata', () => {
	const code = ref('')
	const version = ref('')
	const option = ref('')
	const compiler = ref('')
	//后续支持
	// const execution = ref('')
	// const optimization = ref('')
	// const LLVMIR = ref('')
	const AST = ref('')
	const pipe = ref([])
	const pipeline = ref([])
	const CFG = ref([])

	const fetchOptions = reactive({
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			code: code.value,
			version: version.value,
			option: option.value,
		}),
	})

	const fetchInstance = useFetch(
		'https://api.example.com/compile',
		fetchOptions,
		{
			immediate: false, // 不立即执行请求
		},
	)

	watch([code, version, option], async () => {
		// console.log('code:', code.value)
		// console.log('version:', version.value)
		// console.log('option:', option.value)
		if (fetchInstance.isFinished) {
			fetchOptions.body = JSON.stringify({
				code: code.value,
				version: version.value,
				option: option.value,
			})
			const response = await fetchInstance.execute()
			if (response.ok) {
				const data = await response.json()
				compiler.value = data.compiler
				// optimization.value = data.optimization
				// LLVMIR.value = data.LLVMIR
				AST.value = data.AST
				pipe.value = data.pipe
				pipeline.value = data.pipeline
				CFG.value = data.CFG
			}
		}
	})

	return {
		code,
		version,
		option,
		compiler,
		// optimization,
		// LLVMIR,
		AST,
		pipe,
		pipeline,
		CFG,
		isFinished: fetchInstance.isFinished,
	}
})
