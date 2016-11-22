import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<div className="temp-padding">
		<Title>Inline select</Title>
		<div className="f-input">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			{/*<i className="fi-drop-down-button"></i>*/}
			<i className="fi-drop-down-icon" />
		</div>

		<Title>Block level select</Title>
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

		<div className="f-input-block fd-merchant">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fi-drop-down-icon" />
		</div>


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
