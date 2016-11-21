import React from 'react'
import SidebarMenu from 'Components/SidebarMenu'


export default () => <div>

	<input type="checkbox" id="overlay"/>
	<div class="temp-paper-page-wrap">

		<h2 className="fd-section-header temp-padding">Blocks</h2>


		<header className="f-paper temp-paper-header-wrap">
			<p class="temp-paper-header-text temp-fd-block-paddings temp-ft-block-paddings temp-fm-block-paddings">
				MENU BLOCK
				<label className="f-menu-icon" htmlFor="overlay">
					<i className="fi-vacancy" />
				</label>
			</p>
		</header>

			<div className="f-paper f-main-wrapper temp-fd-block-paddings temp-ft-block-paddings temp-fm-block-paddings">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tenetur dolores possimus,
				optio nesciunt maxime veritatis, ipsa suscipit expedita molestias consequatur facilis illum illo error,
				assumenda. Eos, similique error! Nam cumque, saepe doloribus debitis possimus inventore ab eos
				laudantium cum aspernatur expedita, amet voluptas eius magni beatae incidunt aperiam pariatur quod
				neque. Perspiciatis magnam iure placeat accusantium labore ipsam rem exercitationem numquam ratione
				minus natus eaque esse dicta, illo asperiores ducimus mollitia repellendus beatae, eius quaerat. Quis,
				magnam, impedit ipsam quo ipsum asperiores sint dignissimos est omnis? Reprehenderit aliquam rerum
				cumque libero sit sint, sed necessitatibus natus quisquam unde.
			</div>

		<div className="f-paper-lighten">
			<p class="temp-paper-lighten-wrap temp-fd-block-paddings temp-ft-block-paddings temp-fm-block-paddings">Lorem ipsum dolor</p>
		</div>
	</div>

	<label className="f-overlay" htmlFor="overlay" />
	<aside className="f-sidebar">
		<label className="f-close-sidebar" htmlFor="overlay">
			<i className="">&times;</i>
		</label>

		<SidebarMenu />
	</aside>

</div>
