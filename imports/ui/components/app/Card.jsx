import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export const Card = ({revenue, accomplishment, problem, createdAt, status}) => {

	return (
		<div className="cd-timeline-content">
			<h2>{ revenue } € generated</h2>
			<p>Accomplishment: {accomplishment}</p>
			<p>Problem: { problem }</p>
			<img className="cd-timeline-gif" src={ status.image } title={ status.label } />
			<span className="cd-date">{ moment(createdAt).fromNow() }</span>
		</div>
	);
};