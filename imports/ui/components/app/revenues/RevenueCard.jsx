import React from 'react';
import moment from 'moment';

export const RevenueCard = ({ revenue, accomplishment, createdAt, icon = "fa fa-heartbeat" }) => {

	return (
		<li className="list-group-item revenue">
			<div className="revenue-icon">
				<i className={ icon }></i>
			</div>
			<div className="revenue-content">
				<h5 className="revenue-author">{ revenue } € generated <span className="author-info">{moment(createdAt).fromNow()}</span></h5>
				<p className="list-group-item-text">Accomplishment: {accomplishment}</p>
			</div>
		</li>
	);
};