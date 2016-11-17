import 'isomorphic-fetch'
import React from 'react'
import {render} from 'react-dom'
import {Router, useRouterHistory} from 'react-router'
import Routes from './routes.js'
import {createHistory} from 'history'

const root = document.createElement('div')
document.body.appendChild(root)

const browserHistory = useRouterHistory(createHistory)({
	basename: window.location.hostname === 'localhost' ? '/' : window.location.pathname
})

render(
	<Router history={browserHistory} routes={Routes}/>,
	root
)
