import { createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 64,
      font: 'Shrikand',
    },
    h3: {
      fontSize: '1.7rem',
      font: 'Montserrat',
      fontWeight: '800',
      letterSpacing: '-0.05em',
    },
  },
  palette: {
    background: {
      default: '#C8A064',
    },
  },
});

export default theme;
