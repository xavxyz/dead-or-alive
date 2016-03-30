import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export default WeekCard = ({revenue, createdAt, status}) => {

	const imgColor = `cd-timeline-img cd-${status.label}`;

	return (
		<div className="cd-timeline-block">
			<div className={imgColor}>
				<i className="heartbeat icon"></i>
			</div>

			<div className="cd-timeline-content">
				<h2>{revenue}</h2>
				<span className="cd-date">{moment(createdAt).fromNow()}</span>
			</div>
		</div>
	);
};