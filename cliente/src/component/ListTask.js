import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

export default function ListTask({ tasks, removeAll, removeTask, updateTask }) {
    const filters = ["All", "Active", "Completed"];
    const [filter, setFilter] = useState("All");
    const [taskToShow, setTaskToShow] = useState(tasks);

    useEffect(() => {
        switch (filter) {
            case "Active":
                setTaskToShow(tasks.filter((task) => task.active));
                break;
            case "Completed":
                setTaskToShow(tasks.filter((task) => !task.active));
                break;
            default:
                setTaskToShow(tasks);
                break;
        }
    }, [filter, tasks]);

    return (
        <div className="bg-slate-100 md:px-32 lg:px-60 xl:px-80 h-screen px-6 dark:bg-dark">
            <div className=" rounded-md overflow-hidden relative -top-6">
                {taskToShow.length > 0
                    ? taskToShow.map((task) => (
                          <TaskItem
                              key={task.id}
                              task={task}
                              removeTask={removeTask}
                              updateTask={updateTask}
                          />
                      ))
                    : ""}
                <div className="px-5 py-4 bg-white flex justify-between text-slate-400 dark:bg-dark-100 dark:text-slate-500">
                    <p>{`${taskToShow.length} items left`}</p>
                    <p className="cursor-pointer" onClick={() => removeAll()}>
                        Clear Completed
                    </p>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-100 p-3 rounded-md -mt-2 flex justify-center space-x-3 font-semibold">
                {filters.map((fil) => (
                    <p
                        key={fil}
                        className={
                            fil === filter
                                ? "text-blue-600 cursor-pointer"
                                : "text-slate-400 dark:text-slate-500 cursor-pointer"
                        }
                        onClick={() => setFilter(fil)}
                    >
                        {fil}
                    </p>
                ))}
            </div>
        </div>
    );
}
