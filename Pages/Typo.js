import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Icons from '../Components/Atoms/Icons'
import Lorem from '../Components/Utils/Lorem'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Typo">
	<Title>Fonts</Title>
	<ul class="fd-f-left">
		<li class="fd-p20">
			<div class="fd-thin">Graphic LC Light</div>
			<div>Graphic LC Regular</div>
			<div class="fd-beefy">Graphic LC Medium</div>
			<div class="fd-fat">Graphic LC Semibold</div>
		</li>
		<li class="fd-p20">
			<div class="fd-thin">Thin</div>
			<div class="f-text-light-gray">Default</div>
			<div class="fd-beefy">Beefy</div>
			<div class="fd-fat">Fat</div>
		</li>
	</ul>

	<div class="fd-f-between fm-c-stretch">
		<div>
			<div class="fd-p20">
				<Title>Typography</Title>
				<div class="f-emperor">Emperor [70px]</div>
				<div class="fd-fat-shogun">Fat Shogun [40px]</div>
				<div class="fd-thin-daimyo">Thin Daimyo [36px]</div>
				<div class="fd-beefy-samurai">Beefy Samurai [32px]</div>
				<div class="fd-ronin"><span class="fd-thin-ronin">Thin Ronin</span> / <span class="fd-ronin">Ronin</span> / <span class="fd-beefy-ronin">Beefy Ronin</span> [26px]</div>
				<div class="fd-syoi"><span class="fd-thin-syoi">Thin Syoi</span> / <span class="fd-syoi">Syoi</span> / <span class="fd-beefy-syoi">Beefy Syoi</span> [22px]</div>
				<div class="fd-gunso"><span class="fd-thin-gunso">Thin Gunso</span> / <span class="fd-gunso">Gunso</span> / <span class="fd-beefy-gunso">Beefy Gunso</span> [20px]</div>
				<div class="fd-soldier"><span class="fd-thin-soldier">Thin Soldier</span> / <span class="fd-soldier">Soldier</span> / <span class="fd-beefy-soldier">Beefy Soldier</span> [18px]</div>
				<div class="fd-merchant"><span class="fd-thin-merchant">Thin Merchant</span> / <span class="fd-merchant">Merchant</span> / <span class="fd-beefy-merchant">Beefy Merchant</span> [16px]</div>
				<div class="fd-farmer"><span class="fd-thin-farmer">Thin Farmer</span> / <span class="fd-farmer">Farmer</span> [15px]</div>
				<div class="fd-craftsmen">Craftsmen [14px]</div>
				<div class="fd-peasant">Peasant [13px]</div>
				<div class="fd-serf">Serf [12px]</div>
			</div>
		</div>
		<div class="fd-p20">
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
		<div class="fd-p20">
			<Title>Icons</Title>
			<Icons />
		</div>
	</div>

	<Title>Multi line text</Title>
	<div class="fd-p20">
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
		<li class="fd-f1 fd-text-left f-bg-light-light-gray fd-p20">left</li>
		<li class="fd-f1 fd-text-center f-bg-light-gray fd-p20">center</li>
		<li class="fd-f1 fd-text-right f-bg-light-light-gray fd-p20">right</li>
	</ul>

	<Title>Misc</Title>
	<p class="fd-text-center">
		Text may be transformed like so <span class="fd-text-lowercase f-text-coral">Lower Case</span>, <span class="fd-text-uppercase f-text-royal-blue">Upper Case</span>, <span class="fd-text-capitalize f-text-lilac">Capitalize</span>
	</p>
</DemoWrapper>
