import { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, History } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { AppDispatch } from "@/redux/store";
import { fetchVideosForSearch } from "@/redux/searchSlice";

const DialogCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      dispatch(fetchVideosForSearch(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center pr-2.5 cursor-pointer sm:w-[30rem] w-[20rem] border border-border outline-none shadow-none rounded-2xl hover:bg-secondary">
          <Input
            className="border-none outline-none"
            placeholder="Search..."
            disabled
          />
          <Search size={21} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 py-1.5">
        {/* Search Input */}
        <div className="flex items-center w-full border-b border-border">
          <Search size={18} className="ml-2.5" />
          <Input
            placeholder="Search for a video..."
            className="flex items-center rounded-none border-transparent shadow-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch} // Trigger search on Enter
          />
        </div>

        <DialogDescription className="px-3 text-sm">
          Enter keywords related to the video you're looking for. You can search
          by title, category, or creator name.
        </DialogDescription>

        {/* Search History */}
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
