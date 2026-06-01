import { Trash2, Pencil, Check, Shield } from "lucide-react";

const Task = ({
  task,
  onDelete,
  onToggle,
  setIsUpdate,
  setIsOpen,
  setSelectedTask,
}) => {
  return (
    <div className="group relative bg-white mb-3.5 shadow-lg flex justify-between items-center border-l-4 border-l-blue-700">
      <div
        onClick={() => onToggle(task.id)}
        className={`absolute top-2 right-2 cursor-pointer ${
          task.completed ? "text-blue-500" : "text-gray-200"
        }`}
      >
        <Shield size={22} className="fill-current" />
        {task.completed && (
          <Check size={12} className="text-white absolute top-1.25 left-1.25" />
        )}
      </div>

      <div className="m-3">
        <h2
          className={`text-xl mb-2 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.title}
        </h2>
        <p className={task.completed ? "text-gray-300" : ""}>{task.subtitle}</p>
      </div>

      <div className="m-3 text-center mr-8">
        <p className="mb-2">{task.time}</p>
        <p>{task.rating}</p>
        <div className="flex gap-2 justify-center items-center">
          <Trash2
            size={20}
            className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer m-2.5"
            onClick={() => onDelete(task.id)}
          />
          <Pencil
            size={20}
            className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => {
              setIsOpen(true);
              setIsUpdate(true);
              setSelectedTask(task);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
