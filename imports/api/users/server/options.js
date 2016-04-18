import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function (options, user) {
  const userOptions = {
    reminders: false,
    weekTimeframe: false,
    gifDisplay: true
  };

  return _.extend(user, userOptions);
});