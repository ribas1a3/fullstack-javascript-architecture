// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import yellow from '@material-ui/core/colors/yellow'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: yellow
  },
  typography: {
    useNextVariants: true
  }
})

export default theme
