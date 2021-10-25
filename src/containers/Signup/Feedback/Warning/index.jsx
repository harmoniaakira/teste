import Feedback from 'components/Feedback'
import { useBackToForm } from 'contexts/SignupContext'
import React from 'react'

const SignupWarning = () => {
    const backToForm = useBackToForm()
    return (
        <Feedback
            icon="WARNING"
            title="Ops! Confira os dados"
            text="Se o telefone utilizado pertence à loja/estabelecimento, alterar o telefone."
            btnTxt="Alterar"
            onclick={backToForm}
        />
    )
}

export default SignupWarning