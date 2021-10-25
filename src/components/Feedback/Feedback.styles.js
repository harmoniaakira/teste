import styled from "styled-components"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

export const ContainerCentered = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 32px 24px;
    text-align: center;

    @media (min-width: 1440px) {
        max-width: 420px;
        height: max-content;
    }
`

export const FeedbackTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #222222;
`

export const FeedbackText = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #636366;
`

export const SuccessIcon = styled(CheckCircleOutlineIcon)`
    color: #8CD133;
    width: 80px;
    height: 80px;
`

export const ErrorIcon = styled(HighlightOffIcon)`
    color: #EB5757;
    width: 80px;
    height: 80px;
`

export const WarningIcon = styled(ReportProblemOutlinedIcon)`
    color: #F2994A;
    width: 80px;
    height: 80px;
`

export const Bottom = styled.div`
    margin-top: 110px;
    margin-bottom: 20px;

    @media (min-width: 1440px) {
        position: absolute;
        bottom: 80px;
        right: 120px;
        margin: 0;
    }
}
`
