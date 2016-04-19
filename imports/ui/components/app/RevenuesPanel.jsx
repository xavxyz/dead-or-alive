import { Meteor } from 'meteor/meteor';
import React from 'react';

import { RevenueCard } from './RevenueCard.jsx';

export default class RevenuesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.resetRevenues = this.resetRevenues.bind(this);
  }

  resetRevenues() {
    Meteor.call('Revenues.methods.reset', {});
  }

  render() {
    const { revenues } = this.props;
    return (
      <div className="col-md-8 col-lg-6">
        <ul id="revenue-stream" className="list-group">

          <li className="list-group-item revenues-panel-header">
            <h4 className="list-group-item-heading">Revenues generated</h4>
            <button className="btn btn-warning btn-xs reset-btn" onClick={ this.resetRevenues }>RESET</button>
          </li>

          { revenues.length > 0
            ? revenues.map(doc => <RevenueCard { ...doc } key={ doc._id }/>)
            : <RevenueCard
                revenue="No data yet - 0"
                accomplishment="Having the will to not ignore the reality of my business"
                createdAt={ new Date() }
                icon="fa fa-support"
              />
          }
        </ul>
      </div>
    );
  }
}