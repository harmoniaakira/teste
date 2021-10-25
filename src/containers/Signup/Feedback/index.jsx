import React from 'react'
import AppHeader from 'components/AppHeader'
import Button from 'components/Button'
import { useStatusProposal } from 'contexts/SignupContext'
import PropTypes from 'prop-types'
import SignupAppraisal from './Appraisal'
import SignupError from './Error'
import SignupWarning from './Warning'
import SignupSuccess from './Success'
import { Container } from './SignupFeedback.styles'

const SignupFeedBack = ({ shouldRender }) => {
    const { statusProposal, setStatusProposal } = useStatusProposal()

    const RenderFeedback = () => {
        switch (statusProposal) {
            case 200:
                return <SignupSuccess />
            case 400:
                return <SignupError />
            case 422:
                return <SignupWarning />
            default:
                return (
                    <>
                        <SignupAppraisal />
                        <div style={{ display: 'flex', gap: '80px', margin: 20 }}>
                            <Button handleClick={() => setStatusProposal(200)}> Sucesso </Button>
                            <Button handleClick={() => setStatusProposal(400)}>  Erro </Button>
                            <Button handleClick={() => setStatusProposal(422)}>  AVISO </Button>
                        </div>
                    </>
                )
        }
    }

    return shouldRender ? (
        <>
            <AppHeader />
            <Container>
                <RenderFeedback />
            </Container>
        </>
    ) : null

}

SignupFeedBack.propTypes = {
    shouldRender: PropTypes.bool,
}

SignupFeedBack.defaultProps = {
    shouldRender: false
}
export default SignupFeedBack