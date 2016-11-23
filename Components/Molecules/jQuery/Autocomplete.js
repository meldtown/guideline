import React from 'react'
import Title from '../../Utils/Title'

export default () => <div>
	<Title>Autocomplete</Title>

	<div style={{position: 'relative'}}>
		<div className="f-input fm-input-block">
			<input type="text" defaultValue='ph' />
		</div>

		<ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" style={{display: 'block', position: 'relative', top: '-5px', left: '0', width: '217px'}}><li className="ui-menu-item" role="presentation"><a id="ui-id-4" className="ui-corner-all"><b>PH</b>P программист</a></li><li className="ui-menu-item" role="presentation"><a id="ui-id-5" className="ui-corner-all"><b>Ph</b>p-программист (удаленно)</a></li></ul>
	</div>

</div>
