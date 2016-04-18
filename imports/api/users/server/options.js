import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function (options, user) {
  const appOptions = {
    reminders: false,
    weekTimeframe: false,
    gifDisplay: true,
    status: {
      growth: 0,
      alive: null
    }
  };

  return Object.assign(user, { ...options }, { ...appOptions });
});