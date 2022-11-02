const express = require("express");
const app = express();
const cors = require("cors");
const taskRouter = require("./routes/task");

app.use(express.json());
app.use(cors())
app.use(express.static('build'));

app.use("/api/tasks", taskRouter);

module.exports = app;
