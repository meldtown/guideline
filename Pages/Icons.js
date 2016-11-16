import React from 'react'
import icons from 'rua-icons-fi/fi'
import DemoWrapper from '../Components/DemoWrapper'

const IconItem = ({icon}) => <span className="fd-header">
	<i className={icon} />
</span>

export default () => <DemoWrapper title="Icons">
		<div className="fd-f-around-middle">
			{icons.map(icon => <IconItem key={icon} icon={icon}/>)}
		</div>
</DemoWrapper>
