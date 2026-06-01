import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-linear-to-br from-[#4FC3F7] to-[#5B8DEF] text-white p-5 flex flex-col gap-8">
      <form className="flex justify-center items-center bg-white/20 rounded-full px-4 py-2 gap-1 w-full">
        <Search size={20} className="text-white/70" />
        <input
          className="bg-transparent outline-none text-white placeholder:text-white/70 w-24"
          type="text"
          id="searchItem"
          placeholder="Search"
        />
      </form>
      <time className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-5xl font-bold">16</span>
          <div className="flex flex-col">
            <p className="text-white font-semibold">August</p>
            <p className="text-white/70 text-sm">2016</p>
          </div>
        </div>
        <p className="text-white">Monday</p>
      </time>
    </header>
  );
};

export default Header;
