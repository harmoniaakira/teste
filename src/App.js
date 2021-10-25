import { StylesProvider } from '@material-ui/styles'
import AppContextProvider from 'contexts/AppContext'
import StepperProvider from 'contexts/StepperContext'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import theme from './common/constants/theme'
import Main from './containers/Main'
import ThemeProviderContainer from './containers/ThemeProviderContainer'

const App = () => (
  <StylesProvider injectFirst>
    <ThemeProviderContainer theme={theme}>
      <AppContextProvider>
        <StepperProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </StepperProvider>
      </AppContextProvider>
    </ThemeProviderContainer>
  </StylesProvider>
)

export default App
