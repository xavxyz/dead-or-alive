import React from 'react';

import { RevenueCard } from './RevenueCard.jsx';

export const RevenuesPanel = ({ revenues }) => {
  return (
    <div className="col-md-8 col-lg-6">
      <ul id="tweet-stream" className="list-group">

        <li className="list-group-item">
          <h4 className="list-group-item-heading">Revenues generated</h4>
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
};