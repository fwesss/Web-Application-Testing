import React, { StrictMode, useEffect, useState } from 'react';
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
  const [outs, setOuts] = useState(0);
  const [atBat, setAtBat] = useState('Home');
  const [inning, setInning] = useState(1);

  const reset = () => {
    setStrikes(0);
    setBalls(0);
  };

  useEffect(() => {
    if (strikes === 3) {
      setOuts(outs + 1);
      reset();
    }
  }, [outs, strikes]);

  useEffect(() => {
    if (outs === 3) {
      if (atBat === 'Home') {
        setAtBat('Away');
      } else {
        setAtBat('Home');
        setInning(inning + 1);
      }
      setOuts(0);
    }
  }, [atBat, inning, outs]);

  return (
    <StrictMode>
      <ThemeProvider theme={slate}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Display balls={balls} strikes={strikes} outs={outs} atBat={atBat} inning={inning} />
          <Dashboard
            balls={balls}
            setBalls={setBalls}
            strikes={strikes}
            setStrikes={setStrikes}
            reset={reset}
          />
        </Flex>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
