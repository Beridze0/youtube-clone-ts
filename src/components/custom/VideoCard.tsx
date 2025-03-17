import { Card, CardContent } from "@/components/ui/card";
import example from "@/assets/example.jpg";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
const VideoCard = () => {

  const { open } = useSidebar()

  return (
    <NavLink to={`video/1`}>
      <Card className="p-0 rounded-none border-none w-fit bg-transparent shadow-none">
        <CardContent className="p-0 ">
          <div className={cn("w-[338px] h-[195px]", open && "w-[310px] h-[180px]")}>
            <img src={example} alt="Image" className="w-full h-full rounded-md object-cover" />
          </div>
          <div className="px-2 mt-1.5">
              <p className="font-semibold">Learn React for Beginners</p>
              <p className="text-[0.79rem]">1.5M views &bull; March 12, 2025</p>
              <p className="text-[0.79rem]">React Mastery</p>
          </div>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default VideoCard;
