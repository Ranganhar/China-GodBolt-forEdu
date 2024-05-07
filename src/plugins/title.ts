import { router } from './router'

useTitle(
	() => {
		const { path, meta } = router.currentRoute.value
		if (meta.title) {
			return ``
		}
		if (path === '/') {
			return ''
		}
		return path.replaceAll('/', ' · ')
	},
	{
		titleTemplate: `慧编`,
	},
)
