import React from 'react'
import { Link } from 'react-router'


export default () => <div className="fd-merchant temp-padding" style={{ marginTop: '90px' }} >
	<Link to="/" className="f-btn-control-royal-blue-link fd-samurai">
		<span>Homepage</span>
		<i className="fi-arrows-right-big" />
	</Link>

	<ul className="temp-sidebar-ul f-reset-list temp-padding" style={{ paddingLeft: '25px' }}>
		<li><Link to="/buttons" className="f-text-black" activeClassName="f-text-royal-blue">Buttons</Link></li>
		<li><Link to="/colors" className="f-text-black" activeClassName="f-text-royal-blue">Colors</Link></li>
		<li><Link to="/typo" className="f-text-black" activeClassName="f-text-royal-blue">Typo</Link></li>
		<li><Link to="/controls" className="f-text-black" activeClassName="f-text-royal-blue">Controls</Link></li>
		<li><Link to="/grid" className="f-text-black" activeClassName="f-text-royal-blue">Grid</Link></li>
		<li><Link to="/papers" className="f-text-black" activeClassName="f-text-royal-blue">Papers</Link></li>
	</ul>
</div>
