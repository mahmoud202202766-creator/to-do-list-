import { useState } from "react";

import AddButton from "./AddButton";
import Header from "./Header";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
const CalendarCard = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onAdd = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const onDelete = (id) => {
    const listItems = tasks.filter((task) => task.id !== id);
    setTasks(listItems);
  };

  
  return (
    <div className="my-8 w-md mx-auto bg-white">
      <Header />
      <main>
        {tasks.length ? <TaskList tasks={tasks} onDelete={onDelete} /> : null}
        <AddButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} onAdd={onAdd} />
    </div>
  );
};

export default CalendarCard;
