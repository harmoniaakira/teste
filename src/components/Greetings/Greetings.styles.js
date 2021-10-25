import styled from 'styled-components'

export const GreetingsTitle = styled.h2`
  color: #222222;
  font-size: 20px;
  font-weight: 900;
  margin-top: 48px;

  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 45px;
  }
`

export const GreetingsText = styled.p`
  color: #636363;
  max-width: 318px;
  margin: 0 auto;
  letter-spacing: 0.2px;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 1440px) {
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0;
    max-width: 365px;
  }
`
