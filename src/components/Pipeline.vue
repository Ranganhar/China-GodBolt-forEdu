<script setup lang="ts">
const pipeline = ref(null)
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

onMounted(() => {
  menuItems.value = DataStore.pipe
  handleSelect(0)
})

import { useMyTour } from '~/stores/tour'
const tour = useMyTour()

const left = ref(null)
const right = ref(null)
onMounted(() => {
  tour.left = left.value
  tour.right = right.value
})
</script>
<template>
  <div
    ref="pipeline"
    style="background-color: #fffffe"
    class="h-full w-full overflow-hidden bg-sky-500"
  >
    <el-tour v-model="tour.open">
      <el-tour-step
        :target="tour.left"
        title="优化选项"
        description="您可以选择不同的优化选项"
        placement="right"
      />
      <el-tour-step
        :target="tour.right"
        title="优化结果"
        description="优化结果将会在这里显示"
        placement="right"
      />

      <template #indicators="{ current, total }">
        <span>{{ current + 1 }} / {{ total }}</span>
      </template>
    </el-tour>
    <!-- 第一层 -->

    <div
      class="optionchoose relative z-1 h-11 w-full flex justify-between bg-gray-100"
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
      </div>
    </div>

    <splitpanes class="default-theme h-full w-full" :dbl-click-splitter="false">
      <pane size="20" min-size="10" max-size="35">
        <div ref="left" class="h-75% w-40%">
          <div class="h-133% w-100%">
            <div class="ml-2 w-250%">Passes:</div>
            <el-menu
              class="h-full w-250%"
              default-active="0"
              @select="handleSelect"
            >
              <el-menu-item
                v-for="(item, index) in menuItems"
                :key="index"
                :index="index.toString()"
                class="!ml--5 !h-10"
              >
                <p>{{ item }}</p>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </pane>
      <pane size="80">
        <div ref="right" class="h-75% w-full overflow-hidden">
          <div class="h-134% overflow-hidden">
            <monacoEditor
              v-if="!real_loading"
              class="absolute bottom-11 z-0 h-100% w-full pt-11"
              :initvalue="coderight"
              :fontsize="fontsize"
              :permit="true"
              :compliercode="choosepipeline"
            ></monacoEditor>
            <h1 v-if="real_loading" class="ml-15% text-size-5 font-mono">
              Compiling...
            </h1>
            <el-skeleton
              v-if="real_loading"
              :rows="22"
              animated
              :throttle="500"
            />
          </div>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<style lang="scss" scoped></style>
