import { Meteor } from 'meteor/meteor';
import Users from '../users';

Meteor.publish('Users.options', function() {
	return Users.find({ _id: this.userId });
});
