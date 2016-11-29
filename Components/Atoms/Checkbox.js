import React from 'react'
import Title from '../Utils/Title'

export default () => <div>
	<div class="fd-p20">
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
		<div class="fd-f-left" style={{width: 300, marginTop: 50, border: '1px solid', padding: 5}}>
			<div class="f-checkbox fd-f1 fd-text-default">
				<label>
					<input type="checkbox"/>
					<div class="f-checkbox-control">
						<i class="fi-check-icon" />
					</div>
					<span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
				</label>
			</div>
			<div class="f-checkbox fd-f1 fd-text-default">
				<label>
					<input type="checkbox"/>
					<div class="f-checkbox-control">
						<i class="fi-check-icon" />
					</div>
					<span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
				</label>
			</div>
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

		<Title>IOS-like checkboxes</Title>
		<div className="f-switch-checkbox">
			<input id="switch-checkbox" type="checkbox"/>
			<label for="switch-checkbox">
				<div className="f-switcher"></div>
			</label>
		</div>
	</div>
</div>
