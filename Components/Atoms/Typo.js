import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Typo">
	<h2 className="fd-text-center">Size</h2>

	<div className="fd-cols fd-va-stretch">
		<span className="fd-text-hero fd-cell-wide fd-cols fd-va-middle fd-bg-blue fd-text-center">Hero</span>
		<span className="fd-text-huge fd-cell-wide fd-cols fd-va-middle fd-bg-green fd-text-center">Huge</span>
		<span className="fd-text-big fd-cell-wide fd-cols fd-va-middle fd-bg-yellow fd-text-center">Big</span>
		<span className="fd-text-large fd-cell-wide fd-cols fd-va-middle fd-bg-pink fd-text-center">Large</span>
		<span className="fd-text-loud fd-cell-wide fd-cols fd-va-middle fd-bg-lilak fd-text-center">Loud</span>
		<span className="fd-text-default fd-cell-wide fd-cols fd-va-middle fd-bg-blue fd-text-center">Default</span>
		<span className="fd-text-small fd-cell-wide fd-cols fd-va-middle fd-bg-green fd-text-center">Small</span>
		<span className="fd-text-micro fd-cell-wide fd-cols fd-va-middle fd-bg-yellow fd-text-center">Micro</span>
	</div>

	<div className="fd-text-hero temp-padding"><b>Hero</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-huge temp-padding"><b>Huge</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-big temp-padding"><b>Big</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-large temp-padding"><b>Large</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-loud temp-padding"><b>Loud</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-default temp-padding"><b>Default</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-small temp-padding"><b>Small</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>
	<div className="fd-text-micro temp-padding"><b>Micro</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos enim ex ratione similique voluptatem voluptatum. Aperiam culpa explicabo hic magni nam numquam optio placeat quod rerum unde! Repellendus, unde?</div>


	<h1 className="h1 fd-text-center ft-text-right fm-text-left">Alignment</h1>

	<ul className="sg_row">
		<li className="wide"><p className="text-left">Left</p></li>
		<li className="wide"><p className="text-center">Center</p></li>
		<li className="wide"><p className="text-right">Right</p></li>
	</ul>


	<h1>h1 by default is same as usual text</h1>
	<p className="h1">h1 may be added to any element</p>
	<p>even <span className="h1">span</span></p>

	<ul className="sg_row">
		<li>
			<h1 className="h1">Heading 1 One line</h1>
		</li>
		<li>
			<h1 className="h1">Heading 1<br/>Two lines</h1>
		</li>
	</ul>
</DemoWrapper>
