import React, { memo } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from './Loading.styles'

const Loading = () => (
  <Container>
    <CircularProgress />
  </Container>
)

export default memo(Loading)
