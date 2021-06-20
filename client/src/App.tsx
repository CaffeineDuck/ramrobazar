import { Box } from '@chakra-ui/react';
import React from 'react';

import NavBar from './components/navbar';

const App: React.FC = () => {
  return (
    <>
      <Box whiteSpace={200}>
        <NavBar />
      </Box>
    </>
  );
};

export default App;
