import styled from 'styled-components'
import ArrowBack from '@material-ui/icons/ArrowBackIos';

export const SignupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: -35px;
`

export const SignupHeaderArrow = styled(ArrowBack)`
  color: #8E8E93;
  cursor: pointer;
`

export const SignupHeaderText = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: #636366;
  max-width: 280px;
`

export const WrapperFormSignup = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin-top: 60px;
    max-width: 600px;
  }
  ${({ $hide }) => $hide && 'display: none;'}
`