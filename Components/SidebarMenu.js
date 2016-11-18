import React from 'react'
import { Link } from 'react-router'


export default () => <div class="fd-default temp-padding" style={{ marginTop: '90px' }} >
	<button className="btn-control-dark-green-link fd-vacancy-title">
		<span>Разместить резюме</span>
		<i className="fi-arrows-right-big" />
	</button>

	<ul class="temp-sidebar-ul" style={{ marginTop: '20px' }}>
		<li><Link to="/">Main page</Link></li>
		<li><Link to="/buttons">Buttons</Link></li>
		<li><Link to="/colors">Colors</Link></li>
		<li><Link to="/typo">Typo</Link></li>
		<li><Link to="/controls">Controls</Link></li>
		<li><Link to="/grid">Grid</Link></li>
		<li><Link to="/papers">Papers</Link></li>
	</ul>
</div>