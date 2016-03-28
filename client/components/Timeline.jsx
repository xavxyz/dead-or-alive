import React from 'react';

import { mapRevenuesToLifeStatus } from '../../lib/actions/getLifeStatus';

import LifeStatus from './LifeStatus.jsx';
import UpdateRevenue from './UpdateRevenue.jsx';
import StartingPoint from './StartingPoint.jsx';
import { LogInButtons } from 'meteor/alt:react-accounts-ui';

export default Timeline = ({ revenues }) => {

	const lifeStatus = mapRevenuesToLifeStatus(revenues);

	return (
		<div>
			<header>
				<h1>Is your startup Dead or Alive ?</h1>
				<h3>In other words, are you currently creating value?</h3>
				{/*<LogInButtons />*/}
				<LifeStatus { ...lifeStatus } />
			</header>
			<section id="cd-timeline" className="cd-container">
				<UpdateRevenue />
				{ revenues.map(doc => <WeekCard key={ doc._id } { ...doc } />) }
				<StartingPoint />
			</section>
		</div>
	);
};