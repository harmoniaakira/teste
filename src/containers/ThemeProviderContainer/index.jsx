import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import PropTypes, { shape } from 'prop-types'
import GlobalStyle from '../../common/styles/global'
import '../../common/i18n'

const ThemeProviderContainer = ({ children, theme }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  </MuiThemeProvider>
)

ThemeProviderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
      palette: shape({
        primary: shape({
          main: PropTypes.string.isRequired,
          background: PropTypes.string.isRequired
        })
      }),
      typography: shape({
        useNextVariants: PropTypes.bool.isRequired
      })
    }
  ).isRequired
}

export default ThemeProviderContainer
