import styled from 'styled-components'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export const MobileStepperContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 768px;

  @media (min-width: 1440px) {
    display: none;
  }
`

export const WebStepperContainer = styled.div`
  display: none;
  position: absolute;
  top: 436px;
  left: 90px;

  @media (min-width: 1440px) {
    display: block;
  }
`

export const StepperHeader= styled.div`
  // display: flex;
  // justify-content: space-between;
  // padding: 0 14px;

  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  background: #F0F0F0;
`

export const StepperTitle= styled.p`
  color: #8E8E93;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

export const StepperText = styled.p`
  color: #8E8E93;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;

  @media (min-width: 1440px) {
  color: #FFFFFF;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
  }
`

export const Steps = styled.div`
  display: flex;
`

export const Step = styled.div`
  background: ${
      props => props.done
      ? "rgb(140, 209, 51);" 
      : props.active 
        ? "linear-gradient(90deg, rgb(195, 195, 195) 0%, rgb(195, 195, 195) 50%, rgb(224, 224, 224) 50%);" 
        : "rgb(224, 224, 224);"
    };
    width: 25%;
    height: 4px;
    margin-top: 10px;
    &:not(:last-child) {
      margin-right: 6px;
    }

  @media (min-width: 1440px) {
    background: ${
      props => props.done
      ? "rgba(255, 255, 255, 0.7);" 
      : props.active 
        ? "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 50%);" 
        : "rgba(255, 255, 255, 0.3);"
    };
    width: 70px;
    height: 5px;
    margin-right: 5px;
    margin-top: 15px;
  }
`

export const BackButton = styled.img`
`

export const InfoButton = styled.img`
`

export const MobileHeader = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    position: relative;
    // background: #F0F0F0;

`

export const MobileHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    color: #8E8E93;
    font-size: 12px;
`

export const MobileHeaderTextTitle = styled.div`
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    line-height: 15.88px;
`

export const MobileHeaderTextStep = styled.div`
    line-height: 13px;
`

export const MobileHeaderStepper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
`

export const ArrowBack = styled(NavigateBeforeIcon)`
    height: 40px;
    width: 40px;
    color: #054375;
    cursor: pointer;
`

export const Info = styled(InfoOutlinedIcon)`
    width: 20px;
    height: 20px;
    color: #054375;
    cursor: pointer;
`