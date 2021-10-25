import ArrowBack from '@material-ui/icons/ArrowBackIos';
import Button from 'components/Button';
import { MobileView } from 'components/Layout/Layout.styles';
import Web from 'components/Web';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbTitle, Container,
  Content,
  IconButton
} from './SignupInfo.styles';

const SignupInfo = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <Container>
      <MobileView>
        <Breadcrumb>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClick}
            aria-label="close"
          >
            <ArrowBack />
          </IconButton>
          <BreadcrumbTitle>
            Preenchimento de dados
          </BreadcrumbTitle>
        </Breadcrumb>
        <br /><br />
        <strong>CPF</strong>
        <br />
        Insira somente os 11 dígitos do CPF do cliente. Ex.: 000.000.000-00
        <br /><br />
        <strong>Data de Nascimento</strong>
        <br />
        <span>Preencha a Data de Nascimento do cliente, igual ao do documento de identificação. Ex.: 00/00/0000</span>
        <br /><br />
        <strong>Número de Celular válido</strong>
        <br />
        <span>É necessário informar um número de celular válido. Ex.: (00) 00000-0000</span>
        <br /><br />
        <strong>E-mail principal válido</strong>
        <span>Importante informar o e-mail principal que é utilizado e também que seja válido. Ex.: contatodamaria@gmail.com</span>
        <br /><br />
      </MobileView>

      <Web>
        <Content>
          <Breadcrumb>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClick}
              aria-label="close"
            >
              <ArrowBack />
            </IconButton>
            <BreadcrumbTitle>
              Preenchimento de dados
            </BreadcrumbTitle>
          </Breadcrumb>
          <br /><br />
          <strong>CPF</strong><br />
          Insira somente os 11 dígitos do CPF do cliente. Ex.: 000.000.000-00
          <br /><br />
          <strong>Data de Nascimento</strong><br />
          <span>Preencha a Data de Nascimento do cliente, igual ao do documento de identificação. Ex.: 00/00/0000</span>
          <br /><br />
          <strong>Número de Celular válido</strong><br />
          <span>É necessário informar um número de celular válido. Ex.: (00) 00000-0000</span>
          <br /><br />
          <strong>E-mail principal válido</strong><br />
          <span>Importante informar o e-mail principal que é utilizado e também que seja válido. Ex.: contatodamaria@gmail.com</span>
          <br /><br />
          <Button handleClick={handleClick}>Voltar</Button>
        </Content>
      </Web>
    </Container>
  )
}

export default SignupInfo;
