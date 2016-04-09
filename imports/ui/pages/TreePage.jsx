import React from 'react';

import { Node } from '../components/app/Node.jsx';
import { WeekCard } from '../components/app/WeekCard.jsx';
import { LifeStatus } from '../components/app/LifeStatus.jsx';


export const TreePage = ({ revenues }) => {
  return (
    <section id="cd-timeline" className="cd-container">
      <LifeStatus />
      { revenues.map(doc => (
        <div className="cd-timeline-block">
          <Node key={ doc._id } { ...doc} />
          <Card key={ doc._id } { ...doc } />
        </div>
      )) }
      <div className="cd-timeline-block">
        <Node icon="tree" />
      </div>
    </section>
  );
};