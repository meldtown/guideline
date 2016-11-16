import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">

		<h3 className="fd-h3 fd-text-center">Primary button</h3>

		<button className="btn-primary fd-h5">найти сейчас</button>

		<h3 className="fd-h3 fd-text-center">Buttons with controls</h3>

		<button className="btn-control-coral fd-h5">
			<span>Создать резюме</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-royal-blue fd-h5">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-dark-green fd-h5">
			<span>Сохранить</span>
			<i className="fa fa-check"></i>
		</button>

		<h3 className="fd-h3 fd-text-center">Link-like buttons with controls</h3>

		<button className="btn-control-coral-link fd-h5">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-royal-blue-link fd-h5">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-dark-green-link fd-h5">
			<span>Перейти</span>
			<i className="fa fa-check"></i>
		</button>

		<button className="btn-control-default fd-h5">
			<span>Зарегистрироваться</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<h3 className="fd-h3 fd-text-center">Link buttons</h3>
	</div>

</DemoWrapper>
