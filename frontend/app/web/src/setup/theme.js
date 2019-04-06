// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'

export default createMuiTheme({
  palette: {
    primary:amber ,
    secondary: yellow
  },
  typography: {
    useNextVariants: true
  }
})
