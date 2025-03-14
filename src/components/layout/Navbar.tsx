import { NavLink } from "react-router-dom";
import SearchDialog from "../custom/SearchDialog";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-3 border-b flex items-center justify-between">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-semibold">YOUTUBE</h1>
        <div className="flex items-center gap-3 text-[0.84rem]">
          <NavLink to="/category/music" className="text-muted-foreground hover:text-primary transition-all duration-200">Music</NavLink>
          <NavLink to="/category/gaming" className="text-muted-foreground hover:text-primary transition-all duration-200">Gaming</NavLink>
          <NavLink to="/category/technology" className="text-muted-foreground hover:text-primary transition-all duration-200">Technology</NavLink>
          <NavLink to="/category/education" className="text-muted-foreground hover:text-primary transition-all duration-200">Education</NavLink>
          <NavLink to="/category/sports" className="text-muted-foreground hover:text-primary transition-all duration-200">Sports</NavLink>
          <NavLink to="/category/entertainment" className="text-muted-foreground hover:text-primary transition-all duration-200">Entertainment</NavLink>
        </div>
      </div>
      {/* search */}
      <div className="flex items-center gap-3">
        <SearchDialog />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
