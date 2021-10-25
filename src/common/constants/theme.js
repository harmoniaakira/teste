import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
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
