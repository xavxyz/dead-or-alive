import React from 'react';

import { addWeeklyRevenue } from '/imports/api/revenues/methods';

export default class InsertCoins extends React.Component {

	addRevenueThisWeek(event) {
		event.preventDefault();

		const weekly = {
			revenue: parseInt(event.target.revenue.value),
			accomplishment: event.target.accomplishment.value,
			createdAt: new Date()
		};

		addWeeklyRevenue.call(weekly, (err, revenueId) => {
			if (err) {
				throw new Meteor.Error(err);
			}
		});
	};

	render() {
		return (
			<div className="panel-footer">
				<form id="tweetForm" onSubmit={this.addRevenueThisWeek.bind(this)}>
					<input type="number" name="revenue" className="form-control tweet-text" placeholder="New revenue" />
					<input type="text" name="accomplishment" className="form-control tweet-text" placeholder="Accomplishment" />
					<div className="row">
						<input type="submit" className="btn btn-warning btn-xs pull-right tweet-btn" value="Insert Coins" />
					</div>
				</form>
			</div>
		);
	}
};