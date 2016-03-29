import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import Revenues from '../lib/collections';

Meteor.publish('revenues.all', function () {
	return Revenues.find({userId: this.userId, createdAt: {$gte: moment().subtract(3, 'months').toDate()}});
});
