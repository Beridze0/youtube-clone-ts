import { Card, CardContent } from "@/components/ui/card";
import example from "@/assets/example.jpg";
const VideoCard = () => {
  return (
    <Card className="p-0 rounded-none border-none bg-transparent shadow-none">
      <CardContent className="p-0 ">
        <div className="w-[310px] h-[180px]">
          <img src={example} alt="Image" className="w-full h-full rounded-md" />
        </div>
        <div className="px-2 mt-1.5">
            <p className="font-semibold">Learn React for Beginners</p>
            <p className="text-[0.79rem]">1.5M views &bull; March 12, 2025</p>
            <p className="text-[0.79rem]">React Mastery</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
