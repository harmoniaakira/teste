import React from 'react'
import Feedback from 'components/Feedback'
import { useSendDocScreen } from 'contexts/SendDocContext'
import { SCREEN_SENDDOC_PRINT_FRONT } from 'containers/SendDoc/constants'

const SendDocError = () => {

    const { setScreen } = useSendDocScreen()

    const handleGoTo = () => {
        setScreen(SCREEN_SENDDOC_PRINT_FRONT)
    }
    return (
        <Feedback
            icon="WARNING"
            title="Atenção Não foi possível fotografar"
            text="Tente registrar o documento seguindo as orientações informadas para termos uma boa foto. :)"
            btnTxt="Tirar nova foto"
            onclick={handleGoTo}
        />
    )
}

export default SendDocError