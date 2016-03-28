import React from 'react';
import LifeStatus from './LifeStatus.jsx';

const alive = {
	color: 'green',
	label: 'alive',
	image: 'http://i.giphy.com/uvU9WUwlj4SIg.gif'
};

const dead = {
	color: 'red',
	label: 'dead',
	image: 'http://i.giphy.com/uhA0pldQaXUNW.gif'
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
				<h1>Is your startup Dead or Alive ?</h1>
				<h3>In other words, are you currently creating value?</h3>
				<LifeStatus { ...lifeStatus } />
			</header>
			<section id="cd-timeline" className="cd-container">
				<UpdateRevenue />
				{ revenues.map(doc => <WeekCard key={ doc._id } { ...doc } />) }
			</section>
		</div>
	);
};