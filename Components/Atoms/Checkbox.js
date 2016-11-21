import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <div>
	<h1 className="fd-header fm-default text-center">Checkbox</h1>

	<div className="temp-padding">
		<h3 className="fd-text-default fm-default">Checkbox</h3>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="checkbox"/>
				<div className="f-checkbox-control">
					<i className="fi-check-icon"></i>
				</div>
				<span>Lorem ipsum dolor sit amet</span>
			</label>
		</div>

		<h3 className="fd-text-default fm-default">Radio button</h3>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio" defaultChecked/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>

		<h3 className="fd-text-default fm-default">Radio buttons (block level)</h3>
		<div className="f-checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block" defaultChecked/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div className="f-checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block"/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div className="f-checkbox-block fd-default">
			<label>
				<input type="radio" name="radio-block"/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>
	</div>
</div>
