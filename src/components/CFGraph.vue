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
    style="background-color: #fffffe"
    ref="complier"
    class="h-full bg-sky-500 overflow-hidden w-full"
  >
    <!-- 第一层 -->

    <div
      class="bg-gray-100 optionchoose h-11 w-full flex border-b-gray-300 border-b-1"
    >
      <!-- 各种按钮区域 -->
      <el-select
        @change="handleSelectChange"
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
        @click="initPanzoom"
      >
        <span class="i-carbon:zoom-pan h-5 w-5 text-black inline-block mt-1.7">
        </span>
      </button>
      <button
        ref="target"
        class="rounded-md w-11 h-11 cursor-pointer border-0 bg-gray-100 p-2 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
        dark="bg-transparent hover:bg-gray-500"
        title="Download as SVG"
        @click="downloadSvg"
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
        @click="downloadPng"
      >
        <span
          class="i-teenyicons:png-solid h-6 w-6 text-black inline-block mt-1 bg-black"
        >
        </span>
      </button>
    </div>

    <div class="w-full h-full overflow-hidden">
      <div v-if="!real_loading" id="image">
        <img
          :src="imgsrc"
          alt="CFG.svg"
          class="h-80% w-80% m-auto mt-4"
          @load="initPanzoom"
        />
      </div>
      <h1 v-if="real_loading" class="ml-15% font-mono text-size-5">
        Compiling...
      </h1>
      <el-skeleton v-if="real_loading" :rows="22" animated :throttle="500" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
