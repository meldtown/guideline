import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <div>
	<h1 className=" temp-padding fd-header text-center">Dropdown</h1>


	<div className="temp-padding">
		<h3 className=" fd-vacancy-header text-center">Inline select</h3>
		<div className="f-input">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			{/*<i className="fi-drop-down-button"></i>*/}
			<i className="fi-drop-down-icon"></i>
		</div>

		<h3 className=" fd-vacancy-header text-center">Block level select</h3>
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

		<div className="f-input-block fd-default">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fi-drop-down-icon"></i>
		</div>


		<h3 className="fd-block-header">Pseudo select</h3>
		<div className="f-input fd-default">
			<span className="f-input-pseudo-select">по рубрикам</span>
			<i className="fi-drop-down-icon f-input-pseudo-link-icon"></i>
		</div>

		<h3 className="fd-block-header">Pseudo Link</h3>
		<div className="f-input fd-default">
			<a href="#" className="f-input-pseudo-link">Открыть контакт</a>
		</div>
	</div>
</div>
