import camOutline from 'assets/images/SendDocView/cam_outline.svg'
import lightOutline from 'assets/images/SendDocView/light_outline.svg'
import vibeOutline from 'assets/images/SendDocView/vibe_outline.svg'
import Button from 'components/Button'
import InstructionsCam from 'components/InstructionsCam'
import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import { useInvokeSendDocInfo } from 'contexts/AppContext'
import { useSendDocScreen } from 'contexts/SendDocContext'
import React from 'react'
import { SCREEN_SENDDOC_CONFIRM_BACK, SCREEN_SENDDOC_CONFIRM_FRONT, SCREEN_SENDDOC_PRINT_BACK } from '../constants'
import { DashBox, MobileContainer, MobileContainerWrapper } from '../SendDoc.styles'

const SendDocPrint = () => {

    const { screen, setScreen } = useSendDocScreen()
    const { openInfo } = useInvokeSendDocInfo()
    const isBackPrintScreen = screen === SCREEN_SENDDOC_PRINT_BACK

    const instructions = [
        {
            prefix: camOutline,
            msg: `${isBackPrintScreen ? 'Verso' : 'Frente'} do documento`
        },
        {
            prefix: lightOutline,
            msg: 'Ambiente iluminado'
        },
        {
            prefix: vibeOutline,
            msg: 'Celular estabilizado',
        },
    ]

    const handleGoTo = () => {
        if (isBackPrintScreen) {
            setScreen(SCREEN_SENDDOC_CONFIRM_BACK)
        } else {
            setScreen(SCREEN_SENDDOC_CONFIRM_FRONT)
        }
    }


    return (
        <MobileView>
            <Stepper infoCallback={() => openInfo()}/>
            <MobileContainer>
                <MobileContainerWrapper>
                    <DashBox />
                    <InstructionsCam instructions={instructions} />
                    <Button handleClick={handleGoTo}> Continuar </Button>
                </MobileContainerWrapper>
            </MobileContainer>
        </MobileView>
    )
}

export default SendDocPrint