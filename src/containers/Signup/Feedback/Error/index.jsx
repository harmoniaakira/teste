import React from 'react'
import { useBackToForm } from 'contexts/SignupContext'
import Feedback from 'components/Feedback'

const SignupError = () => {
    const backToForm = useBackToForm()

    return (
        <Feedback
            icon="ERROR"
            title="Ops! Confira os dados"
            text="Confirme se a Data de Nascimento e o número de telefone estão corretos. Caso não esteja, realize a alteração."
            btnTxt="Alterar"
            onclick={backToForm}
        />
    )
}

export default SignupError