import { MenuItem } from '@material-ui/core'
import avatar from 'assets/images/SendCodeView/avatar.png'
import step1 from 'assets/images/SendCodeView/step1.svg'
import step2 from 'assets/images/SendCodeView/step2.svg'
import step3 from 'assets/images/SendCodeView/step3.svg'
import AppHeader from 'components/AppHeader'
import Steps from 'components/Steps'
import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import { StyledArrowDown, StyledFormControl, StyledSelect, SytledInputLabel } from 'components/StyledUI/StyledUI.styles'
import Web from 'components/Web'
import { useSendCodeDialog } from 'contexts/SendCodeContext'
import React from 'react'
import SendCodeDialog from '../Dialog'
import { Avatar, Content, HeaderText, HeaderTitle, WrapperSendCode } from '../SendCode.styles'

const steps = [
    {
        id: 1,
        stepIcon: step1,
        stepText: "Selecione o método de envio"
    },
    {
        id: 2,
        stepIcon: step2,
        stepText: "Envie e verifique se o cliente recebeu o código no método solicitado"
    },
    {
        id: 3,
        stepIcon: step3,
        stepText: "Digite o código corretamente"
    }
]

const SendCodeIntro = () => {

    const { setIsDialogSendCodeOpen } = useSendCodeDialog()

    const handleClick = () => {
        setIsDialogSendCodeOpen(true)
    }

    return (
        <>
            <MobileView>
                <AppHeader avatar={avatar} />
                <HeaderTitle>Validação do código</HeaderTitle>
                <HeaderText>
                    Enviaremos um código de segurança para o cliente. Preencha seguindo as
                    intruções:
                </HeaderText>
                <Steps steps={steps} />

                <StyledFormControl style={{ margin: '0 auto' }}>
                    <SytledInputLabel id="select-sending-method">Escolha por onde enviar o código</SytledInputLabel>
                    <StyledSelect
                        labelId="select-sending-method"
                        IconComponent={StyledArrowDown}
                        style={{ minWidth: 312, marginBottom: 60 }}
                    >
                        <MenuItem value={10}>SMS</MenuItem>
                        <MenuItem value={20}>E-mail</MenuItem>
                        <MenuItem value={30}>WhatsApp</MenuItem>
                    </StyledSelect>
                </StyledFormControl>
                <div style={{ paddingBottom: 60 }}>
                    <Button handleClick={handleClick}>Enviar código</Button>
                </div>
            </MobileView>

            <Web>
                <Content>
                    <WrapperSendCode>
                        <Avatar src={avatar} />
                        <HeaderTitle>Validação do código</HeaderTitle>
                        <HeaderText>
                            Enviaremos um código de segurança para o cliente. Preencha seguindo as
                            intruções:
                        </HeaderText>
                        
                        <Steps steps={steps} />

                        <StyledFormControl>
                            <SytledInputLabel id="select-sending-method">Possui necessidade especial? </SytledInputLabel>
                            <StyledSelect
                                labelId="select-sending-method"
                                IconComponent={StyledArrowDown}
                                style={{ minWidth: 312, marginBottom: 60 }}
                            >
                                <MenuItem value={10}>SMS</MenuItem>
                                <MenuItem value={20}>E-mail</MenuItem>
                                <MenuItem value={30}>WhatsApp</MenuItem>
                            </StyledSelect>
                        </StyledFormControl>
                    </WrapperSendCode>

                    <Button handleClick={handleClick}>Enviar código</Button>
                </Content>
            </Web>
            <SendCodeDialog />
        </>
    )
}

export default SendCodeIntro