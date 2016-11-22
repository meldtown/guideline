import React from 'react'

export default () => <div>
	<h1 className="f-emperor fm-merchant text-center">Checkbox</h1>

	<div className="temp-padding">
		<h3 className="fd-text-default fm-merchant">Checkbox</h3>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="checkbox"/>
				<div className="f-checkbox-control">
					<i className="fi-check-icon" />
				</div>
				<span>Lorem ipsum dolor sit amet</span>
			</label>
		</div>

		<h3 className="fd-text-default fm-merchant">Radio button</h3>
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

		<h3 className="fd-text-default fm-merchant">Radio buttons (block level)</h3>
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
		<div className="f-checkbox-block fd-merchant">
			<label>
				<input type="radio" name="radio-block"/>
				<div className="f-checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>
	</div>
</div>
