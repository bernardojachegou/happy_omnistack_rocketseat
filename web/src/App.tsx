import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { ToggleButton } from './components/ToggleTheme/style.js'
import { FiMoon, FiSun } from 'react-icons/fi';
import GlobalStyle from './styles/global.js';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalStyle />
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? (
            <FiMoon size={26} color="white" />
          ) : (
              <FiSun size={26} color="white" />
            )}
        </ToggleButton>
        <Routes />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
