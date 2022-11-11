import React from 'react';

import ReactDOM from 'react-dom/client';
import 'ress';
import { Router } from 'router';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { SWRConfig } from 'swr';

import * as theme from 'utils/theme';

const swrConfig: React.ComponentProps<typeof SWRConfig>['value'] = {
  revalidateOnFocus: false,
  suspense: true,
};

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
    <SWRConfig value={swrConfig}>
      <GlobalStyle />
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </SWRConfig>
  </ThemeProvider>,
);
