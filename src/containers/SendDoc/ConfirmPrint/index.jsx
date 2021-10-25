import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import { useInvokeSendDocInfo } from 'contexts/AppContext'
import { useSendDocScreen } from 'contexts/SendDocContext'
import React from 'react'
import { SCREEN_SENDDOC_CONFIRM_BACK, SCREEN_SENDDOC_FEEDBACK_SUCCESS, SCREEN_SENDDOC_PRINT_BACK, SCREEN_SENDDOC_PRINT_FRONT } from '../constants'
import { MobileConfirmWrapper, MobileContainer, TextBtn } from '../SendDoc.styles'
import apagar from './apagar.png'

const SendDocConfirm = () => {

    const { screen, setScreen } = useSendDocScreen()
    const { openInfo } = useInvokeSendDocInfo()
    const isBackConfirmScreen = screen === SCREEN_SENDDOC_CONFIRM_BACK

    const handleGoNext = () => {
        if (isBackConfirmScreen) {
            setScreen(SCREEN_SENDDOC_FEEDBACK_SUCCESS)
        } else {
            setScreen(SCREEN_SENDDOC_PRINT_BACK)
        }
    }

    const handleGoBack = () => {
        if (isBackConfirmScreen) {
            setScreen(SCREEN_SENDDOC_PRINT_BACK)
        } else {
            setScreen(SCREEN_SENDDOC_PRINT_FRONT)
        }
    }

    return (
        <MobileView>
            <Stepper infoCallback={() => openInfo()}/>
            <MobileContainer $background="#fff">
                <MobileConfirmWrapper>
                    <img style={{ width: 289, height: 398, marginBottom: 'auto' }} src={apagar} alt="apagar" />
                    <Button handleClick={handleGoNext}>Gostei, usar essa foto</Button>
                    <TextBtn onClick={handleGoBack}>Não gostei, tentar novamente</TextBtn>
                </MobileConfirmWrapper>
            </MobileContainer>
        </MobileView>
    )
}

export default SendDocConfirm