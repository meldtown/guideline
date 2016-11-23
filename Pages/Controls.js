import React from 'react'
import DemoWrapper from 'Components/DemoWrapper'
import Input from 'Atoms/Input'
import Dropdown from 'Atoms/Dropdown'
import Checkbox from 'Atoms/Checkbox'
import Autocomplete from '../Components/Molecules/jQuery/Autocomplete'

export default () => <DemoWrapper title="Controls">
	<Input />
	<Autocomplete />
	<Dropdown />
	<Checkbox />
</DemoWrapper>
