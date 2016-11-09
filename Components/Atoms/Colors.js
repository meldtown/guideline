import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Colors">
	<h1 className="fd-h1 temp-padding text-center">Grayscale</h1>
	<ul className="temp-padding fd-f">
		<li style={{height: 100}} className="f-bg-light fd-f-center-middle fd-f1">light</li>
		<li style={{height: 100}} className="fd-bg-muted fd-f-center-middle fd-f1">muted</li>
		<li style={{height: 100}} className="fd-bg-medium fd-f-center-middle fd-f1">medium</li>
		<li style={{height: 100}} className="f-bg-dark fd-f-center-middle fd-f1">dark</li>
		<li style={{height: 100}} className="f-bg-black f-text-white fd-f-center-middle fd-f1">black</li>
	</ul>

	<h1 className="fd-h1 temp-padding text-center">Primary</h1>
	<ul className="temp-padding fd-c">
		<li style={{height: 100}} className="f-bg-white">white</li>
		<li style={{height: 100}} className="f-bg-main f-text-white">main</li>
		<li style={{height: 100}} className="f-bg-primary">primary</li>
		<li style={{height: 100}} className="f-bg-secondary">secondary</li>
	</ul>
	<h1 className="fd-h1 temp-padding text-center">Secondary</h1>
	<ul className="temp-padding fd-c">
		<li style={{height: 100}} className="f-bg-green">green</li>
		<li style={{height: 100}} className="f-bg-yellow">yellow</li>
		<li style={{height: 100}} className="f-bg-pink">pink</li>
		<li style={{height: 100}} className="f-bg-lilak">lilak</li>
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

	<p className="fd-h3 f-dark fd-text-center">Colors are semi transparent</p>

	<div className="temp-padding f-bg-pink">
		<ul className="temp-padding fd-f">
			<li style={{height: 100}} className="f-bg-light fd-f-center-middle fd-f1">light</li>
			<li style={{height: 100}} className="fd-bg-muted fd-f-center-middle fd-f1">muted</li>
			<li style={{height: 100}} className="fd-bg-medium fd-f-center-middle fd-f1">medium</li>
			<li style={{height: 100}} className="f-bg-dark fd-f-center-middle fd-f1">dark</li>
			<li style={{height: 100}} className="f-bg-black f-text-white fd-f-center-middle fd-f1">black</li>
		</ul>
	</div>
</DemoWrapper>
