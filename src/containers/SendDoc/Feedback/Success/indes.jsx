import React from 'react'
import { useHistory } from 'react-router'
import Feedback from 'components/Feedback'

const SendDocSuccess = () => {

    const history = useHistory()

    const handleGoTo = () => {
        history.push('/onboarding-pf-frontend/');
    }
    return (
        <Feedback
            icon="SUCCESS"
            title="Foto carregada com sucesso!"
            text="Agora vamos seguir para a próxima etapa. Falta pouco. :)"
            btnTxt="Continuar"
            onclick={handleGoTo}
        />
    )
}

export default SendDocSuccess