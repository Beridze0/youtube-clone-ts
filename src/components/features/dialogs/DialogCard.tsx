import { Search, History } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../../ui/dialog";

import { Input } from "../../ui/input";

const DialogCard = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center pr-2.5 cursor-pointer sm:w-[30rem] w-[20rem] border border-border outline outline-none shadow-none rounded-md hover:bg-secondary ">
          <Input className="border-none outline-none" placeholder="Search..." disabled />
          <Search size={21} />
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
          Enter keywords related to the video you're looking for. You can search
          by title, category, or creator name.
        </DialogDescription>
        <div className="px-3 pb-2 flex flex-col">
          <h1 className="mb-1 text-[1.05rem] flex gap-2.5 items-center">
            Search history
            <History size={17} />
          </h1>
          <div className="text-sm flex flex-col gap-1">
            <p className="text-muted-foreground flex items-center gap-1 transition-all cursor-pointer duration-200 hover:text-primary">
              <Search size={17} /> Top 10 tech gadgets 2024
            </p>
            <p className="text-muted-foreground flex items-center gap-1 transition-all cursor-pointer duration-200 hover:text-primary">
              <Search size={17} /> How to edit videos in Premiere Pro
            </p>
            <p className="text-muted-foreground flex items-center gap-1 transition-all cursor-pointer duration-200 hover:text-primary">
              <Search size={17} /> Best lo-fi music for studying
            </p>
            <p className="text-muted-foreground flex items-center gap-1 transition-all cursor-pointer duration-200 hover:text-primary">
              <Search size={17} /> CS2 gameplay tips and tricks
            </p>
            <p className="text-muted-foreground flex items-center gap-1 transition-all cursor-pointer duration-200 hover:text-primary">
              <Search size={17} /> Marvel movie timeline in order
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCard;
