import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithTracker } from 'react-komposer';

import Revenues from '../../lib/collections';

import Timeline from '../components/Timeline.jsx';
import Loading from '../components/Loading.jsx';

function composer(props, onData) {
	if (Meteor.subscribe('revenues.all').ready()) {
		const revenues = Revenues.find({}, { sort: { createdAt: -1 } }).fetch();
		onData(null, { revenues });
	}
};

const App = composeWithTracker(composer, Loading)(Timeline);

Meteor.startup(function () {
	ReactDOM.render(<App />, document.getElementById('react-root'));
});