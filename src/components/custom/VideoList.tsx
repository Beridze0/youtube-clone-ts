import VideoCard from "./VideoCard"

const VideoList = () => {
  return (
    <div className="grid grid-cols-4 gap-x-1 gap-y-5 place-items-center px-3.5">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default VideoList