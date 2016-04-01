import React from 'react';

import { addWeeklyRevenue } from '../../lib/methods';

const addRevenueThisWeek = (event) => {
	event.preventDefault();
	addWeeklyRevenue.call({
		revenue: parseInt(event.target.revenue.value),
		accomplishment: event.target.accomplishment.value,
		problem: event.target.problem.value,
		createdAt: new Date()
	});
};

export default UpdateStatus = () => {
	return (
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-gold">
				<i className="pointing up icon"></i>
			</div>

			<div className="cd-timeline-content">
				<h2 className="ui header">Revenues this week</h2>
				<form onSubmit={addRevenueThisWeek}>
					<div className="ui small equal width form">
						<div className="required field">
							<label>Weekly Revenue</label>
							<input type="number" name="revenue" />
						</div>
						<div className="field">
							<label>Major accomplishment this week?</label>
							<input type="text" name="accomplishment" />
						</div>
						<div className="field">
							<label>What is the main problem you are going to tackle next?</label>
							<input type="text" name="problem" />
						</div>
					</div>
					<button className="ui submit button positive centered" style={{ marginTop: '10px' }}>Submit</button>
				</form>
				<span className="cd-date">This week</span>
			</div>
		</div>
	);
}