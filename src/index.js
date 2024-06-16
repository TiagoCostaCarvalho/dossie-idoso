// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider, useTheme } from 'views/themes/ThemeContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './pages/HomePage';
import NewTopic from './pages/NewTopic';
import NewTopicExample from 'pages/NewTopicExample';
import NewEntry from 'pages/NewEntry';
import RegisterAccount from 'views/pages/authentication/register_account/register-account';
import SuccessRegisterAccount from 'views/pages/authentication/register_account/SuccessRegisterAccount';
import LoginAccount from 'views/pages/authentication/login-account/login-account';
import Button from '@mui/material/Button';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/new-topic/",
    element: <NewTopic />,
  },
  {
    path: "/new-topic/example",
    element: <NewTopicExample />,
  },
  {
    path: "/new-topic/example/new-entry",
    element: <NewEntry />,
  },
  {
    path: "/signup",
    element: <RegisterAccount />,
  },
  {
    path: "/success-signup",
    element: <SuccessRegisterAccount />,
  },
  {
    path: "/login",
    element: <LoginAccount />,
  }
]);

function App() {
  const { theme, increaseFontSize, decreaseFontSize } = useTheme();
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div style={{ padding: '10px' }}>
        <Button onClick={increaseFontSize}>Increase Font Size</Button>
        <Button onClick={decreaseFontSize}>Decrease Font Size</Button>
      </div> */}
      <RouterProvider router={router} />
    </MUIThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
