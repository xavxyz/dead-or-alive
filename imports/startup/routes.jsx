import React from 'react';
import { mount } from 'react-mounter';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

// Splash
import Splash from '/imports/ui/layouts/Splash.jsx';
import IntroPage from '/imports/ui/components/splash/IntroPage.jsx';

// App
import App from '/imports/ui/layouts/App.jsx';
import AppPage from '/imports/ui/components/app/AppPage.jsx';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
  loginPath: '/sign-in',
  profilePath: '/app',
  homeRoutePath: '/',
  onPostSignUpHook: () => FlowRouter.go('/app'),
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Splash, {
      content: () => (<IntroPage />)
    });
  }
});

FlowRouter.route('/app', {
  name: 'app',
  action() {
    mount(App, {
      content: () => (<AppPage />)
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

