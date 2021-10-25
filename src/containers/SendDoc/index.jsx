
import Button from 'components/Button'
import { ContainerPage } from 'components/Layout/Layout.styles'
import SwitchFeedback from 'components/SwitchFeedback'
import { useSendDocScreen } from 'contexts/SendDocContext'
import React from 'react'
import SendDocConfirm from './ConfirmPrint'
import { SCREEN_SENDDOC_CONFIRM_BACK, SCREEN_SENDDOC_CONFIRM_FRONT, SCREEN_SENDDOC_FEEDBACK_ERROR, SCREEN_SENDDOC_FEEDBACK_SUCCESS, SCREEN_SENDDOC_INTRO, SCREEN_SENDDOC_PRINT_BACK, SCREEN_SENDDOC_PRINT_FRONT } from './constants'
import SendDocError from './Feedback/Error'
import SendDocSuccess from './Feedback/Success/indes'
import SendDocIntro from './Intro'
import SendDocPrint from './Print'

const SendDoc = () => {
    const { screen, setScreen } = useSendDocScreen()

    const feeds = [
        {
            id: SCREEN_SENDDOC_FEEDBACK_SUCCESS,
            component: <SendDocSuccess />
        },
        {
            id: SCREEN_SENDDOC_FEEDBACK_ERROR,
            component: <SendDocError />
        }
    ]

    const switchContent = () => {
        switch (screen) {
            default:
            case SCREEN_SENDDOC_INTRO:
                return <SendDocIntro />

            case SCREEN_SENDDOC_PRINT_FRONT:
            case SCREEN_SENDDOC_PRINT_BACK:
                return <SendDocPrint />

            case SCREEN_SENDDOC_CONFIRM_FRONT:
            case SCREEN_SENDDOC_CONFIRM_BACK:
                return <SendDocConfirm />

            case SCREEN_SENDDOC_FEEDBACK_SUCCESS:
            case SCREEN_SENDDOC_FEEDBACK_ERROR:
                // <SwitchFeedback feedbackKey={screen} feeds={feeds} />
                // TODO: apagar
                // eslint-disable-next-line no-case-declarations
                const toogle = screen === SCREEN_SENDDOC_FEEDBACK_ERROR ? SCREEN_SENDDOC_FEEDBACK_SUCCESS : SCREEN_SENDDOC_FEEDBACK_ERROR
                return (
                    <>
                        <SwitchFeedback feedbackKey={screen} feeds={feeds} />
                        <div style={{ marginTop: -40 }}>
                            <Button handleClick={() => setScreen(toogle)}> Visualizar outro feedback </Button>
                        </div>
                    </>
                )

        }
    }

    return (
        <ContainerPage>
            {switchContent()}
        </ContainerPage>
    )
}

export default SendDoc