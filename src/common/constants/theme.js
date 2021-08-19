import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      background: '#FFF'
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
