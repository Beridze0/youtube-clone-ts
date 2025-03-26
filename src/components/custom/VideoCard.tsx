import { Card, CardContent } from "@/components/ui/card";
import example from "@/assets/example.jpg";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface Snippet {
  title: string
  channelTitle: string
  publishedAt: string
  thumbnails: {
    high: {
      url: string
    }
  }
}

interface Video{
  etag: string
  snippet: Snippet
}

interface VideoCardProps {
  video: Video
}

const VideoCard: React.FC<VideoCardProps> = ( {video} ) => {

  console.log(video);
  
  const { open } = useSidebar()

  return (
    <NavLink to={`video/${video.etag}`}>
      <Card className="p-0 rounded-none border-none w-fit bg-transparent shadow-none">
        <CardContent className="p-0 ">
          <div className={cn("w-[338px] h-[195px]", open && "w-[310px] h-[180px]")}>
            <img src={video.snippet.thumbnails.high.url} alt="Image" className="w-full h-full rounded-md object-cover" />
          </div>
          <div className="px-2 mt-1.5">
              <p className="font-semibold">{video.snippet.title}</p>
              <p className="text-[0.79rem]">1.5M views &bull; {video.snippet.publishedAt}</p>
              <p className="text-[0.79rem]">{video.snippet.channelTitle}</p>
          </div>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default VideoCard;
