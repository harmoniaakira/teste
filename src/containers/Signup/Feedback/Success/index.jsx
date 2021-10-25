import React from 'react'
import { useHistory } from 'react-router'
import Feedback from 'components/Feedback'

const SignupSuccess = () => {

    const history = useHistory()

    const handleGoToSendCode = () => {
        history.push('/onboarding-pf-frontend/envio-de-codigo');
    }
    return (
        <Feedback
            icon="SUCCESS"
            title="Dados verificados com sucesso!"
            text="Agora seu cliente receberá um token para validar o celular informado. ;) "
            btnTxt="Continuar"
            onclick={handleGoToSendCode}
        />
    )
}

export default SignupSuccess