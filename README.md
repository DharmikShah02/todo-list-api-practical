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

Run project on Local machine :

1. Install Node Modules 
   npm i
2. Create the Environment File
   In the root directory of your project, create a file named .env and specify the necessary environment variables and their values,
   MONGODB_URI = "mongodb://127.0.0.1:27017/todo-practical" 
   PORT = 3000
   JWT_SECRET="Thinkwink_Practical" (can be any value)
3. Start the Local Development Server
   npm run dev


