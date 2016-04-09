import React from 'react';
import { Link } from 'react-router';

import { Node } from '../components/app/Node.jsx';
import { Card } from '../components/app/Card.jsx';

import { mapRevenuesToLifeStatus } from '/imports/api/revenues/getLifeStatus';


export const TreePage = ({ revenues }) => {

  const { color, image, label } = mapRevenuesToLifeStatus(revenues);

  return (
    <section id="cd-timeline" className="cd-container">
      <div className="cd-timeline-block">
        <Link to="/update">
          <Node icon="plus" className="gold" />
        </Link>
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
  );
};