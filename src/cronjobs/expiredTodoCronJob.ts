import { Todo } from "../models/todo.models";
import cron from "node-cron";

const markExpiredTodosAsCompleted = async () => {
  try {
    const currentDate = new Date();
    await Todo.updateMany(
      { dueDate: { $lte: currentDate }, completed: false },
      { completed: true }
    );
  } catch (error) {
    console.error("Error in CRON job:", error);
  }
};

// for every 2 minutes
//cron.schedule("*/2 * * * *", markExpiredTodosAsCompleted);

// Schedule the CRON job to run every day at midnight
cron.schedule("0 0 0 * * *", markExpiredTodosAsCompleted);
