import React, { Component } from 'react'
import SidebarMenu from 'Components/SidebarMenu'
import { Link } from 'react-router'


export default class HeaderContainer extends Component {

	constructor() {
		super();

		this.state = {
			isLoggedIn: false,
			scrollHeader: false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextState.isLoggedIn !== this.state.isLoggedIn) || (this.state.scrollHeader !== nextState.scrollHeader)
	}


	componentDidMount() {	
		// this.headerEl = this.refs.headerWrapper;
		window.addEventListener('scroll', this.scrollFunc.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollFunc);
		this.state = {};
	}


	scrollFunc() {
		// const headerH = this.headerEl.clientHeight;

		if( document.body.scrollTop >= 200 ) {
			if( this.state.scrollHeader === false ) {
				this.setState({ scrollHeader: true })		
			}
		}
		else if( this.state.scrollHeader === true ) {
			this.setState({ scrollHeader: false })	
		}
	}


	fakeLogIn() {
		this.setState({ isLoggedIn: true })
	}

	fakeLogOut() {
		this.setState({ isLoggedIn: false })
	}
	  
	randomName() {
		const namesArr = [ "Степан Фролов", "Валентин", "Валерий Иванов", "Иннокентий", "Борис", "Андрей", "Фёдор", "Иван Иванов", "Людмила", "Степан", "Иннокентий Левчук", "Сергей", "Алина", "Ольга", "Иван Ксевашин", "Оксана", "Александр", "Артём", "Валерий", "Олег", "Олег Петряк", "Кристина", "Елена", "Артур", "Василий", "Кристина Корнейчук", "Константин", "Юрий" ]
		return namesArr[ ~~(Math.random() * namesArr.length) ];
	}

	notLoggedMenuList() {
		return (
			<div>
				<ul class="fd-f-around fd-craftsmen fd-f-right f-header-menu-list f-reset-list">
					<li class="f-header-menu-list-link ft-hidden fm-hidden">
						<a href="#find_work">Найти работу</a>
					</li>
					<li class="ft-hidden fm-hidden">
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
				<ul class="fd-f-around fd-craftsmen fd-f-right f-header-menu-list f-reset-list">
					<li class="f-header-menu-list-link ft-hidden fm-hidden">	
						<a href="#find_work">
							Найти работу
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">22</span>
						</a>
					</li>
					<li class="f-header-menu-list-link f-header-1220-hide">
						<a href="#recommend">
							Рекомендуемые
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">12</span>
						</a>
					</li>
					<li class="f-header-menu-list-link f-header-1220-hide">
						<a href="#interested">
							Интересные
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">3</span>
						</a>
					</li>
					<li class="f-header-menu-list-link f-header-1220-hide">
						<a href="#feedback">
							Мои отклики
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">5</span>
						</a>
					</li>
					<li class="f-header-menu-list-link ft-hidden fm-hidden">
						<a href="#viewed">
							Просмотры резюме
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">10</span>
						</a>
					</li>

					<li class="fm-hidden">
						<a onClick={::this.fakeLogOut} class="fd-craftsmen f-header-menu-list-pseudo-btn" href="#my_cv">Мои резюме</a>
					</li>
					<li class="fm-hidden f-header-menu-list-link f-header-chat-icon">
						<a href="#chat">
							<span class="fi-chat-icon"></span>
							<span class="fd-fat f-text-coral fd-serf f-header-menu-list-link-badge">36</span>
						</a>
					</li>
					<li>

						<div class="f-header-name-and-avatar-wrap">
							<span class="f-header-useravatar">
								<span class="f-header-useravatar-letters fd-craftsmen">
									{ randomName.slice(0, 2) }
								</span>
							</span>
					
							<a alt={randomName} title={randomName} class="f-header-menu-list-link-with-border -forloggedin" href="#signin">
								<span class="f-header-username-span">
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
			<div class="f-header-fixed-wrapper">
				<input type="checkbox" id="f-overlay-chkbx" />

				<header class="f-paper">

					<div ref="headerWrapper" class={ `f-header fd-f-between-middle ${ this.state.scrollHeader ? 'f-header-pinned' : '' }` } >
						
						
						<Link class="f-header-logo" to="/">
							<img class="f-header-logo-symbol" src="https://img1.rabota.com.ua/static/2016/11/logo-symbol.svg" alt="Rabota.UA - logo"/>
							<img class="f-header-logo-text" src="https://img1.rabota.com.ua/static/2016/11/logo-text-none-padding.svg" alt="Rabota.UA - logo"/>
						</Link>

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
