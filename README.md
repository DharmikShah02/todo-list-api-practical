# todo-list-api-practical
Practical for creating to do tasks crud operation with authentication.

Task:
You are required to create a Todo List REST API using Node.js, ExpressJS, Mongoose, MongoDB, and TypeScript. The API should allow users to perform CRUD operations on todo items, and it should also implement a CRON job to automatically update the status of expired todo items.

Requirements:
1. Authentication:
Users should be able to sign up with an email and password.
Users should be able to log in using their email and password to obtain an access token.
Access to the CRUD operations should be protected and require a valid access token.
2. CRUD Operations for Todo Items:
Each todo item should have the following properties: title, description, dueDate, completed (a boolean indicating if the todo is completed), and user (to associate the todo item with the user who created it).
Users should be able to create, read, update, and delete their own todo items.
3. CRON Job:
Implement a CRON job that runs every day at midnight (or any other suitable interval) to automatically mark todo items with an expired due date as completed.
