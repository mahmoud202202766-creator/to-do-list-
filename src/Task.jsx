const Task = ({ task }) => {
  return (
    <div className="bg-white mb-3.5 shadow-lg flex justify-between items-center border-l-4 border-l-blue-700">
      <div className="m-3">
        <h2 className="text-xl mb-2">{task.title}</h2>
        <p>{task.subtitle}</p>
      </div>
      <div className="m-3 text-center">
        <p className="mb-2">{task.time}</p>
        <p>{task.rating}</p>
      </div>
    </div>
  );
};

export default Task;
