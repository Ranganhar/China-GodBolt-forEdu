// 重命名
const rename = () => {
	ElMessageBox.prompt('Please enter new pane name', 'Rename pane', {
		confirmButtonText: 'Save',
		cancelButtonText: 'Cancel',
		// inputPattern:
		// 	/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
		// inputErrorMessage: 'Invalid name',
	})
		.then(({ value }) => {
			ElMessage({
				type: 'success',
				message: `New name is:${value}`,
			})
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: 'Rename canceled',
			})
		})
}

//字体大小选项
const sizeoptions = [
	8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
	28, 29, 30,
]

const changeFontsize = (sizeoption: any) => {
	fontsize.value = sizeoption
}

// 关闭输入框
const close = () => {}

export { sizeoptions, changeFontsize, rename, close, max }
