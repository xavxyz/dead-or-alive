import React from 'react';

import { StartingPoint } from '../components/app/StartingPoint.jsx';
import { WeekCard } from '../components/app/WeekCard.jsx';
import { LifeStatus } from '../components/app/LifeStatus.jsx';


export const TreePage = ({ revenues }) => {
  return (
    <section id="cd-timeline" className="cd-container">
      <LifeStatus />
      { revenues.map(doc => <WeekCard key={ doc._id } { ...doc } />) }
      <StartingPoint />
    </section>
  );
};