import styled from "styled-components";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export const Header = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #C4C4C4;
    position: relative;
`

export const HeaderTitle = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.5px;
    text-transform: uppercase;

    color: #8E8E93;
    width: 100%;
`

export const ArrowBack = styled(NavigateBeforeIcon)`
    height: 40px;
    width: 40px;
    color: #054375;
    cursor: pointer;
    position: absolute;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    
    height: calc(100vh - 56px);
    max-width: 320px;
    
    padding: 25px 0 40px;
    margin: auto;

    & > button { 
        margin-top: auto;
        align-self: center;
    }

    @media (min-width:1440px) {
        padding: 100px;
        height: 100%;
        width: 520px;
        max-width: unset;
        position: relative;
        justify-content: center;
        & > button {
          position: absolute;
          right: -60px;
          bottom: 60px;
        }
      }
`

export const BodyTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #222222;
`

export const BodyText = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #636366;
    margin-top: 15px;
`

export const WrapperInput = styled.div`
    margin-top: 24px;
`