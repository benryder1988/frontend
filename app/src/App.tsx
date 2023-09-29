import React from 'react';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routes/router';
import { useAuth0 } from '@auth0/auth0-react';
import PageLoader from './components/PageLoader/PageLoader';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </React.StrictMode>
  );
};

export default App;
