import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { PlayCircle } from "lucide-react";
import example from "@/assets/example.jpg";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const VideoCard = ({ videos }) => {
  const { open } = useSidebar();

  return (
    <NavLink to='/video/1'>
      <Card
        className={cn(
          open ? "w-[317px]" : "w-[345px]",
          "h-[305px] rounded-lg overflow-hidden shadow-md p-0 gap-2 transition-all"
        )}
      >
        {/* Video Thumbnail */}
        <div
          className={cn(open ? "min-h-[210px]" : "min-h-[230px]", "relative w-full")}
        >
          <img
            src={videos.snippet.thumbnails.maxres.url}
            alt="Video Thumbnail"
            className="w-full h-full object-fill"
          />
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            <PlayCircle className="text-white w-12 h-12" />
          </div>
        </div>

        {/* Video Details */}
        <CardContent className="px-2 pb-3 flex flex-col gap-1 cursor-pointer">
          <CardTitle className="text-sm font-semibold leading-tight">
            {videos.snippet.localized.title.slice(0,100)}
          </CardTitle>
          <CardDescription className="text-gray-500 text-[0.7rem] mt-1">
            {videos.snippet.channelTitle} • 1.2M views • 2 days ago
          </CardDescription>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default VideoCard;
