import Button from 'components/Button'
import { ContainerPage } from 'components/Layout/Layout.styles'
import SwitchFeedback from 'components/SwitchFeedback'
import { useSendCodeScreen } from 'contexts/SendCodeContext'
import React from 'react'
import {
  SCREEN_SENDCODE_ALTER_SEND_METHOD, SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN, SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN,
  SCREEN_SENDCODE_FEEDBACK_SUCCESS, SCREEN_SENDCODE_INPUT_TOKEN, SCREEN_SENDCODE_INPUT_TOKEN_FAILED, SCREEN_SENDCODE_INTRO
} from './constants'
import FeedbackSendToken from './Feedback/SendToken'
import TokenSuccess from './Feedback/Success/indes'
import InputTokenDefault from './InputToken/Default'
import InputTokenUnrecognized from './InputToken/Unrecognized'
import SendCodeIntro from './Intro'
import { Apagar } from './SendCode.styles'


const SendCode = () => {

  const { screen, setScreen } = useSendCodeScreen()

  // TODO: ARRUMAR
  const feeds = [
    {
      id: SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN,
      component: (
        <>
          <FeedbackSendToken />
        </>
      )
    },
    {
      id: SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN,
      component: (
        <>
          <FeedbackSendToken />
          <Apagar>
            <Button handleClick={() => setScreen(SCREEN_SENDCODE_FEEDBACK_SUCCESS)}> Sucesso </Button>
            <Button handleClick={() => setScreen(SCREEN_SENDCODE_INPUT_TOKEN_FAILED)}> Erro </Button>
          </Apagar>
        </>
      )
    },
    {
      id: SCREEN_SENDCODE_FEEDBACK_SUCCESS,
      component: <TokenSuccess />
    }
  ]

  const switchContent = () => {

    switch (screen) {
      default:
      case SCREEN_SENDCODE_INTRO:
        return <SendCodeIntro />

      case SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN:
      case SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN:
      case SCREEN_SENDCODE_FEEDBACK_SUCCESS:
        return <SwitchFeedback feedbackKey={screen} feeds={feeds} />


      case SCREEN_SENDCODE_INPUT_TOKEN:
        return <InputTokenDefault />


      case SCREEN_SENDCODE_INPUT_TOKEN_FAILED:
      case SCREEN_SENDCODE_ALTER_SEND_METHOD:
        return <InputTokenUnrecognized />
    }
  }

  return (
    <ContainerPage>
      {switchContent()}
    </ContainerPage>
  )
}

export default SendCode;
