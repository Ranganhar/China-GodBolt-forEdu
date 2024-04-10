<script setup lang="ts">
const complier = ref(null)
//loading效果
const loadingsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0"/></svg>`
const loading = ref(false)
const loadingicon = ref(null)
const refresh = () => {
	loading.value = true
	setTimeout(() => {
		loading.value = false
	}, 2000)
}
const value = ref('')
const options = [
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
	{
		value: 'x86-64 clang 12.0.0',
		label: 'x86-64 clang 12.0.0',
	},
]
const coderight = `define dso_local i32 @test(int*, int*, int)(i32* %0, i32* %1, i32 %2) #0 {
  %4 = alloca i32*, align 8
  %5 = alloca i32*, align 8
  %6 = alloca i32, align 4
  %7 = alloca float, align 4
  %8 = alloca i32, align 4
  store i32* %0, i32** %4, align 8
  store i32* %1, i32** %5, align 8
  store i32 %2, i32* %6, align 4
  store float 0x4002666660000000, float* %7, align 4
  store i32 2, i32* %8, align 4
  %9 = load i32, i32* %6, align 4
  %10 = icmp sgt i32 %9, 10
  br i1 %10, label %11, label %17

11:
  %12 = load i32, i32* %6, align 4
  %13 = load i32*, i32** %5, align 8
  %14 = getelementptr inbounds i32, i32* %13, i64 0
  %15 = load i32, i32* %14, align 4
  %16 = add nsw i32 %12, %15
  store i32 %16, i32* %8, align 4
  br label %26

17:
  %18 = load i32, i32* %8, align 4
  %19 = sub nsw i32 0, %18
  store i32 %19, i32* %8, align 4
  %20 = load i32, i32* %8, align 4
  %21 = load i32*, i32** %4, align 8
  %22 = getelementptr inbounds i32, i32* %21, i64 1
  %23 = load i32, i32* %22, align 4
  %24 = add nsw i32 %20, %23
  %25 = sitofp i32 %24 to float
  store float %25, float* %7, align 4
  br label %26

26:
  %27 = load i32, i32* %8, align 4
  ret i32 %27
}


attributes #0 = { noinline nounwind optnone uwtable mustprogress "disable-tail-calls"="false" "frame-pointer"="all" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" "unsafe-fp-math"="false" "use-soft-float"="false" }`
const compileroption = ref(null)
</script>
<template>
	<div
		style="background-color: #fffffe"
		ref="complier"
		class="h-full bg-sky-500 overflow-hidden w-full"
	>
		<!-- 第一层 -->
		<div class="bg-gray-100 optionchoose h-10 w-full flex">
			<!-- 语言选择 -->
			<div
				name="languageoption"
				class="rounded-lg bg-light-100 h-full w-42 border-1 cursor-pointer bord text-size-4 text-color-#343a40"
			>
				<el-select
					v-model="value"
					filterable
					placeholder="x86-64 clang 12.0.0"
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
				v-loading="loading"
				:element-loading-svg="loadingsvg"
				@click="refresh"
				element-loading-svg-view-box="-10, -10, 50, 50"
				class="rounded-lg ml-23 !p-2 bg-light-100 h-full w-10 border-1 cursor-pointer"
			>
				<div
					:class="loading ? '' : 'correct'"
					class="bg-contain bg-no-repeat h-6 w-6"
				></div>
			</div>

			<!-- 编译参数 -->
			<el-input
				v-model="compileroption"
				class="!w-full"
				size="large"
				placeholder="Compiler options"
			/>
		</div>

		<monacoEditor :initvalue="coderight"></monacoEditor>
	</div>
</template>

<style lang="scss" scoped>
.correct {
	background-image: url(../assets/img/correct.svg);
}
</style>
