import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Grids">
	<div className="f-main-wrapper">
		<p>Main idea is to have as least as possible classes to achieve any kind of grids</p>
		<p>There is limited number of grids that may be build on top of this classes</p>
		<p>Grids may be overwritten by media queries</p>

		<h2 className="fd-section-header fd-text-center">Horizontal alignment</h2>

		<p>All grids starts with <span className="f-text-gray">fd-[horizontal-alignment]<span
			className="f-text-light-gray">-[vertical-aligment]</span></span> class by default vertical alignment is
			kinda "stretch" and is optional, so your options are: <strong className="f-text-lilac">fd-f-left</strong>,
			<strong className="f-text-lilac">fd-f-center</strong>, <strong className="f-text-lilac">fd-f-right</strong>
		</p>

		<h3 className="fd-subheader fd-text-center">Left</h3>

		<p className="fd-f-left fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">right<br/>Notice that both cells has same height</span>
		</p>

		<h3 className="fd-subheader fd-text-center">Center</h3>

		<p className="fd-f-center fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">right</span>
		</p>

		<h3 className="fd-subheader fd-text-center">Right</h3>

		<p className="fd-f-right fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">right</span>
		</p>

		<h2 className="fd-section-header fd-text-center">Vertical alignment</h2>

		<p>The only available option for vertical alignment is <strong className="f-text-lilac">middle</strong> so you
			may have classes like <span>fd-f-center-middle</span></p>

		<p className="fd-f-center-middle fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">hello<br />world</span>
			<span className="f-bg-light-gray temp-padding">right</span>
		</p>

		<h2 className="fd-section-header fd-text-center">12 cols is dead</h2>

		<p>Flex grid does not need 12 cols all we need is already here in flex box, so we have added <strong
			className="f-text-lilac">fd-f1</strong>, <strong className="f-text-lilac">fd-f2</strong>, <strong
			className="f-text-lilac">fd-f3</strong> which may be applied to cells to make them proportional wide</p>

		<p className="fd-f-left fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray fd-f1 temp-padding">If you want you may configure cells width by adding classes like <strong>fd-f1</strong></span>
		</p>

		<p className="fd-f-left fm-c-stretch">
			<span className="f-bg-light-gray fd-f1 temp-padding">fd-f1</span>
			<span className="f-bg-light-light-gray fd-f2 temp-padding">fd-f2</span>
			<span className="f-bg-light-gray fd-f1 temp-padding">fd-f1</span>
		</p>

		<h2 className="fd-section-header fd-text-center">Misc</h2>

		<p>There is two additional horizontal alignments available <strong className="f-text-lilac">fd-f-around</strong>
			and <strong className="f-text-lilac">fd-f-between</strong></p>

		<p className="fd-f-around fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">center</span>
			<span className="f-bg-light-gray temp-padding">right</span>
		</p>

		<p className="fd-f-between fm-c-stretch">
			<span className="f-bg-light-gray temp-padding">left</span>
			<span className="f-bg-light-light-gray temp-padding">center</span>
			<span className="f-bg-light-gray temp-padding">right</span>
		</p>

		<h2 className="fd-section-header fd-text-center">Greedy grids</h2>
		<p>By combining grids inside each other you may produce any kind of component</p>

		<p className="fd-f-center">
			<span className="fd-f-left fm-c-center">
				<span className="fd-f-left fm-c-center">
					<span className="f-bg-light-gray temp-padding"><i className="fi-ok"/></span>
					<span className="f-bg-light-light-gray temp-padding">hello world</span>
				</span>
				<span className="fd-f-left fm-c-center">
					<span className="f-bg-light-gray temp-padding"><i className="fi-like"/></span>
					<span className="f-bg-light-light-gray temp-padding">lorem ipsum</span>
				</span>
			</span>
		</p>

		{[1, 2, 3].map(i => <div key={i} className="fd-f-left-middle ">
			<span className="temp-padding"><i className="fi-contact f-text-dark-green"/></span>
			<span className="fd-f1 fd-f-left-middle fm-c-stretch">
			<span>
				<strong>User name {i}</strong>
				<br />
				<span className="f-text-light-gray">Hi, how are...</span>
			</span>
			<span className="f-text-light-gray fd-small">2 hours ago</span>
		</span>
			<span className="temp-padding fm-hidden"><i className="fi-arrows-right-big f-text-coral"/></span>
		</div>)}

		<h2 className="fd-section-header fd-text-center">Media queries</h2>
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
