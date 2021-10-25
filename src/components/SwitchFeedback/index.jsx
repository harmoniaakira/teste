import React from 'react'
import AppHeader from 'components/AppHeader'
import { FlexColumn, MobileView } from 'components/Layout/Layout.styles'
import Web from 'components/Web'
import PropTypes from 'prop-types'

const SwitchFeedback = ({ feedbackKey, feeds }) => {

    const getFeedback = () => {
        const item = feeds.find(feedback => feedback.id === feedbackKey)
        if (!item) return null
        const { component } = item
        return component
    }

    return (
        <>
            <MobileView>
                <AppHeader />
                {getFeedback()}
            </MobileView>
            <Web>
                <FlexColumn>
                    {getFeedback()}
                </FlexColumn>
            </Web>
        </>
    )

}

SwitchFeedback.propTypes = {
    feedbackKey: PropTypes.string.isRequired,
    feeds: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            component: PropTypes.node.isRequired
        }).isRequired
    ).isRequired
}

export default SwitchFeedback