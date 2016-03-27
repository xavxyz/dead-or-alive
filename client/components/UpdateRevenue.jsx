import React from 'react';

import Revenues from '../../lib/collections';

const addRevenueThisWeek = (event) => {
	event.preventDefault();
	Revenues.insert({
		createdAt: new Date(),
		revenue: parseInt(event.target.revenue.value)
	});
};

export default UpdateRevenue = () => {
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