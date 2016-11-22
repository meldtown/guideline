import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Icons from '../Components/Atoms/Icons'

export default () => <DemoWrapper title="Typo">

	<h2 className="fd-section-header fd-text-center">Fonts</h2>
	<ul className="fd-f-left">
		<li className="temp-padding">
			<div className="fd-thin">Graphic LC Light</div>
			<div>Graphic LC Regular</div>
			<div className="fd-beefy">Graphic LC Medium</div>
			<div className="fd-fat">Graphic LC Semibold</div>
		</li>
		<li className="temp-padding">
			<div className="fd-thin">Thin</div>
			<div className="f-text-light-gray">Default</div>
			<div className="fd-beefy">Beefy</div>
			<div className="fd-fat">Fat</div>
		</li>
	</ul>


	<h1 className="fd-section-header fm-merchant fd-text-center">Typography</h1>
	<div className="fd-f-between fm-c-stretch">
		<div>
			<div className="temp-padding">
				<div className="f-emperor">Emperor</div>
				<div className="fd-shogun">Shogun</div>
				<div className="fd-thin-daimyo">Daimyo</div>
				<div className="fd-beefy-samurai">Samurai</div>
				<div className="fd-ronin"><span className="fd-thin-ronin">Thin Ronin</span> / <span className="fd-ronin">Ronin</span> / <span className="fd-beefy-ronin">Beefy Ronin</span></div>
				<div className="fd-soldier"><span className="fd-thin-soldier">Thin Soldier</span> / <span className="fd-soldier">Soldier</span> / <span className="fd-beefy-soldier">Beefy Soldier</span></div>
				<div className="fd-merchant"><span className="fd-thin-marchant">Thin Merchant</span> / <span className="fd-marchant">Merchant</span> / <span className="fd-beefy-marchant">Beefy Merchant</span></div>
				<div className="fd-farmer"><span className="fd-thin-farmer">Thin Farmer</span> / <span className="fd-farmer">Farmer</span></div>
				<div className="fd-craftsmen">Craftsmen</div>
				<div className="fd-peasant">Peasant</div>
				<div className="fd-serf">Serf</div>
			</div>
		</div>
		<div className="temp-padding">
			<div className="f-emperor">Icons</div>
			<Icons />
		</div>
	</div>

	<h1 className="fd-text-center fm-merchant fd-shogun">Multiline text</h1>

	<div className="temp-padding">
		<p className="f-emperor ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,amet, consectetur adipisicing elit.
		</p>
		<p className="fd-section-header ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore excepturi maxime optio pariatur possimus quas similique
		</p>
		<p className="fd-shogun ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut, dicta enim inventore ipsam minima officiis quia sunt suscipit! Aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque beatae
		</p>
		<p className="fd-daimyo ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur debitis dolore facere impedit iste nesciunt officia quis ratione sequi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut commodi consequatur
			dicta
		</p>
		<p className="fd-samurai ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequatur doloremque esse, lau Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequatur doloremque esse, lau
		</p>
		<p className="fd-subheader ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laudantium quod tenetur veritatis vero? Earum facere fugiat iste quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, at
			cupiditate earum enim est magnam magni veritatis. Amet assumenda aut
		</p>
		<p className="fd-soldier ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, culpa fuga inventore iste minima molestiae officiis optio recusandae sint velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
			cupiditate ea esse eveniet in incidunt inventore iure maxime
		</p>
		<p className="fd-farmer ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio earum error id, laborum modi nam sequi ut vel voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos fugiat
			iusto nulla. Accusamus debitis doloremque, iure minima modi repellat! Asperiores eos excepturi in magni
			mollitia
			ut,
			veritatis. Iusto, quis.
		</p>
		<p className="fd-merchant ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis, eius eos eveniet ipsum pariatur perspiciatis repellendus sed velit voluptatum.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aperiam commodi dolor dolore dolorem
			eum
			iusto magni minima non quae quam quisquam quos repellendus similique soluta, temporibus? Ipsum, tenetur!
		</p>
		<p className="fd-craftsmen ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi dolore est libero modi odit possimus quam quibusdam rem repellat.
			Lorem
			ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cumque deleniti dolor eligendi, error
			explicabo
			libero nisi nobis nostrum numquam odit quibusdam quidem, quos similique vero voluptate. Sit.
		</p>
		<p className="fd-peasant ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos, earum id incidunt magni molestias praesentium quaerat quas unde veritatis?Lorem ipsum dolor
			sit amet, consectetur adipisicing elit. A beatae delectus modi nisi, placeat quae quod recusandae
			voluptatibus!
			Commodi corporis deserunt eligendi impedit magni, odio repudiandae voluptatibus. Deserunt, exercitationem,
			minus?
		</p>
		<p className="fd-serf ft-shogun fm-merchant">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos, earum id incidunt magni molestias praesentium quaerat quas unde veritatis?Lorem ipsum dolor
			sit amet, consectetur adipisicing elit. A beatae delectus modi nisi, placeat quae quod recusandae
			voluptatibus!
			Commodi corporis deserunt eligendi impedit magni, odio repudiandae voluptatibus. Deserunt, exercitationem,
			minus?
		</p>
	</div>

	<h1 className="fd-text-center fm-merchant fd-shogun">Horizontal alignment</h1>

	<ul className="fd-f">
		<li className="fd-f1 fd-text-left f-bg-light-light-gray temp-padding">left</li>
		<li className="fd-f1 fd-text-center f-bg-light-gray temp-padding">center</li>
		<li className="fd-f1 fd-text-right f-bg-light-light-gray temp-padding">right</li>
	</ul>

	<h1 className="fd-text-center fm-merchant fd-shogun">Misc</h1>

	<p className="fd-text-center">
		Text may be transformed like so <span className="fd-text-lowercase f-text-coral">Lower Case</span>, <span className="fd-text-uppercase f-text-royal-blue">Upper Case</span>, <span className="fd-text-capitalize f-text-lilac">Capitalize</span>
	</p>

</DemoWrapper>
