import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';
import { SCREEN_SENDCODE_INTRO } from 'containers/SendCode/constants';

const SendCodeContext = createContext({
    isDialogSendCodeOpen: false,
    setIsDialogSendCodeOpen: () => null,
    screen: SCREEN_SENDCODE_INTRO,
    setScreen: () => null
});

const SendCodeProvider = ({ children }) => {
    const [isDialogSendCodeOpen, setIsDialogSendCodeOpen] = useState(false)
    const [screen, setScreen] = useState(SCREEN_SENDCODE_INTRO)

    return (
        <SendCodeContext.Provider value={{ isDialogSendCodeOpen, setIsDialogSendCodeOpen, screen, setScreen }}>
            {children}
        </SendCodeContext.Provider>
    )
}

export function useSendCodeDialog() {
    const { isDialogSendCodeOpen, setIsDialogSendCodeOpen } = useContext(SendCodeContext)
    return {
        isDialogSendCodeOpen,
        setIsDialogSendCodeOpen
    }
}

export function useSendCodeScreen() {
    const { screen, setScreen } = useContext(SendCodeContext)
    return {
        screen,
        setScreen
    }
}

export default SendCodeProvider

SendCodeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}