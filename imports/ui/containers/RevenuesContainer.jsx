import { Meteor } from 'meteor/meteor';
import React from 'react';
import { composeWithTracker } from 'react-komposer';

import Revenues from '/imports/api/revenues/revenues';

import RevenuesPanel from '/imports/ui/components/app/revenues/RevenuesPanel.jsx';
import { Loading } from '/imports/ui/components/common/Loading.jsx';


function composerRevenues(props, onData) {
	if (Meteor.subscribe('Revenues.all').ready()) {
		const revenues = Revenues.find({}, { sort: { createdAt: -1 } }).fetch();
		onData(null, { revenues });
	}
};

export default composeWithTracker(composerRevenues, Loading)(RevenuesPanel);