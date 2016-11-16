import React, { Component, PropTypes } from 'react'
import '../index.scss'

class Layout extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>		
		)
	}
}

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;