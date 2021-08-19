import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.primary.background};
  height: 100vh;
  text-align: center;
`

export const Title = styled(Typography)`
  margin: 0;
  margin-bottom: 10px;
`
