import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Input">
	<div className="temp-padding">
		<h1 className="fd-h1 text-center">Input</h1>

		<h1 className="fd-h3 text-center">Standard input</h1>
		<div className="f-input fd-h5">
			<input type="text"/>
		</div>

		<h1 className="fd-h3 text-center">Block level input throughout all kinds of devices</h1>
		<div className="f-input-block fd-h5">
			<input type="text"/>
		</div>

		<h1 className="fd-h3 text-center">Block level input only for desktop</h1>
		<div className="fd-input-block fd-h5">
			<input type="text"/>
		</div>

		<h1 className="fd-h3 text-center">Block level input only for tablets</h1>
		<div className="ft-input-block fd-h5">
			<input type="text"/>
		</div>

		<h1 className="fd-h3 text-center">Block level input only for mobiles</h1>
		<div className="fm-input-block fd-h5">
			<input type="text"/>
		</div>

		<h1 className="fd-h3 text-center">Standard block input with icons from both sides</h1>

		<div className="f-input-block icon-left icon-right fd-h1">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-h2">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-h3">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-h4">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-h5">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-h5">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-default">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-small">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<div className="f-input-block icon-left icon-right fd-micro">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>

		<h1 className="fd-h3 text-center">Standard inline input with icons from both sides</h1>
		<div className="f-input icon-left icon-right fd-h5">
			<input type="text"/>
			<i className="fa fa-map-marker"></i>
			<i className="fa fa-map-marker"></i>
		</div>
	</div>

	<div className="temp-padding">
		<h1 className="fd-h4 text-center">Input types with special controls</h1>

		<h3 className="fd-h5">Type <strong>number</strong></h3>
		<div className="f-input-block icon-right fd-h3">
			<input type="number"/>
			<i className="fa fa-money"></i>
		</div>

		<h3 className="fd-h5">Type <strong>date</strong></h3>
		<div className="f-input-block icon-right fd-h3">
			<input type="date"/>
			<i className="fa fa-calendar"></i>
		</div>

		<h3 className="fd-h5">Type <strong>email</strong></h3>
		<div className="f-input-block icon-right fd-h3">
			<input type="email"/>
			<i className="fa fa-envelope-o"></i>
		</div>
		
	</div>
</DemoWrapper>
