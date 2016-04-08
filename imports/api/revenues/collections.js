import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const Revenues = new Meteor.Collection('revenues');

Revenues.Schema = new SimpleSchema({
  revenue: { type: Number },
  accomplishment: { type: String },
  problem: { type: String },
  createdAt: { type: Date },
  userId: { type: String }
});

export default Revenues;