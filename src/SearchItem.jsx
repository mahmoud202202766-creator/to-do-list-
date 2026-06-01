import { Search } from "lucide-react";

const SearchItem = () => {
  return (
    <form className="flex justify-center items-center bg-white/20 rounded-full px-4 py-2 gap-1 w-full">
      <Search size={20} className="text-white/70" />
      <input
        className="bg-transparent outline-none text-white placeholder:text-white/70 w-24"
        type="text"
        id="searchItem"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchItem;
