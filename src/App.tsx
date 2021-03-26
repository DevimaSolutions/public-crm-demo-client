import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from '@/router';
import themes from '@/themes';
import { CircularProgress } from '@material-ui/core';
import useAuthInit from '@/hooks/useAuthInit';
import { themeSelector } from '@/redux/settings/selectors';
import { SnackbarProvider } from 'notistack';

const App: React.FC = (): JSX.Element => {
  const theme = useSelector(themeSelector);
  const isAuthInitialized = useAuthInit();

  if (!isAuthInitialized) {
    return <CircularProgress />;
  }

  return (
    <ThemeProvider theme={themes?.[theme] ?? themes.light}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
