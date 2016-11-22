import React from 'react'

export default () => <footer className="f-footer">
	<div className="f-main-wrapper">
		<div className="fd-f-between fd-micro">
			<i className="fi-logo-symbol"/>
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
			<nav>
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
					Присылайте свои замечания и пожелания по работе и наполнению портала.
				</div>
			</div>
		</div>
	</div>
</footer>
