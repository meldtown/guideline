import React from 'react'
import { Link } from 'react-router'
import Header from 'Organisms/Header'
import Footer from 'Organisms/Footer'

export default ({title, children}) => <div>
	
	<div className="f-bg-ultra-blue">

		<Header title={title} />

		<div className="f-paper f-main-wrapper" style={{padding: '50px'}}>
			{children}
		</div>

		<div style={{overflow:'hidden'}}>
			<p className="f-paper-lighten fd-text-center" style={{padding: '70px'}}>Lorem ipsum dolor</p>
		</div>

		<Footer />

	</div>

</div>
