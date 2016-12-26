import React from 'react'
import { Link } from 'react-router'


export default () => <div>
	

	<ul class="f-sidebar-menu fd-craftsmen f-reset-list">
		<Link to="/" class="f-sidebar-button f-btn-control-coral-link fd-beefy-merchant">
			<span>Homepage</span>
			<i class="fi-arrows-right-big" />
		</Link>
		<li class="f-sidebar-menu-link">
			<Link to="/buttons" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Buttons</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/colors" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Colors</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/typo" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Typo</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/controls" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Controls</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/grid" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Grid</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/papers" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Papers</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/tabs" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Tabs</Link>
		</li>
		<li class="f-sidebar-menu-link">
			<Link to="/form" class="f-always-blue f-text-black" activeClassName="f-text-royal-blue">Form</Link>
		</li>
	</ul>
</div>
