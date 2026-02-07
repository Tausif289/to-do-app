const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ _id: -1 });
  res.json(todos);
});

// ADD todo
router.post("/", async (req, res) => {
  const { title, date, time } = req.body;

  const newTodo = new Todo({ title, date, time });
  await newTodo.save();

  res.json(newTodo);
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

// TOGGLE complete
router.put("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();

  res.json(todo);
});

module.exports = router;
