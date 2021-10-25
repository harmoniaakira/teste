import React, { memo } from 'react'
import PropTypes from 'prop-types';
import {
    Container,
    Step,
    StepIcon,
    StepText
} from './Steps.styles'

const Steps = ({ steps }) => (
    <Container>
        {
            steps.map(({ id, stepIcon, stepText }) => (
                <Step key={id}>
                    <StepIcon src={stepIcon} />
                    <StepText>
                        {stepText}
                    </StepText>
                </Step>
            ))
        }
    </Container>
)

Steps.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        stepIcon: PropTypes.node.isRequired,
        stepText: PropTypes.string.isRequired
    })).isRequired
}

export default memo(Steps)