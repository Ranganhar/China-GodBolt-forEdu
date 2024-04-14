<script setup lang="ts">
import panzoom from 'panzoom'

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()

const complier = ref(null)

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

const loading = useLoading()
let pz: any
let svg: any = []
let name: any = []
const svgzoom = ref(svg[0])
let image = ref(null)
const namedefault = ref(name[0])
const resetPosition = () => {
	if (pz) {
		pz = panzoom(
			svgzoom.value, // boundsPadding: 0.1,
		)
	}
}

watch(
	() => namedefault,
	() => {
		let order = name.indexOf(namedefault)
		if (order == -1) {
			svgzoom.value = svg[order]
		} else {
			console.log('Character not found in array1')
		}
	},
)
watch(
	() => DataStore.CFG,
	() => {
		for (let index = 0; index < DataStore.CFG.length; index++) {
			name[index] = DataStore.CFG[index].name
			svg[index] = DataStore.CFG[index].svg
		}
		if (pz) {
			pz = panzoom(svgzoom.value)
		}
	},
	{
		immediate: true,
	},
)

// const downloadSvg = () => {
// 	downloadAsSvg(svg)
// }
// const downloadAsSvg = () => {
// 	console.log(image.value)
// 	const svgData = new XMLSerializer().serializeToString(svg)
// 	const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
// 	const svgUrl = URL.createObjectURL(svgBlob)

// 	const a = document.createElement('a')
// 	a.href = svgUrl
// 	a.download = 'image.svg'
// 	a.click()
// }
// const downloadAsPng = async () => {
// 	const svgData = new XMLSerializer().serializeToString(svg)

// 	const canvas = document.createElement('canvas')
// 	const ctx = canvas.getContext('2d')
// 	const img = new Image()
// 	img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData)

// 	await new Promise((resolve) => {
// 		img.onload = () => {
// 			canvas.width = img.width
// 			canvas.height = img.height
// 			ctx.drawImage(img, 0, 0)
// 			resolve()
// 		}
// 	})
// 	const pngData = canvas.toDataURL('image/png')

// 	const a = document.createElement('a')
// 	a.href = pngData
// 	a.download = 'image.png'
// 	a.click()
// }

// const downloadPng = () => {
// 	downloadAsPng(svg)
// }
</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 第一层 -->

		<div
			class="bg-gray-100 optionchoose h-11 w-full flex border-b-gray-300 border-b-1 z-999"
		>
			<!-- 各种按钮区域 -->
			<el-select
				v-model="namedefault"
				filterable
				placeholder="function"
				size="large"
				class="!w-33 !mt-0.5"
			>
				<el-option
					v-for="item in name"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
			<button
				ref="target"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
				dark="bg-transparent hover:bg-gray-500"
				title="Reset View"
				@click="resetPosition"
			>
				<span class="i-carbon:zoom-pan h-5 w-5 text-black inline-block mt-1.7">
				</span>
			</button>
			<button
				ref="target"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
				dark="bg-transparent hover:bg-gray-500"
				title="Download as SVG"
			>
				<span
					class="i-teenyicons:svg-solid h-6 w-6 text-black inline-block mt-1 bg-black"
				>
				</span>
			</button>
			<button
				ref="target"
				class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
				dark="bg-transparent hover:bg-gray-500"
				title="Download as PNG"
			>
				<span
					class="i-teenyicons:png-solid h-6 w-6 text-black inline-block mt-1 bg-black"
				>
				</span>
			</button>
		</div>

		<div id="graph" class="w-full overflow-hidden h-full">
			{{ svgzoom }}
			<img
				src="../assets/img/test3.svg"
				alt="Description of SVG"
				ref="image"
				id="image"
			/>
		</div>
		<h1 v-if="real_loading" class="ml-15% font-mono text-size-5">
			Compiling...
		</h1>
		<el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
	</div>
</template>

<style lang="scss" scoped></style>
