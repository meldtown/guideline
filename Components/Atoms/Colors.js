import React from 'react'
import DemoWrapper from '../DemoWrapper'

const ColorItemDemo = ({color}) => {
	let circleClassName = `f-bg-${color}`
	let letterClassName = `f-text-${color} fd-h2`
	return <li style={{height: 100}} className="fd-f-center-middle">
		<span className={circleClassName} style={{width: 50, height: 50, borderRadius: 50}}/>
		<span className={letterClassName} style={{marginLeft: 20}}>Aa</span>
	</li>
}

export default () => <DemoWrapper title="Colors">
	<h2 className="fd-h2 temp-padding">Background</h2>

	<div>
		<div className="fd-f-left fd-micro" style={{textAlign: 'center'}}>
			<div style={{margin: 10, flexBasis: 90}}>
				<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-blue"></div>
				<br/>
				<b>#EBF3FA</b><br/>
				<span>Ultra-blue</span>
			</div>
			<div style={{margin: 10, flexBasis: 90}}>
				<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-green"></div>
				<br/>
				<b>#EDF5F0</b><br/>
				<span>Ultra-green</span>
			</div>
			<div style={{margin: 10, flexBasis: 90}}>
				<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-yellow"></div>
				<br/>
				<b>#F9FAEB</b><br/>
				<span>Ultra-yellow</span>
			</div>
			<div style={{margin: 10, flexBasis: 90}}>
				<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-coral"></div>
				<br/>
				<b>#F6EDEB</b><br/>
				<span>Ultra-coral</span>
			</div>
			<div style={{margin: 10, flexBasis: 90}}>
				<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-lilac"></div>
				<br/>
				<b>#F6F3FB</b><br/>
				<span>Ultra-lilac</span>
			</div>
		</div>
	</div>

	<h2 className="fd-h2 temp-padding">Colors</h2>

	<div className="fd-f-left fd-micro" style={{textAlign: 'center'}}>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-coral"></div>
			<br/>
			<b>#F06464</b><br/>
			<span>Coral</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-dark-green"></div>
			<br/>
			<b>#4BA661</b><br/>
			<span>Dark Green</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-green"></div>
			<br/>
			<b>#5FC378</b><br/>
			<span>Green</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-royal-blue"></div>
			<br/>
			<b>#2956AC</b><br/>
			<span>Royal Blue</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-lilac"></div>
			<br/>
			<b>#9B6EC3</b><br/>
			<span>lilac</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-black"></div>
			<br/>
			<b>(0, 0, 0, 0.87)</b><br/>
			<span>Black</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-gray"></div>
			<br/>
			<b>(0, 0, 0, 0.54)</b><br/>
			<span>Gray</span>
		</div>
	</div>

	<h2 className="fd-h2 temp-padding">Adjective colors</h2>

	<div className="fd-f-left fd-micro" style={{textAlign: 'center'}}>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-orange"></div>
			<br/>
			<b>#FAAF64</b><br/>
			<span>Orange</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-yellow"></div>
			<br/>
			<b>#FAF569</b><br/>
			<span>Yellow</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-blue"></div>
			<br/>
			<b>#6EC3C8</b><br/>
			<span>Blue</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-purple"></div>
			<br/>
			<b>#698CD7</b><br/>
			<span>Purple</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-gray"></div>
			<br/>
			<b>(0, 0, 0, 0.3)</b><br/>
			<span>Light Gray</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-light-gray"></div>
			<br/>
			<b>(0, 0, 0, 0.12)</b><br/>
			<span>Light-light Gray</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-ultra-gray"></div>
			<br/>
			<b>(0, 0, 0, .05)</b><br/>
			<span>Ultra Gray</span>
		</div>
	</div>

	<div className="fd-f-left fd-micro" style={{textAlign: 'center'}}>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-coral"></div>
			<br/>
			<b>#F5AAAA</b><br/>
			<span>Light Coral</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-orange"></div>
			<br/>
			<b>#F5D2AA</b><br/>
			<span>Light Orange</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-yellow"></div>
			<br/>
			<b>#F5F5AF</b><br/>
			<span>Light Yellow</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-green"></div>
			<br/>
			<b>#AADCB4</b><br/>
			<span>Light Green</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-blue"></div>
			<br/>
			<b>#AFDCE1</b><br/>
			<span>Light Blue</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-purple"></div>
			<br/>
			<b>#AFBEE6</b><br/>
			<span>Light Purple</span>
		</div>
		<div style={{margin: 10, flexBasis: 90}}>
			<div style={{width: 60, height: 60, display: 'inline-block'}} className="f-bg-light-lilac"></div>
			<br/>
			<b>#C8AFDC</b><br/>
			<span>Light lilac</span>
		</div>
	</div>

</DemoWrapper>
