import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Checkbox">
	<h1 className="fd-text-h1 text-center">Checkbox</h1>

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
				<input type="radio" name="radio" value="1"/>
				<div className="checkbox-control">
					<i className="fa fa-check"></i>
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div className="checkbox fd-text-default">
			<label>
				<input type="radio" name="radio" value="2"/>
				<div className="checkbox-control">
					<i className="fa fa-check"></i>
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div className="checkbox fd-text-default">
			<label>
				<input type="radio" name="radio" value="3"/>
				<div className="checkbox-control">
					<i className="fa fa-check"></i>
				</div>
				<span>Option 3</span>
			</label>
		</div>
	</div>
</DemoWrapper>
