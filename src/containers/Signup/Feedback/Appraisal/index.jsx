import React from 'react'
import Loader from 'components/Loader'
import { ContainerCentered, FeedbackText, FeedbackTitle } from 'components/Feedback/Feedback.styles'

const SignupAppraisal = () => {

    return (
        <ContainerCentered>
            <FeedbackTitle> Quase acabando! </FeedbackTitle>
            <FeedbackText> Estamos conferindo os dados informados, leva só alguns instantes. ;) </FeedbackText>
            <Loader />
        </ContainerCentered>
    )
}

export default SignupAppraisal