import React from 'react';
import { moment } from 'meteor/momentjs:moment';

import LifeStatus from './LifeStatus.jsx';

import { statusAsProps } from '/imports/api/revenues/getLifeStatus';

export default WeekCard = ({revenue, accomplishment, problem, createdAt, status}) => {

	const imgColor = `cd-timeline-img cd-${status.label}`;

	const lifeStatus = statusAsProps(status.label);

	return (
		<div className="cd-timeline-block">
			<div className={imgColor}>
				<i className="heartbeat icon"></i>
			</div>

			<div className="cd-timeline-content">
				<div className="ui stackable two column grid">
					<div className="column">
						<h2>{revenue} € generated</h2>
						<p>Accomplishment: {accomplishment}</p>
						<p>Problem: {problem}</p>
					</div>
					<div className="column">
						<LifeStatus { ...lifeStatus } />
					</div>
				</div>
				<span className="cd-date">{moment(createdAt).fromNow()}</span>
			</div>
		</div>
	);
};