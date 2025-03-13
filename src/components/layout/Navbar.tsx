import SearchDialog from "../custom/SearchDialog";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <h1>YOUTUBE</h1>
      </div>
      {/* search */}
      <div>
        <SearchDialog />
      </div>
    </div>
  );
};

export default Navbar;
