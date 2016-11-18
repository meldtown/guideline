import React from 'react'

export default ({title, children}) => <div>
	<input type="checkbox" id="overlay"/>
	<div className="f-bg-ultra-blue">

		<header className="f-paper" style={{width: '100%', marginBottom: '100px', position: 'relative'}}>
			<div style={{padding: '50px', textAlign: 'center', fontSize: '23px', fontWeight: '700'}}>
				{title}
				<label className="f-menu-icon" htmlFor="overlay">
					<i className="fi-vacancy"/>
				</label>
			</div>
		</header>

		<div className="f-paper f-main-wrapper" style={{padding: '50px'}}>
			{children}
		</div>

		<div style={{overflow:'hidden'}}>
			<p className="f-paper-lighten fd-text-center" style={{padding: '70px'}}>Lorem ipsum dolor</p>
		</div>
	</div>

	<label className="f-overlay" htmlFor="overlay"/>

	<aside className="f-sidebar">
		<label className="f-close-sidebar" htmlFor="overlay">
			<i className="">&times;</i>
		</label>
	</aside>
</div>
