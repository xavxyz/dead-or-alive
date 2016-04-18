import React from 'react';

import { Node } from './Node.jsx';
import { Card } from './Card.jsx';

export const RevenuesPanel = ({ revenues }) => {
  return (
    <div className="col-md-8 col-lg-6">
      <ul id="tweet-stream" className="list-group">

        <li className="list-group-item">
          <h4 className="list-group-item-heading">Tweets</h4>
        </li>

        { revenues.length > 0
          ? revenues.map(doc => <Card { ...doc } key={ doc._id }/>)
          : <img className="media-object"
                 style={{maxWidth:'100%'}}
                 src="http://i.giphy.com/GhVTo53nhsGME.gif"
                 alt="Coins"/>
        }
      </ul>
    </div>
  );
};