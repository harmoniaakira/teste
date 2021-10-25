import styled from 'styled-components'
import IconButtonComponent from '@material-ui/core/IconButton';
import AppBarComponent from '@material-ui/core/AppBar';

export const AppBar = styled(AppBarComponent)`
  box-shadow: none;
  border-bottom: 1px solid #C4C4C4;
  background-color: white;
  position: relative;
  margin-bottom: 20px;
`

export const DialogFullScreenTitle = styled.h2`
  color: #8E8E93;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 auto;
`

export const IconButton = styled(IconButtonComponent)`
  color: #054375;
`