import React from 'react'
import { Link } from 'react-router'


export default () => <div class="fd-merchant temp-padding" style={{ marginTop: '90px' }} >
	<Link to="/" class="f-always-blue f-btn-control-royal-blue-link fd-samurai">
		<span>Homepage</span>
		<i class="fi-arrows-right-big" />
	</Link>

	<ul class="temp-sidebar-ul f-reset-list temp-padding" style={{ paddingLeft: '25px' }}>
		<li><Link to="/buttons" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Buttons</Link></li>
		<li><Link to="/colors" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Colors</Link></li>
		<li><Link to="/typo" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Typo</Link></li>
		<li><Link to="/controls" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Controls</Link></li>
		<li><Link to="/grid" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Grid</Link></li>
		<li><Link to="/papers" class="f-always-blue f-text-black" activeclass="f-text-royal-blue">Papers</Link></li>
	</ul>
</div>
