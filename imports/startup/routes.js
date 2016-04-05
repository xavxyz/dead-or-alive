import React from 'react';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import { MainLayout } from '/imports/ui/layout/MainLayout.jsx';
import { Splash } from '/imports/ui/layout/Splash.jsx';
import { App } from '/imports/ui/container/App.jsx';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
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