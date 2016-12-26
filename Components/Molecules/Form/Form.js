import React from 'react'

export default () => <div class="f-bg-gradient"  style={{ transition: '3s' }} >
	<div class="f-main-wrapper" style={{ 'paddingTop': '230px' }}>


		<div class="fd-f-center-middle ft-c-center">
			<div class="f-paper fd-text-center">
				<div class="f-form">
					<h3 class="fd-thin-ronin ft-thin-syoi f-text-black">Войти в аккаунт</h3>
					<div class="f-form-inputs">
						<div class="f-input f-input-block">
							<input type="text" placeholder="Name" />
						</div>

						<div class="f-input f-input-block error">
							<input type="text" placeholder="Email" />
							<span class="error-message">Неправильный формат ввода</span>
						</div>

						<div class="f-input f-input-block">
							<input type="password" placeholder="Password" />
							<span class="error-message">Пароль неверный</span>
						</div>
						<div class="f-input f-input-block error">
							<select name="select" id="1">
								<option>Gender</option>
								<option>Male</option>
								<option>Female</option>
							</select>
							<i class="fi-drop-down-icon" />
							<span class="error-message">Обязательное заполнение</span>
						</div>
					</div>
					<button class="f-btn-primary fd-btn-block fd-beefy-soldier">ВХОД</button>
					<p class="f-text-divider"><span>или</span></p>
					<p>Войти с помощью</p>
				</div>

			</div>

		</div>




	</div>
</div>
