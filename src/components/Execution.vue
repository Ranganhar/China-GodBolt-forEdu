<script setup lang="ts">
const execution = ref(null)
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

//默认编译参数
const stdincontrol = ref(false)

const textarea = ref('')

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

// watchDebounced(
//   textarea,
//   () => {
//     // loading.refresh()
//     real_loading.value = true
//     setTimeout(() => {
//       real_loading.value = false
//       //fake stdout
//       stdoutvalue.value = textarea.value
//     }, 1000)
//   },
//   { debounce: 500, maxWait: 5000 },
// )

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()
const execode = ref('')
watch(
  () => DataStore.execution,
  () => {
    execode.value = DataStore.execution
  },
)
onMounted(() => {
  execode.value = DataStore.execution
})

import { useMyTour } from '~/stores/tour'
const tour = useMyTour()
onMounted(() => {
  tour.execution = execution.value
})
</script>
<template>
  <div
    ref="execution"
    style="background-color: #fffffe"
    class="h-full w-full overflow-hidden bg-sky-500 pt-1"
  >
    <!-- 各种按钮区域 -->
    <div class="flex bg-gray-100">
      <Optionchoose>
        <template #up>
          <div
            class="i-ri:font-family ml--5 mt-1.7 inline-block h-5 w-5 text-black"
          ></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-5 mt--14 inline h-4 w-4"
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
            class="absolute h-111 w-11 overflow-x-hidden overflow-y-scroll bg-light-100 shadow-lg divide-y divide-gray-100"
          >
            <span
              v-for="sizeoption of sizeoptions"
              :key="sizeoption"
              :class="
                fontsize === sizeoption
                  ? 'bg-gray-100 text-gray-800 dark:bg-gray-400'
                  : ''
              "
              class="hover:text-gray-90 block cursor-pointer border-b-2 text-center text-lg text-gray-500 hover:bg-gray-100"
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

      <!-- 加载符号 -->
      <div
        v-loading="real_loading"
        :element-loading-svg="loadingsvg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        class="mb-0 ml-3 h-full w-10 cursor-pointer border-1 rounded-lg bg-light-100 !p-2 mt-2"
      >
        <div
          :class="real_loading ? '' : 'correct'"
          class="h-6 w-6 bg-contain bg-no-repeat"
        ></div>
      </div>
    </div>

    <el-input
      v-if="stdincontrol"
      ref="stdin"
      v-model="textarea"
      class="mt-1 w-full h-full"
      :rows="2"
      type="textarea"
      placeholder="Execution stdin..."
    />

    <el-card
      class="mt-2 w-full bg-green-50 h-full"
      shadow="hover"
      :class="textsize"
      ><p :class="textsize">{{ execode }}</p>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.correct {
  background-image: url(../assets/img/correct.svg);
}
</style>
