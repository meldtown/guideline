import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Icons from '../Components/Atoms/Icons'

export default () => <DemoWrapper title="Typo">

	<h2 className="fd-section-header fd-text-center">Fonts</h2>
	<div className="temp-padding fd-default">
		<p className="fd-light">Graphic LC Light</p>
		<p className="fd-regular">Graphic LC Regular</p>
		<p className="fd-medium">Graphic LC Medium</p>
		<p className="fd-semibold">Graphic LC Semibold</p>
		<p className="fd-bold">Graphic LC Bold</p>
	</div>


	<h1 className="fd-section-header fm-default fd-text-center">Typographity</h1>

	<div className="fd-f-between fm-c-stretch">
		<div>
			<div className="temp-padding fd-default">
				<div className="fd-header ft-subtitle fm-default">Header</div>
				<div className="fd-section-header ft-subtitle fm-default">Section-Header</div>
				<div className="fd-subtitle ft-subtitle fm-default">Blocks-Header</div>
				<div className="fd-vacancy-header ft-subtitle fm-default">Vacancy-Header</div>
				<div className="fd-vacancy-title ft-subtitle fm-default">Vacancy-Title</div>
				<div><span className="fd-form-header ft-subtitle fm-default">Forms-Header</span> / <span className="fd-subheader ft-subtitle fm-default">Subheader</span></div>
				<div className="fd-subtitle ft-subtitle fm-default">Subtitle</div>
				<div><span className="fd-regular ft-subtitle fm-default">Default-text</span> / <span className="fd-light ft-subtitle fm-default">Default-text</span> / <span className="fd-medium ft-subtitle fm-default">Default-text</span> / <span className="fd-semibold ft-subtitle fm-default">Default-text</span></div>
				<div className="fd-middle ft-subtitle fm-default"><span className="fd-light ft-subtitle fm-default">Middle-text</span> / <span className="fd-regular ft-subtitle fm-default">Middle-text</span></div>
				<div className="fd-small ft-subtitle fm-default">Small text</div>
				<div className="fd-micro ft-subtitle fm-default">Smallest text</div>
			</div>
		</div>
		<div className="temp-padding">
			<p style={{margin: '10px 0'}} className="fd-header">Icons</p>
			<Icons />
		</div>
	</div>

	<h1 className="fd-text-center fm-default fd-block-header">Multiline text</h1>

	<div className="temp-padding">
		<p className="fd-header ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,amet, consectetur adipisicing elit.
		</p>
		<p className="fd-section-header ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore excepturi maxime optio pariatur possimus quas similique
		</p>
		<p className="fd-block-header ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut, dicta enim inventore ipsam minima officiis quia sunt suscipit! Aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque beatae
		</p>
		<p className="fd-vacancy-header ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur debitis dolore facere impedit iste nesciunt officia quis ratione sequi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut commodi consequatur
			dicta
		</p>
		<p className="fd-vacancy-title ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequatur doloremque esse, lau Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequatur doloremque esse, lau
		</p>
		<p className="fd-subheader ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laudantium quod tenetur veritatis vero? Earum facere fugiat iste quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, at
			cupiditate earum enim est magnam magni veritatis. Amet assumenda aut
		</p>
		<p className="fd-form-header ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, culpa fuga inventore iste minima molestiae officiis optio recusandae sint velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
			cupiditate ea esse eveniet in incidunt inventore iure maxime
		</p>
		<p className="fd-subtitle ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio earum error id, laborum modi nam sequi ut vel voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos fugiat
			iusto nulla. Accusamus debitis doloremque, iure minima modi repellat! Asperiores eos excepturi in magni
			mollitia
			ut,
			veritatis. Iusto, quis.
		</p>
		<p className="fd-default ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis, eius eos eveniet ipsum pariatur perspiciatis repellendus sed velit voluptatum.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aperiam commodi dolor dolore dolorem
			eum
			iusto magni minima non quae quam quisquam quos repellendus similique soluta, temporibus? Ipsum, tenetur!
		</p>
		<p className="fd-middle ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi dolore est libero modi odit possimus quam quibusdam rem repellat.
			Lorem
			ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cumque deleniti dolor eligendi, error
			explicabo
			libero nisi nobis nostrum numquam odit quibusdam quidem, quos similique vero voluptate. Sit.
		</p>
		<p className="fd-small ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos, earum id incidunt magni molestias praesentium quaerat quas unde veritatis?Lorem ipsum dolor
			sit amet, consectetur adipisicing elit. A beatae delectus modi nisi, placeat quae quod recusandae
			voluptatibus!
			Commodi corporis deserunt eligendi impedit magni, odio repudiandae voluptatibus. Deserunt, exercitationem,
			minus?
		</p>
		<p className="fd-micro ft-block-header fm-default">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos, earum id incidunt magni molestias praesentium quaerat quas unde veritatis?Lorem ipsum dolor
			sit amet, consectetur adipisicing elit. A beatae delectus modi nisi, placeat quae quod recusandae
			voluptatibus!
			Commodi corporis deserunt eligendi impedit magni, odio repudiandae voluptatibus. Deserunt, exercitationem,
			minus?
		</p>
	</div>

	<h1 className="fd-text-center fm-default fd-block-header">Horizontal alignment</h1>

	<ul className="fd-f">
		<li className="fd-f1 fd-text-left f-bg-light-light-gray temp-padding">left</li>
		<li className="fd-f1 fd-text-center f-bg-light-gray temp-padding">center</li>
		<li className="fd-f1 fd-text-right f-bg-light-light-gray temp-padding">right</li>
	</ul>

	<h1 className="fd-text-center fm-default fd-block-header">Misc</h1>

	<p className="fd-text-center">
		Text may be transformed like so <span className="fd-text-lowercase f-text-coral">Lower Case</span>, <span className="fd-text-uppercase f-text-royal-blue">Upper Case</span>, <span className="fd-text-capitalize f-text-lilac">Capitalize</span>
	</p>

</DemoWrapper>
