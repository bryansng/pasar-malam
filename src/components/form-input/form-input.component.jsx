import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='group'>
		<input className='form-input' type="email" name="email" value={otherProps.email} onChange={handleChange} required />
		{
			label &&
			<label className={`${otherProps.value.length && 'shrink'} form-input-label`}>
				{label}
			</label>
		}
	</div>
)

export default FormInput;