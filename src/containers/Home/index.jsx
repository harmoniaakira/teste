import avatarMobile from 'assets/images/HomeView/avatar-mobile1.svg'
import avatarWeb from 'assets/images/HomeView/avatar-web1.svg'
import AppHeader from 'components/AppHeader'
import Button from 'components/Button'
import Greetings from 'components/Greetings'
import { ContainerPage, MobileView } from 'components/Layout/Layout.styles'
import Steps from 'components/Steps'
import Web from 'components/Web'
import step1 from 'assets/images/HomeView/step1.svg'
import step2 from 'assets/images/HomeView/step2.svg'
import step3 from 'assets/images/HomeView/step3.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Content } from './Home.styles'

const steps = [
  {
    id: 1,
    stepIcon: step1,
    stepText: "Informe corretamente os dados"
  },
  {
    id: 2,
    stepIcon: step2,
    stepText: "Preencha de acordo com documentos válidos"
  },
  {
    id: 3,
    stepIcon: step3,
    stepText: "Escolha onde enviar o token de ativação"
  }
]

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/onboarding-pf-frontend/geolocalizacao');
  }

  return (
    <ContainerPage>
      <MobileView $padding="0 0 40px 0">
        <AppHeader avatar={avatarMobile} />
        <Greetings />
        <Steps steps={steps} />
        <Button handleClick={handleClick}>Continuar</Button>
      </MobileView>

      <Web>
        <Content>
          <Avatar src={avatarWeb} />
          <Greetings />
          <Steps steps={steps} />
          <Button handleClick={handleClick}>Continuar</Button>
        </Content>
      </Web>
    </ContainerPage>
  )
}

export default Home;
