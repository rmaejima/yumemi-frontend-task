import React from 'react';

import ReactDOM from 'react-dom/client';
import 'ress';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import * as theme from 'utils/theme';

import App from './App';

const GlobalStyle = createGlobalStyle`
      html,
      body {
        height: 100%;
        padding: 0;
        margin: 0;
    
        color: ${(p) => p.theme.colors.text.base};
        font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
          'Hiragino Sans', Meiryo, sans-serif;
        line-height: 1.5em;
      }
      
      #__next {
        height: 100%;
      }
    
      a {
        color: ${(p) => p.theme.colors.primary[600]};
        text-decoration: none;
      }
    
      a:focus,
      button:focus,
      input:focus,
      select:focus,
      textarea:focus {
        outline-color: ${(p) => p.theme.colors.primary[500]};
        outline-width: 2px;
      }
    `;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ThemeProvider>,
);
