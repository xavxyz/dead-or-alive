import React from 'react';

import { LifeStatus } from './LifeStatus.jsx'
import InsertCoin from './InsertCoins.jsx'
import OptionsList from './OptionsList.jsx';

export const ProfilePanel = ({ currentUser }) => {
  return (
    <div className="col-md-4 col-lg-3 col-lg-offset-1">
      <div id="profile-panel" className="panel panel-default">
        <LifeStatus { ...currentUser } />
        <InsertCoin />
      </div>

      <OptionsList { ...currentUser } />
    </div>
  );
};