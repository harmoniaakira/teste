import React from 'react'
import PropTypes from 'prop-types';
import {
  Container,
  Banner,
  Avatar
} from './AppHeader.styles'
import appHeaderBanner from '../../assets/images/HomeView/appheader-banner.svg'

const AppHeader = ({ avatar, avatarFullSize }) => {

  return (
    <Container>
      <Banner src={appHeaderBanner} />
      {avatar && <Avatar src={avatar} avatarFullSize={avatarFullSize} />}
    </Container>
  )
}


AppHeader.propTypes = {
  avatar: PropTypes.string,
  avatarFullSize: PropTypes.bool
}

AppHeader.defaultProps = {
	avatar: "",
  avatarFullSize: false
}

export default AppHeader;
