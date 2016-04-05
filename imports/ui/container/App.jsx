import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeAll, composeWithTracker } from 'react-komposer';

import Revenues from '/imports/api/revenues/collections';

import Timeline from '/imports/ui/layout/Timeline.jsx';
import Splash from '/imports/ui/layout/Splash.jsx';
import Loading from '/imports/ui/layout/Loading.jsx';

function composerUser(props, onData) {
	if (Meteor.userId() !== null) {
		onData(null, Meteor.user());
	}
}

function composerRevenues(props, onData) {
	if (Meteor.user() && Meteor.subscribe('revenues.all').ready()) {
		const revenues = Revenues.find({ userId: Meteor.userId() }, { sort: { createdAt: -1 } }).fetch();
		onData(null, { revenues });
	}
};

export const App = composeAll(
	composeWithTracker(composerRevenues, Loading),
	composeWithTracker(composerUser, Splash)
)(Timeline);