import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithTracker } from 'react-komposer';

import OptionsPage from '/imports/ui/pages/OptionsPage.jsx';
import { Loading } from '/imports/ui/components/common/Loading.jsx';


function composerRevenues(props, onData) {
  const currentUser = Meteor.user();
  onData(null, { currentUser });
};

export default composeWithTracker(composerRevenues, Loading)(OptionsPage);