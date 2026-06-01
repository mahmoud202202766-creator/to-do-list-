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
  // const tasks = [
  //   {
  //     id: 1,
  //     title: "Meeting",
  //     subtitle: "Room 408, east 2 layer",
  //     time: "10:30",
  //     color: "blue",
  //     rating: 1,
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Do exercise",
  //     subtitle: "Call the coach",
  //     time: "19:00",
  //     color: "yellow",
  //     rating: 0,
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Movie",
  //     subtitle: "Take a bunch of flowers",
  //     time: "20:00",
  //     color: "purple",
  //     rating: 0,
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Check email",
  //     subtitle: "",
  //     time: "22:00",
  //     color: "green",
  //     rating: 0,
  //     completed: false,
  //   },
  // ];

  return (
    <div className="my-8 w-md mx-auto bg-white">
      <Header />
      <main>
        <TaskList tasks={tasks} />
        <AddButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} onAdd={onAdd} />
    </div>
  );
};

export default CalendarCard;
