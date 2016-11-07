import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper>
	<h1 className="h1 text-center">Alignment</h1>

	<ul className="sg_row">
		<li className="wide"><p className="text-left">Left</p></li>
		<li className="wide"><p className="text-center">Center</p></li>
		<li className="wide"><p className="text-right">Right</p></li>
	</ul>


	<h1>h1 by default is same as usual text</h1>
	<p className="h1">h1 may be added to any element</p>
	<p>even <span className="h1">span</span></p>

	<ul className="sg_row">
		<li>
			<h1 className="h1">Heading 1 One line</h1>
		</li>
		<li>
			<h1 className="h1">Heading 1<br/>Two lines</h1>
		</li>
	</ul>
</DemoWrapper>
