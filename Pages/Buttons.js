import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">
		<h3 className="fd-block-header fd-text-center">Primary button</h3>

		<a href="#" style={{color: '#2956ac'}} className="f-link fd-default">Default link</a><br/><br/>
		<a href="#" style={{color: '#9B6EC3'}} className="f-link fd-default">Visited link</a>

		<h3 className="fd-block-header fd-text-center">Primary button</h3>

		<button className="f-btn-primary fd-vacancy-title">найти сейчас</button>

		<h3 className="fd-block-header fd-text-center">Buttons with controls</h3>

		<button className="f-btn-control-coral fd-vacancy-title">
			<span>Создать резюме</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-coral f-disabled fd-vacancy-title">
			<span>Создать резюме</span>
			<i className="fi-arrows-right-big" />
		</button>

		<br/>

		<button className="f-btn-control-royal-blue fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-royal-blue fd-vacancy-title f-disabled">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-dark-green fd-vacancy-title">
			<span>Сохранить</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-dark-green f-disabled fd-vacancy-title">
			<span>Сохранить</span>
			<i className="fi-ok" />
		</button>

		<h3 className="fd-block-header fd-text-center">Link-like buttons with controls</h3>

		<button className="f-btn-control-coral-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-coral-link f-disabled fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-royal-blue-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>

		<button className="f-btn-control-royal-blue-link f-disabled fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-arrows-right-big" />
		</button>
		<br/>

		<button className="f-btn-control-dark-green-link fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-dark-green-link f-disabled fd-vacancy-title">
			<span>Перейти</span>
			<i className="fi-ok" />
		</button>

		<button className="f-btn-control-default fd-vacancy-title">
			<span>Зарегистрироваться</span>
			<i className="fi-small-arrow" />
		</button>

		<button className="f-btn-control-default f-disabled fd-vacancy-title">
			<span>Зарегистрироваться</span>
			<i className="fi-small-arrow" />
		</button>
	</div>
</DemoWrapper>
