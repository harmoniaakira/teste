import React from 'react'
import Loader from 'components/Loader'
import PropTypes from 'prop-types';
import { ContainerCentered, FeedbackText, FeedbackTitle } from 'components/Feedback/Feedback.styles'

const FeedbackLoader = ({ title, text }) => {

    return (
        <ContainerCentered>
            <FeedbackTitle>{title}</FeedbackTitle>
            <FeedbackText>{text}</FeedbackText>
            <Loader />
        </ContainerCentered>
    )
}

FeedbackLoader.propTypes = {
	title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default FeedbackLoader