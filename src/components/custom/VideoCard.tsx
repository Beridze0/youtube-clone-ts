import { Card, CardContent } from "@/components/ui/card";
import example from "@/assets/example.jpg";
const VideoCard = () => {
  return (
    <Card className="p-0 rounded-none border shadow-none">
      <CardContent className="p-0 ">
        <div>
          <img src={example} alt="Image" className="w-[310px] h-[180px]" />
        </div>
        <div>
            <p>Learn React for Beginners</p>
            <p>1.5M views</p>
            <p>Uploaded March 12, 2025</p>
            <p>React Mastery</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
