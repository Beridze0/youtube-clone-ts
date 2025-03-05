import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { CircleUserRound, EllipsisVertical, Search } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-border px-5">
        <div>
            <h1>VIDEOWEB</h1>
        </div>
        <Dialog>
        <DialogTrigger>
            <div className="cursor-pointer w-[30rem] border border-border outline outline-none shadow-none rounded-md hover:bg-secondary ">
                <Input className="border-none " placeholder="Search..." disabled />
            </div>
        </DialogTrigger>
        <DialogContent className="p-0 py-1.5">
            <div className="flex items-center w-full border border-transparent border-b-border">
                
            <Search size={18} className="ml-2.5" />
            <Input placeholder="Search for a video..." className="flex items-center rounded-none border-transparent  shadow-none w-full" />
            </div>
            
            <DialogDescription className="px-3">
                Enter keywords related to the video you're looking for. You can
                search by title, category, or creator name.
            </DialogDescription>
            <div>
                <p></p>
            </div>
        </DialogContent>
        </Dialog>
        <div>
            <EllipsisVertical />
            <div>
                <CircleUserRound />
                <p>Sign in</p>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
