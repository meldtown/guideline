import React from 'react'

export default ({title, children}) => <div className="demo">
	<h1 className="fd-text-center fd-header">{title}</h1>
	<input type="checkbox" id="overlay"/>
	<div style={{ backgroundColor: '#ebf3fa', paddingBottom: '100px' }}>

		<h2 className="fd-section-header temp-padding">Blocks</h2>


		<header className="f-paper" style={{ width: '100%', marginBottom: '100px', position: 'relative' }}>
			<p style={{ padding: '50px', textAlign: 'center', fontSize: '23px', fontWeight: '700' }}>
				MENU BLOCK
				<label className="menu-icon" htmlFor="overlay">
					<i className="fi-vacancy"></i>
				</label>
			</p>
		</header>

			<div className="f-paper f-main-wrapper" style={{ padding: '50px' }}>
				{children}
			</div>

		<div className="f-paper-lighten">
			<p style={{ padding: '70px', textAlign: 'center' }}>Lorem ipsum dolor</p>
		</div>
	</div>

	<label className="overlay" htmlFor="overlay"></label>

	<aside className="sidebar">
		<label className="close-sidebar" htmlFor="overlay">
			<i className="">&times;</i>
		</label>
	</aside>
</div>
