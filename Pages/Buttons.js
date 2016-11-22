import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">
		<Title>Primary button</Title>

		<button className="f-btn-primary fd-samurai">найти сейчас</button>

		<Title>Buttons with controls</Title>

		<button className="f-btn-control-coral fd-samurai">
			<span>Создать резюме</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-coral f-disabled fd-samurai">
			<span>Создать резюме</span>
			<i className="fi-arrows-right-big" />
		</button>

		<br/>

		<button className="f-btn-control-royal-blue fd-samurai">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-royal-blue fd-samurai f-disabled">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-dark-green fd-samurai">
			<span>Сохранить</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-dark-green f-disabled fd-samurai">
			<span>Сохранить</span>
			<i className="fi-ok" />
		</button>

		<Title>Link-like buttons with controls</Title>

		<button className="f-btn-control-coral-link fd-samurai">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-coral-link f-disabled fd-samurai">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-royal-blue-link fd-samurai">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-royal-blue-link f-disabled fd-samurai">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-dark-green-link fd-samurai">
			<span>Перейти</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-dark-green-link f-disabled fd-samurai">
			<span>Перейти</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-default fd-samurai">
			<span>Зарегистрироваться</span>
			<i className="fi-small-arrow" />
		</button>

		<button className="f-btn-control-default f-disabled fd-samurai">
			<span>Зарегистрироваться</span>
			<i className="fi-small-arrow" />
		</button>
	</div>
</DemoWrapper>
