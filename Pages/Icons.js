import React from 'react'
import icons from 'rua-icons-fi/fi'
import DemoWrapper from 'Components/DemoWrapper'

export default () => {
	//const colors = [].map.call([].map.call(document.styleSheets, s => s.rules || s.cssRules).filter(r => r).reduce((a, b) => a.concat(b), []).shift(), r => r.selectorText).filter(s => (s || '').indexOf('.f-bg-') === 0).map(s => s.substring(1).replace('f-bg-', 'f-text-'))
	const colors = [
		'f-text-coral',
		'f-text-dark_green',
		'f-text-green',
		'f-text-royal_blue',
		'f-text-lilac',
		'f-text-black',
		'f-text-gray'
	]
	let color = 0

	return <DemoWrapper title="Icons">
		<div className="fd-f-center">
			<div>
				{icons.map(icon => {
					let cls = `${icon} ${colors[color++]}`
					if (color >= colors.length) color = 0
					return <div key={icon}><i className={cls} /> {icon}</div>
				})}
			</div>
		</div>
	</DemoWrapper>
}
