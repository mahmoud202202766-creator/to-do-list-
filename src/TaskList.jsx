import Task from "./Task";

const TaskList = ({
  tasks,
  onDelete,
  setIsUpdate,
  setIsOpen,
  setSelectedTask,
  onToggle,
}) => {
  return (
    <div className="bg-white  shadow-lg p-4 -translate-y-5 w-11/12 m-auto">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            setIsUpdate={setIsUpdate}
            setIsOpen={setIsOpen}
            setSelectedTask={setSelectedTask}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
