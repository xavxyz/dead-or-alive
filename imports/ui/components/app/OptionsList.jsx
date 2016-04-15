import React from 'react';

import { toggleReminders, toggleWeekTimeframe, toggleGifDisplay } from '/imports/api/users/methods';

import { OptionItem } from './OptionItem.jsx';

export default class OptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleReminders = this.toggleReminders.bind(this);
    this.toggleWeekTimeframe = this.toggleWeekTimeframe.bind(this);
    this.toggleGifDisplay = this.toggleGifDisplay.bind(this);
  }

  toggleReminders(event) {
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
      <div id="options" className="panel panel-default">
        <div className="panel-body">
          <h4>Options</h4>
        </div>
        <ul className="list-group">
          <OptionItem title="Send email reminders" state={ reminders.toString() } action={ this.toggleReminders } />
          <OptionItem title="Constrain update on a weekly basis timeframe" state={ weekTimeframe.toString() } action={ this.toggleWeekTimeframe } />
          <OptionItem title="Display GIF" state={ gifDisplay.toString() } action={ this.toggleGifDisplay } />
        </ul>
      </div>
    );
  }
};