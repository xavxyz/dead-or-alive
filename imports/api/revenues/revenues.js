import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Users from '../users/users';

const Revenues = new Mongo.Collection('revenues');

Revenues.Schema = new SimpleSchema({
  revenue: { type: Number },
  accomplishment: { type: String },
  createdAt: { type: Date },
});

Revenues.before.insert((userId, doc) => {

  const latest = Revenues.find({ userId }).count() > 0
    ? Revenues.findOne({ userId, createdAt: { $lte: new Date() } }, { sort: { createdAt: -1 } })
    : { revenue: 0 };

  const alive = doc.revenue > latest.revenue;
  Users.update({ _id: userId }, { $set: { alive } });
});

export default Revenues;