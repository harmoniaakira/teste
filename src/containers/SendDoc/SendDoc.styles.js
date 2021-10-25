import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    width: 310px;
    padding: 28px 0 40px;
    margin: auto;
    max-width: 360px;

    text-align: center;
`

export const SendDocHeaderTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #222222;

    margin-bottom: 11px;
`

export const SendDocHeaderText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #636366;
`

export const ActionsRow = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 20px auto;
`

export const ActionBtn = styled(Button)`
    color: #054375;
    border: 1px solid #084472;
    background: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.5px;   

    width: 90px;
    height: 46px;
    
    &.Mui-disabled { 
        border: 1px solid #B0BEC5;
        color: #B0BEC5;
    }
    .MuiButton-label { text-transform: none; }

    ${({ $active }) => $active && `
        background: #054375;
        color: #fff;

        pointer-events: none;

        // &:hover {
        //     background: #054375;
        //     color: #fff;
        // }
    `}
`

export const MobileContainer = styled.div`
    height: calc(100vh - 56px);
    text-align: center;
    ${({ $background }) => `background: ${$background||'rgba(0, 0, 0, 0.7)'};` }
`

export const MobileContainerWrapper = styled.div`
    max-width: 280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 0 40px;
    height: 100%;

    gap: 22px;

    & > button {
        margin-top: auto;
    }
    
`

export const MobileConfirmWrapper = styled.div`
    max-width: 280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 0 40px;
    height: 100%;
`

export const TextBtn = styled(Button)`
    font-weight: bold;
    font-size: 12px;
    line-height: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #084472;

    margin-top: 34px;
`

export const DashBox = styled.div`
    border: 3px dashed #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;

    width: 260px;
    height: 350px;
    background: orangered;
`