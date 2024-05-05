<script setup lang="ts">
import { getRoutes } from '@/plugins/router'
const EventBus = useEventBus()

const { te, t } = useI18n()

const routes = getRoutes()
  .filter((r) => !r.path.includes('notFound'))
  .map((r) => {
    let { path, name } = r
    if (path === safeResolve('/')) {
      return { path, name: 'home' }
    }

    if (!name) {
      name = path
    }

    return { path, name: name.toString().slice(1).replaceAll('/', ' · ') }
  })

const $route = useRoute()
const { availableLocales, locale } = useI18n()
// const addSourceEditor = inject('AddSourceEditor')
const options = ref({
  'Source Editor': () => {
    EventBus.trigger = true
  },
  'Diff View': () => {
    console.log('Diff View')
  },
})
const options_2 = ['History', 'Open New Tab']

//漫游式引导
import { useMyTour } from '~/stores/tour'
const tour = useMyTour()

const open = ref(false)

onMounted(() => {
  const isFirstTime = localStorage.getItem('isFirstTime')

  if (!isFirstTime) {
    // 这是用户第一次访问，触发你的函数
    open.value = true

    // 设置 localStorage 标记用户已经访问过
    localStorage.setItem('isFirstTime', 'no')
  }
})
const openCenter = () => {
  ElMessage({
    message: '正在抓紧开发中',
    center: true,
    type: 'error',
  })
}
</script>

<template>
  <nav
    aria-label="Site Nav"
    class="max-w-8xl nav mx-auto h-14 flex items-center justify-between p-4"
  >
    <div class="flex items-center justify-center space-x-2">
      <a href="#" class="block h-14 w-30 flex">
        <div
          class="logo ml--5 h-14 w-19 bg-cover bg-center bg-no-repeat image-render-auto"
        ></div>
        <span class="mt-1.5 text-size-7 text-blue-400">慧编</span>
      </a>
      <Dropdown ref="target"
        ><template #up><div>Add</div></template>
        <template #down>
          <span
            v-for="(method, option) of options"
            :key="option"
            class="hover:text-gray-90 block cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
            @click="method"
          >
            <span
              :class="
                option == 'Source Editor'
                  ? 'i-ic:baseline-edit-calendar'
                  : 'i-octicon:git-compare-16'
              "
              class="mr-2 h-5 w-5 justify-center align-middle"
              style="display: inline-block"
            ></span>
            {{ option }}
          </span></template
        ></Dropdown
      >
      <Dropdown
        ><template #up><div>More</div></template>
        <template #down
          ><span
            v-for="option of options_2"
            :key="option"
            class="hover:text-gray-90 block cursor-pointer rounded-lg text-sm text-gray-500 hover:bg-white"
          >
            <div v-if="option === 'Open New Tab'" class="h-full w-full">
              <router-link
                class="h-full w-full px-4 py-2"
                style="display: block"
                to="/"
                target="_blank"
              >
                <span
                  class="i-icon-park-twotone:add-one mr-2 h-5 w-5 justify-center align-middle"
                  style="display: inline-block"
                ></span
                >{{ option }}</router-link
              >
            </div>
            <div v-else class="h-full w-full px-4 py-2" @click="openCenter">
              <span
                class="i-fluent-emoji-high-contrast:calendar mr-2 h-5 w-5 justify-center align-middle"
                style="display: inline-block"
              ></span
              >{{ option }}
            </div>
          </span></template
        ></Dropdown
      >
      <button
        ref="target"
        class="h-11 w-15 cursor-pointer border-0 rounded-md bg-white p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
        title="Execution"
        @click="open = true"
      >
        Help
      </button>
    </div>

    <el-tour v-model="open">
      <el-tour-step
        title="欢迎使用慧编"
        description="接下来将带您熟悉一下基础操作~"
      ></el-tour-step>
      <el-tour-step
        :target="tour.edit"
        title="第一步: 代码编辑器"
        description="您可以在这里输入您的代码"
        placement="right"
      />
      <el-tour-step
        :target="tour.select"
        title="第二步:编译器"
        description="您可以选择一个合适的编译器"
        placement="left"
      />
      <el-tour-step
        :target="tour.option"
        title="第三步:编译参数"
        description="在这里输入您的编译参数"
      />
      <el-tour-step
        :target="tour.complie"
        title="第四步:编译结果"
        description="这里是得到的编译结果"
        placement="left"
      ></el-tour-step>
      <el-tour-step
        :target="tour.execution"
        title="第四步:运行结果"
        description="点击此处查看代码运行结果"
      />
      <el-tour-step
        :target="tour.tree"
        title="第五步:抽象语法树"
        description="点击此处查看代码的抽象语法树"
      />
      <el-tour-step
        :target="tour.pipeline"
        title="第六步:优化选项"
        description="点击此处查看代码的所有优化选项"
      />
      <el-tour-step
        :target="tour.graph"
        title="第七步:控制流图"
        description="点击此处查看代码的控制流图"
      />

      <template #indicators="{ current, total }">
        <span>{{ current + 1 }} / {{ total }}</span>
      </template>
    </el-tour>

    <ul class="flex items-center gap-2 text-sm font-medium">
      <!-- <SwitchIcon unmount-persets /> -->
      <li v-for="r of routes" :key="r.path" class="hidden !block">
        <RouterLink
          class="rounded-lg px-3 py-2 hover:text-blue-700"
          :class="$route.path === r.path ? 'text-blue-700' : ''"
          :to="r.path"
        >
          {{ te(r.name) ? t(r.name) : r.name }}
        </RouterLink>
      </li>

      <li>
        <a
          class="inline-flex items-center gap-2 rounded-lg px-3 py-2"
          href="https://github.com/lyh552506/China-GodBolt-forEdu"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
              <g fill="#fff">
                <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
              </g>
            </mask>
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="30"
                stroke-dashoffset="30"
                d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="30;0"
                />
              </path>
              <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.2s"
                  values="10;0"
                />
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                />
              </path>
            </g>
            <rect
              width="8"
              height="4"
              x="8"
              y="11"
              fill="currentColor"
              mask="url(#lineMdGithubLoop0)"
            >
              <animate
                attributeName="y"
                dur="10s"
                keyTimes="0;0.45;0.46;0.54;0.55;1"
                repeatCount="indefinite"
                values="11;11;7;7;11;11"
              />
            </rect>
          </svg>
          <p class="ml--4 font-normal">Contact us</p>
        </a>
      </li>

      <!-- <li class="hidden !block">
        <Dropdown
          ><template #up><div>语言</div></template>
          <template #down
            ><span
              v-for="availableLocale of availableLocales"
              :key="availableLocale"
              :class="
                locale === availableLocale
                  ? 'bg-gray-100 text-gray-800 dark:bg-gray-400'
                  : ''
              "
              class="block cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
              dark="text-light-500 hover:text-light-900"
              @click="locale = availableLocale"
            >
              {{ availableLocale }}
            </span></template
          ></Dropdown
        >
      </li> -->
    </ul>
  </nav>
</template>
<style scoped>
.nav {
  background-color: #f8f9fa;
}
.logo {
  background-image: url('../assets/img/inter.png');
}
</style>
