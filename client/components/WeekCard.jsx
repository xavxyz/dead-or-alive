import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export default WeekCard = ({revenue, createdAt}) => {
	return (
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-alive">
				<img src="img/cd-icon-picture.svg" alt="Picture" />
			</div>

			<div className="cd-timeline-content">
				<h2>{revenue}</h2>
				<a href="" className="cd-read-more">Read more</a>
				<span className="cd-date">{moment(createdAt).toString()}</span>
			</div>
		</div>
	);
};