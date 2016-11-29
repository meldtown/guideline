import React from 'react'
import Title from 'Utils/Title'


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

const CountLink = (props) => {
	return (
			<li>
				<a class="fd-f-between-middle" href={ `#_${props.rubricName}` }>
					{ props.rubricName }
					<span>{ ~~(Math.random() * 10000) }</span>
				</a>
			</li>
	)
} 

export default () => <div style={{ padding: '130px 200px' }} >
	<Title>Outer Tabs</Title>


	<div class="f-bg-ultra-blue" style={{ padding: '150px 50px' }}>

		<div class="f-paper">

			<div class="f-rubrics-wrap">

				<div class="fd-merchant f-rubrics-outertabs-wrap">
					<div class="fd-f-between-middle">
						<div class="f-rubrics-outertab -activetab">
							<i class="fi-category-find"></i>
							Поиск по рубрикам
						</div>
						<div class="f-rubrics-outertab">
							<i class="fi-profession-find"></i>
							Поиск по профессиям
						</div>
						<div class="f-rubrics-outertab">
							<i class="fi-location-find"></i>
							Поиск по городам
						</div>
						<div class="f-rubrics-outertab">
							<i class="fi-company-find"></i>
							Поиск по компаниям
						</div>
					</div>
				</div>

				<div class="f-rubrics-innerpaddings">

					<h1 class="f-rubrics-searchtitle fd-fat-shogun">
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


	</div>
</div>