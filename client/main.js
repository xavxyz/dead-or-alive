import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Revenues = new Meteor.Collection(null);

const alive = {
  type: 0,
  style: 'green',
  label: 'Alive'
};

const dead = {
  type: 0,
  style: 'red',
  label: 'Dead'
};

Template.timeline.helpers({
  revenues () {
    return Revenues.find({}, {sort: {createdAt: -1}});
  }
});

Template.state.helpers({
  howAreYou() {
    const revenues = Revenues.find({}, {sort: {createdAt: -1}}).fetch();

    if (revenues.length > 0) {
      if (revenues.length === 1) {
        return alive;
      }

      if (revenues[0].revenue > revenues[1].revenue) {
        return alive;
      } else {
        return dead;
      }
    }
  }
});

Template.update.events({
  'submit form' (event, instance) {
    event.preventDefault();
    Revenues.insert({
      createdAt: new Date(),
      revenue: parseInt(event.target.revenue.value)
    });
  }
});