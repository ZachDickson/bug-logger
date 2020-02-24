import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema({

  closed: { type: Boolean, default: false, required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  reportedBy: { type: String, required: true },
  closedDate: { type: Date }

},
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;