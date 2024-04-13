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
const textsize = ref('text-size-4')
watch(
	() => fontsize.value,
	() => {
		textsize.value = `text-size-${fontsize.value / 4}`
	},
)
//loading效果
let real_loading = ref(false)
// const loadingchoose = useLoading()
// const { loadingcontrol } = storeToRefs(loadingchoose)
// watch(
// 	() => loadingcontrol.value,
// 	() => {
// 		real_loading.value = loadingcontrol.value
// 		// console.log(loadingcontrol.value)
// 	},
// )

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

//默认编译参数
const compileroption = ref('')
const stdincontrol = ref(false)
const stdin = ref('')
const textarea = ref('')
const stdintoggle = async () => {
	stdincontrol.value = !stdincontrol.value
	await nextTick()
	stdincontrol.value ? stdin.value.focus() : ''
}

//单向绑定
const loading = useLoading()
watch(
	() => loading.loadingcontrol,
	() => {
		real_loading.value = true
		setTimeout(() => {
			real_loading.value = false
			//fake stdout
			stdoutvalue.value = textarea.value
		}, 1000)
	},
)
const stdoutvalue = ref('')

watchDebounced(
	textarea,
	() => {
		// loading.refresh()
		real_loading.value = true
		setTimeout(() => {
			real_loading.value = false
			//fake stdout
			stdoutvalue.value = textarea.value
		}, 1000)
	},
	{ debounce: 500, maxWait: 5000 },
)
watchDebounced(
	compileroption,
	() => {
		// loading.refresh()
		real_loading.value = true
		setTimeout(() => {
			real_loading.value = false
		}, 1000)
	},
	{ debounce: 500, maxWait: 5000 },
)
const version = ref('')
watchDebounced(
	version,
	() => {
		real_loading.value = true
		setTimeout(() => {
			real_loading.value = false
		}, 1000)
	},
	{ debounce: 500, maxWait: 5000 },
)


</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 各种按钮区域 -->
		<div class="flex bg-gray-100">
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

			<!-- <button
				ref="target"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
				dark="bg-transparent hover:bg-gray-500"
				title="Optimization"
			>
				<span
					class="i-majesticons:settings-cog h-6 w-6 text-black inline-block mt-1 bg-black"
				>
				</span>
			</button> -->
			<button
				ref="target"
				:class="
					stdincontrol
						? 'bg-gray-400 text-gray-600'
						: 'bg-gray-100 text-gray-600'
				"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
				dark="bg-transparent hover:bg-gray-500"
				title="std input"
				@click="stdintoggle"
			>
				<span
					class="i-iconamoon:enter-bold h-6 w-6 text-black inline-block mt-1 bg-black"
				>
				</span>
			</button>
			<button
				ref="target"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-400 p-2 text-gray-600"
				dark="bg-gray-700 text-gray-100"
				title="std output"
			>
				<span
					class="i-iconamoon:exit-bold h-6 w-6 text-black inline-block mt-1"
				>
				</span>
			</button>
		</div>
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
					placement="bottom"
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

		<el-input
			ref="stdin"
			v-if="stdincontrol"
			v-model="textarea"
			class="w-full mt-1"
			:rows="2"
			type="textarea"
			placeholder="Execution stdin..."
		/>
		<p :class="textsize" class="ml-4 mt-2">Program returned: 0</p>
		<p :class="textsize" class="ml-4">Program stdout:</p>
		<el-card class="w-full bg-green-50" shadow="hover" :class="textsize"
			><p :class="textsize">{{ stdoutvalue }}</p>
		</el-card>
	</div>
</template>

<style lang="scss" scoped>
.correct {
	background-image: url(../assets/img/correct.svg);
}
</style>
