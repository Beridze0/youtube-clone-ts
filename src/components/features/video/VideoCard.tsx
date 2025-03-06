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

const VideoCard = () => {
  const { open } = useSidebar();

  return (
    <Card
      className={cn(
        open ? "w-[315px]" : "w-[340px]",
        "rounded-lg overflow-hidden shadow-md p-0 gap-2 transition-all"
      )}
    >
      {/* Video Thumbnail */}
      <div className="relative w-full h-[220px]">
        <img
          src={example}
          alt="Video Thumbnail"
          className="w-full h-full object-fill"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
          <PlayCircle className="text-white w-12 h-12" />
        </div>
      </div>

      {/* Video Details */}
      <CardContent className="px-2 pb-3 flex flex-col gap-1">
        <CardTitle className="text-base font-semibold leading-tight">
          How to Build a YouTube Clone with React & TypeScript
        </CardTitle>
        <CardDescription className="text-gray-500 text-xs mt-1">
          CodeWithMe • 1.2M views • 2 days ago
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
