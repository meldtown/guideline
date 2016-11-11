import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Dropdown">
	<h1 className=" temp-padding fd-h1 text-center">Dropdown</h1>


	<div className="temp-padding">
		<h3 className=" fd-h4 text-center">Inline select</h3>
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

		<h3 className=" fd-h4 text-center">Block level select</h3>
		<div className="f-input-block fd-h1">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>

		<div className="f-input-block fd-h3">
			<select name="select" id="1">
				<option>Value 1</option>
				<option>Value 2</option>
				<option>Value 3</option>
				<option>Value 4</option>
				<option>Value 5</option>
			</select>
			<i className="fa fa-caret-down"></i>
		</div>

		<div className="f-input-block fd-h5">
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


		<h3 className="fd-h3">Fake select(block level)</h3>
		<div className="f-input-block fd-default">
		<span>Fake select</span>
			<i className="fa fa-caret-down"></i>
		</div>

		<h3 className="fd-h3">Fake select</h3>
		<div className="f-input fd-default icon-right">
		<span>Fake select</span>
			<i className="fa fa-caret-down"></i>
		</div>
	</div>
</DemoWrapper>
