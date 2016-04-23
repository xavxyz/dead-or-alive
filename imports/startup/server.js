import { Meteor } from 'meteor/meteor';

import './routes.jsx';

import '/imports/api/revenues/revenues';
import '/imports/api/revenues/methods';
import '/imports/api/revenues/server/publications';

import '/imports/api/users/users';
import '/imports/api/users/methods';
import '/imports/api/users/server/publications';
import '/imports/api/users/server/options';

if (!ServiceConfiguration.configurations.findOne({ service: 'stripe' })) {
  ServiceConfiguration.configurations.insert({
    service: "stripe",
    appId: Meteor.settings.public.stripe.appId,
    secret: Meteor.settings.stripe.secret,
    scope: 'read_only',
  });
}

