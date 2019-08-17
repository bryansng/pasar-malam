import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_sIddlbw40HIVGHW4fgP3o01Z00bvoVqCY1";

	// this is an on success callback that gets triggered when we submit.
	// submission is handled by StripeCheckout, so we dont actually handle/process the payments.
	// because of that, we dont actually need the token, we just use it to show that payment was successful.
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='Pasar Malam'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;