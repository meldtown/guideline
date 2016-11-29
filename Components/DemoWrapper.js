import React from 'react'
import Header from 'Organisms/Header'
import Footer from 'Organisms/Footer'

export default ({title, children}) => <div>

	<div class="f-bg-ultra-blue" style={{paddingTop: '150px'}}>

		<Header title={title}/>

		<div class="f-main-wrapper">
			<div class="f-paper fd-p50">
				{children}
			</div>
		</div>

		<div style={{overflow: 'hidden'}}>
			<p class="f-paper-lighten fd-text-center" style={{padding: '70px'}}>Lorem ipsum dolor</p>
		</div>

		<Footer />

	</div>

</div>
