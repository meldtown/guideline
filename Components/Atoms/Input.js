import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <div>
	<div className="temp-padding">
		<h1 className="fd-header text-center">Input</h1>

		<h1 className="fd-block-header text-center">Standard input</h1>
		<div className="f-input fd-vacancy-title fd-default">
			<input type="text" />
		</div>

		<h1 className="fd-block-header text-center">Block level input</h1>
		<div className="f-input-block fd-vacancy-title fd-default">
			<input type="text"/>
		</div>

		<h1 className="fd-block-header text-center">Block level input with placeholder</h1>
		<div className="f-input-block fd-vacancy-title fd-default">
			<input type="text" placeholder="Type your text here."/>
		</div>

		{/*<h1 className="fd-block-header text-center">Block level input only for desktop</h1>
		<div className="fd-input-block fd-vacancy-title">
			<input type="text"/>
		</div>

		<h1 className="fd-block-header text-center">Block level input only for tablets</h1>
		<div className="ft-input-block fd-vacancy-title">
			<input type="text"/>
		</div>

		<h1 className="fd-block-header text-center">Block level input only for mobiles</h1>
		<div className="fm-input-block fd-vacancy-title">
			<input type="text"/>
		</div>*/}

		<h1 className="fd-block-header text-center">Standard block input with icon on left</h1>

		<div className="f-input-block f-input-icon-left fd-default">
			<input type="text"/>
			<i className="fi-company-profile"/>
		</div>

		<h1 className="fd-block-header text-center">Standard block input with icon on right</h1>

		<div className="f-input-block f-input-icon-right fd-default">
			<input type="text"/>
			<i className="fi-premium"/>
		</div>

		<h1 className="fd-block-header text-center">Standard block input with icons from both sides</h1>

		<div className="f-input-block f-input-icon-left f-input-icon-right fd-default">
			<input type="text"/>
			<i className="fi-contact"/>
			<i className="fi-home"/>
		</div>

		{/*<div className="f-input-block icon-left icon-right fd-section-header">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-block-header">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-vacancy-header">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-vacancy-title">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-vacancy-title">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-default">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-small">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<div className="f-input-block icon-left icon-right fd-micro">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>

		<h1 className="fd-block-header text-center">Standard inline input with icons from both sides</h1>
		<div className="f-input icon-left icon-right fd-vacancy-title">
			<input type="text"/>
			<i className="fa fa-map-marker"/>
			<i className="fa fa-map-marker"/>
		</div>*/}
	</div>

	<div className="temp-padding">
		<h1 className="fd-vacancy-header text-center">Input types with special controls</h1>

		<h3 className="fd-vacancy-title">Type <strong>number</strong></h3>
		<div className="f-input-block icon-right fd-block-header">
			<input type="number"/>
			<i className="fa fa-money"/>
		</div>

		<h3 className="fd-vacancy-title">Type <strong>date</strong></h3>
		<div className="f-input-block icon-right fd-block-header">
			<input type="date"/>
			<i className="fa fa-calendar"/>
		</div>

		<h3 className="fd-vacancy-title">Type <strong>email</strong></h3>
		<div className="f-input-block icon-right fd-block-header">
			<input type="email"/>
			<i className="fa fa-envelope-o"/>
		</div>

	</div>


	<div>
		<h3 className="fd-block-header fd-text-center">Labeled input</h3>
		<p>
			<label>Username:</label>
			<span className="f-input icon-right">
				<input type="text"/>
				<i className="fa fa-envelope-o"/>
			</span>
		</p>
	</div>

</div>
