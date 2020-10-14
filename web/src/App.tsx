import React, { Fragment } from 'react';
import GlobalStyle from './styles/global.js';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}

export default App;
