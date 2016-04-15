import React from 'react';
import { mount } from 'react-mounter';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

// Splash
import Splash from '/imports/ui/layouts/Splash.jsx';
import IntroPage from '/imports/ui/pages/IntroPage.jsx';


// App
import App from '/imports/ui/layouts/App.jsx';
import Tree from '/imports/ui/containers/Tree.jsx';
import Options from '/imports/ui/containers/Options.jsx';
import UpdateStatusPage from '/imports/ui/pages/UpdateStatusPage.jsx';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
  loginPath: '/sign-in',
  profilePath: '/tree',
  homeRoutePath: '/'
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Splash, {
      content: () => (<IntroPage />)
    });
  }
});

FlowRouter.route('/tree', {
  name: 'tree',
  action() {
    mount(App, {
      content: () => (<Tree />)
    });
  }
});

FlowRouter.route('/update', {
  name: 'update',
  action() {
    mount(App, {
      content: () => (<UpdateStatusPage />)
    });
  }
});

FlowRouter.route('/options', {
  name: 'options',
  action() {
    mount(App, {
      content: () => (<Options />)
    });
  }
});

FlowRouter.route('/sign-in', {
  name: 'sign-in',
  action(params) {
    mount(Splash, {
      content: () => (<Accounts.ui.LoginForm { ...{ formState: STATES.SIGN_IN, signUpPath: '/sign-up'} } />)
    });
  }
});

FlowRouter.route('/sign-up', {
  name: 'sign-up',
  action(params) {
    mount(Splash, {
      content: () => (<Accounts.ui.LoginForm { ...{ formState: STATES.SIGN_UP, loginPath: '/sign-in'} } />)
    });
  }
});

