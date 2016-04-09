import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export const Card = ({revenue, accomplishment, problem, createdAt}) => {
	return (
		<div className="cd-timeline-content">
			<h2>{revenue} € generated</h2>
			<p>Accomplishment: {accomplishment}</p>
			<p>Problem: {problem}</p>
			<span className="cd-date">{moment(createdAt).fromNow()}</span>
		</div>
	);
};