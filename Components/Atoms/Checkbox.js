import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<div class="temp-padding">
		<Title>Checkbox</Title>
		<div class="f-checkbox fd-text-default">
			<label>
				<input type="checkbox"/>
				<div class="f-checkbox-control">
					<i class="fi-check-icon" />
				</div>
				<span>Lorem ipsum dolor sit amet</span>
			</label>
		</div>

		<Title>Radio button</Title>
		<div class="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio" defaultChecked/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div class="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div class="f-checkbox fd-text-default">
			<label>
				<input type="radio" name="radio"/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>

		<Title>Radio buttons (block level)</Title>
		<div class="f-checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block" defaultChecked/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 1</span>
			</label>
		</div>
		<div class="f-checkbox-block fd-text-default">
			<label>
				<input type="radio" name="radio-block"/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 2</span>
			</label>
		</div>
		<div class="f-checkbox-block fd-merchant">
			<label>
				<input type="radio" name="radio-block"/>
				<div class="f-checkbox-control">
				</div>
				<span>Option 3</span>
			</label>
		</div>
	</div>
</div>
