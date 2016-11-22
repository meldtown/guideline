import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<div className="temp-padding">
		<Title>Checkbox</Title>
		<div className="f-checkbox fd-text-default">
			<label>
				<input type="checkbox"/>
				<div className="f-checkbox-control">
					<i className="fi-check-icon" />
				</div>
				<span>Lorem ipsum dolor sit amet</span>
			</label>
		</div>

		<Title>Radio button</Title>
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

		<Title>Radio buttons (block level)</Title>
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
