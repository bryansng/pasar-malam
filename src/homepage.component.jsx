import React from 'react';
import './homepage.styles.scss';

const Cart = () => (
	<div className='menu-item'>
		<div className='content'>
			<h1 className='title'>HATS</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
)

const HomePage = () => (
	<div className='homepage'>
		<div className='directory-menu'>
			<Cart />
			<Cart />
			<Cart />
			<Cart />
			<Cart />
		</div>
	</div>
)

export default HomePage;