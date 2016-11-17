import React from 'react'
import { Link } from 'react-router'


const linkStyle = {
	display: 'block',
	fontSize: 30,
	textAlign: 'center',
	margin: 30,
	textTransform: 'uppercase'
}

export default () => <div style={{ marginTop: 100 }} >
	<Link style={linkStyle} to="/buttons">Buttons</Link>
	<Link style={linkStyle} to="/colors">Colors</Link>
	<Link style={linkStyle} to="/typo">Typo</Link>
	<Link style={linkStyle} to="/grid">Grid</Link>
	<Link style={linkStyle} to="/controls">Controls</Link>
	<Link style={linkStyle} to="/papers">Papers</Link>
	<Link style={linkStyle} to="/icons">Icons</Link>
</div>
