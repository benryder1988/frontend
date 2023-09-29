// src/theme.ts
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#99D98C',
      dark: '#76C893',
    },
    secondary: {
      main: '#1A759F',
    },
    // grey: {
    //   100: '#606060'
    // }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white"
        }
      }
    }
    }
});

export default theme;