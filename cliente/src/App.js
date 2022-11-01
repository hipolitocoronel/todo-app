import { useEffect, useState } from "react";
import Header from "./component/Header";
import ListTask from "./component/ListTask";
import taskService from "./services/task";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        taskService
            .getAll()
            .then((initialTasks) => setTasks(initialTasks))
            .catch((error) => console.log("error: ", error));
    }, []);

    const handlePressEnter = (e) => {
        if (e.key === "Enter") {
            taskService
                .create({ task: newTask, active: true })
                .then((returnedTask) => {
                    setTasks([...tasks, returnedTask]);
                    setNewTask("");
                })
                .catch((error) => console.log("error: ", error));
        }
    };

    const removeTask = (id) => {
        taskService
            .deleteTask(id)
            .then(() => setTasks(tasks.filter((task) => task.id !== id)))
            .catch((error) => console.log("error: ", error));
    };

    const removeAll = () => {
        tasks.forEach((task) => {
            console.log(task);
            removeTask(task.id);
        });

        setTasks(tasks.splice(0, tasks.length));
    };

    const updateTask = (task) => {
        const { id } = task;
        taskService
            .update(id, task)
            .then((returnedTask) =>
                setTasks(
                    tasks.map((task) => (task.id !== id ? task : returnedTask))
                )
            )
            .catch((error) => console.log("error: ", error));
    };

    return (
        <div className={"font-josefin ".concat(darkMode ? "dark" : " ")}>
            <Header
                handleDarkMode={setDarkMode}
                darkMode={darkMode}
                setNewTask={setNewTask}
                setTasks={setTasks}
                handlePressEnter={handlePressEnter}
                newTask={newTask}
            />
            <ListTask
                tasks={tasks}
                removeAll={removeAll}
                removeTask={removeTask}
                updateTask={updateTask}
            />
        </div>
    );
}

export default App;
