import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<Title>Input</Title>
	<ul className="fd-f-left fm-c-stretch">
		<li>
			<div className="f-input fm-input-block">
				<select name="select" id="1">
					<option>Standard</option>
					<option>Value 1</option>
					<option>Value 2</option>
					<option>Value 3</option>
					<option>Value 4</option>
					<option>Value 5</option>
				</select>
				<i className="fi-drop-down-icon" />
			</div>
		</li>
		<li>&nbsp;</li>
		<li className="fd-f1">
			<div className="f-input-block">
				<select name="select" id="1">
					<option>Block level</option>
					<option>Value 1</option>
					<option>Value 2</option>
					<option>Value 3</option>
					<option>Value 4</option>
					<option>Value 5</option>
				</select>
				<i className="fi-drop-down-icon" />
			</div>
		</li>
	</ul>


	<div className="temp-padding">
		{/*<div className="f-input-block fd-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fi-drop-down-icon"></i>
		</div>

		<div className="f-input-block fd-block-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fi-drop-down-icon"></i>
		</div>

		<div className="f-input-block fd-vacancy-title">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fi-drop-down-icon"></i>
		</div>*/}




		<Title>Pseudo select</Title>
		<div className="f-input fd-merchant">
			<span className="f-input-pseudo-select">по рубрикам</span>
			<i className="fi-drop-down-icon f-input-pseudo-link-icon" />
		</div>

		<Title>Pseudo Link</Title>
		<div className="f-input fd-merchant">
			<a href="#" className="f-input-pseudo-link">Открыть контакт</a>
		</div>
	</div>
</div>
