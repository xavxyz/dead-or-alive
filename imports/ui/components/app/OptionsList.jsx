import React from 'react';

import { OptionItem } from './OptionItem.jsx';

export default class OptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions(option) {
    return (event) => {
      Meteor.call('Users.methods.toggleOption', { name: option, state: this.props[option] });
    }
  }

  render() {
    const { reminders, weekTimeframe, gifDisplay } = this.props;

    return (
      <div id="options" className="panel panel-default">
        <div className="panel-body">
          <h4>Options</h4>
        </div>
        <ul className="list-group">
          <OptionItem title="Send email reminders" state={ reminders.toString() } action={ this.toggleOptions('reminders') } />
          <OptionItem title="Constrain update on a weekly basis timeframe" state={ weekTimeframe.toString() } action={ this.toggleOptions('weekTimeframe') } />
          <OptionItem title="Display GIF" state={ gifDisplay.toString() } action={ this.toggleOptions('gifDisplay') } />
        </ul>
      </div>
    );
  }
};