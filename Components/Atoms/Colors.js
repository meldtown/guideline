import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Colors">
	<h1 className="h1 text-center">Main colors</h1>

	<ul className=" temp-padding sg_row t_cols center">
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_primary"/></li>
				<li className="letter text_primary"/>
				<li className="name">primary</li>
			</ul>
		</li>
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_secondary"/></li>
				<li className="letter text_secondary"/>
				<li className="name">secondary</li>
			</ul>
		</li>
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_main"/></li>
				<li className="letter text_main"/>
				<li className="name">main</li>
			</ul>
		</li>
	</ul>

	<h1 className="fd-text-h1 temp-padding text-center">Grayscale</h1>

	<ul className="temp-padding fd-c">
		<li style={{height: 100}} className="fd-bg-light">light</li>
		<li style={{height: 100}} className="fd-bg-muted">muted</li>
		<li style={{height: 100}} className="fd-bg-medium">medium</li>
		<li style={{height: 100}} className="fd-bg-dark">dark</li>
		<li style={{height: 100}} className="fd-bg-black fd-text-white">black</li>

		<h1 className="fd-text-h1 temp-padding text-center">Primary</h1>

		<li style={{height: 100}} className="fd-bg-white">white</li>
		<li style={{height: 100}} className="fd-bg-main fd-text-white">main</li>
		<li style={{height: 100}} className="fd-bg-primary">primary</li>
		<li style={{height: 100}} className="fd-bg-secondary">secondary</li>
		<li style={{height: 100}} className="fd-bg-blue">blue</li>

		<h1 className="fd-text-h1 temp-padding text-center">Secondary</h1>

		<li style={{height: 100}} className="fd-bg-green">green</li>
		<li style={{height: 100}} className="fd-bg-yellow">yellow</li>
		<li style={{height: 100}} className="fd-bg-pink">pink</li>
		<li style={{height: 100}} className="fd-bg-lilak">lilak</li>
	</ul>

	<div>
		<ul className="sg_row m_cols sg_grayscale center">
			<li className="wide"><span className="bg_light"/></li>
			<li className="wide"><span className="bg_muted"/></li>
			<li className="wide"><span className="bg_medium"/></li>
			<li className="wide"><span className="bg_dark"/></li>
			<li className="wide"><span className="bg_black"/></li>
		</ul>
	</div>

	<p className="text_medium text-center">Colors are semi transparent</p>

	<div className="bg_secondary">
		<ul className="sg_row m_cols sg_grayscale center">
			<li className="wide"><span className="bg_light"/></li>
			<li className="wide"><span className="bg_muted"/></li>
			<li className="wide"><span className="bg_medium"/></li>
			<li className="wide"><span className="bg_dark"/></li>
			<li className="wide"><span className="bg_black"/></li>
		</ul>
	</div>
</DemoWrapper>
