// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
  palette: {
    primary:green ,
    secondary: yellow
  },
  typography: {
    useNextVariants: true
  }
})
