import React, { StrictMode, useState } from 'react';
import { ThemeProvider, createTheme } from 'mineral-ui/themes';
import Flex from 'mineral-ui/Flex';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

const slate = createTheme({
  colors: { theme: 'slate' },
});

const App = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <StrictMode>
      <ThemeProvider theme={slate}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Display balls={balls} strikes={strikes} />
          <Dashboard balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
        </Flex>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
