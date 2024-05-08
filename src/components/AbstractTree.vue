<script setup lang="ts">
const tree = ref(null)
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
const astcode = ref('')
watch(
  () => DataStore.AST,
  () => {
    astcode.value = DataStore.AST
  },
)
onMounted(() => {
  astcode.value = DataStore.AST
})

// import { useMyTour } from '~/stores/tour'
// const tour = useMyTour()
// onMounted(() => {
//   tour.tree = tree.value
// })
</script>
<template>
  <div
    ref="tree"
    style="background-color: #fffffe"
    class="h-full w-full overflow-hidden bg-sky-500"
  >
    <!-- 第一层 -->

    <div
      class="optionchoose h-11 w-full flex justify-between bg-gray-100 relative z-1"
    >
      <!-- 各种按钮区域 -->
      <div class="flex">
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
        <button
          ref="target"
          class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
          dark="bg-transparent hover:bg-gray-500"
          title="Control Flow Graph"
          @click="addCFG"
        >
          <span
            class="i-tabler:arrows-exchange-2 mt-1 inline-block h-6 w-6 text-black"
          >
          </span>
        </button>
      </div>
    </div>
    <monacoEditor
      v-if="!real_loading"
      class="absolute bottom-11 z-0 h-99% w-full pt-11 overflow-scroll"
      :initvalue="coderight"
      :fontsize="fontsize"
      :permit="true"
      :compliercode="astcode"
    ></monacoEditor>
    <h1 v-if="real_loading" class="ml-15% text-size-5 font-mono">
      Compiling...
    </h1>
    <el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
  </div>
</template>

<style lang="scss" scoped></style>
