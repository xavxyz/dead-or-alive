import React from 'react';

import { addWeeklyRevenue } from '/imports/api/revenues/methods';

const addRevenueThisWeek = (event) => {
	event.preventDefault();
	addWeeklyRevenue.call({
		revenue: parseInt(event.target.revenue.value),
		accomplishment: event.target.accomplishment.value,
		problem: event.target.problem.value,
		createdAt: new Date()
	});
};

export const UpdateStatusPage = () => {
	return (
		<div className="ui container">
			<h2 className="ui header">Revenues this week</h2>
			<form onSubmit={addRevenueThisWeek} className="ui small equal width form">
				<div className="ui stackable three column grid">
					<div className="column">
						<div className="required field">
							<label>Weekly Revenue</label>
							<input type="number" name="revenue" />
						</div>
					</div>
					<div className="column">
						<div className="field">
							<label>How will you increase next revenues?</label>
							<input type="text" name="problem" />
						</div>
					</div>
					<div className="column">
						<div className="field">
							<label>Major accomplishment this week?</label>
							<input type="text" name="accomplishment" />
						</div>
					</div>
				</div>
				<button className="ui submit button positive centered" style={{ marginTop: '10px' }}>Submit</button>
			</form>
		</div>
	);
}