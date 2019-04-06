// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import amber from '@material-ui/core/colors/amber'

export default createMuiTheme({
  palette: {
    primary:pink ,
    secondary: amber
  },
  typography: {
    useNextVariants: true
  }
})
