import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import * as Pages from '../Pages'

export default () => <BrowserRouter>
	<div>
		<Match exactly pattern="/" component={Pages.MainPage} />
		<Match pattern="/buttons" component={Pages.Buttons}/>
		<Match pattern="/colors" component={Pages.Colors}/>
		<Match pattern="/typo" component={Pages.Typo}/>
		<Match pattern="/grid" component={Pages.Grid}/>
		<Match pattern="/controls" component={Pages.Controls}/>
		<Match pattern="/papers" component={Pages.Papers}/>
		<Match pattern="/papers" component={Pages.Papers}/>
		<Miss component={Pages.NotFound}/>
	</div>
</BrowserRouter>
