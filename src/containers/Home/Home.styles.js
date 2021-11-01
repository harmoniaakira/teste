import styled from 'styled-components'

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

export const Avatar = styled.img`

`

export const WrapperTakePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Steps = styled.div`
  margin: 40px auto;
  width: 312px;

  @media (min-width: 1440px) {
    margin: 40px 0 50px 0;
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

export const CameraWrapper = styled.div`
  width: 1280px;
  height: 720px;
  position: relative;
`

export const Camera = styled.video`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  filter: brightness(1.2);
  object-fit: fill;
`

export const FrameWrapper = styled.div`
  /* position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 36px 0;
  mix-blend-mode: hard-light; */
`

export const Frame = styled.canvas`
  /* width: 250px;
  height: 335px;
  margin: auto;
  border-radius: 100%;
  border: 3px dotted white; 
	background-color: gray;*/
`