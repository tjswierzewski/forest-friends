import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        color: 'black',
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: '1200',
        },
      },
    },
  },
  typography: {
    h2: { fontWeight: '600' },
    h3: {
      fontSize: '1.7rem',
      font: 'Montserrat',
      fontWeight: '800',
      letterSpacing: '-0.05em',
    },
    pageLink: {
      fontSize: '1.7rem',
      font: 'Montserrat',
      fontWeight: '800',
      letterSpacing: '-0.05em',
      cursor: 'pointer',
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
    primary: {
      main: '#005F00',
    },
  },
});

export default theme;
