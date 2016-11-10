import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Dropdown">
	<h1 className=" temp-padding fd-text-h1 text-center">Dropdown</h1>


	<div className="temp-padding">
		<h3 className=" fd-text-h4 text-center">Inline select</h3>
		<div className="f-input">
			<select name="select" id="1">
				<option value="value-1">Value 1</option>
				<option value="value-2">Value 2</option>
				<option value="value-3">Value 3</option>
				<option value="value-4">Value 4</option>
				<option value="value-5">Value 5</option>
			</select>
			<i className="fa fa-sort-desc"></i>
		</div>

		<h3 className=" fd-text-h4 text-center">Block level select</h3>
		<div className="f-input-block fd-h1">
			<select name="select" id="1">
				<option value="value-1">Value 1</option>
				<option value="value-2">Value 2</option>
				<option value="value-3">Value 3</option>
				<option value="value-4">Value 4</option>
				<option value="value-5">Value 5</option>
			</select>
			<i className="fa fa-sort-desc"></i>
		</div>

		<div className="f-input-block fd-h3">
			<select name="select" id="1">
				<option value="value-1">Value 1</option>
				<option value="value-2">Value 2</option>
				<option value="value-3">Value 3</option>
				<option value="value-4">Value 4</option>
				<option value="value-5">Value 5</option>
			</select>
			<i className="fa fa-sort-desc"></i>
		</div>

		<div className="f-input-block fd-h5">
			<select name="select" id="1">
				<option value="value-1">Value 1</option>
				<option value="value-2">Value 2</option>
				<option value="value-3">Value 3</option>
				<option value="value-4">Value 4</option>
				<option value="value-5">Value 5</option>
			</select>
			<i className="fa fa-sort-desc"></i>
		</div>

		<div className="f-input-block fd-text-default">
			<select name="select" id="1">
				<option value="value-1">Value 1</option>
				<option value="value-2">Value 2</option>
				<option value="value-3">Value 3</option>
				<option value="value-4">Value 4</option>
				<option value="value-5">Value 5</option>
			</select>
			<i className="fa fa-sort-desc"></i>
		</div>
	</div>
</DemoWrapper>
