import React from 'react';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#fff',
    sectionBackgroundColor: '#ccc',
    buttonBackgroundColor: '#999',
  },
  containerBorderRadius: '0px',
  inputBorderRadius: '8px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
