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
            <button className="btn btn-warning btn-xs btn-reset" onClick={ this.resetRevenues }>RESET</button>
          </li>

          { revenues.length > 0
            ? revenues.map(doc => <RevenueCard { ...doc } key={ doc._id }/>)
            : <img className="media-object"
                   style={{maxWidth:'100%'}}
                   src="http://i.giphy.com/GhVTo53nhsGME.gif"
                   alt="Coins"/>
          }
        </ul>
      </div>
    );
  }
}