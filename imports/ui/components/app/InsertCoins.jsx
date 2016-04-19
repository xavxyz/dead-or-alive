import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class InsertCoins extends React.Component {
	constructor(props) {
		super(props);
		this.addRevenueThisWeek = this.addRevenueThisWeek.bind(this);
	}

	addRevenueThisWeek(event) {
		event.preventDefault();

		const weekly = {
			revenue: parseInt(event.target.revenue.value),
			accomplishment: event.target.accomplishment.value,
			createdAt: new Date(),
		};

		Meteor.call('Revenues.methods.addWeeklyRevenue', weekly, (err) => {
			if (err) {
				throw new Meteor.Error(err);
			}
		});
	};

	render() {
		return (
			<div className="panel-footer">
				<form id="revenueForm" onSubmit={ this.addRevenueThisWeek }>
					<input type="number" name="revenue" className="form-control revenue-input" placeholder="New revenue" />
					<input type="text" name="accomplishment" className="form-control revenue-input" placeholder="Accomplishment" />
					<div className="row">
						<input type="submit" className="btn btn-warning btn-xs pull-right revenue-btn" value="Insert Coins" />
					</div>
				</form>
			</div>
		);
	}
};