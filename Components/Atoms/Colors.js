import React from 'react'
import DemoWrapper from '../DemoWrapper'

const ColorItemDemo = ({color}) => {
	let circleClassName = `f-bg-${color}`
	let letterClassName = `f-text-${color} fd-h2`
	return <li style={{height:100}} className="fd-f-center-middle">
		<span className={circleClassName} style={{width:50,height:50,borderRadius:50}} />
		<span className={letterClassName} style={{marginLeft:20}}>Aa</span>
	</li>
}

export default () => <DemoWrapper title="Colors">
	<h2 className="fd-h2 temp-padding fd-text-center">Greyscale</h2>

	<ul className="fd-f-around-middle ft-c-center">
		{['light', 'muted', 'medium', 'dark', 'black'].map(color => <ColorItemDemo key={color} color={color} />)}
	</ul>

	<ul className="temp-padding fd-f">
		<li style={{height: 100}} className="f-bg-light fd-f-center-middle fd-f1">light</li>
		<li style={{height: 100}} className="f-bg-muted fd-f-center-middle fd-f1">muted</li>
		<li style={{height: 100}} className="f-bg-medium fd-f-center-middle fd-f1">medium</li>
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

	<p className="fd-h3 f-dark fd-text-center">Greyscale colors are semi transparent</p>

	<div className="temp-padding f-bg-pink">
		<ul className="temp-padding fd-f">
			<li style={{height: 100}} className="f-bg-light fd-f-center-middle fd-f1">light</li>
			<li style={{height: 100}} className="f-bg-muted fd-f-center-middle fd-f1">muted</li>
			<li style={{height: 100}} className="f-bg-medium fd-f-center-middle fd-f1">medium</li>
			<li style={{height: 100}} className="f-bg-dark fd-f-center-middle fd-f1">dark</li>
			<li style={{height: 100}} className="f-bg-black f-text-white fd-f-center-middle fd-f1">black</li>
		</ul>
	</div>
	<div className="temp-padding f-bg-green">
		<ul className="temp-padding fd-f">
			<li style={{height: 100}} className="f-bg-black f-text-white fd-f-center-middle fd-f1">black</li>
			<li style={{height: 100}} className="f-bg-dark fd-f-center-middle fd-f1">dark</li>
			<li style={{height: 100}} className="f-bg-medium fd-f-center-middle fd-f1">medium</li>
			<li style={{height: 100}} className="f-bg-muted fd-f-center-middle fd-f1">muted</li>
			<li style={{height: 100}} className="f-bg-light fd-f-center-middle fd-f1">light</li>
		</ul>
	</div>
</DemoWrapper>
