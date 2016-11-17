import 'isomorphic-fetch'
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes.js'

const root = document.createElement('div')
document.body.appendChild(root)

render(
	<Router history={browserHistory} routes={Routes} />,
	root
)
