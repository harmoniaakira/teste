import { ContainerPage } from 'components/Layout/Layout.styles'
import { useSendPhotoScreen } from 'contexts/SendPhotoContext'
import React from 'react'
import SendPhotoIntro from './Intro'
import TakePhoto from './TakePhoto'
import {
  SCREEN_SEND_PHOTO_INTRO,
  SCREEN_SEND_PHOTO
} from './constants'

const SendPhoto = () => {
  const { screen } = useSendPhotoScreen()

  const switchContent = () => {

    switch (screen) {
      case SCREEN_SEND_PHOTO_INTRO:
        return <SendPhotoIntro />

      case SCREEN_SEND_PHOTO:
        return <TakePhoto />

      default:
        return <SendPhotoIntro />
    }
  }

  return (
    <ContainerPage>
      {switchContent()}
    </ContainerPage>
  )
}

export default SendPhoto;
