import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Title from '../Components/Utils/Title'

export default () => <DemoWrapper title="Grids">
	<div class="f-main-wrapper">
		<p>Main idea is to have as least as possible classes to achieve any kind of grids</p>
		<p>There is limited number of grids that may be build on top of this classes</p>
		<p>Grids may be overwritten by media queries</p>

		<Title>Horizontal alignment</Title>

		<p>All grids starts with <span class="f-text-gray">fd-[horizontal-alignment]<span
			class="f-text-light-gray">-[vertical-aligment]</span></span> class by default vertical alignment is
			kinda "stretch" and is optional, so your options are: <strong class="f-text-lilac">fd-f-left</strong>,
			<strong class="f-text-lilac">fd-f-center</strong>, <strong class="f-text-lilac">fd-f-right</strong>
		</p>

		<Title>Left</Title>

		<p class="fd-f-left fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">right<br/>Notice that both cells has same height</span>
		</p>

		<Title>Center</Title>

		<p class="fd-f-center fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">right</span>
		</p>

		<Title>Right</Title>

		<p class="fd-f-right fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">right</span>
		</p>

		<Title>Vertical alignment</Title>

		<p>The only available option for vertical alignment is <strong class="f-text-lilac">middle</strong> so you
			may have classes like <span>fd-f-center-middle</span></p>

		<p class="fd-f-center-middle fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">hello<br />world</span>
			<span class="f-bg-light-gray temp-padding">right</span>
		</p>

		<Title>12 cols is dead</Title>

		<p>Flex grid does not need 12 cols all we need is already here in flex box, so we have added <strong
			class="f-text-lilac">fd-f1</strong>, <strong class="f-text-lilac">fd-f2</strong>, <strong
			class="f-text-lilac">fd-f3</strong> which may be applied to cells to make them proportional wide</p>

		<p class="fd-f-left fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray fd-f1 temp-padding">If you want you may configure cells width by adding classes like <strong>fd-f1</strong></span>
		</p>

		<p class="fd-f-left fm-c-stretch">
			<span class="f-bg-light-gray fd-f1 temp-padding">fd-f1</span>
			<span class="f-bg-light-light-gray fd-f2 temp-padding">fd-f2</span>
			<span class="f-bg-light-gray fd-f1 temp-padding">fd-f1</span>
		</p>

		<Title>Misc</Title>

		<p>There is two additional horizontal alignments available <strong class="f-text-lilac">fd-f-around</strong>
			and <strong class="f-text-lilac">fd-f-between</strong></p>

		<p class="fd-f-around fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">center</span>
			<span class="f-bg-light-gray temp-padding">right</span>
		</p>

		<p class="fd-f-between fm-c-stretch">
			<span class="f-bg-light-gray temp-padding">left</span>
			<span class="f-bg-light-light-gray temp-padding">center</span>
			<span class="f-bg-light-gray temp-padding">right</span>
		</p>

		<Title>Greedy grids</Title>
		<p>By combining grids inside each other you may produce any kind of component</p>

		<p class="fd-f-center">
			<span class="fd-f-left fm-c-center">
				<span class="fd-f-left fm-c-center">
					<span class="f-bg-light-gray temp-padding"><i class="fi-ok"/></span>
					<span class="f-bg-light-light-gray temp-padding">hello world</span>
				</span>
				<span class="fd-f-left fm-c-center">
					<span class="f-bg-light-gray temp-padding"><i class="fi-like"/></span>
					<span class="f-bg-light-light-gray temp-padding">lorem ipsum</span>
				</span>
			</span>
		</p>

		{[1, 2, 3].map(i => <div key={i} class="fd-f-left-middle ">
			<span class="temp-padding"><i class="fi-contact f-text-dark-green"/></span>
			<span class="fd-f1 fd-f-left-middle fm-c-stretch">
			<span>
				<strong>User name {i}</strong>
				<br />
				<span class="f-text-light-gray">Hi, how are...</span>
			</span>
			<span class="f-text-light-gray fd-peasant">2 hours ago</span>
		</span>
			<span class="temp-padding fm-hidden"><i class="fi-arrows-right-big f-text-coral"/></span>
		</div>)}

		<Title>Media queries</Title>

		<p>Each grid in examples above has different set of media specific class names. <strong class="f-text-lilac">fd</strong>esktop, <strong class="f-text-lilac">ft</strong>ablet, <strong class="f-text-lilac">fm</strong>obile</p>
		<p>In most cases you want to rotate your cells into rows and there is only two available cases for horizontally align them - center and stretch</p>
		<p>So your classes are: <strong class="f-text-lilac">fm-c-center</strong> and <strong class="f-text-lilac">fm-c-stretch</strong></p>

		<p class="fd-c-center">
			<span class="f-bg-light-gray temp-padding">top</span>
			<span class="f-bg-light-light-gray temp-padding">bottom</span>
		</p>

		<p class="fd-c-stretch">
			<span class="f-bg-light-gray temp-padding">top</span>
			<span class="f-bg-light-light-gray temp-padding">bottom</span>
		</p>

		<Title>Lists</Title>

		<p>There is only few possible lists e.g. 2, 3, 4 columns. Lists are kinda responsive so have fd, ft, fm prefixes. If you need you may use grid inside lists.</p>

		<ul className="fd-list-4-cols ft-list-2-cols fm-list-1-cols">
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
			<li class="fd-f-between">
				<span>title</span>
				<span>5</span>
			</li>
		</ul>
	</div>

</DemoWrapper>
