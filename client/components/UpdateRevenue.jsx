import React from 'react';

import { addWeeklyRevenue } from '../../lib/methods';

const addRevenueThisWeek = (event) => {
	event.preventDefault();
	addWeeklyRevenue.call({ revenue: parseInt(event.target.revenue.value), createdAt: new Date() });
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