import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

const StepperContext = createContext({
    totalSteps: 4,
    setTotalSteps: () => null,
    currentStep: 1,
    setCurrentStep: () => null,
    isDialogOpen: false,
    setIsDialogOpen: () => null,
});

const StepperProvider = ({ children }) => {
    const [totalSteps, setTotalSteps] = useState(4)
    const [currentStep, setCurrentStep] = useState(1)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <StepperContext.Provider value={{ totalSteps, setTotalSteps, currentStep, setCurrentStep, isDialogOpen, setIsDialogOpen }}>
            {children}
        </StepperContext.Provider>
    )
}

export function useToggleDialog() {
    const { isDialogOpen, setIsDialogOpen } = useContext(StepperContext)
    return {
        isDialogOpen,
        setIsDialogOpen
    }
}

export function useChangeCurrStep() {
    const { currentStep, setCurrentStep } = useContext(StepperContext)
    return {
        currentStep,
        setCurrentStep
    }
}

export function useChangeTotalSteps() {
    const { totalSteps, setTotalSteps } = useContext(StepperContext)
    return {
        totalSteps,
        setTotalSteps
    }
}

export function useStepperContext() {
    const { totalSteps, currentStep, isDialogOpen, setTotalSteps, setCurrentStep, setIsDialogOpen } = useContext(StepperContext)
    return {
        totalSteps,
        currentStep,
        isDialogOpen,
        setTotalSteps,
        setCurrentStep,
        setIsDialogOpen
    }
}

export default StepperProvider

StepperProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}