import SearchItem from "./SearchItem";
import DateDisplay from "./DateDisplay";
const Header = () => {
  return (
    <header className="bg-linear-to-br from-[#4FC3F7] to-[#5B8DEF] text-white p-5 flex flex-col gap-8">
      <SearchItem />
      <DateDisplay />
    </header>
  );
};

export default Header;
