import React from 'react';

import { Node } from '../components/app/Node.jsx';
import { Card } from '../components/app/Card.jsx';

import InsertCoin from '../components/app/InsertCoins.jsx'

import OptionsList from '../components/app/OptionsList.jsx';

import { mapRevenuesToLifeStatus } from '/imports/api/revenues/getLifeStatus';


export default TreePage = ({ revenues, currentUser }) => {

  return (
    <div className="row">
      <div className="col-md-4 col-lg-3 col-lg-offset-1">
        <div id="profile-panel" className="panel panel-default">
          <div className="media panel-body">
            [GIF]

            <div className="media-body">
              <span className="username"><strong>{ currentUser.username }</strong></span>
            </div>

            <div id="profile-stats">
              <span className="head">Relative Growth</span>
              <span className="numbers">84%</span>
            </div>
          </div>

          <InsertCoin />
        </div>

        <OptionsList currentUser={ currentUser } />
      </div>

      <div className="col-md-8 col-lg-6">
        <ul id="tweet-stream" className="list-group">

          <li className="list-group-item">
            <h4 className="list-group-item-heading">Tweets</h4>
          </li>

          { revenues.length > 0
            ? revenues.map(doc => <Card { ...doc } key={ doc._id } />)
            : <img className="media-object" style={{maxWidth:'100%'}} src="http://i.giphy.com/GhVTo53nhsGME.gif" alt="Coins" />
          }

        </ul>
      </div>
    </div>
  );
};