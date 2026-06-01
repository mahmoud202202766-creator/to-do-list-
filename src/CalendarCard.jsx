import { useState, useEffect } from "react";

import AddButton from "./AddButton";
import Header from "./Header";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
const CalendarCard = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onAdd = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const onDelete = (id) => {
    const listItems = tasks.filter((task) => task.id !== id);
    setTasks(listItems);
  };

  const onUpdate = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    );
  };
  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="my-8 w-md mx-auto bg-white">
      <Header search={search} setSearch={setSearch} />
      <main>
        {tasks.length ? (
          <TaskList
            tasks={tasks.filter((task) =>
              task.title.toLowerCase().includes(search.toLowerCase()),
            )}
            onDelete={onDelete}
            setIsUpdate={setIsUpdate}
            setIsOpen={setIsOpen}
            setSelectedTask={setSelectedTask}
            onToggle={onToggle}
          />
        ) : null}
        <AddButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <AddTaskModal
        key={selectedTask?.id ?? "new"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onAdd={onAdd}
        onUpdate={onUpdate}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default CalendarCard;
