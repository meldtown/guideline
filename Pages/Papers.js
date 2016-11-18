import React from 'react'

export default () => <div>

	<input type="checkbox" id="overlay"/>
	<div style={{backgroundColor: '#ebf3fa', paddingBottom: '100px', overflow: 'hidden'}}>

		<h2 className="fd-section-header temp-padding">Blocks</h2>


		<header className="f-paper" style={{width: '100%', marginBottom: '100px', position: 'relative'}}>
			<p style={{padding: '50px', textAlign: 'center', fontSize: '23px', fontWeight: '700'}}>
				MENU BLOCK
				<label className="menu-icon" htmlFor="overlay">
					<i className="fi-vacancy" />
				</label>
			</p>
		</header>

		<div style={{width: '90%', margin: '0 auto 100px'}}>
			<div className="f-paper" style={{padding: '50px'}}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tenetur dolores possimus,
				optio nesciunt maxime veritatis, ipsa suscipit expedita molestias consequatur facilis illum illo error,
				assumenda. Eos, similique error! Nam cumque, saepe doloribus debitis possimus inventore ab eos
				laudantium cum aspernatur expedita, amet voluptas eius magni beatae incidunt aperiam pariatur quod
				neque. Perspiciatis magnam iure placeat accusantium labore ipsam rem exercitationem numquam ratione
				minus natus eaque esse dicta, illo asperiores ducimus mollitia repellendus beatae, eius quaerat. Quis,
				magnam, impedit ipsam quo ipsum asperiores sint dignissimos est omnis? Reprehenderit aliquam rerum
				cumque libero sit sint, sed necessitatibus natus quisquam unde.
			</div>
		</div>

		<div className="f-paper-lighten">
			<p style={{padding: '70px', textAlign: 'center'}}>Lorem ipsum dolor</p>
		</div>
	</div>

	<label className="overlay" htmlFor="overlay" />
	<aside className="sidebar">
		<label className="close-sidebar" htmlFor="overlay">
			<i className="">&times;</i>
		</label>
	</aside>

</div>
