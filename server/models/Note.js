import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Note = new Schema(
  {
    content: { type: String },
    reportedBy: { type: String },
    bug: { type: ObjectId, ref: "Bug" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;
