import VideoCard from "./VideoCard"

const VideoList = () => {
  return (
    <div className="flex items-center justify-between px-5">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default VideoList