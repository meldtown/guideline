import React, { Component } from 'react'
import SidebarMenu from 'Components/SidebarMenu'



export default class HeaderContainer extends Component {

	constructor() {
		super();

		this.state = {
			isLoggedIn: false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		// for don't trigger re-render and change rnd name
		return nextState.isLoggedIn !== this.state.isLoggedIn
	}

	fakeLogIn() {
		this.setState({ isLoggedIn: true })
	}

	fakeLogOut() {
		this.setState({ isLoggedIn: false })
	}

	randomName() {
		const namesArr = [ "Валентин", "Иннокентий", "Борис", "Андрей", "Фёдор", "Людмила", "Степан", "Сергей", "Алина", "Ольга", "Оксана", "Александр", "Артём", "Валерий", "Олег", "Кристина", "Елена", "Артур", "Василий", "Константин", "Юрий" ]
		return namesArr[ ~~(Math.random() * namesArr.length) ];
	}

	notLoggedMenuList() {
		return (
			<div>
				<ul class="fd-merchant fd-f-right f-header-menu-list f-reset-list">
					<li class="f-header-menu-list-link">
						<a href="#find_work">Найти работу</a>
					</li>
					<li>
						<a onClick={::this.fakeLogIn} class="fd-craftsmen f-header-menu-list-pseudo-btn" href="#send_cv">Разместить резюме</a>
					</li>
					<li>
						<a class="f-header-menu-list-link-with-border" href="#signin">
							<span>
								<label htmlFor="f-overlay-chkbx">
									Войти / Зарегистрироваться
								</label>
							</span>
						</a>

						<a href="#for_employer" class="f-header-menu-list-topbtn fd-craftsmen f-btn-control-royal-blue-link">
							Работодателю
							<i class="fi-small-arrow" />
						</a>
					</li>
				</ul>
			</div>
		)
	}


	loggedMenuList() {

		const randomName = this.randomName();

		return (
			<div>
				<ul class="fd-merchant fd-f-right f-header-menu-list f-reset-list">
					<li class="f-header-menu-list-link">
						<a href="#find_work">
							Найти работу
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">22</span>
						</a>
					</li>
					<li class="f-header-menu-list-link">
						<a href="#recommend">
							Рекомендуемые
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">12</span>
						</a>
					</li>
					<li class="f-header-menu-list-link">
						<a href="#interested">
							Интересные
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">3</span>
						</a>
					</li>
					<li class="f-header-menu-list-link">
						<a href="#feedback">
							Мои отклики
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">5</span>
						</a>
					</li>
					<li class="f-header-menu-list-link">
						<a href="#viewed">
							Просмотры резюме
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">10</span>
						</a>
					</li>

					<li>
						<a onClick={::this.fakeLogOut} class="fd-craftsmen f-header-menu-list-pseudo-btn" href="#my_cv">Мои резюме</a>
					</li>
					<li>

						<div class="f-header-name-and-avatar-wrap">
							<span class="f-header-useravatar">
								<span class="f-header-useravatar-letters fd-craftsmen">
									{ randomName.slice(0, 2) }
								</span>
							</span>

							<a class="f-header-menu-list-link-with-border -forloggedin" href="#signin">
								<span>
									<label htmlFor="f-overlay-chkbx">{randomName}</label>
								</span>
							</a>
						</div>

						<a href="#for_employer" class="f-header-menu-list-topbtn fd-craftsmen f-btn-control-royal-blue-link">
							Работодателю
							<i class="fi-small-arrow" />
						</a>
					</li>
				</ul>
			</div>
		)
	}


	render() {

		const NotLoggedMenuList = ::this.notLoggedMenuList;
		const LoggedInMenuList = ::this.loggedMenuList;

		return (
			<div>
				<input type="checkbox" id="f-overlay-chkbx" />

				<header class="f-paper">

					<div class="f-header fd-f-between-middle fd-c-middle">

						<img class="f-header-logo" src="https://img1.rabota.com.ua/static/2016/11/logo.svg" alt="Rabota.UA - logo"/>

						{ this.state.isLoggedIn ? <LoggedInMenuList /> : <NotLoggedMenuList /> }

					</div>

				</header>

				<label class="f-overlay" htmlFor="f-overlay-chkbx" />

				<aside class="f-sidebar">
					<label class="f-close-sidebar" htmlFor="f-overlay-chkbx"><i>&times;</i></label>
					<SidebarMenu />
				</aside>
			</div>
		)
	}
}
