import React from 'react'
import {Link} from 'react-router'

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
		<i className="fa fa-close strip__close"/>
	</section>
</div>
