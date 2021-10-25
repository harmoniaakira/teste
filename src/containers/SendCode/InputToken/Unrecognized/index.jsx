import CountDown from "components/CountDown";
import SendCodeAlterMethod from "containers/SendCode/AlterMethod";
import { SCREEN_SENDCODE_ALTER_SEND_METHOD, SCREEN_SENDCODE_INPUT_TOKEN_FAILED } from "containers/SendCode/constants";
import { useSendCodeScreen } from "contexts/SendCodeContext";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import InputToken from "..";
import { Resend, ResendInfo, ResendLink, ResendTime, Visibled } from "../InputToken.styles";

const InputTokenUnrecognized = () => {

    const [shouldRenderTimer, setShouldRenderTimer] = useState(false)
    const { screen, setScreen } = useSendCodeScreen()

    const generateStopTime = () => {
        return dayjs().add(1, 'm').unix()
    }

    useEffect(() => {
        if (screen === SCREEN_SENDCODE_INPUT_TOKEN_FAILED) {
            setShouldRenderTimer(true)
        }
    }, [screen])

    const RenderReSend = () => {
        return !shouldRenderTimer
            ? <ResendLink onClick={() => setScreen(SCREEN_SENDCODE_ALTER_SEND_METHOD)}> Reenviar Código de validação </ResendLink>
            : (
                <Resend>
                    <ResendInfo>Você poderá reenviar o código em:</ResendInfo>
                    <ResendTime>
                        <CountDown stopTime={generateStopTime()} onFinish={() => setShouldRenderTimer(false)} />
                        <div
                            aria-hidden="true"
                            role="button"
                            tabIndex={0}
                            onClick={() => setShouldRenderTimer(false)}
                            style={{ padding: 8, marginTop: 8, background: 'orangered', color: '#fff', borderRadius: 4, cursor: 'pointer' }}>
                            Zerar counter
                        </div>
                    </ResendTime>
                </Resend>
            )
    }

    return (
        <>
            <Visibled $visibility={screen === SCREEN_SENDCODE_INPUT_TOKEN_FAILED}>
                <InputToken
                    title="Validação não reconhecida"
                    text="Digite novamente ou gere um novo código e reenvie via SMS para o número: (34) 99191-9091"
                    error
                >
                    <RenderReSend />
                </InputToken>
            </Visibled>
            <Visibled $visibility={screen === SCREEN_SENDCODE_ALTER_SEND_METHOD}>
                <SendCodeAlterMethod />
            </Visibled>
        </>
    )
}

export default InputTokenUnrecognized