import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addSearchQuery, fetchVideos } from "@/redux/searchSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { History } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchDialog = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const searchArray = useSelector((state: RootState) => state.search.searchArray);
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    dispatch(addSearchQuery(input));
    dispatch(fetchVideos(input)); 
    navigate(`/search/${input}`)
    setInput("");
  };

  useEffect(() => {
    console.log("Updated Search History:", searchArray);
  }, [searchArray]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center border w-[250px] py-[0.25rem] px-2 rounded-md gap-1.5 text-muted-foreground hover:text-primary hover:bg-secondary cursor-pointer transition-all duration-200">
          <p className="text-[0.84rem] ml-1.5">Search for video...</p>
        </div>
      </DialogTrigger>
      <DialogContent className="m-0 outline-none px-1 py-3 gap-3 flex flex-col">
        <DialogHeader>
          <DialogTitle />
          <form onSubmit={handleSearch} className="border-b w-full">
            <input
              type="text"
              placeholder="Search for video..."
              className="text-sm pb-2 px-2 w-full outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </DialogHeader>

        <div className="px-2">
          <div className="flex items-center gap-1 mb-1">
            <p className="text-[0.96rem] mb-0.5">Search history</p>
            <History size={17} />
          </div>
          {searchArray.length === 0 ? (
            <p className="text-muted-foreground text-sm">No search history</p>
          ) : (
            searchArray.map((query, index) => (
              <p
                key={index}
                className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 cursor-pointer"
              >
                {query}
              </p>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
