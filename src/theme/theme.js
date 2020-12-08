import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    },
  palette: {
    primary: {
      main: '#23232b',
    },
    secondary: {
      main: '#e4dedf',

    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    common: {
      white: 'white'
    }
  },
  spacing : 10
});

export default theme;

