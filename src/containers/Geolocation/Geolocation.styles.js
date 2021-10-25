import styled from 'styled-components'

export const GeoContainer = styled.div`
  @media (max-width: 1439px) {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
    text-align: center;
  }
`

export const GeoMobileView = styled.div`
  height: 100%;
  width: 100%;
  max-width: 768px;
  
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  @media (min-width: 1440px) {
    display: none;
  }
`

export const Flexgrow = styled.div`
  flex: 1 1 auto;
`

export const MobileCheck = styled.div`
  display: flex;
  gap: 5px;
  max-width: 318px;
  margin: auto;

  @media (min-width: 1440px) {
    gap: 0;
    margin: 0;
    max-width: 380px;
  }
`

export const MobileCheckLabel = styled.div`
  color: #636366;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
`

export const Content = styled.div`
  width: 518px;
  min-height: 170px;
  max-height: 928px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  @media (min-width: 1440px) {
    width: unset;
  }
`

export const Info = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  margin-right: 50px;
`

export const Title = styled.h2`
  color: #222222;
  font-size: 20px;
  font-weight: 900;
  margin-top: 48px;
  line-height: 28px;
`

export const Text = styled.p`
  color: #636363;
  max-width: 318px;
  margin: ${props => props.centered ? "0 auto" : "0"};
  letter-spacing: 0.2px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 30px;

  @media (min-width: 1440px) {
    max-width: 368px;
  }
`

export const FootNote = styled.p`
  color: #222222;
  letter-spacing: 0.2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 46px;
  margin-bottom: 80px;
  width: 308px;
  margin: auto;
  text-align: left;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin: 0 0 90px 0;
  }
`