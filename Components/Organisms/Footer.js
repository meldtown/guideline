import React from 'react'

export default () => <footer className="f-footer">
	<div className="f-footer--primary">
		<div className="f-main-wrapper">
			<div className="fd-f-between fm-c-stretch fd-micro">
				<i className="fi-logo-symbol ft-hidden fm-hidden"/>
				<nav>
					<span className="fd-semibold fd-small">rabota.ua</span>
					<a href="#">rabota.ua</a>
					<a href="#">Конфиденциальность</a>
					<a href="#">Карта сайта</a>
				</nav>
				<nav>
					<span className="fd-semibold fd-small">соискателю</span>
					<a href="#">Найти работу</a>
					<a href="#">Разместить резюме</a>
					<a href="#">Рассылка вакансий</a>
					<a href="#">Как составить резюме</a>
					<a href="#">Советы соискателю</a>
					<a href="#">Архив вакансий</a>
				</nav>
				<nav>
					<span className="fd-semibold fd-small">работодателю</span>
					<a href="#">Добавить вакансию</a>
					<a href="#">Поиск резюме</a>
					<a href="#">Рассылка резюме</a>
					<a href="#">Наши услуги</a>
					<a href="#">Советы работодателю</a>
				</nav>
				<nav className="ft-hidden">
					<span className="fd-semibold fd-small">популярные города</span>
					<a href="#">Работа в Киеве</a>
					<a href="#">Работа в Днепре (Днепропетровске)</a>
					<a href="#">Работа в Донецке</a>
					<a href="#">Работа в Харькове</a>
					<a href="#">Работа в Одессе</a>
					<a href="#">Работа во Львове</a>
					<a href="#">Работа в Запорожье</a>
				</nav>
				<div className="f-footer--feedback-col">
					<div className="f-input-block fd-default">
						<select>
							<option>Русский</option>
							<option>Украинский</option>
						</select>
						<i className="fi-drop-down-icon"/>
					</div>
					<div className="fd-small">
						<a href="#">Написать <strong>rabota.ua</strong> <i className="fi-small-arrow"/></a>
						<div>Присылайте свои замечания и пожелания по работе и наполнению портала.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="f-bg-white f-footer--secondary">
		<div className="f-main-wrapper">
			<div className="fd-f-left-middle">
				<img className="fm-hidden" src="https://img1.rabota.com.ua/static/2016/11/logo-footer-none-padding.svg" alt="rabota.ua"/>
				<img className="ft-hidden fm-hidden" src="https://img1.rabota.com.ua/static/2014/11/pracuj.png" alt="pracuj"/>
				<img className="ft-hidden fm-hidden" src="https://img1.rabota.com.ua/static/2014/11/network.png" alt="network"/>
				<span className="fd-f1 fd-micro">
					<span className="fd-small">ООО &laquo;Работа Интернешнл&raquo; &copy; 2016</span>
					Все права защищены и охраняются действующим законодательством Украины. Использование материалов с данного сайта возможно только с письменного разрешения компании ООО «Работа Интернешнл». Администрация сайта не несет ответственности за содержание размещенных объявлений.
				</span>
			</div>
		</div>
	</div>
</footer>
