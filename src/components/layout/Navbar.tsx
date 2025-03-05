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
            <Input
              placeholder="Search for a video..."
              className="flex items-center rounded-none border-transparent  shadow-none w-full"
            />
          </div>

          <DialogDescription className="px-3" style={{ fontSize: "0.8rem" }}>
            Enter keywords related to the video you're looking for. You can
            search by title, category, or creator name.
          </DialogDescription>
          <div className="px-3 pb-2 flex flex-col">
            <h1 className="mb-1 text-[1.05rem]">Search history</h1>
            <div className="text-sm flex flex-col gap-1">
              <p className="text-muted-foreground transition-all cursor-pointer duration-200 hover:text-primary">Top 10 tech gadgets 2024</p>
              <p className="text-muted-foreground transition-all cursor-pointer duration-200 hover:text-primary">
                How to edit videos in Premiere Pro
              </p>
              <p className="text-muted-foreground transition-all cursor-pointer duration-200 hover:text-primary">
                Best lo-fi music for studying
              </p>
              <p className="text-muted-foreground transition-all cursor-pointer duration-200 hover:text-primary">
                CS2 gameplay tips and tricks
              </p>
              <p className="text-muted-foreground transition-all cursor-pointer duration-200 hover:text-primary">
                Marvel movie timeline in order
              </p>
            </div>
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
