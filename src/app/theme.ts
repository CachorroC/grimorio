'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    cssVariables: {
    // Changed from 'data' to 'data-theme' to ensure an exact match with the script
      colorSchemeSelector: 'data',
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#286b33',
          },
          secondary: {
            main: '#4b654a',
          },
          error: {
            main: '#ba1a1a',
          },
          warning: {
            main: '#fb8c00',
          },
          info: {
            main: '#3949ab',
          },
          success: {
            main: '#c5e1a5',
          },
        },
      },
      dark: {
        palette: {
        // Slightly lighter shades usually work better for dark mode contrast
          primary: {
            main: '#9ce39e',
          },
          secondary: {
            main: '#b1cead',
          },
          error: {
            main: '#ffb4ab',
          },
          warning: {
            main: '#ffa726',
          },
          info: {
            main: '#5c6bc0',
          },
          success: {
            main: '#dcedc8',
          },
        },
      },
    },
    typography: {
      h1: {
        fontFamily: 'Josefin Sans',
      },
      h2: {
        fontFamily: 'Josefin Sans',
      },
      h3: {
        fontFamily: 'Josefin Sans',
      },
      h4: {
        fontFamily: 'Josefin Sans',
      },
      h5: {
        fontFamily: 'Josefin Sans',
      },
      h6: {
        fontFamily: 'Josefin Sans',
      },
      subtitle1: {
        fontFamily: 'Josefin Sans',
      },
      subtitle2: {
        fontFamily: 'Josefin Sans',
      },
      body1: {
        fontFamily: 'Raleway',
      },
      body2: {
        fontFamily: 'Raleway',
      },
      button: {
        fontFamily: 'Raleway',
      },
      overline: {
        fontFamily: 'Raleway',
      },
      caption: {
        fontFamily: 'Raleway',
      },
    },
  }
);

export default theme;