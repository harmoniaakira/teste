import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { DialogActionsBetween, DialogBtn, StyledDialog } from 'components/StyledUI/StyledUI.styles';
import { useSendDocDialog, useSendDocScreen } from 'contexts/SendDocContext';
import React from 'react';
import { SCREEN_SENDDOC_PRINT_FRONT } from '../constants';

const SendDocDialog = () => {

    const { isDialogSendDocOpen, setIsDialogSendDocOpen } = useSendDocDialog()
    const { setScreen } = useSendDocScreen()

    const handlePrintDoc = () => {
        setIsDialogSendDocOpen(false)
        setScreen(SCREEN_SENDDOC_PRINT_FRONT)
    }

    const handleClose = () => {
        setIsDialogSendDocOpen(false)
    }

    return (
        <StyledDialog
            open={isDialogSendDocOpen}
            onClose={handleClose}
        >
            <DialogTitle>Atenção</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Será necessário aceitar o acesso à câmera do dispositivo para realizarmos a próxima etapa.
                </DialogContentText>
            </DialogContent>
            <DialogActionsBetween>
                <DialogBtn onClick={handleClose}>
                    Voltar
                </DialogBtn>
                <DialogBtn onClick={handlePrintDoc}>
                    Continuar
                </DialogBtn>
            </DialogActionsBetween>
        </StyledDialog>
    )
}

export default SendDocDialog