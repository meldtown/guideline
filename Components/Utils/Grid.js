import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Grids">

	<h2 className="fd-text-center">Two cols</h2>

	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-cols fm-rows">
			<li className="fd-bg-light fd-cell-wide temp-padding">left</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>
	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-cols fm-rows">
			<li className="fd-bg-muted temp-padding">left</li>
			<li className="fd-bg-light fd-cell-wide temp-padding">right</li>
		</ul>
	</div>
	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-cols ft-rows">
			<li className="fd-bg-muted fd-cell-wide temp-padding">left</li>
			<li className="fd-bg-light fd-cell-wide temp-padding">right</li>
		</ul>
	</div>

	<h2 className="fd-text-center">Vertical Align</h2>

	<h3 className="fd-text-center">Default top</h3>
	<div className="fd-bg-pink fd-text-white temp-padding">
		<ul className="fd-cols fm-rows">
			<li className="fd-bg-light fd-cell-wide temp-padding">left</li>
			<li className="fd-bg-muted fd-cell-wide temp-padding">center<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-light fd-cell-wide temp-padding">right</li>
		</ul>
	</div>

	<h3 className="fd-text-center">Middle</h3>
	<div className="fd-bg-pink fd-text-white temp-padding">
		<ul className="fd-cols fm-rows fd-va-middle fm-va-stretch">
			<li className="fd-bg-light fd-cell-wide temp-padding">left</li>
			<li className="fd-bg-muted fd-cell-wide temp-padding">center<br/>tall<br/>cell</li>
			<li className="fd-bg-light fd-cell-wide temp-padding">right</li>
		</ul>
	</div>


	<h2 className="fd-text-center">Grid inside grid</h2>

	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-cols fm-rows fd-va-stretch">
			<li className="fd-bg-light fd-cell-wide">
				<ul className="fd-cols ft-rows">
					<li className="fd-bg-muted fd-cell-wide temp-padding">left</li>
					<li className="fd-bg-light fd-cell-wide temp-padding">right</li>
				</ul>
			</li>
			<li className="fd-bg-muted temp-padding fd-cols fd-va-middle">right</li>
		</ul>
	</div>

</DemoWrapper>
