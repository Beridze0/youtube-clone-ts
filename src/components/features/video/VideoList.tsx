import VideoCard from "./VideoCard";

const VideoList = () => {


  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoList;
