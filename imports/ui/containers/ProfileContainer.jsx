import { Meteor } from 'meteor/meteor';
import React from 'react';
import { composeWithTracker } from 'react-komposer';

import ProfilePanel from '/imports/ui/components/app/ProfilePanel.jsx';
import { Loading } from '/imports/ui/components/common/Loading.jsx';


function composerProfile(props, onData) {
	if (Meteor.subscribe('Users.options').ready()) {
		const currentUser = Meteor.user();
		onData(null, { currentUser });
	}
};

export default composeWithTracker(composerProfile, Loading)(ProfilePanel);