import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CircleUserRound, EllipsisVertical } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-accent px-5">
        <div>
            <h1>VIDEOWEB</h1>
        </div>
        <Dialog>
        <DialogTrigger>
            <div className="cursor-pointer w-[30rem] border border-accent outline outline-none shadow-none rounded-md hover:bg-secondary ">
                <Input className="border-none " placeholder="Search..." disabled />
            </div>
        </DialogTrigger>
        <DialogContent>
            <Input placeholder="Search for a video..." className="mt-5" />
            <DialogHeader>
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
