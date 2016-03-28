import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Revenues from './collections';

import { getLocalLifeStatus } from './actions/getLifeStatus';

export const addWeeklyRevenue = new ValidatedMethod({
	name: 'Revenues.methods.addWeeklyRevenue',
	validate: new SimpleSchema({
		revenue: { type: Number },
		createdAt: { type: Date }
	}).validator(),
	run ({revenue, createdAt}) {

		const latestRevenue = Revenues.find().count() > 0 ? Revenues.findOne({createdAt: {$lte: new Date()}}, {sort: {createdAt: -1}}) : { revenue: 0 };

		const status = getLocalLifeStatus(revenue, latestRevenue.revenue);

		Revenues.insert({ revenue, createdAt, status });
	}
});