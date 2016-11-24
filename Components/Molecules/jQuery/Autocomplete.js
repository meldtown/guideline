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

/*
jQuery('#demo').autocomplete({
	source: 'http://api.rabota.ua/autocomplete/keyword',
	minLength: 2,
	open: function(event, ui) {
		$(this).autocomplete('widget').css({width: jQuery(this).outerWidth()})
	}
}).data('ui-autocomplete')._renderItem = function (ul, item) {
	return $("<li></li>")
		.data("item.autocomplete", item)
		.append($("<a></a>").html(this.term ? item.label.replace(new RegExp('(' + this.term + ')', 'gi'), '<b>$1</b>') : item.label))
		.appendTo(ul)
}
*/
