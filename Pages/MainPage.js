import React from 'react'
import { Link } from 'react-router'

import '../mainpage_styles.scss'


/*const linkStyle = {
	display: 'block',
	fontSize: 30,
	textAlign: 'center',
	margin: 30,
	textTransform: 'uppercase'
}

export default () => <div style={{ marginTop: 100 }} >
	<Link style={linkStyle} to="/buttons">Buttons</Link>
	<Link style={linkStyle} to="/colors">Colors</Link>
	<Link style={linkStyle} to="/typo">Typo</Link>
	<Link style={linkStyle} to="/grid">Grid</Link>
	<Link style={linkStyle} to="/controls">Controls</Link>
	<Link style={linkStyle} to="/papers">Papers</Link>
</div>
*/


export default () => <div>
		<section className="temp-strips">
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/buttons">Buttons</Link>
		      </h1>		      
		    </div>
		  </article>
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/colors">Colors</Link>
		      </h1>
		    </div>
		  </article>
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/typo">Typo</Link>
		      </h1>
		    </div>
		  </article>
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/controls">Controls</Link>
		      </h1>
		    </div>
		  </article>
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/grid">Grid</Link>
		      </h1>
		    </div>
		  </article>
		  <article className="temp-strips__strip">
		    <div className="strip__content">
		      <h1 className="strip__title">
		      	<Link to="/papers">Papers</Link>
		      </h1>
		    </div>
		  </article>
		  <i className="fa fa-close strip__close"></i>
		</section>
	</div>	
