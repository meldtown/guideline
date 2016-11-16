import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Checkbox">
	<h1 className="fd-header text-center">Checkbox</h1>

	<div className="temp-padding">
		<h3 className="fd-text-default">Checkbox</h3>
		<div className="checkbox fd-text-default">
			<label>
				<input type="checkbox"/>
				<div className="checkbox-control">
					<i className="fa fa-check"></i>
				</div>
				<span>Lorem ipsum dolor sit amet</span>
			</label>
		</div>

		<h3 className="fd-text-default">Radio button</h3>
		<div className="checkbox fd-text-default">
			<label>
				<input type="radio" name="radio" defaultChecked/>
				<div className="checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div className="checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div className="checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div className="checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div className="checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>

		<h3 className="fd-text-default">Radio buttons (block level)</h3>
		<div className="checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block" defaultChecked/>
				<div className="checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div className="checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block"/>
				<div className="checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div className="checkbox-block fd-default">
			<label>
				<input type="radio" name="radio-block"/>
				<div className="checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>
	</div>
</DemoWrapper>
