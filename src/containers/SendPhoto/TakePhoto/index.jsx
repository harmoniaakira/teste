import Button from 'components/Button'
import { MobileView } from 'components/Layout/Layout.styles'
import Web from 'components/Web'
import Stepper from 'components/Stepper'
import React, {useEffect, useRef} from 'react'
import {
    Content,
    WrapperTakePicture,
    CameraWrapper,
    Camera,
    FrameWrapper,
    Frame
} from '../SendPhoto.styles'

const SendPictureIntro = () => {
    const cameraRef = useRef(null)

    const getCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video:
            {
                height: 1080
            }
        })
        .then(stream => {
            const video = cameraRef.current;
            video.srcObject = stream;
            video.play();
        }).catch(err => {
            console.log('Error: ', err);
        })
    }

    const submit = () => {
        
    }

    useEffect(() => {
        getCamera();
    }, [cameraRef])

    return (
        <>
            <MobileView>
                <Stepper />
                <CameraWrapper>
                    <Camera ref={cameraRef}/>
                    <FrameWrapper>
                        <Frame />
                    </FrameWrapper>
                </CameraWrapper>
            </MobileView>

            <Web>
                <Content>
                    <WrapperTakePicture>
                        take photo web view
                    </WrapperTakePicture>

                    <Button handleClick={submit}>Continuar</Button>
                </Content>
            </Web>
        </>
    )
}

export default SendPictureIntro