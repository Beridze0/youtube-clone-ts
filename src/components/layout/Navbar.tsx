
import {
  CircleUserRound,
  EllipsisVertical,
  Video,
} from "lucide-react";
import DialogCard from "../custom/DialogCard";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 px-5">
      <div className="flex items-center gap-1">
        <h1 className="text-base sm:text-xl">VIDEOWEB</h1>
        <Video size={30} />
      </div>

      <DialogCard />
      
      <div className="flex items-center gap-2">
        <EllipsisVertical size={18} className="sm:block hidden" />
        <div className="flex items-center border border-border py-1.5 px-3 rounded-2xl gap-1.5 cursor-pointer">
          <CircleUserRound size={18} className="" />
          <p className="text-sm">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
