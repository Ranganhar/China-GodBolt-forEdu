<script setup lang="ts">
const complier = ref(null)
let fontsize = ref(16)
const sizeoptions = [
	8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
	28, 29, 30,
]
const changeFontsize = (sizeoption: any) => {
	fontsize.value = sizeoption
}
//loading效果
let real_loading = ref(false)
const loadingchoose = useLoading()
const { loadingcontrol } = storeToRefs(loadingchoose)
watch(
	() => loadingcontrol.value,
	() => {
		real_loading.value = loadingcontrol.value
		// console.log(loadingcontrol.value)
	},
)

const loadingsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0"/></svg>`

const loadingicon = ref(null)

const value = ref('')
const options = [
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},

	{
		value: 'x86-64 clang 12.1.0',
		label: 'x86-64 clang 12.1.0',
	},
	{
		value: 'x86-64 clang 12.0.9',
		label: 'x86-64 clang 12.0.9',
	},
]
const coderight = `define dso_local i32 @test(int*, int*, int)(i32* %0, i32* %1, i32 %2) #0 {
  %4 = alloca i32*, align 8
  %5 = alloca i32*, align 8
  %6 = alloca i32, align 4
  %7 = alloca float, align 4
  %8 = alloca i32, align 4
  store i32* %0, i32** %4, align 8
  store i32* %1, i32** %5, align 8
  store i32 %2, i32* %6, align 4
  store float 0x4002666660000000, float* %7, align 4
  store i32 2, i32* %8, align 4
  %9 = load i32, i32* %6, align 4
  %10 = icmp sgt i32 %9, 10
  br i1 %10, label %11, label %17

11:
  %12 = load i32, i32* %6, align 4
  %13 = load i32*, i32** %5, align 8
  %14 = getelementptr inbounds i32, i32* %13, i64 0
  %15 = load i32, i32* %14, align 4
  %16 = add nsw i32 %12, %15
  store i32 %16, i32* %8, align 4
  br label %26

17:
  %18 = load i32, i32* %8, align 4
  %19 = sub nsw i32 0, %18
  store i32 %19, i32* %8, align 4
  %20 = load i32, i32* %8, align 4
  %21 = load i32*, i32** %4, align 8
  %22 = getelementptr inbounds i32, i32* %21, i64 1
  %23 = load i32, i32* %22, align 4
  %24 = add nsw i32 %20, %23
  %25 = sitofp i32 %24 to float
  store float %25, float* %7, align 4
  br label %26

26:
  %27 = load i32, i32* %8, align 4
  ret i32 %27
}


attributes #0 = { noinline nounwind optnone uwtable mustprogress "disable-tail-calls"="false" "frame-pointer"="all" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" "unsafe-fp-math"="false" "use-soft-float"="false" }`

onBeforeMount(() => {
	version.value = localStorage.getItem('version') || 'x86-64 clang 12.0.0'
	compileroption.value = localStorage.getItem('option') || ''
	localStorage.setItem('version', version.value)
	localStorage.setItem('option', compileroption.value)
})

//默认编译参数
const compileroption = ref('')
const loading = useLoading()
watchDebounced(
	compileroption,
	() => {
		loading.refresh()
		DataStore.option = compileroption.value
		localStorage.setItem('option', compileroption.value)
	},
	{ debounce: 500, maxWait: 5000 },
)
const version = ref('')
watchDebounced(
	version,
	() => {
		loading.refresh()
		DataStore.version = version.value
		localStorage.setItem('version', version.value)
	},
	{ debounce: 500, maxWait: 5000 },
)

