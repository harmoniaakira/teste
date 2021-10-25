import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';
import { SCREEN_SENDDOC_INTRO } from 'containers/SendDoc/constants';

const SendDocContext = createContext({
    isDialogSendDocOpen: false,
    setIsDialogSendDocOpen: () => null,
    screen: SCREEN_SENDDOC_INTRO,
    setScreen: () => null
});

const SendDocProvider = ({ children }) => {
    const [isDialogSendDocOpen, setIsDialogSendDocOpen] = useState(false)
    const [screen, setScreen] = useState(SCREEN_SENDDOC_INTRO)

    return (
        <SendDocContext.Provider value={{ isDialogSendDocOpen, setIsDialogSendDocOpen, screen, setScreen }}>
            {children}
        </SendDocContext.Provider>
    )
}

export function useSendDocDialog() {
    const { isDialogSendDocOpen, setIsDialogSendDocOpen } = useContext(SendDocContext)
    return {
        isDialogSendDocOpen,
        setIsDialogSendDocOpen
    }
}

export function useSendDocScreen() {
    const { screen, setScreen } = useContext(SendDocContext)
    return {
        screen,
        setScreen
    }
}

export default SendDocProvider

SendDocProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}