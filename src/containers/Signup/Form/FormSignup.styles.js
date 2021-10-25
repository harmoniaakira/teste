import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


export const CheckWhatsapp = styled.div`
    padding-left: 12px;
    
    display: flex;
    align-items: center;
    gap: 12px;

    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
`

export const CheckPermissions = styled.div`
    display: flex;
    flex-direction: column;
`

export const CheckPermissionsTitle = styled.div`
    color: #636366;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.5px;
`

export const CheckPermissionsText = styled.div`
    color: #222222;
    font-size: 12px;
    line-height: 16px;
`

export const CheckCredit = styled.div`
    display: flex;
    flex-direction: column;
`

export const CheckCreditConfirm = styled.div`
    display: flex;
    align-items: center;

    color: #636366;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
`

export const CheckCreditText = styled.div`
    margin-top: -5px;
    font-size: 12px;
    line-height: 16px;
    color: #222222;
`

export const CheckWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;

    @media (min-width: 1440px) {
        gap: 0;
        margin-top: 116px;
        margin-bottom: 12px;

        max-width: 480px;
        ${CheckCreditConfirm} {
            justify-content: space-between;
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 34px 26px 40px;

    @media (max-width: 1439px) {
        height: calc(100vh - 56px);
        overflow: auto;
    }

    > *:not(:first-child):not(${CheckWrapper}){
        margin-top: 34px;
    }
`

export const Info = styled(InfoOutlinedIcon)`
    width: 28px;
    height: 28px;
    color: #054375;
    cursor: pointer;
    display: none;

    @media (min-width: 1440px) {
        display: block;
    }
`

export const Row = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;

      @media (max-width: 1439px) {
        justify-content: center;
    }
`