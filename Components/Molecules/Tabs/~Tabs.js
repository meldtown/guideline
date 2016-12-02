import React from 'react'


const rubricsList = [
	'HR специалисты - Бизнес-тренеры',
	'IT',
	'Автобизнес - Сервисное обслуживание',
	'Административный персонал - Водители - Курьеры',
	'Банки - Инвестиции - Лизинг',
	'Бухгалтерия - Налоги - Финансы предприятия',
	'Гостиницы - Рестораны - Кафе',
	'Дизайн - Графика - Фото',
	'Закупки - Снабжение',
	'Консалтинг - Аналитика - Аудит',
	'Культура - Шоу-бизнес - Развлечения',
	'Логистика - Таможня - Склад',
	'Маркетинг - Реклама - PR',
	'Медиа - Издательское дело',
	'Медицина - Фармацевтика - Здравоохранение',
	'Морские специальности',
	'Наука - Образование - Перевод',
	'Недвижимость',
	'Некоммерческие организации - НГО',
	'Охрана - Безопасность - Силовые структуры',
	'Продажи - Клиент-менеджмент',
	'Производство - Инженеры - Технологи',
	'Рабочие специальности - Персонал для дома',
	'Сельское хозяйство - Агробизнес - Лесное хозяйство',
	'Спорт - Красота - Оздоровление',
	'Страхование',
	'Строительство - Архитектура',
	'Студенты - Начало карьеры - Без опыта',
	'Телекоммуникации - Связь',
	'Топ-менеджмент - Директора',
	'Торговля',
	'Туризм - Путешествия',
	'Юристы, адвокаты, нотариусы'
]


const profsList = [
	'Водитель',
	'Бухгалтер',
	'Продавец-консультант',
	'Юрист',
	'Администратор',
	'Главный бухгалтер',
	'Менеджер по продажам',
	'Помощник руководителя',
	'Экономист',
	'Торговый представитель',
	'Кладовщик',
	'Официант',
	'Офис-менеджер',
	'Охранник',
	'Секретарь',
	'Уборщица',
	'Кассир',
	'Региональный менеджер',
	'Грузчик',
	'Курьер',
	'Мерчендайзер',
	'Продавец',
	'Медицинский представитель',
	'Оператор ПК',
	'Менеджер по работе с клиентами',
	'Директор',
	'Системный администратор',
]

const CountLink = (props) => {
	return (
			<li>
				<a class="fd-thin-merchant fd-f-between-middle" href={ `#_${props.rubricName}` }>
					{ props.rubricName }
					<span class="fd-regular">{ ~~(Math.random() * 10000) }</span>
				</a>
			</li>
	)
} 

export default () => <div style={{ padding: '130px 200px' }} >
	<div class="f-bg-ultra-blue" style={{ padding: '150px 50px' }}>




		<div class="f-paper">
			<div class="f-rubrics-wrap">
				<div class="fd-merchant f-rubrics-outertabs-wrap">
					<div class="fd-f-between-middle">
						<div class="f-rubrics-outertab -activetab">
							<i class="fi-category-find"></i>
							Поиск по рубрикам
							<a href="#"></a>
						</div>
						<div class="f-rubrics-outertab">
							<i class="fi-profession-find"></i>
							Поиск по профессиям
							<a href="#"></a>
						</div>
						<div class="f-rubrics-outertab">	
							<i class="fi-location-find"></i>
							Поиск по городам
							<a href="#"></a>
						</div>
						<div class="f-rubrics-outertab">							
							<i class="fi-company-find"></i>
							Поиск по компаниям
							<a href="#"></a>
						</div>
					</div>
				</div>

				<div class="f-rubrics-innerpaddings">

					<h1 class="f-boldsymboltitle f-rubrics-searchtitle fd-fat-shogun">
						Поиск вакансий по рубрикам в Украине
						<i class="fi-logo-symbol"></i>
					</h1>

					<div class="f-rubrics-itemsblock fd-merchant fd-list-2-cols">
						<ul class="f-reset-list">
						{
							rubricsList.map((rubric) => {
								return <CountLink key={rubric} rubricName={rubric} />
							})
						}
						</ul>
					</div>
				</div>
			</div>
		</div>


		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>


		<div class="f-paper">

			<div class="f-rubrics-wrap">
				<div class="f-rubrics-innerpaddings">

					<div class="f-rubrics-innertabs-wrap">
						<ul class="fd-soldier f-reset-list f-rubrics-innertabs-list">
							<li class="f-rubrics-innertabs-item"><a href="#">По рубрикам</a></li>
							<li class="fd-fat f-rubrics-innertabs-item -activetab"><a href="#">По профессиям</a></li>
							<li class="f-rubrics-innertabs-item"><a href="">По городам</a></li>
						</ul>
					</div>

					<div class="f-rubrics-itemsblock fd-merchant fd-list-3-cols">
						<ul class="f-reset-list">
						{
							profsList.map((rubric) => {
								return <CountLink key={rubric} rubricName={rubric} />
							})
						}
						</ul>
					</div>
				</div>
			</div>
		</div>	


	</div>
</div>