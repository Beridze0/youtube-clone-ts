import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CircleUserRound, EllipsisVertical } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border border-accent px-5">
        <div>
            <h1>VIDEOWEB</h1>
        </div>
        <Dialog>
        <DialogTrigger>
            <Input placeholder="Search..." type="search" className="cursor-pointer w-[30rem]" />
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>What do you want to search?</DialogTitle>
            <DialogDescription>
                Enter keywords related to the video you're looking for. You can
                search by title, category, or creator name.
            </DialogDescription>
            </DialogHeader>
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
