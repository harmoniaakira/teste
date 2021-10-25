import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { DialogActionsBetween, DialogBtn } from 'components/StyledUI/StyledUI.styles';
import { useSendCodeDialog, useSendCodeScreen } from 'contexts/SendCodeContext';
import React, { useState } from 'react';
import { SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN } from '../constants';
import { Flex } from '../SendCode.styles';

const SendCodeDialog = () => {
    const [phase, setPhase] = useState(0)
    const { isDialogSendCodeOpen, setIsDialogSendCodeOpen } = useSendCodeDialog()
    const { setScreen } = useSendCodeScreen()

    const handleClose = () => {
        setPhase(0)
        setIsDialogSendCodeOpen(false)
    }

    const Content = () => {
        switch (phase) {
            default:
                return "Certifique-se que seu cliente está em posse do celular informado. Deseja seguir com o código de validação?"

            case 1:
                return "Sem a validação do código de segurança, a solicitação estará sujeita a análise diferenciada da proposta. Deseja seguir sem o código de segurança?"

            case 2:
                return "Você poderá continuar a partir dessa etapa quando o cliente estiver com o celular em mãos. ;)"
        }
    }

    const handleAppraiseToken = () => {
        setPhase(0)
        setIsDialogSendCodeOpen(false)
        setScreen(SCREEN_SENDCODE_FEEDBACK_SENDING_TOKEN)
    }

    const RenderBtns = () => {
        switch (phase) {
            default:
                return <>
                    <DialogBtn onClick={() => setPhase(1)}>
                        Voltar
                    </DialogBtn>
                    <DialogBtn onClick={handleAppraiseToken}>
                        Continuar
                    </DialogBtn>
                </>
            case 1:
                return <>
                    <DialogBtn onClick={() => setPhase(2)}>
                        Voltar
                    </DialogBtn>
                    <DialogBtn onClick={handleClose} disabled>
                        Continuar
                    </DialogBtn>
                </>
            case 2:
                return <>
                    <Flex />
                    <DialogBtn onClick={handleClose}>
                        Fechar
                    </DialogBtn>
                </>
        }
    }

    return (
        <Dialog
            open={isDialogSendCodeOpen}
            onClose={handleClose}
        >
            <DialogTitle>Atenção</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Content />
                </DialogContentText>
            </DialogContent>
            <DialogActionsBetween>
                <RenderBtns />
            </DialogActionsBetween>
        </Dialog>
    )
}

export default SendCodeDialog