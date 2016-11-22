import React from 'react'
import SidebarMenu from 'Components/SidebarMenu'

export default ({ title }) => <div>
	<input type="checkbox" id="f-overlay-chkbx" />

	<header className="f-paper">

		<div class="f-header fd-f-between-middle fd-c-middle">
			
			<img class="f-header-logo" src="https://img1.rabota.com.ua/static/2016/11/logo.svg" alt="Rabota.UA - logo"/>	

			<div>
				<ul class="fd-default fd-f-right f-header-menu-list f-reset-list">
					<li class="f-header-menu-list-link">
						<a href="#find_work">Найти работу</a>
					</li>
					<li>
						<a class="fd-small f-header-menu-list-pseudo-btn" href="#send_cv">Разместить резюме</a>
					</li>
					<li> 
						<a class="f-header-menu-list-link-with-border" href="#signin">
							<span>
								<label htmlFor="f-overlay-chkbx">
									Войти / Зарегистрироваться
								</label>	
							</span>
						</a>
						
						<a href="#for_employer" class="f-header-menu-list-topbtn fd-small f-btn-control-royal-blue-link">
							Работодателю
							<i class="fi-small-arrow" />
						</a>
					</li>
				</ul>
			</div>

		</div>

		{/*<div style={{padding: '50px', textAlign: 'center', fontSize: '23px', fontWeight: '700'}}>
			{title}
			<label className="f-menu-icon" htmlFor="f-overlay-chkbx">
				<i className="fi-vacancy"/>
			</label>
		</div>*/}


	</header>

	<label className="f-overlay" htmlFor="f-overlay-chkbx" />

	<aside className="f-sidebar">
		<label className="f-close-sidebar" htmlFor="f-overlay-chkbx"><i>&times;</i></label>
		<SidebarMenu /> 
	</aside>
</div>