import FeedbackLoader from "components/Feedback/WithLoader";
import { SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN, SCREEN_SENDCODE_INPUT_TOKEN } from "containers/SendCode/constants";
import { useSendCodeScreen } from "contexts/SendCodeContext";
import React, { useEffect } from "react";

const FeedbackSendToken = () => {

    // TODO Arrumar
    const { screen, setScreen } = useSendCodeScreen()
    useEffect(() => {
        if (screen === SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN) {
            setTimeout(() => { setScreen(SCREEN_SENDCODE_INPUT_TOKEN) }, 2000)
        }
        return () => null
    }, [])

    return (
        <FeedbackLoader
            title="Enviando Token de validação"
            text="Estamos enviando o código para o cliente, leva só alguns instantes. ;)"
        />
    )

}

export default FeedbackSendToken