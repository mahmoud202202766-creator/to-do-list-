import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="bg-white  shadow-lg p-4 -translate-y-5 w-11/12 m-auto">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default TaskList;
