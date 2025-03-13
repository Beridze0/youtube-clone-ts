import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { History } from "lucide-react";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center border w-[230px] py-[0.35rem] px-2 rounded-lg gap-1.5 text-muted-foreground hover:text-primary hover:bg-secondary cursor-pointer transition-all duration-200">
          <p className="text-[0.84rem] ml-1.5">Search for video...</p>
        </div>
      </DialogTrigger>
      <DialogContent className="m-0 outline-none px-1 py-3 gap-3 flex flex-col">
        <div className="border-b w-full">
          <input
            type="text"
            placeholder="Search for video..."
            className="text-sm pb-2 px-2 w-full outline-none"
          />
        </div>
        <div className="px-2">
          <div className="flex items-center gap-1 mb-1">
            <p className="text-[0.96rem] mb-0.5">Search history</p>
            <History size={17} />
          </div>
          <p className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer">
            Top 10 tech gadgets 2024
          </p>
          <p className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer">
            How to edit videos in Premiere Pro
          </p>
          <p className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer">
            Best lo-fi music for studying
          </p>
          <p className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer">
            CS2 gameplay tips and tricks
          </p>
          <p className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer">
            Marvel movie timeline in order
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
