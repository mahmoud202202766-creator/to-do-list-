const AddButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-blue-400 text-3xl mx-auto my-4 cursor-pointer"
    >
      +
    </button>
  );
};

export default AddButton;
