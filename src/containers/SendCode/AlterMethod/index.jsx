import { MenuItem } from '@material-ui/core'
import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import { StyledArrowDown, StyledFormControl, StyledInput, StyledSelect, SytledInputLabel } from 'components/StyledUI/StyledUI.styles'
import Web from 'components/Web'
import { useSendCodeScreen } from 'contexts/SendCodeContext'
import React, { useState } from 'react'
import { maskPhone } from 'utils/maskPhone'
import { SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN, SCREEN_SENDCODE_INPUT_TOKEN_FAILED } from '../constants'
import { ArrowBack, Body, BodyText, BodyTitle, Header, HeaderTitle, WrapperInput } from './AlterMethod.styles'

const SendCodeAlterMethod = () => {

    const { setScreen } = useSendCodeScreen()

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleBackToToken = () => {
        setScreen(SCREEN_SENDCODE_INPUT_TOKEN_FAILED)
    }

    const handlePhoneNumberChange = (event) => {
        const { value } = event.target
        if (value.length > 15) return
        setPhoneNumber(value)
    }

    const handleSendNewCode = () => {
        setScreen(SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN)
    }

    const RenderBody = (
        <Body>
            <BodyTitle>O método informado está correto?</BodyTitle>
            <BodyText>
                Verifique se a informação abaixo está correta ou selecione um novo método de envio.
                O novo código será enviado para ele:
            </BodyText>

            <WrapperInput>
                <StyledInput
                    label="Informe um número de celular válido"
                    fullWidth
                    onChange={handlePhoneNumberChange}
                    value={maskPhone(phoneNumber)}
                />
            </WrapperInput>

            <WrapperInput>
                <StyledFormControl>
                    <SytledInputLabel id="select-sending-method">Escolha por onde enviar o código</SytledInputLabel>
                    <StyledSelect
                        labelId="select-sending-method"
                        IconComponent={StyledArrowDown}
                        style={{ minWidth: 312 }}
                    >
                        <MenuItem value={10}>SMS</MenuItem>
                        <MenuItem value={20} disabled>E-mail</MenuItem>
                        <MenuItem value={30} disabled>WhatsApp</MenuItem>
                    </StyledSelect>
                </StyledFormControl>
            </WrapperInput>

            <Button handleClick={handleSendNewCode}>Reenviar código</Button>
        </Body>
    )


    return (
        <>
            <MobileView>
                <Header onClick={handleBackToToken}>
                    <ArrowBack />
                    <HeaderTitle>
                        Reenviar Código
                    </HeaderTitle>
                </Header>
                {RenderBody}
            </MobileView>
            <Web>
                {RenderBody}
            </Web>
        </>
    )
}

export default SendCodeAlterMethod