import { createMuiTheme, Theme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#5435B8',
    },
    success: {
      main: '#61D8A9',
      contrastText: '#fff',
    },
    info: {
      main: '#F09438',
    },
    background: {
      default: '#fcfcfe',
    },
    type: 'light',
  },
  typography: {
    fontFamily: ['BrandonText', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: '#323232',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '8.4px',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: '6px',
        '&$selected': {
          backgroundColor: '#F5F5F5',
        },
      },
    },
    MuiDrawer: {
      paper: {
        borderRight: 'none !important',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)',
      },
    },
    MuiAppBar: {
      root: {
        borderRadius: 'none',
        '&$colorDefault': {
          boxShadow: 'none',
          color: '#575757',
          background:
            'linear-gradient(180deg, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0))',
        },
      },
    },
    MuiToolbar: {
      root: {
        borderRadius: '7px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#775DC6',
    },
    success: {
      main: '#61D8A9',
      contrastText: '#fff',
    },
    info: {
      main: '#F09438',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: ['BrandonText', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8.4px',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: '6px',
      },
    },
    MuiDrawer: {
      paper: {
        borderRight: 'none !important',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)',
      },
    },
    MuiAppBar: {
      root: {
        borderRadius: 'none',
        '&$colorDefault': {
          boxShadow: 'none',
          color: '#fff',
          background:
            'linear-gradient(180deg, rgba(48, 48, 48, 0.95) 44%, rgba(48, 48, 48, 0.46) 73%, rgba(48, 48, 48, 0))',
        },
      },
    },
    MuiToolbar: {
      root: {
        borderRadius: '7px',
        backgroundColor: '#424242',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
});

const themes: { [index: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