const addExecution = inject('AddExecution')
const addOptimization = inject('AddOptimization')
const addAST = inject('AddAbstractTree')
const addLLVMIR = inject('AddLLVMIR')
const addOptPipeline = inject('AddPipeline')
const addCFG = inject('AddCFG')

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()
</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 第一层 -->
		<div class="bg-gray-100 optionchoose h-10 w-full flex">
			<!-- 语言选择 -->
			<div
				name="languageoption"
				class="rounded-lg bg-light-100 h-full w-42 border-1 cursor-pointer bord text-size-4 text-color-#343a40"
			>
				<el-select
					v-model="version"
					filterable
					placeholder="x86-64 clang 12.0.0"
					size="large"
					class="!w-65"
				>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</div>

			<!-- 加载符号 -->
			<div
				v-loading="real_loading"
				:element-loading-svg="loadingsvg"
				element-loading-svg-view-box="-10, -10, 50, 50"
				class="rounded-lg ml-23 !p-2 bg-light-100 h-full w-10 border-1 cursor-pointer"
			>
				<div
					:class="real_loading ? '' : 'correct'"
					class="bg-contain bg-no-repeat h-6 w-6"
				></div>
			</div>

			<!-- 编译参数 -->
			<el-input
				v-model="compileroption"
				class="!w-full"
				size="large"
				placeholder="Compiler options"
			/>
		</div>
		<div class="bg-gray-100 optionchoose h-11 w-full flex justify-between">
			<!-- 各种按钮区域 -->
			<div class="flex">
				<Optionchoose>
					<template #up>
						<div
							class="i-ri:font-family text-black w-5 h-5 inline-block ml--5 mt-1.7"
						></div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 mt--14 ml-5 inline"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</template>
					<template #down>
						<div
							class="absolute w-11 overflow-y-scroll overflow-x-hidden h-111 bg-light-100 shadow-lg divide-y divide-gray-100"
						>
							<span
								v-for="sizeoption of sizeoptions"
								:key="sizeoption"
								:class="
									fontsize === sizeoption
										? 'bg-gray-100 text-gray-800 dark:bg-gray-400'
										: ''
								"
								class="text-center block cursor-pointer text-lg border-b-2 text-gray-500 hover:text-gray-90 hover:bg-gray-100"
								dark="text-light-500 hover:text-light-900 hover:bg-gray-400"
								@click="changeFontsize(sizeoption)"
							>
								{{ sizeoption }}
							</span>
						</div>
					</template></Optionchoose
				>

				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="Optimization"
					@click="addExecution"
				>
					<span
						class="i-heroicons:cpu-chip-20-solid h-6 w-6 text-black inline-block mt-1 bg-black"
					>
					</span>
				</button>
				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="Optimization"
					@click="addOptimization"
				>
					<span
						class="i-icon-park-solid:optimize h-6 w-6 text-black inline-block mt-1 bg-black"
					>
					</span>
				</button>
				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="AST"
					@click="addAST"
				>
					<span class="i-bx:bxs-leaf h-6 w-6 text-black inline-block mt-1">
					</span>
				</button>
				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="LLVM IR"
					@click="addLLVMIR"
				>
					<span
						class="i-game-icons:dragon-head h-6 w-6 text-black inline-block mt-1"
					>
					</span>
				</button>

				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="Opt Pipeline"
					@click="addOptPipeline"
				>
					<span
						class="i-gravity-ui:pipeline h-6 w-6 text-black inline-block mt-1"
					>
					</span>
				</button>
				<button
					ref="target"
					class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
					dark="bg-transparent hover:bg-gray-500"
					title="Control Flow Graph"
					@click="addCFG"
				>
					<span
						class="i-tabler:arrows-exchange-2 h-6 w-6 text-black inline-block mt-1"
					>
					</span>
				</button>
			</div>
		</div>
		<monacoEditor
			:initvalue="coderight"
			:fontsize="fontsize"
			:permit="true"
			
			v-if="!real_loading"
		></monacoEditor>
		<h1 v-if="real_loading" class="ml-15% font-mono text-size-5">
			Compiling...
		</h1>
		<el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
	</div>
</template>

<style lang="scss" scoped>
.correct {
	background-image: url(../assets/img/correct.svg);
}
</style>
