import React from 'react'
import { useToggleDialog } from 'contexts/StepperContext'
import Dialog from 'components/Dialog'

const DialogSignup = () => {
    const { isDialogOpen, setIsDialogOpen } = useToggleDialog()

    const handleClose = () => {
        setIsDialogOpen(false)
    }

    return (
        <Dialog
            open={isDialogOpen}
            title="Preenchimento de dados"
            confirmButtonLabel="voltar"
            onConfirm={handleClose}
            handleClose={handleClose}
            fullScreen
        >
            <strong>CPF</strong><br />
            Insira somente os 11 dígitos do CPF do cliente. Ex.: 000.000.000-00
            <br /><br />
            <strong>Data de Nascimento</strong><br />
            <span>Preencha a Data de Nascimento do cliente, igual ao do documento de identificação. Ex.: 00/00/0000</span>
            <br /><br />
            <strong>Número de Celular válido</strong><br />
            <span>É necessário informar um número de celular válido. Ex.: (00) 00000-0000</span>
            <br /><br />
            <strong>E-mail principal válido</strong><br />
            <span>Importante informar o e-mail principal que é utilizado e também que seja válido. Ex.: contatodamaria@gmail.com</span>
        </Dialog>
    )
}

export default DialogSignup