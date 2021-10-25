import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';
import { 
    SCREEN_SEND_PHOTO_INTRO,
    SCREEN_SEND_PHOTO
 } from 'containers/SendPhoto/constants';

const SendPhotoContext = createContext({
    isDialogSendPhotoOpen: false,
    setIsDialogSendPhotoOpen: () => null,
    screen: SCREEN_SEND_PHOTO_INTRO,
    setScreen: () => null
});

const SendPhotoProvider = ({ children }) => {
    const [isDialogSendPhotoOpen, setIsDialogSendPhotoOpen] = useState(false)
    const [screen, setScreen] = useState(SCREEN_SEND_PHOTO)

    return (
        <SendPhotoContext.Provider value={{ isDialogSendPhotoOpen, setIsDialogSendPhotoOpen, screen, setScreen }}>
            {children}
        </SendPhotoContext.Provider>
    )
}

export function useSendPhotoDialog() {
    const { isDialogSendPhotoOpen, setIsDialogSendPhotoOpen } = useContext(SendPhotoContext)
    return {
        isDialogSendPhotoOpen,
        setIsDialogSendPhotoOpen
    }
}

export function useSendPhotoScreen() {
    const { screen, setScreen } = useContext(SendPhotoContext)
    return {
        screen,
        setScreen
    }
}

export default SendPhotoProvider

SendPhotoProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}