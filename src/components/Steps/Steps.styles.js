import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px auto 90px auto;
  width: 312px;

  @media (min-width: 1440px) {
    margin: 40px 0 90px 0;
  }
`

export const Step = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 20px;
`

export const StepIcon = styled.img`
  margin-right: 16px;
`

export const StepText = styled.p`
  color: #636363;
  max-width: 318px;
  letter-spacing: 0.2px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 1440px) {
    margin: 0;
  }
`