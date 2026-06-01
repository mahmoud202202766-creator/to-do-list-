import { useState } from "react";
import { X } from "lucide-react";

const AddTaskModal = ({ isOpen, onAdd, setIsOpen }) => {
  const [task, setTask] = useState({
    title: "",
    subtitle: "",
    time: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-72 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-700">Add New Task</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Title</label>
            <input
              type="text"
              placeholder="Task title"
              className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 text-sm"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Subtitle</label>
            <input
              type="text"
              placeholder="Details"
              className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 text-sm"
              value={task.subtitle}
              onChange={(e) => setTask({ ...task, subtitle: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Time</label>
            <input
              type="time"
              className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 text-sm"
              value={task.time}
              onChange={(e) => setTask({ ...task, time: e.target.value })}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!task.title.trim()) return;
              setIsOpen(false);
              onAdd(task);
              setTask({ title: "", subtitle: "", time: "" });
            }}
            className="flex-1 py-2 rounded-xl bg-blue-400 text-white text-sm font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
