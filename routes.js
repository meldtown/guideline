import * as Pages from './Pages'

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

//noinspection JSUnusedLocalSymbols
export default {
	component: Pages.Layout,
	childRoutes: [{
		childRoutes: [
			{
				path: '/',
				component: Pages.MainPage
			},
			{
				path: '/buttons',
				component: Pages.Buttons
			},
			{
				path: '/colors',
				component: Pages.Colors
			},
			{
				path: '/typo',
				component: Pages.Typo
			},
			{
				path: '/grid',
				component: Pages.Grid
			},
			{
				path: '/controls',
				component: Pages.Controls
			},
			{
				path: '/papers',
				component: Pages.Papers
			},
			{
				path: "*",
				component: Pages.NotFound
			}]
	}]
}
