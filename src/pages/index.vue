<script setup lang="ts">
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
const participants = ref([
  {
    id: 'user1',
    name: 'Matteo',
    imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4',
  },
  {
    id: 'user2',
    name: 'Support',
    imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4',
  },
])
const titleImageUrl = ref(
  'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
)
const messageList = ref([
  { type: 'text', author: `me`, data: { text: `Say yes!` } },
  { type: 'text', author: `user1`, data: { text: `No.` } },
])
const newMessagesCount = ref(0)
const isChatOpen = ref(false)
const showTypingIndicator = ref('')
const colors = reactive({
  header: {
    bg: '#4e8cff',
    text: '#ffffff',
  },
  launcher: {
    bg: '#4e8cff',
  },
  messageList: {
    bg: '#ffffff',
  },
  sentMessage: {
    bg: '#4e8cff',
    text: '#ffffff',
  },
  receivedMessage: {
    bg: '#eaeaea',
    text: '#222222',
  },
  userInput: {
    bg: '#f4f7f9',
    text: '#565867',
  },
})
const alwaysScrollToBottom = ref(false)
const messageStyling = ref(true)

const sendMessage = (text) => {
  if (text.length > 0) {
    newMessagesCount.value = isChatOpen.value
      ? newMessagesCount.value
      : newMessagesCount.value + 1
    onMessageWasSent({ author: 'support', type: 'text', data: { text } })
  }
}

const onMessageWasSent = (message) => {
  messageList.value = [...messageList.value, message]
}

const openChat = () => {
  isChatOpen.value = true
  newMessagesCount.value = 0
}

const closeChat = () => {
  isChatOpen.value = false
}

const handleScrollToTop = () => {
  // handle pagination here
}

const handleOnType = () => {
  console.log('Emit typing event')
}

const editMessage = (message) => {
  const m = messageList.value.find((m) => m.id === message.id)
  m.isEdited = true
  m.data.text = message.data.text
}
</script>

<template>
  <beautiful-chat
    class="absolute z-444 h-full w-full"
    :participants="participants"
    :title-image-url="titleImageUrl"
    :on-message-was-sent="onMessageWasSent"
    :message-list="messageList"
    :new-messages-count="newMessagesCount"
    :is-open="isChatOpen"
    :close="closeChat"
    :icons="icons"
    :open="openChat"
    :show-emoji="true"
    :show-file="true"
    :show-edition="true"
    :show-deletion="true"
    :deletion-confirmation="true"
    :show-typing-indicator="showTypingIndicator"
    :show-launcher="true"
    :show-close-button="true"
    :colors="colors"
    :always-scroll-to-bottom="alwaysScrollToBottom"
    :disable-user-list-toggle="false"
    :message-styling="messageStyling"
    @on-type="handleOnType"
    @edit="editMessage"
  />
  <div class="display_row relative h-full w-screen overflow-hidden">
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
