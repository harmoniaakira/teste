import styled from 'styled-components';

export const Input = styled.input`
  width: 48px;
  height: 48px;
  border: 1px solid #8E8E93;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

export const Form = styled.div`
  margin: 40px auto;
  ${({ $error }) => $error && `
    ${Input} {
      outline: 2px solid #B00020;
    }
  `}
`

export const InputTokenTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
`

export const InputTokenText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 8px;
`

export const InputTokenInvalid = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #B00020;
  margin-top: 8px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 320px;
  justify-content: center;
  align-content: center;
  align-items: center;

  padding: 58px 0 40px;
  height: calc(100vh - 58px);
  & > button {
    margin-top: auto;
  }


  @media (min-width:1440px) {
    padding: 100px;
    height: 100%;
    width: 520px;
    position: relative;
    & > button {
      position: absolute;
      right: -60px;
      bottom: 60px;
    }
  }
`

export const Resend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ResendInfo = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #B0BEC5;
`

export const ResendTime = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #636366;
`

export const ResendLink = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #054375;
  cursor: pointer;
`

export const Visibled = styled.div`
  ${({ $visibility }) => !$visibility && "display: none;"}
`
