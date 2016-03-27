import { Meteor } from 'meteor/meteor';
import Revenues from '../lib/collections';

Meteor.publish('revenues.all', function () {
	return Revenues.find({});
});
