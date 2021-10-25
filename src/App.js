import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'
import ThemeProviderContainer from 'containers/ThemeProviderContainer'
import theme from 'common/constants/theme'
import Main from 'containers/Main'

const App = () => (
  <StylesProvider injectFirst>
    <ThemeProviderContainer theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ThemeProviderContainer>
  </StylesProvider>
)

export default App
