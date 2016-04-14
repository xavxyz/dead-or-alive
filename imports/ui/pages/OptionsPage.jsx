import React from 'react';
import { Option } from '../components/app/Option.jsx';

export default class OptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleReminders = this.toggleReminders.bind(this);
    this.toggleWeekTimeframe = this.toggleWeekTimeframe.bind(this);
    this.toggleGifDisplay = this.toggleGifDisplay.bind(this);
  }

  toggleReminders(event) {
    alert('email');
  }

  toggleWeekTimeframe(event) {
    alert('week');
  }

  toggleGifDisplay(event) {
    alert('gif');
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui list">
          <Option title="Send email reminders" state="on" action={ this.toggleReminders } />
          <Option title="Constrain update on a weekly basis timeframe" state="off" action={ this.toggleWeekTimeframe } />
          <Option title="Display GIF" state="on" action={ this.toggleGifDisplay } />
        </div>
      </div>
    )
  }
};