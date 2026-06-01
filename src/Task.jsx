import { Trash2 } from "lucide-react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="group bg-white mb-3.5 shadow-lg flex justify-between items-center border-l-4 border-l-blue-700">
      <div className="m-3">
        <h2 className="text-xl mb-2">{task.title}</h2>
        <p>{task.subtitle}</p>
      </div>
      <div className="m-3 text-center">
        <p className="mb-2">{task.time}</p>
        <p>{task.rating}</p>
        <Trash2
          size={20}
          className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
