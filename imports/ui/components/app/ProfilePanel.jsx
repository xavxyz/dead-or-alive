import React from 'react';

import InsertCoin from './InsertCoins.jsx'
import OptionsList from './OptionsList.jsx';

export const ProfilePanel = ({ currentUser }) => {
  return (
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
  );
};