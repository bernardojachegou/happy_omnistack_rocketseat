import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.js';

import { lightTheme, darkTheme } from './styles/themes.js';
import Routes from './routes';
import ThemeButton from './components/ThemeButton/ThemeButton.js';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
