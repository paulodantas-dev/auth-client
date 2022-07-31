import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(defaultTheme);
