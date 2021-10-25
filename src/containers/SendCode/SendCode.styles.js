import styled from 'styled-components';

export const Content = styled.div`
  width: 518px;
  min-height: 170px;
  max-height: 928px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export const WrapperSendCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.img`
`

export const HeaderTitle = styled.h2`
  color: #222222;
  font-size: 20px;
  font-weight: 900;
  margin-top: 48px;

  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 45px;
  }
`

export const HeaderText = styled.p`
  color: #636363;
  max-width: 300px;
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

export const Flex = styled.div`
  display: flex;
`

export const Apagar = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 32px;
  justify-content: center;

  @media (min-width: 1440px) {
    position: absolute;
    bottom: 40px;
    transform: translate(-50%);
    left: 50%;
    width: max-content;
  }
`