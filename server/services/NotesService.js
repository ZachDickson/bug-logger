import mongoose from "mongoose";
import Notes from "../models/Note";

const _repository = mongoose.model("Notes", Notes);

class NotesService {

  async getAll() {
    return await _repository.find({});
  }
  async findById(noteId) {
    return await _repository.findById(noteId);
  }
  async GetByBugId(bugId) {
    return await _repository.findById;
  }
  async create() {
    return await _repository.create();
  }
  async edit(noteId, update) {
    return await _repository.findByIdAndUpdate(noteId, update, { new: true });
  }
  async delete(noteId, update) {
    return await _repository.findByIdAndDelete(noteId, update);
  }

}

const bugsService = new NotesService();
export default bugsService;
