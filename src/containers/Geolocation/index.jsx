import { MobileView } from 'components/Layout/Layout.styles'
import { StyledCheckbox } from 'components/StyledCheckbox/StyledCheckbox.styles'
import Web from 'components/Web'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import avatar from '../../assets/images/GeolocationView/avatar-geolocation.svg'
import AppHeader from '../../components/AppHeader'
import Button from '../../components/Button'
import Dialog from '../../components/Dialog'
import {
  Avatar, Content, Flexgrow, FootNote, GeoContainer, Info, MobileCheck, MobileCheckLabel, Text, Title
} from './Geolocation.styles'


const userGeolocationInitState = {
  coords: {
    longitude: 0,
    latitude: 0,
    altitude: 0
  },
  timestamp: 0
}

const Geolocation = () => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [userGeolocation, setUserGeolocation] = useState(userGeolocationInitState);

  const getCurrentPositionSuccess = (pos) => {
    setUserGeolocation(pos)
    console.log('userGeolocation: ', userGeolocation)
  }

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess);
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const submitGeolocation = () => {
    setOpen(false);
    getCurrentPosition();
    console.log('submiting Geolocation');
    history.push('/onboarding-pf-frontend/cadastro');
  }

  const handleClick = () => {
    if (isChecked) {
      submitGeolocation();
    } else {
      setOpen(true);
    }
  }

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }

  return (
    <GeoContainer>
      <MobileView $padding="0 0 40px 0">
        <AppHeader avatar={avatar} />
        <Flexgrow>
          <Title>Compartilhe sua localização</Title>
          <Text centered>
            Para prosseguirmos com a proposta, precisamos da sua permissão. :)
          </Text>

          <MobileCheck>
            <MobileCheckLabel> Autorizo compartilhar minha localização e dados do aparelho. </MobileCheckLabel>
            <StyledCheckbox
              value={isChecked}
              onChange={handleToggle}
            />
          </MobileCheck>
          <FootNote>É necessário aceitar somente uma vez.</FootNote>

          <Button handleClick={handleClick}>Continuar</Button>
        </Flexgrow>
      </MobileView>

      <Web>
          <Content>
            <Info>
              <Avatar src={avatar} />
              <div>
                <Title>Compartilhe sua localização</Title>
                <Text>
                  Para prosseguirmos com a proposta, precisamos da sua permissão. :)
                </Text>
                <MobileCheck>
                  <MobileCheckLabel> Autorizo compartilhar minha localização e dados do aparelho. </MobileCheckLabel>
                  <StyledCheckbox
                    value={isChecked}
                    onChange={handleToggle}
                  />
                </MobileCheck>
                <FootNote>É necessário aceitar somente uma vez.</FootNote>
              </div>
            </Info>
            <Button handleClick={handleClick}>Continuar</Button>
          </Content>
      </Web>

      <Dialog
        open={open}
        title="Atenção"
        confirmButtonLabel="continuar"
        cancelButtonLabel="voltar"
        onConfirm={submitGeolocation}
        onCancel={handleClose}
        handleClose={handleClose}
      >
        Sem aceitar compartilhar a localização, a solicitação estará sujeita a análise
        diferenciada da proposta. Deseja seguir sem compartilhar a localização?
      </Dialog>
    </GeoContainer >
  )
}

export default Geolocation;
