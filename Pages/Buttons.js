import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Buttons">
	<div class="fd-p20">
		<Title>Primary button</Title>

		<button class="f-btn-primary fd-beefy-soldier">найти сейчас</button>

		<Title>Buttons with controls</Title>

		<button class="f-btn-control-coral fd-beefy-soldier">
			<span>Создать резюме</span>
			<i class="fi-arrows-right-big" />
		</button>

		<button class="f-btn-control-coral f-disabled fd-beefy-soldier">
			<span>Создать резюме</span>
			<i class="fi-arrows-right-big" />
		</button>

		<br/>

		<button class="f-btn-control-royal-blue fd-beefy-soldier">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>

		<button class="f-btn-control-royal-blue fd-beefy-soldier f-disabled">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>
		<br/>

		<button class="f-btn-control-dark-green fd-beefy-soldier">
			<span>Сохранить</span>
			<i class="fi-ok" />
		</button>

		<button class="f-btn-control-dark-green f-disabled fd-beefy-soldier">
			<span>Сохранить</span>
			<i class="fi-ok" />
		</button>

		<Title>Link-like buttons with controls</Title>

		<button class="f-btn-control-coral-link fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>

		<button class="f-btn-control-coral-link f-disabled fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>
		<br/>

		<button class="f-btn-control-royal-blue-link fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>

		<button class="f-btn-control-royal-blue-link f-disabled fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-arrows-right-big" />
		</button>
		<br/>

		<button class="f-btn-control-dark-green-link fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-ok" />
		</button>

		<button class="f-btn-control-dark-green-link f-disabled fd-beefy-merchant">
			<span>Перейти</span>
			<i class="fi-ok" />
		</button>

		<button class="f-btn-control-default fd-craftsmen">
			<span>Зарегистрироваться</span>
			<i class="fi-small-arrow" />
		</button>

		<button class="f-btn-control-default f-disabled fd-craftsmen">
			<span>Зарегистрироваться</span>
			<i class="fi-small-arrow" />
		</button>

		<Title>Block level buttons</Title>
		{/*TODO: Block level buttons with media queries*/}
		<h3 class="fd-beefy-samurai">Block throughout all devises</h3>
		<button class="f-btn-control-coral fd-btn-block fd-beefy-soldier">
			<span>Создать резюме</span>
			<i class="fi-arrows-right-big" />
		</button>

		<h3 class="fd-beefy-samurai">Block on tablets</h3>
		<button class="f-btn-control-coral ft-btn-block fd-beefy-soldier">
			<span>Создать резюме</span>
			<i class="fi-arrows-right-big" />
		</button>

		<h3 class="fd-beefy-samurai">Block on mobile</h3>
		<button class="f-btn-control-coral fm-btn-block fd-beefy-soldier">
			<span>Создать резюме</span>
			<i class="fi-arrows-right-big" />
		</button>
	</div>
</DemoWrapper>
