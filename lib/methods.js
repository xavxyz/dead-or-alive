import Revenues from './collections';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const addWeeklyRevenue = new ValidatedMethod({
	name: 'Revenues.methods.addWeeklyRevenue',
	validate: new SimpleSchema({
		revenue: { type: Number },
		createdAt: { type: Date }
	}).validator(),
	run ({revenue, createdAt}) {
		Revenues.insert({ revenue, createdAt });
	}
});