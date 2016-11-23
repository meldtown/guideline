import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<Title>Input</Title>
	<ul class="fd-f-left fm-c-stretch">
		<li>
			<div class="f-input fm-input-block">
				<input type="text" placeholder="standard" />
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block">
				<input type="text" placeholder="block level"/>
			</div>
		</li>
	</ul>

	<Title>Icons</Title>
	<ul class="fd-f-left fm-c-stretch">
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-left">
				<input type="text" placeholder="icon left"/>
				<i class="fi-company-profile"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-right">
				<input type="text" placeholder="icon right"/>
				<i class="fi-premium"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-left f-input-icon-right">
				<input type="text" placeholder="icon left and right"/>
				<i class="fi-contact"/>
				<i class="fi-home"/>
			</div>
		</li>
	</ul>

	<Title>Misc</Title>
	<ul class="fd-f-left fm-c-stretch">
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-right">
				<input type="number" placeholder="number"/>
				<i class="fi-company-find"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-right">
				<input type="date" placeholder="date"/>
				<i class="fi-links"/>
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block f-input-icon-right">
				<input type="email" placeholder="email"/>
				<i class="fi-hot"/>
			</div>
		</li>
	</ul>

	<Title>Labeled input</Title>
	<div>
		<label>Username:&nbsp;</label>
		<span class="f-input f-input-icon-right fm-input-block">
			<input type="text"/>
			<i class="fi-contact"/>
		</span>
	</div>


	{/*<div class="f-input-block icon-left icon-right fd-section-header">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-block-header">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-vacancy-header">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-vacancy-title">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-vacancy-title">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-default">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-small">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<div class="f-input-block icon-left icon-right fd-micro">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>

	<h1 class="fd-block-header text-center">Standard inline input with icons from both sides</h1>
	<div class="f-input icon-left icon-right fd-vacancy-title">
		<input type="text"/>
		<i class="fa fa-map-marker"/>
		<i class="fa fa-map-marker"/>
	</div>*/}
</div>
