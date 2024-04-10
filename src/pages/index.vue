<script setup lang="ts">
import { useElementBounding, useDraggable } from '@vueuse/core'
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
	GLayoutRoot.value.loadGLLayout(prefinedLayouts.aminiRow)
}

const onClickAddGLComponent1 = () => {
	return GLayoutRoot.value.addGLComponent('counter', 'Title 1st')
}

const onClickAddGLComponent2 = () => {
	return GLayoutRoot.value.addGLComponent('sourceEditor', "I'm wide")
}

const onClickAddGLComponent3 = () => {
	if (!GLayoutRoot.value) return
	GLayoutRoot.value.addGLComponent('sourceEditor', "I'm high")
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
</script>

<template>
	<div class="max-h-153 display_row w-screen overflow-hidden relative">
		<div id="nav" style="height: 90px">
			<h1 style="margin: 0">Golden Layout Demo</h1>
			<button @click="onClickInitLayoutMinRow">Init Layout MinRow</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickAddGLComponent1">Add Simple Component</button>
			<button @click="onClickAddGLComponent2">Add Widest Component</button>
			<button @click="onClickAddGLComponent3">Add Highest Component</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickSaveLayout">Save Layout</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickLoadLayout">Load Layout</button>
		</div>
		<glayout
			ref="GLayoutRoot"
			glc-path="./"
			style="width: 100%; height: 100%"
		></glayout>
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
