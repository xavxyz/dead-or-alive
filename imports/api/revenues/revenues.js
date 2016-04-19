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
  let status = {};

  if (Revenues.find({ userId }).count() > 0) {
    const latest = Revenues.findOne({ userId, createdAt: { $lte: new Date() } }, { sort: { createdAt: -1 } });
    status = {
      growth: ((doc.revenue - latest.revenue) / latest.revenue * 100).toFixed(1),
      alive: doc.revenue > latest.revenue
    };
  } else {
    status = {
      growth: 100,
      alive: true
    };
  }

  Users.update({ _id: userId }, { $set: { status } });
});

Revenues.after.remove((userId, doc) => {
  const status = { growth: 0, alive: null };
  Users.update({ _id: userId }, { $set: { status } });
});

export default Revenues;