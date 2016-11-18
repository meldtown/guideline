import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Grids">
	<div className="f-main-wrapper">
		<p>Main idea is to have as least as possible classes to achieve any kind of grids</p>
		<p>There is limited number of grids that may be build on top of this classes</p>
		<p>Grids may be overwritten by media queries</p>

		<h2 className="fd-section-header fd-text-center">Horizontal alignment</h2>

		<h3 className="fd-subheader fd-text-center">Left</h3>

		<ul className="fd-f-left fm-c-stretch">
			<li className="f-bg-light-gray temp-padding">left</li>
			<li className="f-bg-light-light-gray temp-padding">right<br/>Notice that both cells has same height</li>
		</ul>

		<p className="fd-text-center">If you want you may configure cells width by adding classes like .fd-f1</p>

		<ul className="fd-f-left fm-c-stretch">
			<li className="f-bg-light-gray temp-padding">left</li>
			<li className="f-bg-light-light-gray fd-f1 temp-padding">right<br/>Notice that both cells has same height</li>
		</ul>

	</div>


	<div className="f-main-wrapper">
		<div className="main-content">
			<h2 className="fd-text-center">Two cols</h2>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-left fm-c-stretch">
					<li className="f-bg-light-gray" style={{padding: '20px'}}>left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-left-middle fm-c-stretch">
					<li className="f-bg-light-gray temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-center fm-c-center">
					<li className="f-bg-light-gray temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-center-middle fm-c-center">
					<li className="f-bg-light-gray temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-around fm-c-stretch">
					<li className="f-bg-light-gray temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray temp-padding">right</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding">
				<ul className="fd-f-around-middle">
					<li className="f-bg-light-gray temp-padding">left<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-light-gray temp-padding">right</li>
				</ul>
			</div>


			<div className="f-bg-green temp-padding fd-hidden fm-hidden">
				<ul className="fd-f-center">
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light-gray temp-padding">icon</li>
							<li className="f-bg-light-light-gray temp-padding">hello world</li>
						</ul>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light-gray temp-padding">icon</li>
							<li className="f-bg-light-light-gray temp-padding">mac was here</li>
						</ul>
					</li>
				</ul>
			</div>

			<div className="f-bg-green temp-padding ft-text-center ft-hidden">
				<ul className="fd-f-center-middle ft-c-center ft-text-left">
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light-gray temp-padding">icon</li>
							<li className="f-bg-light-light-gray temp-padding">hello world</li>
						</ul>
					</li>
					<li>
						<ul className="fd-f-left-middle fm-c-center">
							<li className="f-bg-light-gray temp-padding">icon</li>
							<li className="f-bg-light-light-gray temp-padding">mac was here</li>
						</ul>
					</li>
				</ul>
			</div>

			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="f-bg-light-gray fd-f1 temp-padding">left</li>
					<li className="f-bg-light-light-gray temp-padding">right</li>
				</ul>
			</div>
			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="f-bg-light-light-gray temp-padding">left</li>
					<li className="f-bg-light-gray fd-f1 temp-padding">right</li>
				</ul>
			</div>
			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-f ft-c">
					<li className="f-bg-light-light-gray fd-f1 temp-padding">left</li>
					<li className="f-bg-light-gray fd-f1 temp-padding">right</li>
				</ul>
			</div>

			<h2 className="fd-text-center">Vertical Align</h2>

			<h3 className="fd-text-center">Default top</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f fm-c">
					<li className="f-bg-light-gray fd-f1 temp-padding">left</li>
					<li className="f-bg-light-light-gray fd-f1 temp-padding">center<br/>very<br/>tall<br/>cell</li>
					<li className="f-bg-light-gray fd-f1 temp-padding">right</li>
				</ul>
			</div>


			<h3 className="fd-text-center">Middle</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f-center-middle fm-c-stretch">
					<li className="f-bg-light-gray fd-f3 temp-padding">left</li>
					<li className="f-bg-light-light-gray fd-f3 temp-padding">center<br/>tall<br/>cell</li>
					<li className="f-bg-light-gray fd-f3 temp-padding">right</li>
				</ul>
			</div>

			<h3 className="fd-text-center">Middle</h3>
			<div className="f-bg-pink f-text-white temp-padding">
				<ul className="fd-f-middle-middle fm-stretch-start">
					<li className="f-bg-light-gray fd-f3 temp-padding">left</li>
					<li className="f-bg-light-light-gray fd-f3 temp-padding">center<br/>tall<br/>cell</li>
					<li className="f-bg-light-gray fd-f3 temp-padding">right</li>
				</ul>
			</div>


			<h2 className="fd-text-center">Grid inside grid</h2>

			<div className="f-bg-green f-text-white temp-padding">
				<ul className="fd-cols fm-rows fd-va-stretch">
					<li className="f-bg-light-gray fd-cell-wide">
						<ul className="fd-cols ft-rows">
							<li className="f-bg-light-light-gray fd-cell-wide temp-padding">left</li>
							<li className="f-bg-light-gray fd-cell-wide temp-padding">right</li>
						</ul>
					</li>
					<li className="f-bg-light-light-gray temp-padding fd-cols fd-va-middle">right</li>
				</ul>
			</div>
		</div>
	</div>
</DemoWrapper>
