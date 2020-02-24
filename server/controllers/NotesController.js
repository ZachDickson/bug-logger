import express from "express";
import NotesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll);
  }

  async getAll(req, res, next) {
    try {
      let data = await NotesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await NotesService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await NotesService.create()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await NotesService.edit(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await NotesService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
