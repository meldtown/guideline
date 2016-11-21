import './index.scss'
import 'isomorphic-fetch'
// import * as ReactHotLoader from 'react-hot-loader'
import { AppContainer } from 'react-hot-loader';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'

// let AppContainer = require('react-hot-loader').AppContainer

const root = document.createElement('div')
document.body.appendChild(root)


ReactDOM.render(<AppContainer><App /></AppContainer>, root)

if (module.hot) {
	module.hot.accept('./Components/App', () => {
		const NextApp = require('./Components/App').default
		ReactDOM.render(<AppContainer><NextApp /></AppContainer>, root)
	})
}