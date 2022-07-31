import { theme } from 'global';

import { CssBaseline, ThemeProvider } from '@mui/material/';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>oi</h1>
    </ThemeProvider>
  );
};
