import React from 'react'
import PropTypes from 'prop-types';
import { 
    Wrapper, 
    Label,
    Box,
    Check
} from './Checkbox.styles'

function Checkbox ({ value, label, onClick }) {
    return <Wrapper onClick={onClick}>
        <Label>{ label }</Label>
        <Box>
            <Check value={value} />
        </Box>
    </Wrapper>
}

Checkbox.propTypes = {
	value: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Checkbox