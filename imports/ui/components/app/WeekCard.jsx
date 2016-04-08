import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export const WeekCard = ({revenue, accomplishment, problem, createdAt, status}) => {

	const imgColor = `cd-timeline-img cd-${status.label}`;

	return (
		<div className="cd-timeline-block">
			<div className={imgColor}>
				<i className="heartbeat icon"></i>
			</div>

			<div className="cd-timeline-content">
				<h2>{revenue} € generated</h2>
				<p>Accomplishment: {accomplishment}</p>
				<p>Problem: {problem}</p>
				<span className="cd-date">{moment(createdAt).fromNow()}</span>
			</div>
		</div>
	);
};