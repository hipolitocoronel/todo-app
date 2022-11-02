const taskRouter = require("express").Router();
const {
    addTask,
    getTasks,
    removeTask,
    updateTask,
} = require("../controllers/task");

taskRouter.get("/", getTasks);
taskRouter.post("/", addTask);
taskRouter.put("/", updateTask);
taskRouter.delete("/:id", removeTask);

module.exports = taskRouter;
