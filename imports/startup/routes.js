import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import { MainLayout } from '/imports/ui/layout/MainLayout.jsx';

Accounts.ui.config({
  passwordSignupFields: 'NO_PASSWORD',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/timeline'),
  onSignedOutHook: () => FlowRouter.go('/')
});

FlowRouter.route("/login", {
  action(params) {
    mount(MainLayout, {
        content: <Accounts.ui.LoginForm />
    });
  }
});

FlowRouter.route("/", {
  action(params) {
    mount(MainLayout, {
      content: <Splash />
    });
  }
});

FlowRouter.route("/timeline", {
  action(params) {
    mount(MainLayout, {
      content: <App />
    });
  }
});