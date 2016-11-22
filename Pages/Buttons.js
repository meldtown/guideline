import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'

export default () => <DemoWrapper title="Buttons">
	<div className="temp-padding">
		<h3 className="fd-shogun fd-text-center">Primary button</h3>

		<a href="#" style={{color: '#2956ac'}} className="f-link fd-merchant">Default link</a><br/><br/>
		<a href="#" style={{color: '#9B6EC3'}} className="f-link fd-merchant">Visited link</a>

		<h3 className="fd-shogun fd-text-center">Primary button</h3>

		<button className="f-btn-primary fd-samurai">найти сейчас</button>

		<h3 className="fd-shogun fd-text-center">Buttons with controls</h3>

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

		<h3 className="fd-shogun fd-text-center">Link-like buttons with controls</h3>

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
