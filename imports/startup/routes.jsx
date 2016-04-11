import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Splash } from '/imports/ui/layouts/Splash.jsx';
import { IntroPage } from '/imports/ui/pages/IntroPage.jsx';

import { App } from '/imports/ui/layouts/App.jsx';
import { Tree } from '/imports/ui/containers/Tree.jsx';
import { UpdateStatusPage } from '/imports/ui/pages/UpdateStatusPage.jsx';
import { OptionsPage } from '/imports/ui/pages/OptionsPage.jsx';


export const renderRoutes = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Splash }>
        <IndexRoute component={ IntroPage } />
      </Route>
      <Route path="/tree" component={ App }>
        <IndexRoute component={ Tree } />
        <Route path="/update" component={ UpdateStatusPage } />
        <Route path="/options" component={ OptionsPage } />
      </Route>
    </Router>
  );
};
