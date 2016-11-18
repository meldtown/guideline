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

		<p>Each grid in examples above has different set of media specific class names. <strong className="f-text-lilac">fd</strong>esktop, <strong className="f-text-lilac">ft</strong>ablet, <strong className="f-text-lilac">fm</strong>obile</p>
		<p>In most cases you want to rotate your cells into rows and there is only two available cases for horizontally align them - center and stretch</p>
		<p>So your classes are: <strong className="f-text-lilac">fm-c-center</strong> and <strong className="f-text-lilac">fm-c-stretch</strong></p>

		<p className="fd-c-center">
			<span className="f-bg-light-gray temp-padding">top</span>
			<span className="f-bg-light-light-gray temp-padding">bottom</span>
		</p>

		<p className="fd-c-stretch">
			<span className="f-bg-light-gray temp-padding">top</span>
			<span className="f-bg-light-light-gray temp-padding">bottom</span>
		</p>
	</div>

</DemoWrapper>
