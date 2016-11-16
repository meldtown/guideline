import React from 'react'
import DemoWrapper from '../Components/DemoWrapper'

export default () => <DemoWrapper title="Typo">

	<h2 className="fd-header fd-text-center">Fonts</h2>
	<div className="temp-padding fd-default">
		<p className="fd-light">Graphic LC Light</p>
		<p className="fd-regular">Graphic LC Regular</p>
		<p className="fd-medium">Graphic LC Medium</p>
		<p className="fd-semibold">Graphic LC Semibold</p>
		<p className="fd-bold">Graphic LC Bold</p>
	</div>

	<h1 className="fd-header fd-text-center">Typographity</h1>

	<div className="temp-padding fd-default">
		<p style={{margin: '10px 0'}} className="fd-header">Header</p>
		<p style={{margin: '10px 0'}} className="fd-section-header">Section-Header</p>
		<p style={{margin: '10px 0'}} className="fd-block-header">Blocks-Header</p>
		<p style={{margin: '10px 0'}} className="fd-vacancy-header">Vacancy-Header</p>
		<p style={{margin: '10px 0'}} className="fd-vacancy-title">Vacancy-Title</p>
		<p style={{margin: '10px 0'}}><span className="fd-form-header">Forms-Header</span> / <span className="fd-subheader">Subheader</span></p>
		<p style={{margin: '10px 0'}} className="fd-subtitle">Subtitle</p>
		<p style={{margin: '10px 0'}}><span className="fd-regular">Default-text</span> / <span className="fd-light">Default-text</span> / <span className="fd-medium">Default-text</span> / <span className="fd-semibold">Default-text</span></p>
		<p style={{margin: '10px 0'}} className="fd-middle"><span className="fd-light">Middle-text</span> / <span className="fd-regular">Middle-text</span></p>
		<p style={{margin: '10px 0'}} className="fd-small">Small text</p>
		<p style={{margin: '10px 0'}} className="fd-micro">Smallest text</p>
	</div>



</DemoWrapper>
