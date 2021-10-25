
import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import Web from 'components/Web'
import { useSendCodeScreen } from 'contexts/SendCodeContext'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN } from '../constants'
import { Form, Input, InputTokenInvalid, InputTokenText, InputTokenTitle, InputWrapper } from './InputToken.styles'

const InputToken = ({ title, text, children, error }) => {
    const { setScreen } = useSendCodeScreen()
    const webInput0 = React.useRef(null);
    const webInput1 = React.useRef(null);
    const webInput2 = React.useRef(null);
    const webInput3 = React.useRef(null);
    const mobileInput0 = React.useRef(null);
    const mobileInput1 = React.useRef(null);
    const mobileInput2 = React.useRef(null);
    const mobileInput3 = React.useRef(null);
    const [inputVal0, setInputVal0] = useState("")
    const [inputVal1, setInputVal1] = useState("")
    const [inputVal2, setInputVal2] = useState("")
    const [inputVal3, setInputVal3] = useState("")

    const handleClick = () => {
        setScreen(SCREEN_SENDCODE_FEEDBACK_ANALYZING_TOKEN)
    }

    const finalInput = () => {
        const str = `${inputVal0}${inputVal1}${inputVal2}${inputVal3}`
        return str
    }

    const focusNextInput = (event, ref, setVal) => {
        if (!event.target.value) setVal(event.target.value)
        if (!/[0-9]/.test(event.target.value)) {
            event.preventDefault();
            return
        }
        setVal(event.target.value)
        if (ref && event.target.value) {
            ref.current.focus();
            ref.current.select();
        }
    }

    const focusPrevInput = (event, ref) => {
        const { key } = event
        if (key === "Backspace" && ref && event.target.value.length === 0) {
            if (ref.current.value.length > 0) {
                event.preventDefault();
            }
            ref.current.select();
        }
    }

    return (
        <>
            <MobileView>
                <Stepper />

                <InputWrapper>
                    <InputTokenTitle>{title}</InputTokenTitle>
                    <InputTokenText>{text}</InputTokenText>
                    <Form $error={error}>
                        <Input
                            ref={mobileInput0}
                            maxLength="1"
                            onKeyDown={focusPrevInput}
                            onChange={(e) => focusNextInput(e, mobileInput1, setInputVal0)}
                            value={inputVal0}
                            key="mobileInput0"
                        />
                        <Input
                            ref={mobileInput1}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, mobileInput0)}
                            onChange={(e) => focusNextInput(e, mobileInput2, setInputVal1)}
                            value={inputVal1}
                            key="mobileInput1"
                        />
                        <Input
                            ref={mobileInput2}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, mobileInput1)}
                            onChange={(e) => focusNextInput(e, mobileInput3, setInputVal2)}
                            value={inputVal2}
                            key="mobileInput2"
                        />
                        <Input
                            ref={mobileInput3}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, mobileInput2)}
                            onChange={(e) => focusNextInput(e, null, setInputVal3)}
                            value={inputVal3}
                            key="mobileInput3"
                        />
                        {error && <InputTokenInvalid>
                            Código inválido
                        </InputTokenInvalid>}
                    </Form>
                    {children}
                    <Button handleClick={handleClick} disabled={finalInput().length < 4}>
                        Confirmar código
                    </Button>
                </InputWrapper>

            </MobileView>

            <Web>
                <InputWrapper>
                    <InputTokenTitle>{title}</InputTokenTitle>
                    <InputTokenText>{text}</InputTokenText>
                    <Form $error={error}>
                        <Input
                            ref={webInput0}
                            maxLength="1"
                            onKeyDown={focusPrevInput}
                            onChange={(e) => focusNextInput(e, webInput1, setInputVal0)}
                            value={inputVal0}
                            key="webInput0"
                        />
                        <Input
                            ref={webInput1}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, webInput0)}
                            onChange={(e) => focusNextInput(e, webInput2, setInputVal1)}
                            value={inputVal1}
                            key="webInput1"
                        />
                        <Input
                            ref={webInput2}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, webInput1)}
                            onChange={(e) => focusNextInput(e, webInput3, setInputVal2)}
                            value={inputVal2}
                            key="webInput2"
                        />
                        <Input
                            ref={webInput3}
                            maxLength="1"
                            onKeyDown={(e) => focusPrevInput(e, webInput2)}
                            onChange={(e) => focusNextInput(e, null, setInputVal3)}
                            value={inputVal3}
                            key="webInput3"
                        />
                        {error && <InputTokenInvalid>
                            Código inválido
                        </InputTokenInvalid>}
                    </Form>
                    {children}
                    <Button handleClick={handleClick} disabled={finalInput().length < 4}>
                        Confirmar código
                    </Button>
                </InputWrapper>
            </Web>
        </>
    )
}

InputToken.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    error: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
}

InputToken.defaultProps = {
    children: null,
    error: false
}

export default InputToken
