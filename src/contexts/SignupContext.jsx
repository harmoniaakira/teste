import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

const SignupContext = createContext({
    fillCreditProposal: false,
    setFillCreditProposal: () => null,
    statusProposal: null,
    setStatusProposal: () => null
});

const SignupProvider = ({ children }) => {
    const [fillCreditProposal, setFillCreditProposal] = useState(false)
    const [statusProposal, setStatusProposal] = useState(null)

    return (
        <SignupContext.Provider value={{ fillCreditProposal, setFillCreditProposal, statusProposal, setStatusProposal }}>
            {children}
        </SignupContext.Provider>
    )
}

export function useCreditProposal() {
    const { fillCreditProposal, setFillCreditProposal } = useContext(SignupContext)
    return {
        fillCreditProposal,
        setFillCreditProposal
    }
}

export function useStatusProposal() {
    const { statusProposal, setStatusProposal } = useContext(SignupContext)
    return {
        statusProposal,
        setStatusProposal
    }
}

export function useBackToForm() {
    const { setFillCreditProposal, setStatusProposal } = useContext(SignupContext)
    const backToForm = () => {
        setFillCreditProposal(false)
        setStatusProposal(null)
    }
    return backToForm
}


export default SignupProvider

SignupProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}