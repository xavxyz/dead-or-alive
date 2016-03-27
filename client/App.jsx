import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithTracker} from 'react-komposer';

import Revenues from '../lib/collections';

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

const LifeStatus = ({color, label}) => {
 return color && label ? <h1 style={{color: color}}>{label}</h1> : <h1>Any data yet.</h1>;
};

const addRevenueThisWeek = (event) => {
	event.preventDefault();
	Revenues.insert({
		createdAt: new Date(),
		revenue: parseInt(event.target.revenue.value)
	});
};

const UpdateRevenue = () => {
	return (
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-alive">
				<img src="img/cd-icon-picture.svg" alt="Picture" />
			</div>

			<div className="cd-timeline-content">
				<h2>Revenues this week</h2>
				<form onSubmit={addRevenueThisWeek}>
					Revenue : <input type="number" name="revenue" />
					<input type="submit" className="btn btn-success" value="Go" />
				</form>
				<span className="cd-date">This week</span>
			</div>
		</div>
	);
}


const Timeline = ({revenues}) => {

	const lifeStatus = mapRevenuesToLifeStatus(revenues);

	return (
		<div>
			<header>
				<h1>Dead or Alive ?</h1>
				<LifeStatus {...lifeStatus} />
			</header>
			<section id="cd-timeline" className="cd-container">
				<UpdateRevenue />
			{revenues.map(doc => {
				return (
					<div className="cd-timeline-block" key={doc._id}>
						<div className="cd-timeline-img cd-alive">
							<img src="img/cd-icon-picture.svg" alt="Picture" />
						</div>

						<div className="cd-timeline-content">
							<h2>{doc.revenue}</h2>
							<a href="" className="cd-read-more">Read more</a>
							<span className="cd-date">..</span>
						</div>
					</div>
				);
			})}
			</section>
		</div>
	);
};

function composer(props, onData) {
	if (Meteor.subscribe('revenues.all').ready()) {
		const revenues = Revenues.find({}, {sort: {createdAt: -1}}).fetch();
		onData(null, {revenues});
	}
};

const App = composeWithTracker(composer)(Timeline);

Meteor.startup(function () {
	ReactDOM.render(<App />, document.getElementById('react-root'));
});