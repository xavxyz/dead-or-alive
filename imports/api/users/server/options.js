import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function (options, user) {
  const userOptions = {
    reminders: false,
    weekTimeframe: false,
    gifDisplay: true
  };
  user.profile = Object.assign({}, { ...options.profile}, { ...userOptions });

  return user;
});