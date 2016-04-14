import React from 'react';

import { Node } from '../components/app/Node.jsx';
import { Card } from '../components/app/Card.jsx';

import { mapRevenuesToLifeStatus } from '/imports/api/revenues/getLifeStatus';


export default TreePage = ({ revenues, currentUser }) => {

  const { color, image, label } = mapRevenuesToLifeStatus(revenues);

  return (
    <div>
      <h1 className="ui header center aligned">What's up { currentUser.username } ?</h1>

      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <a href="/update">
            <Node icon="plus" className="gold" />
          </a>
        </div>

        { revenues.map(doc => (
          <div key={ doc._id } className="cd-timeline-block">
            <Node className={ doc.status.label } />
            <Card { ...doc } />
          </div>
        )) }

        <div className="cd-timeline-block">
          <Node icon="tree" />
        </div>

      </section>
    </div>
  );
};