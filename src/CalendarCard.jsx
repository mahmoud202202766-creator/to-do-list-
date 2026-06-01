import AddButton from "./AddButton";
import Header from "./Header";
import TaskList from "./TaskList";
const CalendarCard = () => {
  return (
    <div className="my-8 w-md mx-auto bg-white">
      <Header />
      <main>
        <TaskList />
        <AddButton />
      </main>
    </div>
  );
};

export default CalendarCard;
