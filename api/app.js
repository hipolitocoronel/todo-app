const express = require("express");
const app = express();
const taskRouter = require("./routes/task");

app.use(express.json());
app.use("/api/tasks", taskRouter);

module.exports = app;
