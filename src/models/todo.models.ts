//creating todo Model for Todos
import { Schema, model, Document } from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  createdBy: Schema.Types.ObjectId;
}

const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Todo = model<ITodo>("Todo", todoSchema);
