import React from 'react';
import { moment } from 'meteor/momentjs:moment';

export const Card = ({revenue, accomplishment, problem, createdAt, status}) => {

	return (
		<li className="list-group-item tweet">
			<h5 className="tweet-author">{ revenue } € generated <span className="author-info">{moment(createdAt).fromNow()}</span></h5>
			<p className="list-group-item-text">Accomplishment: {accomplishment}</p>
		</li>
	);
};