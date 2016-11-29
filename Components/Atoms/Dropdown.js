import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<Title>Input</Title>
	<ul class="fd-f-left fm-c-stretch">
		<li>
			<div class="f-input fm-input-block">
				<select name="select" id="1">
					<option>Standard</option>
					<option>Value 1</option>
					<option>Value 2</option>
					<option>Value 3</option>
					<option>Value 4</option>
					<option>Value 5</option>
				</select>
				<i class="fi-drop-down-icon" />
			</div>
		</li>
		<li>&nbsp;</li>
		<li class="fd-f1">
			<div class="f-input-block">
				<select name="select" id="1">
					<option>Block level</option>
					<option>Value 1</option>
					<option>Value 2</option>
					<option>Value 3</option>
					<option>Value 4</option>
					<option>Value 5</option>
				</select>
				<i class="fi-drop-down-icon" />
			</div>
		</li>
	</ul>


	<div class="fd-p20">
		{/*<div class="f-input-block fd-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i class="fi-drop-down-icon"></i>
		</div>

		<div class="f-input-block fd-block-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i class="fi-drop-down-icon"></i>
		</div>

		<div class="f-input-block fd-vacancy-title">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i class="fi-drop-down-icon"></i>
		</div>*/}




		<Title>Pseudo select</Title>
		<div class="f-input fd-merchant" style={{marginRight: 20}}>
			<span class="f-input-pseudo-select">по рубрикам</span>
			<i class="fi-drop-down-icon f-input-pseudo-link-icon" />
		</div>
		<div class="f-input fd-merchant">
			<span class="f-input-pseudo-select pseudo-select-focus">по рубрикам</span>
			<i class="fi-drop-down-icon f-input-pseudo-link-icon" />
		</div>

		<Title>Pseudo Link</Title>
		<div class="f-input fd-merchant">
			<a href="#" class="f-input-pseudo-link">Открыть контакт</a>
		</div>


		<Title>Dropdown</Title>
		<div class="f-dropdown-block-wrapper" style={{ paddingBottom: '5px' }}>
			<a href="#" class="f-always-blue">Dropdown Link</a>

			<div class="f-dropdown-menu-wrap">
				<ul class="f-reset-list">
					<li><a href="#">По рубрикам</a></li>
					<li><a href="#">По профессиям</a></li>
					<li><a href="#">По городам</a></li>
					<li><a href="#">По компаниям</a></li>
				</ul>
			</div>
		</div>

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>




	</div>
</div>
