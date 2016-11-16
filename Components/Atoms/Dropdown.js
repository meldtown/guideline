import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Dropdown">
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
			<i className="fa fa-caret-down"></i>
		</div>

		<h3 className=" fd-vacancy-header text-center">Block level select</h3>
		<div className="f-input-block fd-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>

		<div className="f-input-block fd-block-header">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>

		<div className="f-input-block fd-vacancy-title">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>

		<div className="f-input-block fd-default">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>


		<h3 className="fd-block-header">Fake select(block level)</h3>
		<div className="f-input-block fd-default">
		<span>Fake select</span>
			<i className="fa fa-caret-down"></i>
		</div>

		<h3 className="fd-block-header">Fake select</h3>
		<div className="f-input fd-default icon-right">
		<span>Fake select</span>
			<i className="fa fa-caret-down"></i>
		</div>
	</div>
</DemoWrapper>
