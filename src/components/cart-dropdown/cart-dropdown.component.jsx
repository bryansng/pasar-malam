import React from 'react';

import CustomBottom from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		<CustomBottom>GO TO CHECKOUT</CustomBottom>
	</div>
)

export default CartDropdown;