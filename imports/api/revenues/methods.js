import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';

import Revenues from './revenues';

export const addWeeklyRevenue = new ValidatedMethod({
	name: 'Revenues.methods.addWeeklyRevenue',
	validate: Revenues.Schema.validator(),
	run({ revenue, accomplishment, problem, createdAt }) {
		const { userId } = this;

		const latestRevenue = Revenues.find({ userId }).count() > 0
			? Revenues.findOne({ userId, createdAt: { $lte: new Date() } }, { sort: { createdAt: -1 } })
			: { revenue: 0 };

		return Revenues.insert({ revenue, accomplishment, problem, createdAt, userId });
	},
});

export const reset = new ValidatedMethod({
	name: 'Revenues.methods.reset',
	validate(args) { check(args, {}) },
	run({}) {
		return Revenues.remove({ userId: this.userId });
	},
});