import Button from 'components/Button'
import React from 'react'
import PropTypes from 'prop-types';
import { Bottom, ContainerCentered, ErrorIcon, FeedbackText, FeedbackTitle, SuccessIcon, WarningIcon } from './Feedback.styles'

const Feedback = ({ title, text, icon, btnTxt, onclick }) => {

    const RenderIcon = () => {
        if (icon === 'SUCCESS') return <SuccessIcon />
        if (icon === 'ERROR') return <ErrorIcon />
        if (icon === 'WARNING') return <WarningIcon />
        return null
    }

    return (
        <ContainerCentered>
            <RenderIcon />
            <FeedbackTitle>{title}</FeedbackTitle>
            <FeedbackText>{text}</FeedbackText>
            <Bottom>
                <Button handleClick={onclick}>{btnTxt}</Button>
            </Bottom>
        </ContainerCentered>
    )
}

Feedback.propTypes = {
	title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btnTxt: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    icon: PropTypes.oneOf(['SUCCESS','ERROR','WARNING']).isRequired,
}

export default Feedback