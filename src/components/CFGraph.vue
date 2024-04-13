<script setup lang="ts">
import panzoom from 'panzoom'
import { instance } from '@viz-js/viz'

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

const coderight = `int test(int a[], int b[], int c)
{
    float d = 2.3;
    int e = 2.4;
    if(c > 10)
    {
        e =  c + b[0];
    }
    else
    {
        e = -e;
        d = e + a[1];
    }
    return e;
}`

const loading = useLoading()
let pz
let svg = ''
const resetPosition = () => {
	if (pz) {
		pz = panzoom(svg)
	}
}
onMounted(async () => {
	var dot = `digraph "CFG for 'func' function" {
          label="CFG for 'func' function";
          Node0x145f10bb0 [shape=record,label="{%2:\\l  %3 = alloca i32, align 4\\l  %4 = alloca i32, align 4\\l  %5 = alloca i32, align 4\\l  %6 = alloca i32, align 4\\l  %7 = alloca i32, align 4\\l  %8 = alloca float, align 4\\l  %9 = alloca i32, align 4\\l  %10 = alloca i32, align 4\\l  %11 = alloca i32, align 4\\l  %12 = alloca i32, align 4\\l  store i32 %0, i32* %4, align 4\\l  store i32 %1, i32* %5, align 4\\l  store i32 1, i32* %7, align 4\\l  %13 = load i32, i32* %7, align 4\\l  %14 = icmp sgt i32 %13, 0\\l  br i1 %14, label %15, label %20\\l|{<s0>T|<s1>F}}"];
          Node0x145f10bb0:s0 -> Node0x145f11300;
          Node0x145f10bb0:s1 -> Node0x145f11350;
          Node0x145f11300 [shape=record,label="{%15:\\l\\l  store i32 1, i32* %9, align 4\\l  store i32 -1, i32* %10, align 4\\l  %16 = load i32, i32* %9, align 4\\l  %17 = load i32, i32* %10, align 4\\l  %18 = sdiv i32 %16, %17\\l  store i32 %18, i32* %6, align 4\\l  %19 = load i32, i32* %6, align 4\\l  store i32 %19, i32* %3, align 4\\l  br label %29\\l}"];
          Node0x145f11300 -> Node0x145f118f0;
          Node0x145f11350 [shape=record,label="{%20:\\l\\l  store i32 -1, i32* %11, align 4\\l  store i32 1, i32* %12, align 4\\l  %21 = load i32, i32* %11, align 4\\l  %22 = load i32, i32* %12, align 4\\l  %23 = sdiv i32 %21, %22\\l  %24 = load i32, i32* %4, align 4\\l  %25 = load i32, i32* %5, align 4\\l  %26 = mul nsw i32 %24, %25\\l  %27 = add nsw i32 %23, %26\\l  store i32 %27, i32* %6, align 4\\l  %28 = load i32, i32* %6, align 4\\l  store i32 %28, i32* %3, align 4\\l  br label %29\\l}"];
          Node0x145f11350 -> Node0x145f118f0;
          Node0x145f118f0 [shape=record,label="{%29:\\l\\l  %30 = load i32, i32* %3, align 4\\l  ret i32 %30\\l}"];
        }
` // 这里是你的DOT数据

	instance()
		.then((viz) => {
			svg = viz.renderSVGElement(dot)
			console.log(svg)
			svg.setAttribute('id', 'image')
			svg.setAttribute('ref', 'image')

			// svg.setAttribute('alt', 'Picture')
			// svg.setAttribute('class', 'opacity-1 h-full w-full')
			svg.setAttribute('style', 'height: 80%; width: 100%;')
			console.log(svg)

			document.getElementById('graph').appendChild(svg)
			pz = panzoom(svg)
		})
		.catch((error) => {
			console.error('Error:', error)
		})

	// const viewer = new Viewer(svg, {
	// 	inline: true,
	// 	button: false,
	// 	navbar: false,
	// 	toolbar: false,
	// 	title: false,
	// 	tooltip: false,
	// 	transition: false,
	// 	backdrop: false,
	// 	container: document.getElementById('graph'),
	// 	fullscreen: false,
	// })
	// console.log(viewer)
})
const image = ref(null)

const downloadSvg = () => {
	downloadAsSvg(image.value)
}
const downloadAsSvg = () => {
	const svgData = new XMLSerializer().serializeToString(image.value)
	const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
	const svgUrl = URL.createObjectURL(svgBlob)

	const a = document.createElement('a')
	a.href = svgUrl
	a.download = 'image.svg'
	a.click()
}
const downloadAsPng = async () => {
	const svgData = new XMLSerializer().serializeToString(image.value)

	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')
	const img = new Image()
	img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData)

	await new Promise((resolve) => {
		img.onload = () => {
			canvas.width = img.width
			canvas.height = img.height
			ctx.drawImage(img, 0, 0)
			resolve()
		}
	})
	const pngData = canvas.toDataURL('image/png')

	const a = document.createElement('a')
	a.href = pngData
	a.download = 'image.png'
	a.click()
}

const downloadPng = () => {
	downloadAsPng(image.value)
}
</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 第一层 -->

		<div
			class="bg-gray-100 optionchoose h-11 w-full flex justify-between border-b-gray-300 border-b-1 z-999"
		>
			<!-- 各种按钮区域 -->

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
			<button @click="downloadSvg">Download as SVG</button>
			<button @click="downloadPng">Download as PNG</button>
		</div>

		<div id="graph" class="w-full overflow-hidden h-full" v-if="!real_loading">
			<!-- <img
				id="image"
				src="../assets/img/correct.svg"
				alt="Picture"
				class="opacity-0 h-0 w-0"
				v-if="!real_loading"
			/> -->
		</div>
		<h1 v-if="real_loading" class="ml-15% font-mono text-size-5">
			Compiling...
		</h1>
		<el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
	</div>
</template>

<style lang="scss" scoped></style>
