import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import Web from 'components/Web'
import { useCreditProposal } from 'contexts/SignupContext'
import React from 'react'
import { useHistory } from 'react-router'
import DialogSignup from './Dialog'
import SignupFeedBack from './Feedback'
import FormSignup from './Form'
import { SignupHeader, SignupHeaderArrow, SignupHeaderText, WrapperFormSignup } from './Signup.styles'



const Signup = () => {
  const history = useHistory()
  
  const { fillCreditProposal } = useCreditProposal()

  const handleClick = () => {
    history.push('/onboarding-pf-frontend/geolocalizacao');
  }

  return (
    <>
      <MobileView>
        <SignupFeedBack shouldRender={fillCreditProposal} />
        <WrapperFormSignup $hide={fillCreditProposal}>
          <Stepper infoButton />
          <FormSignup />
        </WrapperFormSignup>
      </MobileView>

      <Web>
        <SignupFeedBack shouldRender={fillCreditProposal} />
        <WrapperFormSignup $hide={fillCreditProposal}>
          <SignupHeader>
            <SignupHeaderArrow onClick={handleClick} />
            <SignupHeaderText>
              Preencha os campos com as informações do cliente
            </SignupHeaderText>
          </SignupHeader>
          <FormSignup />
        </WrapperFormSignup>
      </Web>

      <DialogSignup />
    </>
  )
}

export default Signup;
