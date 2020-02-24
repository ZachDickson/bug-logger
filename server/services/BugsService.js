import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async findById(bugId) {
    return await _repository.findById(bugId);
  }
  async create() {
    return await _repository.create();
  }
  async edit(bugId, update) {
    return await _repository.findByIdAndUpdate(bugId, update, { new: true });
  }
  async delete(bugId, update) {
    return await _repository.findByIdAndDelete(bugId, update);
  }
}

const bugsService = new BugService();
export default bugsService;
