<script setup lang="ts">
const complier = ref(null)
let fontsize = ref(16)
//网络请求
// import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()
const sourcecode = ref('')
watch(
  () => DataStore.compiler,
  () => {
    sourcecode.value = DataStore.compiler
  },
)
onMounted(() => {
  sourcecode.value = DataStore.compiler
})

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

const options = [
  {
    value: 'x86-64 慧编 1.0.1',
    label: 'x86-64 慧编 1.0.1',
  },
  {
    value: 'RISC-V(32bit) 慧编 1.0.1',
    label: 'RISC-V(32bit) 慧编 1.0.1',
  },
]

onBeforeMount(() => {
  version.value = localStorage.getItem('version') || 'x86-64 慧编 1.0.1'
  compileroption.value = localStorage.getItem('option') || '-emit-llvm -g0 -O1'
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
    xin()

    localStorage.setItem('option', compileroption.value)
  },
  { debounce: 500, maxWait: 5000 },
)
const xin = () => {
  DataStore.option = compileroption.value
}
const version = ref('')
watchDebounced(
  version,
  () => {
    loading.refresh()
    genxin()

    localStorage.setItem('version', version.value)
  },
  { debounce: 500, maxWait: 5000 },
)
const genxin = () => {
  // console.log(version.value)
  DataStore.version = version.value
  // console.log(DataStore.version)
}
const addExecution = inject('AddExecution')

const addAST = inject('AddAbstractTree')

const addOptPipeline = inject('AddPipeline')
const addpipeafter = async () => {
  addOptPipeline()
  await nextTick()
  const isFirstGuide = localStorage.getItem('isFirstGuide')
  if (!isFirstGuide) {
    tour.open = true
    localStorage.setItem('isFirstGuide', 'no')
  }
}
const addCFG = inject('AddCFG')

const select = ref(null)
const option = ref(null)
const complie = ref(null)
const tree = ref(null)
const graph = ref(null)
const execution = ref(null)
const pipeline = ref(null)
import { useMyTour } from '~/stores/tour'
const tour = useMyTour()
onMounted(() => {
  tour.select = select.value
  tour.option = option.value
  tour.complie = complie.value
  tour.tree = tree.value
  tour.graph = graph.value
  tour.execution = execution.value
  tour.pipeline = pipeline.value
})
</script>
<template>
  <div
    ref="complier"
    style="background-color: #fffffe"
    class="h-full w-full overflow-hidden bg-sky-500"
  >
    <div ref="complie" class="h-full w-full">
      <!-- 第一层 -->
      <div class="optionchoose h-10 w-full flex bg-gray-100">
        <!-- 语言选择 -->
        <div
          ref="select"
          name="languageoption"
          class="bord h-full w-65 cursor-pointer border-1 rounded-lg bg-light-100 text-size-4 text-color-#343a40"
        >
          <el-select
            v-model="version"
            filterable
            placeholder="select a complier"
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
          class="h-full w-10 cursor-pointer border-1 rounded-lg bg-light-100 !p-2"
        >
          <div
            :class="real_loading ? '' : 'correct'"
            class="h-6 w-6 bg-contain bg-no-repeat"
          ></div>
        </div>

        <!-- 编译参数 -->
        <div ref="option" class="h-full w-full">
          <el-input
            v-model="compileroption"
            class="!w-full"
            size="large"
            placeholder="Compiler options"
          />
        </div>
      </div>
      <div class="optionchoose h-11 w-full flex justify-between bg-gray-100">
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
            ref="execution"
            class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
            dark="bg-transparent hover:bg-gray-500"
            title="Execution"
            @click="addExecution"
          >
            <span
              class="i-heroicons:cpu-chip-20-solid mt-1 inline-block h-6 w-6 bg-black text-black"
            >
            </span>
          </button>

          <button
            ref="tree"
            class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
            dark="bg-transparent hover:bg-gray-500"
            title="AST"
            @click="addAST"
          >
            <span class="i-bx:bxs-leaf mt-1 inline-block h-6 w-6 text-black">
            </span>
          </button>

          <button
            ref="pipeline"
            class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
            dark="bg-transparent hover:bg-gray-500"
            title="Opt Pipeline"
            @click="addpipeafter"
          >
            <span
              class="i-gravity-ui:pipeline mt-1 inline-block h-6 w-6 text-black"
            >
            </span>
          </button>
          <button
            ref="graph"
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
        :fontsize="fontsize"
        :permit="true"
        :compliercode="sourcecode"
      ></monacoEditor>
      <h1 v-if="real_loading" class="ml-15% text-size-5 font-mono">
        Compiling...
      </h1>
      <el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.correct {
  background-image: url(../assets/img/correct.svg);
}
</style>
