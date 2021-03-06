import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/index';
import OrphanagesMap from './pages/OrphanagesMap/index';
import Orphanage from './pages/Orphanage/index';
import CreateOrphanage from './pages/CreateOrphanages/index';
import Login from './pages/Dashboard/Login/index';
import UserBoard from './pages/Dashboard/UserBoard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/login" component={Login} />
        <Route path="/userBoard" component={UserBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
