import React from 'react';
import LifeStatus from './LifeStatus.jsx';

const alive = {
	type: 1,
	color: 'green',
	label: 'alive'
};

const dead = {
	type: 0,
	color: 'red',
	label: 'dead'
};

const mapRevenuesToLifeStatus = (revenues) => {
	if (revenues && revenues.length > 0) {
		if (revenues.length === 1) {
			return alive;
		}

		if (revenues[0].revenue > revenues[1].revenue) {
			return alive;
		} else {
			return dead;
		}
	}

	return undefined;
};

export default Timeline = ({ revenues }) => {

	const lifeStatus = mapRevenuesToLifeStatus(revenues);

	return (
		<div>
			<header>
				<h1>Dead or Alive ?</h1>
				<LifeStatus { ...lifeStatus } />
			</header>
			<section id="cd-timeline" className="cd-container">
				<UpdateRevenue />
				{ revenues.map(doc => <WeekCard key={ doc._id } { ...doc } />) }
			</section>
		</div>
	);
};