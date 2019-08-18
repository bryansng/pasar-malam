import React from 'react';

import { CustomBottomContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
	<CustomBottomContainer {...props}>
		{children}
	</CustomBottomContainer>
)

export default CustomButton;