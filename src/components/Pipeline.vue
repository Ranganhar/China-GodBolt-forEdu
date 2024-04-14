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

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()
const choosepipeline = ref('')
const handleSelect = (index: any) => {
	choosepipeline.value = DataStore.pipeline[index]
}
watch(
	() => DataStore.pipe,
	() => {
		menuItems.value = DataStore.pipe
	},
)
const menuItems = ref(['Navigator Two', 'Navdsdigator', 'Navigator Four'])
</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 第一层 -->

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
			</div>
		</div>

		<splitpanes class="default-theme h-full w-full" :dbl-click-splitter="false">
			<pane size="20" min-size="10" max-size="35">
				<div class="ml-2">Passes:</div>
				<el-menu class="h-full" @select="handleSelect">
					<el-menu-item
						v-for="(item, index) in menuItems"
						:key="index"
						:index="index.toString()"
						class="!ml--5 !h-10"
					>
						<p>{{ item }}</p>
					</el-menu-item>
				</el-menu>
			</pane>
			<pane size="80">
				<monacoEditor
					:initvalue="coderight"
					:fontsize="fontsize"
					:permit="true"
					:compliercode="choosepipeline"
					v-if="!real_loading"
				></monacoEditor>
				<h1 v-if="real_loading" class="ml-15% font-mono text-size-5">
					Compiling...
				</h1>
				<el-skeleton v-if="real_loading" :rows="22" animated :throttle="500"
			/></pane>
		</splitpanes>
	</div>
</template>

<style lang="scss" scoped></style>
