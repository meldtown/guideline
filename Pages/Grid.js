import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Grids">

	<div className="f-main-wrapper">
		<div className="main-content">
			<h2 className="fd-text-center">Two cols</h2>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-left fm-c-stretch">
					<li className="f-bg-light" style={{padding: '20px'}}>left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-left-middle fm-c-stretch">
					<li className="f-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-center fm-c-center">
					<li className="f-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-center-middle fm-c-center">
					<li className="f-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-around fm-c-stretch">
					<li className="f-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-around-middle">
					<li className="f-bg-light temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="fd-bg-muted temp-padding">right</li>
				</ul>
			</div>


			<div className="f-bg-green temp-padding fd-hidden fm-hidden">
				<ul className="fd-f-center">
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light temp-padding">icon</li>
							<li className="fd-bg-muted temp-padding">hello world</li>
						</ul>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light temp-padding">icon</li>
							<li className="fd-bg-muted temp-padding">mac was here</li>
						</ul>
					</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding ft-text-center ft-hidden">
				<ul className="fd-f-center-middle ft-c-center ft-text-left">
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light temp-padding">icon</li>
							<li className="fd-bg-muted temp-padding">hello world</li>
						</ul>
					</li>
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light temp-padding">icon</li>
							<li className="fd-bg-muted temp-padding">mac was here</li>
						</ul>
					</li>
				</ul>
			</div>

			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="f-bg-light fd-f1 temp-padding">left</li>
					<li className="fd-bg-muted temp-padding">right</li>
				</ul>
			</div>
			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="fd-bg-muted temp-padding">left</li>
					<li className="f-bg-light fd-f1 temp-padding">right</li>
				</ul>
			</div>
			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f ft-c">
					<li className="fd-bg-muted fd-f1 temp-padding">left</li>
					<li className="f-bg-light fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<h2 className="fd-text-center">Vertical Align</h2>

			<h3 className="fd-text-center">Default top</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="f-bg-light fd-f1 temp-padding">left</li>
					<li className="fd-bg-muted fd-f1 temp-padding">center<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light fd-f1 temp-padding">right</li>
				</ul>
			</div>


			<h3 className="fd-text-center">Middle</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f-center-middle fm-c-stretch">
					<li className="f-bg-light fd-f3 temp-padding">left</li>
					<li className="fd-bg-muted fd-f3 temp-padding">center<br/>tall<br/>cell</li>
					<li className="f-bg-light fd-f3 temp-padding">right</li>
				</ul>
			</div>

			<h3 className="fd-text-center">Middle</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f-middle-middle fm-stretch-start">
					<li className="f-bg-light fd-f3 temp-padding">left</li>
					<li className="fd-bg-muted fd-f3 temp-padding">center<br/>tall<br/>cell</li>
					<li className="f-bg-light fd-f3 temp-padding">right</li>
				</ul>
			</div>


			<h2 className="fd-text-center">Grid inside grid</h2>

			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-cols fm-rows fd-va-stretch">
					<li className="f-bg-light fd-cell-wide">
						<ul className="fd-cols ft-rows">
							<li className="fd-bg-muted fd-cell-wide temp-padding">left</li>
							<li className="f-bg-light fd-cell-wide temp-padding">right</li>
						</ul>
					</li>
					<li className="fd-bg-muted temp-padding fd-cols fd-va-middle">right</li>
				</ul>
			</div>
		</div>
	</div>
</DemoWrapper>