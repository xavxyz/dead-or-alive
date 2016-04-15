import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import { Users } from './users';

export const toggleReminders = new ValidatedMethod({
  name: 'Users.methods.toggleReminders',
  validate: new SimpleSchema({
    state: { type: Boolean },
  }).validator(),
  run({ state }) {
    return Users.update({ _id: this.userId }, {$set: { 'profile.reminders': !state } } );
  }
});

export const toggleWeekTimeframe = new ValidatedMethod({
  name: 'Users.methods.toggleWeekTimeframe',
  validate: new SimpleSchema({
    state: { type: Boolean },
  }).validator(),
  run({ state }) {
    return Users.update({ _id: this.userId }, {$set: { 'profile.weekTimeframe': !state } } );
  }
});

export const toggleGifDisplay = new ValidatedMethod({
  name: 'Users.methods.toggle',
  validate: new SimpleSchema({
    state: { type: Boolean },
  }).validator(),
  run({ state }) {
    return Users.update({ _id: this.userId }, {$set: { 'profile.gifDisplay': !state } } );
  }
});