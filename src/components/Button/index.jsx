import React from 'react'
import PropTypes from 'prop-types';
import { ButtonComponent, ButtonPopup } from './Button.styles'

const Button = ( { handleClick, disabled, children, popup } ) => {
    
	return ( popup 
		? 	<ButtonPopup 
				onClick={handleClick}
				disabled={disabled}
			>
				{children}
			</ButtonPopup>
		:	<ButtonComponent 
				onClick={handleClick}
				disabled={disabled}
			>
				{children}
			</ButtonComponent>
	)
}

Button.propTypes = {
	handleClick: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
	disabled: PropTypes.bool,
	popup: PropTypes.bool
	
}

Button.defaultProps = {
	disabled: false,
	popup: false
}

export default Button
