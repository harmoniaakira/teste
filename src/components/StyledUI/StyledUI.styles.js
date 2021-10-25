import styled from 'styled-components'
import { InputLabel, Select, FormControl, Button, DialogActions, Dialog } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

export const StyledArrowBack = styled(NavigateBeforeIcon)`
    height: 40px;
    width: 40px;
    color: #054375;
    cursor: pointer;
    position: absolute;
`

export const StyledArrowDown = styled(KeyboardArrowDownIcon)`
    color: #054375;
`

export const StyledSelect = styled(Select)`
    .MuiSelect-select:focus { background-color: inherit;}
    &.Mui-focused::after { border-bottom-color: #054375; }
`

export const SytledInputLabel = styled(InputLabel)`
    &.Mui-focused { color: #054375; }
`

export const StyledFormControl = styled(FormControl)`
    &.Mui-focused { color: #054375; }
    .MuiSelect-select.MuiSelect-select { padding-left: 12px; }
    display: block;
    max-width: 312px;
    text-align: start;

    @media (min-width: 1440px) {
      margin: 0;
    }
`

export const StyledInput = styled(TextField)`
    .MuiInputBase-input { padding-left: 12px; }
    .MuiFormLabel-root:not(.Mui-error) { color: #8E8E93; }
    .MuiFormLabel-root.Mui-focused:not(.Mui-error) { color: #054375; }
    .MuiInput-underline.Mui-focused:not(.Mui-error)::after { border-bottom-color: #054375; }
    .MuiInput-underline:hover:not(.Mui-disabled)::before { border-bottom: 1px solid rgba(0, 0, 0, 0.42); }
    ${({ $placeholderghost }) => `
        .MuiInputBase-input::placeholder {
            opacity: 1;
            font-size: 15px;
            ${$placeholderghost
      ? 'color: #B0BEC5;'
      : 'color: #8E8E93;'
    }
        }
    `}
`

export const StyledSwitch = styled(Switch)`
    .MuiSwitch-track, .Mui-checked + .MuiSwitch-track { background-color: #E0E0E0; opacity: 1; }
    .Mui-checked { color: #054375;}
`

export const StyledDialog = styled(Dialog)`
  @media (max-width:1439px) {
    .MuiDialog-paper {
      width: 77vw;
      max-width: 510px;
      min-width: 275px;
    }
  }
`

export const DialogBtn = styled(Button)`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.75px;
  font-weight: 500;
  color: #054375;
  &:hover {
    background-color: rgb(5 67 117 / 6%);
  }  
`

export const DialogActionsBetween = styled(DialogActions)`
  justify-content: space-between;
  padding: 8px 24px;
`