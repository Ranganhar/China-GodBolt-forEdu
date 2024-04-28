<script setup lang="ts">
import { kMaxLength } from 'buffer'

//初始代码

const codeleft = `int test(int a[], int b[], int c)
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

import Glayout from '@/components/Glayout.vue'

import { prefinedLayouts } from '../composables/predefined-layouts'

const GLayoutRoot = ref<null | HTMLElement>(null)

const onClickInitLayoutMinRow = () => {
  if (!GLayoutRoot.value) return
  GLayoutRoot.value.loadGLLayout(prefinedLayouts.miniRow)
}

const onClickAddComplier = () => {
  return GLayoutRoot.value.addGLComponent('Complier', 'Compiler')
}
const onClickAddExecution = () => {
  return GLayoutRoot.value.addGLComponent('Execution', 'Executor')
}

const onClickAddSourceEditor = () => {
  return GLayoutRoot.value.addGLComponent('SourceEditor', 'SourceEditor')
}

const onClickAddAbstractTree = () => {
  if (!GLayoutRoot.value) return
  GLayoutRoot.value.addGLComponent('AbstractTree', 'AST Viewer')
}
import { useMyTour } from '~/stores/tour'
const tour = useMyTour()
const onClickAddPipeline = () => {
  if (!GLayoutRoot.value) return
  GLayoutRoot.value.addGLComponent('Pipeline', 'Opt Pipeline Viewer')
}
const onClickAddCFG = () => {
  if (!GLayoutRoot.value) return
  GLayoutRoot.value.addGLComponent('CFGraph', 'CFG Viewer')
}

const onClickSaveLayout = () => {
  if (!GLayoutRoot.value) return
  const config = GLayoutRoot.value.getLayoutConfig()
  localStorage.setItem('gl_config', JSON.stringify(config))
}

const onClickLoadLayout = () => {
  const str = localStorage.getItem('gl_config')
  if (!str) return
  if (!GLayoutRoot.value) return
  const config = JSON.parse(str as string)
  GLayoutRoot.value.loadGLLayout(config)
}
onMounted(onClickInitLayoutMinRow)
onMounted(onClickLoadLayout)
onMounted(() => {
  window.addEventListener('beforeunload', onClickSaveLayout)
})

provide('AddComplier', onClickAddComplier)
provide('AddExecution', onClickAddExecution)
provide('AddSourceEditor', onClickAddSourceEditor)

provide('AddAbstractTree', onClickAddAbstractTree)

provide('AddPipeline', onClickAddPipeline)
provide('AddCFG', onClickAddCFG)

const EventBus = useEventBus()

watch(
  () => EventBus.trigger,
  () => {
    if (EventBus.trigger === true) {
      onClickAddSourceEditor()
      EventBus.trigger = false
    }
  },
)
</script>

<template>
  <div class="h-full display_row w-screen overflow-hidden relative">
    <!-- <button
      @click="onClickInitLayoutMinRow"
      class="translate-x-253 z-999 absolute top--4"
    >
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </button> -->
    <!-- <div style="width: 20px; display: inline-block"></div>
			<button @click="onClickAddGLComponent1">Add Simple Component</button>
			<button @click="onClickAddGLComponent2">Add Widest Component</button>
			<button @click="onClickAddGLComponent3">Add Highest Component</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickSaveLayout">Save Layout</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickLoadLayout">Load Layout</button> -->

    <glayout ref="GLayoutRoot" glc-path="./" class="h-100% w-100%"></glayout>
  </div>
</template>

<style scoped>
.logo {
  width: 10em;
  height: 10em;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<style src="golden-layout/dist/css/goldenlayout-base.css"></style>
<style src="golden-layout/dist/css/themes/goldenlayout-light-theme.css"></style>
