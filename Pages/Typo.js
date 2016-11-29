import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Icons from '../Components/Atoms/Icons'
import Lorem from '../Components/Utils/Lorem'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Typo">
	<Title>Fonts</Title>
	<ul class="fd-f-left">
		<li class="temp-padding">
			<div class="fd-thin">Graphic LC Light</div>
			<div>Graphic LC Regular</div>
			<div class="fd-beefy">Graphic LC Medium</div>
			<div class="fd-fat">Graphic LC Semibold</div>
		</li>
		<li class="temp-padding">
			<div class="fd-thin">Thin</div>
			<div class="f-text-light-gray">Default</div>
			<div class="fd-beefy">Beefy</div>
			<div class="fd-fat">Fat</div>
		</li>
	</ul>

	<div class="fd-f-between fm-c-stretch">
		<div>
			<div class="temp-padding">
				<Title>Typography</Title>
				<div class="f-emperor">Emperor</div>
				<div class="fd-fat-shogun">Fat Shogun</div>
				<div class="fd-thin-daimyo">Thin Daimyo</div>
				<div class="fd-beefy-samurai">Beefy Samurai</div>
				<div class="fd-ronin"><span class="fd-thin-ronin">Thin Ronin</span> / <span class="fd-ronin">Ronin</span> / <span class="fd-beefy-ronin">Beefy Ronin</span></div>
				<div class="fd-soldier"><span class="fd-thin-soldier">Thin Soldier</span> / <span class="fd-soldier">Soldier</span> / <span class="fd-beefy-soldier">Beefy Soldier</span></div>
				<div class="fd-merchant"><span class="fd-thin-merchant">Thin Merchant</span> / <span class="fd-merchant">Merchant</span> / <span class="fd-beefy-merchant">Beefy Merchant</span></div>
				<div class="fd-farmer"><span class="fd-thin-farmer">Thin Farmer</span> / <span class="fd-farmer">Farmer</span></div>
				<div class="fd-craftsmen">Craftsmen</div>
				<div class="fd-peasant">Peasant</div>
				<div class="fd-serf">Serf</div>
			</div>
		</div>
		<div class="temp-padding">
			<Title>Links</Title>
			<ul class="f-reset-list">
				<li>
					<a href="#" class="f-always-blue" style={{opacity:1}}>All Links</a>
				</li>
				<li>
					<a href="#" class="f-always-blue f-hover">Hover Links</a>
				</li>
				<li>
					<a href="#" class="f-always-blue f-active">Active Links</a>
				</li>
				<li>
					<a href="#" class="f-always-blue f-disabled">Disabled Links</a>
				</li>
				<li>
					&nbsp;
				</li>
				<li>
					<a href="#" class="f-visited" style={{opacity:1}}>All Links</a>
				</li>
				<li>
					<a href="#" class="f-visited f-hover">Hover Links</a>
				</li>
				<li>
					<a href="#" class="f-visited f-active">Active Links</a>
				</li>
				<li>
					<a href="#" class="f-visited f-disabled">Disabled Links</a>
				</li>
			</ul>
		</div>
		<div class="temp-padding">
			<Title>Icons</Title>
			<Icons />
		</div>
	</div>

	<Title>Multi line text</Title>
	<div class="temp-padding">
		<p class="fd-section-header ft-shogun fm-merchant">
			<Lorem/>
		</p>
		<p class="fd-shogun">
			<Lorem/>
		</p>
		<p class="fd-daimyo">
			<Lorem/>
		</p>
		<p class="fd-samurai">
			<Lorem/>
		</p>
		<p class="fd-ronin">
			<Lorem/>
		</p>
		<p class="fd-soldier">
			<Lorem/>
			<Lorem/>
		</p>
		<p class="fd-merchant">
			<Lorem/>
			<Lorem/>
		</p>
		<p class="fd-farmer">
			<Lorem/>
			<Lorem/>
		</p>
		<p class="fd-craftsmen">
			<Lorem/>
			<Lorem/>
		</p>
		<p class="fd-peasant">
			<Lorem/>
			<Lorem/>
		</p>
		<p class="fd-serf">
			<Lorem/>
			<Lorem/>
		</p>
	</div>

	<Title>Horizontal alignment</Title>
	<ul class="fd-f">
		<li class="fd-f1 fd-text-left f-bg-light-light-gray temp-padding">left</li>
		<li class="fd-f1 fd-text-center f-bg-light-gray temp-padding">center</li>
		<li class="fd-f1 fd-text-right f-bg-light-light-gray temp-padding">right</li>
	</ul>

	<Title>Misc</Title>
	<p class="fd-text-center">
		Text may be transformed like so <span class="fd-text-lowercase f-text-coral">Lower Case</span>, <span class="fd-text-uppercase f-text-royal-blue">Upper Case</span>, <span class="fd-text-capitalize f-text-lilac">Capitalize</span>
	</p>
</DemoWrapper>
