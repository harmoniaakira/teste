import avatarPic from 'assets/images/PictureView/avatar.png'
import step1 from 'assets/images/PictureView/step1.svg'
import step2 from 'assets/images/PictureView/step2.svg'
import step3 from 'assets/images/PictureView/step3.svg'
import AppHeader from 'components/AppHeader'
import Button from 'components/Button'
import Dialog from 'components/Dialog'
import { MobileView } from 'components/Layout/Layout.styles'
import Steps from 'components/Steps'
import Web from 'components/Web'
import { useSendPhotoScreen } from 'contexts/SendPhotoContext'
import React, { useState } from 'react'
import {
    Avatar,
    Content,
    HeaderText,
    HeaderTitle,
    WrapperTakePicture
} from '../SendPhoto.styles'
import {
    SCREEN_SEND_PHOTO
  } from '../constants'

const steps = [
    {
        id: 1,
        stepIcon: step1,
        stepText: "Posicione o dispositivo na altura dos olhos."
    },
    {
        id: 2,
        stepIcon: step2,
        stepText: "Procure um local iluminado para garantir a qualidade da captura."
    },
    {
        id: 3,
        stepIcon: step3,
        stepText: "Retire qualquer tipo de acessório. Boné, óculos, etc."
    }
]

const SendPictureIntro = () => {

    const [open, setOpen] = useState(false);
    const { setScreen } = useSendPhotoScreen()

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const submit = () => {
        setScreen(SCREEN_SEND_PHOTO)
    }

    return (
        <>
            <MobileView>
                <AppHeader avatar={avatarPic} avatarFullSize />
                <HeaderTitle>Vamos tirar uma foto?</HeaderTitle>
                <HeaderText>
                    Precisamos verificar a identidade do cliente! Siga as instruções abaixo ao preencher
                    o formulário:
                </HeaderText>
                <Steps steps={steps} />

                <div style={{ paddingBottom: 60 }}>
                    <Button handleClick={handleClick}>Continuar</Button>
                </div>
            </MobileView>

            <Web>
                <Content>
                    <WrapperTakePicture>
                        <Avatar src={avatarPic} />
                        <HeaderTitle>Validação do código</HeaderTitle>
                        <HeaderText>
                            Enviaremos um código de segurança para o cliente. Preencha seguindo as
                            intruções:
                        </HeaderText>

                        <Steps steps={steps} />
                    </WrapperTakePicture>

                    <Button handleClick={handleClick}>Continuar</Button>
                </Content>
            </Web>
            <Dialog
                open={open}
                title="Atenção"
                confirmButtonLabel="aceitar"
                cancelButtonLabel="voltar"
                onConfirm={submit}
                onCancel={handleClose}
                handleClose={handleClose}
            >
                Será necessário aceitar o acesso à câmera do dispositivo para realizarmos a
                próxima etapa.
            </Dialog>
        </>
    )
}

export default SendPictureIntro