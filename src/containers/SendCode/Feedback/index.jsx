import React from 'react'
import AppHeader from 'components/AppHeader'
import { FlexColumn, MobileView } from 'components/Layout/Layout.styles'
import Web from 'components/Web'
import PropTypes from 'prop-types'
import { SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN, SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN, SCREEN_SENDCODE_FEEDBACK_SUCCESS } from '../constants'
import FeedbackAppraiseToken from './Appraise'
import FeedbackSendToken from './SendToken'
import TokenSuccess from './Success/indes'

const SendCodeFeedBack = ({ feedback }) => {


    const RenderFeedback = () => {
        if (feedback === SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN) {
            return <FeedbackSendToken />
        }

        if (feedback === SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN) {
            return <FeedbackAppraiseToken />
        }

        if (feedback === SCREEN_SENDCODE_FEEDBACK_SUCCESS) {
            return <TokenSuccess />
        }
        return null
    }

    return (
        <>
            <MobileView>
                <AppHeader />
                <RenderFeedback />
            </MobileView>
            <Web>
                <FlexColumn>
                    <RenderFeedback />
                </FlexColumn>
            </Web>
        </>
    )

}

SendCodeFeedBack.propTypes = {
    feedback: PropTypes.oneOf(
        [
            SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN,
            SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN,
            SCREEN_SENDCODE_FEEDBACK_SUCCESS
        ]).isRequired,
}

export default SendCodeFeedBack