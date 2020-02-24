import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Note = new Schema(
  {
    content: { type: String, required: true },
    reportedBy: { type: String, required: true },
    bugId: { type: ObjectId, ref: "Bug", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;
