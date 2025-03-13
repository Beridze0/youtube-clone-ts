import SearchDialog from "../custom/SearchDialog";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <div>
      <div>
        <SidebarTrigger className="cursor-pointer" />
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
