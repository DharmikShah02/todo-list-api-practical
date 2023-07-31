import { Request, Response } from "express";
import { Todo } from "../models/todo.models";


//create todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, completed } = req.body;
    const createdBy = req.body.userId;

    const newTodo = await Todo.create({
      title,
      description,
      dueDate,
      completed,
      createdBy,
    });
    res.json({ messsage: "Todo Created Successfully", newTodo });
  } catch (error) {
    console.error("Error creating a Todo item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get all todo
export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const createdBy = req.body.userId;

    const todos = await Todo.find({ createdBy });
    res.json({
      message: "All todos Fetched Successfully",
      TotalTodos: todos.length,
      todos,
    });
  } catch (error) {
    console.error("Error fetching Todo items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get todo by id
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const createdBy = req.body.userId;

    const todo = await Todo.findOne({ _id: id, createdBy });
    if (!todo) {
      return res.status(404).json({ message: "Todo item not found" });
    }

    res.json({ message: "Todo by it's id Fetched Successfully", todo });
  } catch (error) {
    console.error("Error fetching a Todo item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const createdBy = req.body.userId;
    const { title, description, dueDate, completed } = req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, createdBy },
      { title, description, dueDate, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo item not found" });
    }

    res.json({ message: "Todo updated successfully", updatedTodo });
  } catch (error) {
    console.error("Error updating a Todo item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const createdBy = req.body.userId;

    const deletedTodo = await Todo.findOneAndDelete({ _id: id, createdBy });

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo item not found" });
    }

    res.json({ message: "Todo item deleted successfully" });
  } catch (error) {
    console.error("Error deleting a Todo item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
