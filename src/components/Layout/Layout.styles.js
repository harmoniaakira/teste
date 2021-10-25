import styled from "styled-components"

export const MobileView = styled.div`
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 768px;
  background: #fff;
  min-height: 100vh;
  ${({ $padding }) => $padding && `padding: ${$padding};`}

  @media (min-width: 1440px) {
      display: none;
  }
`

export const MobileHeader = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #C4C4C4;
    position: relative;
`

export const MobileHeaderTitle = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.5px;
    text-transform: uppercase;

    color: #8E8E93;
    width: 100%;

    text-align: center;
`

export const WebView = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 30px;
    background-color: #fff;
    // max-width: 1600px;
  }
`

export const Column = styled.div`
  position: relative;
  overflow-y: auto;
  height: 100vh;
`

export const ContainerPage = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media (min-width: 1440px) {
    // max-width: 1800px;
    margin: 0 auto;
    text-align: unset;  
  }
`

export const FlexColumn = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`