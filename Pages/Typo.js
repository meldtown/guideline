import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Icons from '../Components/Atoms/Icons'
import Lorem from '../Components/Utils/Lorem'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Typo">
	<Title>Fonts</Title>
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

	<div className="fd-f-between fm-c-stretch">
		<div>
			<div className="temp-padding">
				<Title>Typography</Title>
				<div className="f-emperor">Emperor</div>
				<div className="fd-fat-shogun">Fat Shogun</div>
				<div className="fd-thin-daimyo">Thin Daimyo</div>
				<div className="fd-beefy-samurai">Beefy Samurai</div>
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
			<Title>Links</Title>
			<ul className="f-reset-list">
				<li>
					<a href="#" className="f-always-blue" style={{opacity:1}}>All Links</a>
				</li>
				<li>
					<a href="#" className="f-always-blue f-hover">Hover Links</a>
				</li>
				<li>
					<a href="#" className="f-always-blue f-active">Active Links</a>
				</li>
				<li>
					<a href="#" className="f-always-blue f-disabled">Disabled Links</a>
				</li>
				<li>
					&nbsp;
				</li>
				<li>
					<a href="#" className="f-visited" style={{opacity:1}}>All Links</a>
				</li>
				<li>
					<a href="#" className="f-visited f-hover">Hover Links</a>
				</li>
				<li>
					<a href="#" className="f-visited f-active">Active Links</a>
				</li>
				<li>
					<a href="#" className="f-visited f-disabled">Disabled Links</a>
				</li>
			</ul>
		</div>
		<div className="temp-padding">
			<Title>Icons</Title>
			<Icons />
		</div>
	</div>

	<Title>Multi line text</Title>
	<div className="temp-padding">
		<p className="fd-section-header ft-shogun fm-merchant">
			<Lorem/>
		</p>
		<p className="fd-shogun">
			<Lorem/>
		</p>
		<p className="fd-daimyo">
			<Lorem/>
		</p>
		<p className="fd-samurai">
			<Lorem/>
		</p>
		<p className="fd-ronin">
			<Lorem/>
		</p>
		<p className="fd-soldier">
			<Lorem/>
			<Lorem/>
		</p>
		<p className="fd-merchant">
			<Lorem/>
			<Lorem/>
		</p>
		<p className="fd-farmer">
			<Lorem/>
			<Lorem/>
		</p>
		<p className="fd-craftsmen">
			<Lorem/>
			<Lorem/>
		</p>
		<p className="fd-peasant">
			<Lorem/>
			<Lorem/>
		</p>
		<p className="fd-serf">
			<Lorem/>
			<Lorem/>
		</p>
	</div>

	<Title>Horizontal alignment</Title>
	<ul className="fd-f">
		<li className="fd-f1 fd-text-left f-bg-light-light-gray temp-padding">left</li>
		<li className="fd-f1 fd-text-center f-bg-light-gray temp-padding">center</li>
		<li className="fd-f1 fd-text-right f-bg-light-light-gray temp-padding">right</li>
	</ul>

	<Title>Misc</Title>
	<p className="fd-text-center">
		Text may be transformed like so <span className="fd-text-lowercase f-text-coral">Lower Case</span>, <span className="fd-text-uppercase f-text-royal-blue">Upper Case</span>, <span className="fd-text-capitalize f-text-lilac">Capitalize</span>
	</p>
</DemoWrapper>
