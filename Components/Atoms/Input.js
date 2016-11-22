import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<Title>Input</Title>
	<ul className="fd-f-left fm-c-stretch">
		<li>
			<div className="f-input fm-input-block">
				<input type="text" placeholder="standard" />
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block">
				<input type="text" placeholder="block level"/>
			</div>
		</li>
	</ul>

	<Title>Icons</Title>
	<ul className="fd-f-left fm-c-stretch">
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-left">
				<input type="text" placeholder="icon left"/>
				<i className="fi-company-profile"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-right">
				<input type="text" placeholder="icon right"/>
				<i className="fi-premium"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-left f-input-icon-right">
				<input type="text" placeholder="icon left and right"/>
				<i className="fi-contact"/>
				<i className="fi-home"/>
			</div>
		</li>
	</ul>

	<Title>Misc</Title>
	<ul className="fd-f-left fm-c-stretch">
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-right">
				<input type="number" placeholder="number"/>
				<i className="fi-company-find"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-right">
				<input type="date" placeholder="date"/>
				<i className="fi-links"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block f-input-icon-right">
				<input type="email" placeholder="email"/>
				<i className="fi-hot"/>
			</div>
		</li>
	</ul>

	<Title>Labeled input</Title>
	<div>
		<label>Username:&nbsp;</label>
		<span className="f-input f-input-icon-right fm-input-block">
			<input type="text"/>
			<i className="fi-contact"/>
		</span>
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
