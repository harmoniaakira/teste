import React from 'react'
import Stepper from '../Stepper'
import {
  Container,
  SideBannerImage,
  Title
} from './SideBanner.styles'
import sideBanner from '../../assets/images/HomeView/side-banner.svg'

const SideBanner = () => {

  return (
    <Container>
      <SideBannerImage src={sideBanner} />
      <Title>Proposta de Crédito</Title>
      <Stepper />
    </Container>

  )
}

export default SideBanner;
