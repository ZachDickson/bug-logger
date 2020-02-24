import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(Id) {
    return await _repository.findById(Id);
  }
  async create(body) {
    return await _repository.create(body);
  }
  async edit(Id, update) {
    return await _repository.findByIdAndUpdate(Id, update, { new: true });
  }
  async delete(Id) {
    return await _repository.findByIdAndDelete(Id);
  }
}

const bugsService = new BugsService();
export default bugsService;
