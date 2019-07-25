import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#2dd1ac',
      light: '#70ffde',
      dark: '#009f7d',
    },
    primary: {
      main: '#3F93F5',
      light: '#7ec3ff',
      dark: '#0066c2',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

export default App;
