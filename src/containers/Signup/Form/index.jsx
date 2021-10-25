import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import Button from 'components/Button';
import { StyledCheckbox } from 'components/StyledCheckbox/StyledCheckbox.styles';
import { isValidDate } from 'utils/isValidDate';
import { isValidEmail } from 'utils/isValidEmail';
import { maskCpf } from 'utils/maskCpf';
import { maskDate } from 'utils/maskDate';
import { maskPhone } from 'utils/maskPhone';
import { isValidCpf } from 'utils/isValidCpf';
import { useCreditProposal } from 'contexts/SignupContext';
import { StyledArrowDown, StyledInput, StyledSelect, StyledSwitch, SytledInputLabel } from 'components/StyledUI/StyledUI.styles';
import { CheckCredit, CheckCreditConfirm, CheckCreditText, CheckPermissions, CheckPermissionsText, CheckPermissionsTitle, CheckWhatsapp, CheckWrapper, Container, Info, Row } from './FormSignup.styles';

const FormSignup = () => {
    const { setFillCreditProposal } = useCreditProposal()
    const [confirmCreditAnalysis, setConfirmCreditAnalysis] = useState(false)
    const [birthdayDate, setBirthdayDate] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState(null)

    const handleInputEvent = (event, maxLength, currState) => {
        const { value } = event.target
        if (value.length > maxLength) return currState
        return value
    }

    const handleBirthdayDateChange = (event) => {
        const value = handleInputEvent(event, 10, birthdayDate)
        setBirthdayDate(value)
    }

    const handlePhoneNumberChange = (event) => {
        const value = handleInputEvent(event, 15, phoneNumber)
        setPhoneNumber(value)
    }

    const handleCpfChange = (event) => {
        const value = handleInputEvent(event, 14, cpf)
        setCpf(value)
    }

    const handleCpfErrors = () => {
        if (isValidCpf(cpf) || cpf === null) {
            return ""
        }
        if (!isValidCpf(cpf)) {
            if (cpf.trim().length === 0) return "CPF não informado"
            return "CPF Inválido"
        }
        return ""
    }

    const handleRequestProposal = () => {
        // TODO: validar com api
        setFillCreditProposal(true)
    }

    return (
        <Container>
            <StyledInput
                error={!isValidCpf(cpf)}
                helperText={handleCpfErrors()}
                value={maskCpf(cpf)}
                onChange={handleCpfChange}
                label="CPF"
                placeholder="000.000.000-00"
                $placeholderghost
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <StyledInput
                label="Data de nascimento igual à identidade"
                fullWidth
                value={maskDate(birthdayDate)}
                onChange={handleBirthdayDateChange}
                error={isValidDate(birthdayDate).length > 0}
                helperText={isValidDate(birthdayDate)}
            />

            <StyledInput
                label="Informe um número de celular válido"
                fullWidth
                onChange={handlePhoneNumberChange}
                value={maskPhone(phoneNumber)}
            />

            <CheckWhatsapp>
                Este número de celular possui WhatsApp?
                <StyledSwitch />
            </CheckWhatsapp>

            <StyledInput
                label="Coloque aqui o e-mail principal do cliente"
                fullWidth
                error={!isValidEmail(email)}
                helperText={`${!isValidEmail(email) ? "E-mail inválido." : ""}`}
                onBlur={(e) => setEmail(e.target.value)}
            />
            <FormControl>
                <SytledInputLabel id="select-special-needs">Possui necessidade especial? </SytledInputLabel>
                <StyledSelect
                    labelId="select-special-needs"
                    IconComponent={StyledArrowDown}
                >
                    <MenuItem value={10}>Não</MenuItem>
                    <MenuItem value={20}>Dificuldade de visão</MenuItem>
                    <MenuItem value={30}>Dificuldade de audição e/ou fala</MenuItem>
                    <MenuItem value={40}>Limitações motoras</MenuItem>
                </StyledSelect>
            </FormControl>

            <CheckWrapper>
                <CheckPermissions>
                    <CheckPermissionsTitle> Aceites e permissões </CheckPermissionsTitle>
                    <CheckPermissionsText>
                        Para continuar, garanta que o cliente está ciente das opções abaixo.
                    </CheckPermissionsText>
                </CheckPermissions>


                <CheckCredit>
                    <CheckCreditConfirm>
                        Consulta sistemas de analise crédito
                        <StyledCheckbox
                            $colorone="#FFFFFF"
                            $colortwo="#757575"
                            color="primary"
                            checkedIcon={<CheckBoxTwoToneIcon />}
                            value={confirmCreditAnalysis}
                            onChange={() => setConfirmCreditAnalysis(!confirmCreditAnalysis)}
                        />
                    </CheckCreditConfirm>

                    <CheckCreditText>
                        Informe o cliente que ao fazer a consulta de dados no Banco Central,
                        sua condição de crédito poderá melhorar e isso facilitará na análise da proposta.
                    </CheckCreditText>
                </CheckCredit>
            </CheckWrapper>

            <Row>
                <Info />

                <Button disabled={!confirmCreditAnalysis} handleClick={handleRequestProposal}>
                    Continuar
                </Button>
            </Row>
        </Container>
    )
}

export default FormSignup