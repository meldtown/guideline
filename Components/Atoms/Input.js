import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<div className="temp-padding">
		<Title>Standard input</Title>
		<div className="f-input fd-samurai fd-merchant">
			<input type="text" />
		</div>

		<Title>Block level input</Title>
		<div className="f-input-block fd-samurai fd-merchant">
			<input type="text"/>
		</div>

		<Title>Block level input with placeholder</Title>
		<div className="f-input-block fd-samurai fd-merchant">
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

		<Title>Standard block input with icon on left</Title>

		<div className="f-input-block f-input-icon-left fd-merchant">
			<input type="text"/>
			<i className="fi-company-profile"/>
		</div>

		<Title>Standard block input with icon on right</Title>

		<div className="f-input-block f-input-icon-right fd-merchant">
			<input type="text"/>
			<i className="fi-premium"/>
		</div>

		<Title>Standard block input with icons from both sides</Title>

		<div className="f-input-block f-input-icon-left f-input-icon-right fd-merchant">
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
		<Title>Input types with special controls</Title>

		<Title>Type <strong>number</strong></Title>
		<div className="f-input-block f-input-icon-right fd-merchant">
			<input type="number"/>
			<i className="fi-company-find"/>
		</div>

		<Title>Type <strong>date</strong></Title>
		<div className="f-input-block f-input-icon-right fd-merchant">
			<input type="date"/>
			<i className="fi-links"/>
		</div>

		<Title>Type <strong>email</strong></Title>
		<div className="f-input-block f-input-icon-right fd-merchant">
			<input type="email"/>
			<i className="fi-hot"/>
		</div>

	</div>


	<div>
		<Title>Labeled input</Title>
		<p>
			<label>Username:</label>
			<span className="f-input f-input-icon-right">
				<input type="text"/>
				<i className="fi-contact"/>
			</span>
		</p>
	</div>

</div>
