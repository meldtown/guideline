import React from 'react'

export default () => {
	const icons = [
		'fi-arrows-right-big',
		'fi-category-find',
		'fi-check-icon',
		'fi-checked-company',
		'fi-company-find',
		'fi-company-profile',
		'fi-contact',
		'fi-drop-down-icon',
		'fi-home',
		'fi-hot',
		'fi-like',
		'fi-links',
		'fi-location-find',
		'fi-location',
		'fi-ok',
		'fi-phone',
		'fi-premium',
		'fi-profession-find',
		'fi-small-arrow',
		'fi-vacancy'
	]

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

	return <div>
		{icons.map(icon => {
			let cls = `${icon} ${colors[color++]}`
			if (color >= colors.length) color = 0
			return <div key={icon}><i className={cls}/> {icon}</div>
		})}
	</div>
}
