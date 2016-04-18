import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Users from './users';

export const toggleOption = new ValidatedMethod({
  name: 'Users.methods.toggleOption',
  validate: new SimpleSchema({
    name: { type: String, allowedValues: ['reminders', 'weekTimeframe', 'gifDisplay'] },
    state: { type: Boolean }
  }).validator(),
  run({ name, state }) {
    const query = {};
    query[name] = !state;
    return Users.update({ _id: this.userId }, {$set: query });
  }
});