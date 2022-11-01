import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";

export default function TaskItem({ task, removeTask, updateTask }) {
    return (
        <div className="bg-white border-b border-slate-100 p-4 dark:bg-dark-100 dark:border-slate-600  dark:text-slate-400 flex items-center space-x-3">
            <span
                className="rounded-full border w-5 h-5 dark:border-slate-600 cursor-pointer"
                onClick={() => updateTask({ ...task, active: !task.active })}
            >
                <img
                    className={"w-full h-full p-05 ".concat(
                        task.active && "hidden"
                    )}
                    src={iconCheck}
                    alt="Icon Check"
                />
            </span>
            <p className={"grow ".concat(!task.active && "line-through")}>
                {task.task}
            </p>
            <img
                className="w-3 cursor-pointer"
                src={iconCross}
                alt="Icon Cross"
                onClick={() => removeTask(task.id)}
            />
        </div>
    );
}
