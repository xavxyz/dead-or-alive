import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Revenues from './collections';

import { getLocalLifeStatus } from './actions/getLifeStatus';

export const addWeeklyRevenue = new ValidatedMethod({
	name: 'Revenues.methods.addWeeklyRevenue',
	validate: new SimpleSchema({
		revenue: { type: Number },
		createdAt: { type: Date },
	}).validator(),
	run({ revenue, createdAt }) {
		if (Meteor.isServer) {
			const { userId } = this;

			const latestRevenue = Revenues.find({ userId }).count() > 0
				? Revenues.findOne({ userId, createdAt: { $lte: new Date() } }, { sort: { createdAt: -1 } })
				: { revenue: 0 };

			const status = getLocalLifeStatus(revenue, latestRevenue.revenue);

			Revenues.insert({ revenue, createdAt, status, userId });
		}
	},
});
