// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import brown from '@material-ui/core/colors/brown'

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
