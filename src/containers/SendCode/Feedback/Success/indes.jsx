import React from 'react'
import { useHistory } from 'react-router'
import Feedback from 'components/Feedback'

const TokenSuccess = () => {

    const history = useHistory()

    const handleGoTo = () => {
        history.push('/onboarding-pf-frontend/foto');
    }
    return (
        <Feedback
            icon="SUCCESS"
            title="Código verificado com sucesso!"
            text="Agora faremos uma verificação facial para confirmarmos a identidade do cliente. ;)"
            btnTxt="Continuar"
            onclick={handleGoTo}
        />
    )
}

export default TokenSuccess