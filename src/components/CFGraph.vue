<script setup lang="ts">
import panzoom from 'panzoom'

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()
let cfg
watch(
  () => DataStore.CFG,
  async () => {
    cfg = DataStore.CFG
    name.value = cfg.map((item) => ({
      value: item.name,
      label: item.name,
    }))
    namedefault.value = name.value[0].value
    await sleep(1250)
    handleSelectChange(DataStore.CFG[0].name)
  },
)
onMounted(async () => {
  cfg = DataStore.CFG
  name.value = cfg.map((item) => ({
    value: item.name,
    label: item.name,
  }))
  namedefault.value = name.value[0].value
  await sleep(1250)
  handleSelectChange(DataStore.CFG[0].name)
})

const graph = ref(null)

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

let name = ref([
  {
    value: 'test',
    label: 'test',
  },

  {
    value: 'test2',
    label: 'test2',
  },
  {
    value: 'test3',
    label: 'test3',
  },
  {
    value: 'test4',
    label: 'test4',
  },
])

const namedefault = ref('')
const svgContent = ref('')

let elem: any
const container = ref(null)
const initPanzoom = () => {
  elem = container.value
  panzoom(elem, {
    bounds: true,
    boundsPadding: 0.1, // 设置边界填充为20%// boundsPadding: 0.1,
  })
}
let selectSvg
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const handleSelectChange = async (value: any) => {
  await sleep(50)
  const item = DataStore.CFG.find((item) => item.name === value)
  selectSvg = item ? item.svg : null
  let parser = new DOMParser()
  let svgDoc = parser.parseFromString(selectSvg, 'image/svg+xml')
  let svgElement = svgDoc.documentElement

  svgElement.setAttribute('width', '60%')
  svgElement.setAttribute('height', '60%')

  let serializer = new XMLSerializer()
  svgContent.value = serializer.serializeToString(svgElement)
  initPanzoom()
}

//download
const download = async (format) => {
  let dataUrl
  const svgData = container.value?.innerHTML

  if (!svgData) {
    return
  }

  if (format === 'svg') {
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    dataUrl = URL.createObjectURL(svgBlob)
  } else if (format === 'png') {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData)

    await new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        if (ctx) {
          ctx.drawImage(img, 0, 0)
        }
        resolve(undefined)
      }
    })

    dataUrl = canvas.toDataURL('image/png')
  }

  const a = document.createElement('a')
  a.href = dataUrl
  a.download = `${namedefault.value}.${format}`
  a.click()
}
</script>
<template>
  <div
    ref="graph"
    style="background-color: #fffffe"
    class="h-full w-full overflow-hidden bg-sky-500"
  >
    <!-- 第一层 -->

    <div
      class="optionchoose h-11 w-full flex border-b-1 border-b-gray-300 bg-gray-100"
    >
      <!-- 各种按钮区域 -->
      <el-select
        v-model="namedefault"
        filterable
        placeholder="function"
        size="large"
        class="!mt-0.5 !w-33"
        @change="handleSelectChange"
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
        class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
        dark="bg-transparent hover:bg-gray-500"
        title="Reset View"
        @click="initPanzoom"
      >
        <span class="i-carbon:zoom-pan mt-1.7 inline-block h-5 w-5 text-black">
        </span>
      </button>
      <button
        ref="target"
        class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
        dark="bg-transparent hover:bg-gray-500"
        title="Download as SVG"
        @click="download('svg')"
      >
        <span
          class="i-teenyicons:svg-solid mt-1 inline-block h-6 w-6 bg-black text-black"
        >
        </span>
      </button>
      <button
        ref="target"
        class="h-11 w-11 cursor-pointer border-0 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
        dark="bg-transparent hover:bg-gray-500"
        title="Download as PNG"
        @click="download('png')"
      >
        <span
          class="i-teenyicons:png-solid mt-1 inline-block h-6 w-6 bg-black text-black"
        >
        </span>
      </button>
    </div>

    <div class="h-200 w-full overflow-hidden">
      <div v-if="!real_loading" ref="container" class="m-auto h-full w-full">
        <div class="m-auto mt-4" v-html="svgContent"></div>
      </div>

      <h1 v-if="real_loading" class="ml-15% text-size-5 font-mono">
        Compiling...
      </h1>
      <el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
