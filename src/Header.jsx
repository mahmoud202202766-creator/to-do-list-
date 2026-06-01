import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-linear-to-br from-[#4FC3F7] to-[#5B8DEF] text-white p-5">
      <form className="flex items-center bg-white/20 rounded-full px-4 py-2">
        <Search size={20} className="text-white/70" />
        <input
          className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-center"
          type="text"
          id="searchItem"
          placeholder="Search"
        />
      </form>
    </header>
  );
};

export default Header;
