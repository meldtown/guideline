import React from 'react'
import DemoWrapper from '../DemoWrapper'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">

		<h3 className="fd-block-header fd-text-center">Primary button</h3>

		<a href="#" style={{color: '#2956ac'}} className="link fd-default">Default link</a><br/><br/>
		<a href="#" className="link fd-default">Visited link</a>

		<h3 className="fd-block-header fd-text-center">Primary button</h3>

		<button className="btn-primary fd-vacancy-title">найти сейчас</button>

		<h3 className="fd-block-header fd-text-center">Buttons with controls</h3>

		<button className="btn-control-coral fd-vacancy-title">
			<span>Создать резюме</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-royal-blue fd-vacancy-title">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-dark-green fd-vacancy-title">
			<span>Сохранить</span>
			<i className="fa fa-check"></i>
		</button>

		<h3 className="fd-block-header fd-text-center">Link-like buttons with controls</h3>

		<button className="btn-control-coral-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-royal-blue-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<button className="btn-control-dark-green-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fa fa-check"></i>
		</button>

		<button className="btn-control-default fd-vacancy-title">
			<span>Зарегистрироваться</span>
			<i className="fa fa-arrow-right"></i>
		</button>
		<br/>

		<h3 className="fd-block-header fd-text-center">Link buttons</h3>
	</div>

</DemoWrapper>
