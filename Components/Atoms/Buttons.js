import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">

		<h3 className="fd-h3 fd-text-center">Inline level buttons</h3>

		<button className="btn-default fd-h1">btn-default</button>
		<button className="btn-border fd-h1">btn-border</button>
		<button className="btn-filled fd-h1">btn-filled</button>
		<button className="btn-default-hovered-border fd-h1">btn-default-hovered-border</button>
		<button className="btn-default-hovered-filled fd-h1">btn-default-hovered-filled</button>
		<button className="btn-border-hovered-filled fd-h1">btn-border-hovered-filled</button>

		<h3 className="fd-h3 fd-text-center">Block level buttons</h3>

		<button className="btn-default-block fd-h1">btn-default-block</button>
		<button className="btn-border-block fd-h1">btn-border-block</button>
		<button className="btn-filled-block fd-h1">btn-filled-block</button>
		<button className="btn-default-hovered-border-block fd-h1">btn-default-hovered-border-block</button>
		<button className="btn-default-hovered-filled-block fd-h1">btn-default-hovered-filled-block</button>
		<button className="btn-border-hovered-filled-block fd-h1">btn-border-hovered-filled-block</button>

		<h3 className="fd-h3 fd-text-center">Link buttons</h3>

		<a href="#" className="btn-border-hovered-filled fd-h1">btn-border-hovered-filled</a>
		<a href="#" className="btn-border-hovered-filled-block fd-h1">btn-border-hovered-filled-block</a>
	</div>

</DemoWrapper>
