import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './utils/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
