import { useState } from "react";

import AddButton from "./AddButton";
import Header from "./Header";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
const CalendarCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8 w-md mx-auto bg-white">
      <Header />
      <main>
        <TaskList />
        <AddButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <AddTaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CalendarCard;
