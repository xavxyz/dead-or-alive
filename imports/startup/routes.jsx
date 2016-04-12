import React from 'react';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';

import { Splash } from '/imports/ui/layouts/Splash.jsx';
import { IntroPage } from '/imports/ui/pages/IntroPage.jsx';

import { App } from '/imports/ui/layouts/App.jsx';
import { Tree } from '/imports/ui/containers/Tree.jsx';
import { UpdateStatusPage } from '/imports/ui/pages/UpdateStatusPage.jsx';
import { OptionsPage } from '/imports/ui/pages/OptionsPage.jsx';

/*
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
*/

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Splash, {
      content: <IntroPage />
    });
  }
});

FlowRouter.route('/tree', {
  name: 'tree',
  action() {
    mount(App, {
      content: <Tree />
    });
  }
});

FlowRouter.route('/update', {
  name: 'update',
  action() {
    mount(App, {
      content: <UpdateStatusPage />
    });
  }
});

FlowRouter.route('/options', {
  name: 'options',
  action() {
    mount(App, {
      content: <OptionsPage />
    });
  }
});

