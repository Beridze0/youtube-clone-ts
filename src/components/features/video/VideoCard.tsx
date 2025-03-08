import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { PlayCircle } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface VideoThumbnail {
  url: string;
}

interface VideoSnippet {
  channelTitle: string;
  title: string;
  thumbnails: {
    maxres: VideoThumbnail;
  };
}

interface VideoItem {
  snippet: VideoSnippet;
}

interface VideoCardProps {
  videos: VideoItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  const { open } = useSidebar();
  
  return (
    <NavLink to="/video/1">
      <Card
        className={cn(
          open ? "w-[317px]" : "w-[345px]",
          "h-[305px] rounded-lg overflow-hidden shadow-none border-none p-0 gap-[0.45rem] transition-all"
        )}
      >
        {/* Video Thumbnail */}
        <div className={cn(open ? "min-h-[210px]" : "min-h-[230px]", "relative w-full")}>
          <img
            src={videos.snippet.thumbnails.maxres?.url}
            alt="Video Thumbnail"
            className="w-full h-full object-fill rounded-lg"
          />
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 rounded-lg hover:opacity-100 transition-opacity cursor-pointer">
            <PlayCircle className="text-white w-12 h-12" />
          </div>
        </div>

        {/* Video Details */}
        <CardContent className="px-2 pb-3 flex flex-col gap-1 cursor-pointer">
          <CardTitle className="text-sm font-semibold leading-tight">
            {videos.snippet.title.slice(0, 100)}
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
