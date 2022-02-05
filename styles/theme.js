import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 10,
  typography: {
    h3: {
      fontSize: '1.7rem',
      font: 'Montserrat',
      fontWeight: '800',
      letterSpacing: '-0.05em',
    },
    h6: {
      fontSize: '1.2rem',
      font: 'Montserrat',
      fontWeight: '400',
      letterSpacing: '0.05em',
      maxWidth: '70rem',
      margin: '0 auto',
    },
  },
  palette: {
    background: {
      default: '#C8A064',
    },
  },
});

export default theme;
