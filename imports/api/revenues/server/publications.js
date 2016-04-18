import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import Revenues from '../revenues';

Meteor.publish('Revenues.all', function userRevenues() {
	return Revenues.find({ createdAt: { $gte: moment().subtract(3, 'months').toDate() } });
});
