import React from 'react';

import { toggleReminders, toggleWeekTimeframe, toggleGifDisplay } from '/imports/api/users/methods';

import { Option } from '../components/app/Option.jsx';

export default class OptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleReminders = this.toggleReminders.bind(this);
    this.toggleWeekTimeframe = this.toggleWeekTimeframe.bind(this);
    this.toggleGifDisplay = this.toggleGifDisplay.bind(this);
  }

  toggleReminders(event) {
    debugger
    toggleReminders.call({ state: this.props.currentUser.profile.reminders });
  }

  toggleWeekTimeframe(event) {
    toggleWeekTimeframe.call({ state: this.props.currentUser.profile.weekTimeframe });
  }

  toggleGifDisplay(event) {
    toggleGifDisplay.call({ state: this.props.currentUser.profile.gifDisplay });
  }

  render() {

    const { reminders, weekTimeframe, gifDisplay } = this.props.currentUser.profile;

    return (
      <div className="ui container">
        <h1 className="ui header center aligned">What's up { this.props.currentUser.username }?</h1>
        <div className="ui list">
          <Option title="Send email reminders" state={ reminders.toString() } action={ this.toggleReminders } />
          <Option title="Constrain update on a weekly basis timeframe" state={ weekTimeframe.toString() } action={ this.toggleWeekTimeframe } />
          <Option title="Display GIF" state={ gifDisplay.toString() } action={ this.toggleGifDisplay } />
        </div>
      </div>
    )
  }
};