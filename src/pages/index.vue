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
//选中文本功能
const codeText = ref('')
const selectText = useTextSelection()
watchDebounced(
  selectText.text,
  (newText) => {
    if (newText !== '') {
      codeText.value = newText
    }
  },
  { debounce: 500 },
)

//chat
const participants = ref([
  {
    id: 'user1',
    name: '慧编小助手',
    imageUrl: 'img/robot.svg',
  },
])
const titleImageUrl = ref('/img/output1.png')
const messageList = ref([
  {
    type: 'text',
    author: `me`,
    data: { text: `我可以问你一些编译器相关的问题吗？` },
  },
  {
    type: 'text',
    author: `user1`,
    data: { text: `当然，您还可以选中页面中的代码向我提问。` },
  },
])
const newMessagesCount = ref(0)
const isChatOpen = ref(false)
const showTypingIndicator = ref('')
const colors = reactive({
  header: {
    bg: '#fff',
    text: '#659ad2',
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

const totalmessage = ref('')
const onMessageWasSent = (message: any) => {
  messageList.value = [...messageList.value, message]
  if (message.author == 'me') {
    if (!need.value) {
      totalmessage.value =
        '你是计算机领域研究编译器的专家,我要向你请教一些专业性的问题,请你使用中文来清晰的回答我的问题,这是我的问题:\n' +
        codeText.value +
        '\n' +
        message.data.text
      sendMessage()
    } else {
      totalmessage.value =
        '你是计算机领域研究编译器的专家,我要向你请教一些专业性的问题,请你使用中文来清晰的回答我的问题,这是我的问题:\n' +
        message.data.text
      sendMessage()
    }
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const sendMessage = async () => {
  const message = {
    text: totalmessage.value,
  }

  const socket = new WebSocket('ws://47.109.200.112:8848/ws/123456')

  socket.onopen = function (event) {
    socket.send(JSON.stringify(message))
    console.log('消息已发送')
  }
  await sleep(250)
  onMessageWasSent({
    author: 'user1',
    type: 'text',
    data: { text: '思考中...' },
  })
  // let lastMessageTime = null
  // let now = null
  let data = null

  socket.onmessage = function (event) {
    data = event.data
    messageList.value[messageList.value.length - 1].data.text = data
  }

  socket.onerror = function (error) {
    console.log('WebSocket error: ', error)
  }
}

const openChat = () => {
  isChatOpen.value = true
  newMessagesCount.value = 0
}

const closeChat = () => {
  isChatOpen.value = false
}

// const handleScrollToTop = () => {
//   // handle pagination here
// }
const need = ref(false)
let span
let label
onMounted(() => {
  // 获取 'sc-user-input--buttons' 元素
  const buttonsDiv = document.getElementsByClassName(
    'sc-user-input--buttons',
  )[0]

  // 检查是否找到了 'sc-user-input--buttons' 元素
  if (buttonsDiv) {
    // 在 'sc-user-input--buttons' 元素中获取 'sc-user-input--button' 元素
    const buttonDiv = buttonsDiv.getElementsByClassName(
      'sc-user-input--button',
    )[0]

    // 检查是否找到了 'sc-user-input--button' 元素
    if (buttonDiv) {
      // 创建 label 元素
      label = document.createElement('label')
      label.className = 'checkbox-container move absolute h-11 w-11'

      // 创建 input 元素
      const input = document.createElement('input')
      input.type = 'checkbox'
      label.appendChild(input)

      input.onchange = function () {
        need.value = this.checked
        console.log(need.value)
      }

      // 创建 span 元素
      span = document.createElement('span')
      span.className = 'i-icon-park-outline:correct h-6 w-6 absolute bg-sky-600'
      label.appendChild(span)

      // 将 label 添加到 'sc-user-input--button' 元素
      buttonDiv.appendChild(label)
    }
  }
})
watch(need, (newValue) => {
  if (span) {
    if (!newValue) {
      span.classList.remove('bg-gray-500') // 移除假值类名
      span.classList.add('bg-sky-600') // 添加真值类名
    } else {
      span.classList.remove('bg-sky-600') // 移除真值类名
      span.classList.add('bg-gray-500') // 添加假值类名
    }
  }
})
</script>

<template>
  <div class="display_row relative h-screen w-screen overflow-hidden">
    <beautiful-chat
      style="user-select: text"
      class="relative z-444"
      :participants="participants"
      :title-image-url="titleImageUrl"
      :on-message-was-sent="onMessageWasSent"
      :message-list="messageList"
      :new-messages-count="newMessagesCount"
      :is-open="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :show-header="true"
      :show-emoji="true"
      :show-file="false"
      :show-edition="true"
      :show-deletion="true"
      :deletion-confirmation="true"
      :show-typing-indicator="showTypingIndicator"
      :show-launcher="true"
      :show-close-button="false"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :disable-user-list-toggle="true"
      :message-styling="messageStyling"
    >
      <template #header> 慧编小助手 </template>
    </beautiful-chat>

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

    <glayout
      ref="GLayoutRoot"
      glc-path="./"
      class="fixed bottom-0 h-100% w-100%"
    ></glayout>
  </div>
</template>

<style scoped>
.move {
  right: 1rem;
  bottom: -450%;
  z-index: 445;
}
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
.checkbox-container {
  display: block;
  padding-left: 2.5rem;
  cursor: pointer;
  user-select: none;
  height: 2.2rem;
  line-height: 2.5rem;
  background: #f4f7f9;
}

.checkbox-container input {
  opacity: 0;
  cursor: pointer;
  bottom: 4rem;
  right: 7rem;
  height: 0;
  width: 0;
}

.checkmark {
  display: block;
  bottom: 5rem;
  right: 5.5rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
<style src="golden-layout/dist/css/goldenlayout-base.css"></style>
<style src="golden-layout/dist/css/themes/goldenlayout-light-theme.css"></style>
