const DateDisplay = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  const weekday = now.toLocaleString("en-US", { weekday: "long" });
  return (
    <time className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-6xl font-bold">{day}</span>
        <div className="flex flex-col">
          <p className="text-white font-semibold text-xl">{month}</p>
          <p className="text-white/70 text-base">{year}</p>
        </div>
      </div>
      <p className="text-white text-base">{weekday}</p>
    </time>
  );
};

export default DateDisplay;
