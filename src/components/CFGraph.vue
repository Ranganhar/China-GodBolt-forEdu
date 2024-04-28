<script setup lang="ts">
import panzoom from 'panzoom'

//网络请求
import { useDataStore } from '@/stores/alldata'
const DataStore = useDataStore()

watch(
  () => DataStore.CFG,
  () => {
    let cfgname = DataStore.CFG
    name.value = cfgname.map((item) => ({
      value: item,
      label: item,
    }))
    namedefault.value = DataStore.CFG[0]
    imgsrc.value = `img/${DataStore.CFG[0]}.svg`
  },
)

onMounted(() => {
  let cfgname = DataStore.CFG
  name.value = cfgname.map((item) => ({
    value: item,
    label: item,
  }))
  namedefault.value = DataStore.CFG[0]

  imgsrc.value = `img/${DataStore.CFG[0]}.svg`
})

const handleSelectChange = (value: any) => {
  imgsrc.value = `img/${value}.svg`
  console.log(value)
}
const graph = ref(null)
import { useMyTour } from '~/stores/tour'
const tour = useMyTour()
onMounted(() => {
  tour.graph = graph.value
})

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

let elem: any
const imgsrc = ref('')
const initPanzoom = () => {
  elem = document.getElementById('image')
  panzoom(elem, {
    bounds: true,
    boundsPadding: 0.1, // 设置边界填充为20%// boundsPadding: 0.1,
  })
}

watch(
  () => namedefault,
  () => {
    imgsrc.value = `img/${namedefault.value}.svg`
  },
)

const downloadSvg = async () => {
  const response = await fetch(imgsrc.value)
  const svgData = await response.text()

  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
  const svgUrl = URL.createObjectURL(svgBlob)

  const a = document.createElement('a')
  a.href = svgUrl
  a.download = `${namedefault.value}.svg`
  a.click()
}
const downloadPng = async () => {
  const response = await fetch(imgsrc.value)
  const svgData = await response.text()

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
  const pngData = canvas.toDataURL('image/png')

  const a = document.createElement('a')
  a.href = pngData
  a.download = `${namedefault.value}.png`
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
        @click="downloadSvg"
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
        @click="downloadPng"
      >
        <span
          class="i-teenyicons:png-solid mt-1 inline-block h-6 w-6 bg-black text-black"
        >
        </span>
      </button>
    </div>

    <div class="h-full w-full overflow-hidden">
      <div v-if="!real_loading" id="image">
        <img
          :src="imgsrc"
          alt="CFG.svg"
          class="m-auto mt-4 h-80% w-80%"
          @load="initPanzoom"
        />
      </div>
      <h1 v-if="real_loading" class="ml-15% text-size-5 font-mono">
        Compiling...
      </h1>
      <el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
