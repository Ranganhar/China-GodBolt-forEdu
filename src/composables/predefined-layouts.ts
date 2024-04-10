import {
	ComponentItemConfig,
	ItemType,
	LayoutConfig,
	StackItemConfig,
} from 'golden-layout'

const miniRowConfig: LayoutConfig = {
	root: {
		type: 'row',
		content: [
			{
				type: 'component',
				title: '',
				header: { show: 'top', popout: false },
				componentType: 'sourceEditor',
				isClosable: true,
				// componentState: { abc: 123 },
			} as ComponentItemConfig,
			{
				type: 'component',
				title: '',
				header: { show: 'top', popout: false },
				isClosable: true,
				componentType: 'Complier',
				// componentState: undefined,
			} as ComponentItemConfig,
		],
	},
}
const aminiRowConfig: LayoutConfig = {
	root: {
		type: 'row',
		content: [
			{
				type: 'component',
				title: '',
				header: { show: 'top', popout: false },
				componentType: 'sourceEditor',
				isClosable: true,
				// componentState: { abc: 123 },
			} as ComponentItemConfig,
			{
				type: 'component',
				title: '',
				header: { show: 'top', popout: false },
				isClosable: true,
				componentType: 'Complier',
				// componentState: undefined,
			} as ComponentItemConfig,
			{
				type: 'component',
				title: '',
				header: { show: 'top', popout: false },
				isClosable: true,
				componentType: 'Execution',
				// componentState: undefined,
			} as ComponentItemConfig,
		],
	},
}

export const prefinedLayouts = {
	miniRow: miniRowConfig,
	aminiRow: aminiRowConfig,
}
