import Layout from './Pages/Layout'


// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)


export default {
	component: Layout,
	childRoutes: [{
		childRoutes: [
		{
			path: '/',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/MainPage").default)
				}, 'mainpage.chunk')
			},
		},
		{
			path: '/buttons',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/Buttons").default)
				}, 'buttons.chunk')
			},
		},
		{
			path: '/colors',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/Colors").default)
				}, 'colors.chunk')
			},
		},
		{
			path: '/typo',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/Typo").default)
				}, 'typo.chunk')
			},
		},
		{
			path: '/grid',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/Grid").default)
				}, 'grid.chunk')
			},
		},
		{
			path: '/input-icon',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/InputIcon").default)
				}, 'inputicon.chunk')
			},
		},
		{
			path: '/controls',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./Pages/Controls").default)
				}, 'controls.chunk')
			},
		},
		{
			path: "*",
			getComponent: (location, callback) => {
				require.ensure([], require => {
					callback(null, require("./Pages/NotFound").default)
				}, '404.chunk')
			}
		}]
	}]	
}