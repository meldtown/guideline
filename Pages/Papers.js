import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Buttons from './Buttons'
import Colors from './Colors'
import Typo from './Typo'
import Grid from './Grid'
import Controls from './Controls'

export default () => <div>

	<input type="checkbox" id="overlay"/>
	<div style={{backgroundColor: '#ebf3fa', paddingBottom: '100px'}}>

		<h2 className="fd-section-header temp-padding">Blocks</h2>

		<header className="f-paper" style={{width: '100%', marginBottom: '100px', position: 'relative'}}>
			<p style={{padding: '50px', textAlign: 'center', fontSize: '23px', fontWeight: '700'}}>
				MENU BLOCK
				<label className="menu-icon" htmlFor="overlay">
					<i className="fi-vacancy"/>
				</label>
			</p>
		</header>

		<DemoWrapper>
			<div className="f-paper f-main-wrapper" style={{padding: '50px'}}>
				<Colors />
				<Typo />
				<Buttons />
				<Controls />
				<Grid />
			</div>
		</DemoWrapper>


		<footer className="f-paper-lighten">
			<p style={{padding: '70px', textAlign: 'center'}}>Lorem ipsum dolor</p>
		</footer>
	</div>

	<label className="overlay" htmlFor="overlay"/>
	<aside className="sidebar">
		<label className="close-sidebar" htmlFor="overlay">
			<i className="">&times;</i>
		</label>
	</aside>


</div>
