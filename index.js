import * as ReactHotLoader from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/Index'
import './index.scss'

const AppContainer = ReactHotLoader.AppContainer

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<AppContainer><App /></AppContainer>, root)

if (module.hot) {
	module.hot.accept('./Components/Index', () => {
		const NextApp = require('./Components/Index').default
		ReactDOM.render(<AppContainer><NextApp /></AppContainer>, root)
	})
}
