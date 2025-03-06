import example from "@/assets/example.jpg";
import { PersonStanding, ThumbsDown, ThumbsUp } from "lucide-react";

const VideoPage = () => {
  return (
    <div className="flex">
      {/* Video side */}
      <div className="flex-1/2">
        <div className="w-[850px] h-[550px] ">
          <img
            src={example}
            alt="example"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-semibold">
          How to Build a YouTube Clone with React & TypeScript
        </h1>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <PersonStanding className="border border-border size-10 rounded-full " />
            <div className="">
              <p className="text-[0.95rem] font-semibold"> CodeWithMe</p>
              <p className="text-xs text-muted-foreground">1M subscribers</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <ThumbsUp />
              12.3K Likes
            </div>
            <div className="flex items-center">
              <ThumbsDown />
              13 Dislikes
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1/2">
asdaskdnasodnasodnaosdasdasbdsa
      </div>
    </div>
  );
};

export default VideoPage;
