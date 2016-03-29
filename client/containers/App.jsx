import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeAll, composeWithTracker } from 'react-komposer';

import Revenues from '../../lib/collections';

import Timeline from '../components/Timeline.jsx';
import Loading from '../components/Loading.jsx';

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

const App = composeAll(
	composeWithTracker(composerRevenues, Loading),
	composeWithTracker(composerUser, Splash)
)(Timeline);

Meteor.startup(function () {
	ReactDOM.render(<App />, document.getElementById('react-root'));
});