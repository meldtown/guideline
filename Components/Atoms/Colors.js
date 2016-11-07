import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper>
	<h1 className="h1 text-center">Main colors</h1>

	<ul className="sg_row t_cols center">
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_primary"/></li>
				<li className="letter text_primary"/>
				<li className="name">primary</li>
			</ul>
		</li>
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_secondary"/></li>
				<li className="letter text_secondary"/>
				<li className="name">secondary</li>
			</ul>
		</li>
		<li>
			<ul className="sg_row middle sg_color">
				<li className="circle"><span className="bg_main"/></li>
				<li className="letter text_main"/>
				<li className="name">main</li>
			</ul>
		</li>
	</ul>

	<h1 className="h1 text-center">Grayscale</h1>

	<div>
		<ul className="sg_row m_cols sg_grayscale center">
			<li className="wide"><span className="bg_light"/></li>
			<li className="wide"><span className="bg_muted"/></li>
			<li className="wide"><span className="bg_medium"/></li>
			<li className="wide"><span className="bg_dark"/></li>
			<li className="wide"><span className="bg_black"/></li>
		</ul>
	</div>

	<p className="text_medium text-center">Colors are semi transparent</p>

	<div className="bg_secondary">
		<ul className="sg_row m_cols sg_grayscale center">
			<li className="wide"><span className="bg_light"/></li>
			<li className="wide"><span className="bg_muted"/></li>
			<li className="wide"><span className="bg_medium"/></li>
			<li className="wide"><span className="bg_dark"/></li>
			<li className="wide"><span className="bg_black"/></li>
		</ul>
	</div>
</DemoWrapper>
