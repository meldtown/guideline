import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Grids">

	<h2 className="fd-text-center">Two cols</h2>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-left">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted fd-f1 temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-left-middle">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted fd-f1 temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-left-middle">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted fd-f1 temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-center">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-center-middle">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-around">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>

	<div className="fd-bg-green temp-padding">
		<ul className="fd-f-around-middle">
			<li className="fd-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>

	{/*

.fd-f-around {display:flex;justify-content:space-around;align-items:stretch;}
.fd-f-around-middle {display:flex;justify-content:space-around;align-items:center;}

.fd-f-between {display:flex;justify-content:space-between;align-items:stretch;}
.fd-f-between-middle {display:flex;justify-content:space-between;align-items:center;}
	*/}



	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-f fm-c">
			<li className="fd-bg-light fd-f1 temp-padding">left</li>
			<li className="fd-bg-muted temp-padding">right</li>
		</ul>
	</div>
	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-f fm-c">
			<li className="fd-bg-muted temp-padding">left</li>
			<li className="fd-bg-light fd-f1 temp-padding">right</li>
		</ul>
	</div>
	<div className="fd-bg-green fd-text-white temp-padding">
		<ul className="fd-f ft-c">
			<li className="fd-bg-muted fd-f1 temp-padding">left</li>
			<li className="fd-bg-light fd-f1 temp-padding">right</li>
		</ul>
	</div>

	<h2 className="fd-text-center">Vertical Align</h2>

	<h3 className="fd-text-center">Default top</h3>
	<div className="fd-bg-pink fd-text-white temp-padding">
		<ul className="fd-f fm-c">
			<li className="fd-bg-light fd-f1 temp-padding">left</li>
			<li className="fd-bg-muted fd-f1 temp-padding">center<br/>very<br/>tall<br/>cell</li>
			<li className="fd-bg-light fd-f1 temp-padding">right</li>
		</ul>
	</div>


	<h3 className="fd-text-center">Middle</h3>
	<div className="fd-bg-pink fd-text-white temp-padding">
		<ul className="fd-f-middle fm-c-stretch">
			<li className="fd-bg-light fd-f3 temp-padding">left</li>
			<li className="fd-bg-muted fd-f3 temp-padding">center<br/>tall<br/>cell</li>
			<li className="fd-bg-light fd-f3 temp-padding">right</li>
		</ul>
	</div>

	<h3 className="fd-text-center">Middle</h3>
	<div className="fd-bg-pink fd-text-white temp-padding">
		<ul className="fd-f-middle-middle fm-stretch-start">
			<li className="fd-bg-light fd-f3 temp-padding">left</li>
			<li className="fd-bg-muted fd-f3 temp-padding">center<br/>tall<br/>cell</li>
			<li className="fd-bg-light fd-f3 temp-padding">right</li>
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
