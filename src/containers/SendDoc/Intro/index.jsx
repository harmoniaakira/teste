import cam from 'assets/images/SendDocView/cam.svg'
import idCard from 'assets/images/SendDocView/idCard.svg'
import light from 'assets/images/SendDocView/light.svg'
import vibe from 'assets/images/SendDocView/vibe.svg'
import AppHeader from 'components/AppHeader'
import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import Steps from 'components/Steps'
import { useSendDocDialog } from 'contexts/SendDocContext'
import React, { useState } from 'react'
import SendDocDialog from '../Dialog'
import { ActionBtn, ActionsRow, Container, SendDocHeaderText, SendDocHeaderTitle } from '../SendDoc.styles'

const SendDocIntro = () => {

    const { setIsDialogSendDocOpen } = useSendDocDialog()
    const [doc, setDoc] = useState("")

    const handleChangeDoc = (value) => {
        setDoc(value)
    }

    const handleOpenDialog = () => {
        setIsDialogSendDocOpen(true)
    }

    const steps = [
        {
            id: 1,
            stepIcon: cam,
            stepText: "Tire uma foto da frente e outra do verso do documento."
        },
        {
            id: 2,
            stepIcon: light,
            stepText: "Procure um local iluminado e tire o documento da capinha plástica."
        },
        {
            id: 3,
            stepIcon: vibe,
            stepText: "Deixe o dispositivo estável durante a captura para os dados ficarem legíveis."
        }
    ]

    return (
        <>
            <MobileView>
                <AppHeader avatar={idCard} />

                <Container>
                    <SendDocHeaderTitle>Só mais uma foto</SendDocHeaderTitle>

                    <SendDocHeaderText>
                        Selecione o tipo do documento para registrar a foto
                    </SendDocHeaderText>

                    <ActionsRow>
                        <ActionBtn
                            onClick={() => handleChangeDoc('RG')}
                            $active={doc === 'RG'}
                        >
                            RG
                        </ActionBtn>

                        <ActionBtn
                            onClick={() => handleChangeDoc('CNH')}
                            $active={doc === 'CNH'}
                        >
                            CNH
                        </ActionBtn>

                        <ActionBtn disabled>Outros</ActionBtn>
                    </ActionsRow>

                    <SendDocHeaderText>
                        Agora vamos registrar o documento escolhido!
                        Siga as instruções abaixo ao preencher o formulário:
                    </SendDocHeaderText>

                    <Steps steps={steps} />

                    <Button handleClick={handleOpenDialog} disabled={doc !== 'CNH' && doc !== 'RG'} >Continuar</Button>
                </Container>
            </MobileView>
            <SendDocDialog />
        </>
    )
}

export default SendDocIntro