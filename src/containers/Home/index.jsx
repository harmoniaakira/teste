import { ContainerPage } from 'components/Layout/Layout.styles'
import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import React, {useEffect, useRef} from 'react'
import {
  CameraWrapper,
  Camera,
  FrameWrapper,
  Frame
} from './Home.styles'

const Home = () => {
  const cameraRef = useRef(null)

  const getCamera = () => {
      navigator.mediaDevices.getUserMedia({
          video: true
      })
      .then(stream => {
          const video = cameraRef.current;
          video.srcObject = stream;
          video.play();
      }).catch(err => {
          console.log('Error: ', err);
      })
  }

  useEffect(() => {
    getCamera();
  }, [cameraRef])

  return (
    <ContainerPage>
      <MobileView>
        <Stepper />
        <CameraWrapper>
            <Camera ref={cameraRef}/>
            <FrameWrapper>
                <Frame />
            </FrameWrapper>
        </CameraWrapper>
      </MobileView>
    </ContainerPage>
  )
}

export default Home;
