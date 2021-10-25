import React, { memo, useEffect, useState } from 'react';
import { useStepperContext } from 'contexts/StepperContext';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import {
    ArrowBack, Info, MobileHeader, MobileHeaderStepper, MobileHeaderText, MobileHeaderTextStep, MobileHeaderTextTitle, MobileStepperContainer, Step, StepperText,
    Steps, WebStepperContainer
} from './Stepper.styles';


const Stepper = ({ infoCallback, arrowCallback }) => {
    const history = useHistory();
    const { totalSteps, currentStep, setCurrentStep } = useStepperContext()
    const [stepsArray, setStepsArray] = useState([]);

    const back = () => {
        if (typeof arrowCallback === "function") {
            arrowCallback()
        } else {
            history.goBack();
        }
    }

    const renderInfo = () => {
        if (typeof infoCallback === "function") {
            infoCallback()
        }
    }

    const renderTitleByStep = () => {
        switch (currentStep) {
            default:
            case 1:
                return 'Informações do Cliente'
            case 2:
                return 'Código Validação'
            case 3:
                return 'Prova de Vida'
            case 4:
                return 'Captura de Documento'
        }
    }

    const RenderSteps = () => (
        <Steps>
            {
                stepsArray.map((step) => {
                    return step;
                })
            }
        </Steps>
    )
    
    const handleUpdateCurrStep = (pathname) => {
        switch (pathname) {
            case "/onboarding-pf-frontend/":
            case "/onboarding-pf-frontend/cadastro":
            default:
                setCurrentStep(1)
                break;
            case "/onboarding-pf-frontend/envio-de-codigo":
                setCurrentStep(2)
                break;
            case "/onboarding-pf-frontend/foto":
                setCurrentStep(3)
                break;

            case "/onboarding-pf-frontend/envio-de-documento":
                setCurrentStep(4)
                break;
        }
    }

    useEffect(() => {
        const aux = [];
        for (let i = 1; i <= totalSteps; i++) {
            if (i === currentStep) {
                aux.push(<Step key={i} active />)
            } else if (i < currentStep) {
                aux.push(<Step key={i} done />)
            } else {
                aux.push(<Step key={i} />)
            }
        }
        setStepsArray(aux);
    }, [totalSteps, currentStep])

    useEffect(() => {
        const { location } = history
        handleUpdateCurrStep(location.pathname)
    }, [history])

    return <>
        <MobileStepperContainer>
            <MobileHeader>
                <ArrowBack onClick={back} />
                <MobileHeaderText>
                    <MobileHeaderTextTitle>{renderTitleByStep()}</MobileHeaderTextTitle>
                    <MobileHeaderTextStep> Etapa {currentStep} de {totalSteps} </MobileHeaderTextStep>
                </MobileHeaderText>
                <Info onClick={renderInfo} disabled={typeof infoCallback !== "function"} />
                <MobileHeaderStepper>
                    <RenderSteps />
                </MobileHeaderStepper>
            </MobileHeader>
        </MobileStepperContainer >
        <WebStepperContainer>
            <StepperText><strong>Etapa {currentStep} de {totalSteps}:</strong> Dados do cliente</StepperText>
            <RenderSteps />
        </WebStepperContainer>
    </>
}

Stepper.propTypes = {
    infoCallback: PropTypes.func,
    arrowCallback: PropTypes.func,

}

Stepper.defaultProps = {
    infoCallback: undefined,
    arrowCallback: undefined
}

export default memo(Stepper)