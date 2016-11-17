import React from 'react'
import icons from 'rua-icons-fi/fi'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Icons">
		<div className="fd-c-center">
			{icons.map(icon => <p key={icon}><i className={icon} /> {icon}</p>)}
		</div>
</DemoWrapper>
