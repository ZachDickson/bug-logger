import mongoose from "mongoose";
import Notes from "../models/Note";

const _repository = mongoose.model("Notes", Notes);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }
}

const bugsService = new NotesService();
export default bugsService;
