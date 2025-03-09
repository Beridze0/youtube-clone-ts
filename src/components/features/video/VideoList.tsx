import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "@/redux/videoSlice";
import { RootState, AppDispatch } from "@/redux/store";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, loading, error } = useSelector((state: RootState) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);



  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {videos.map((item, index) => (
        <VideoCard key={index} videos={item} />
      ))}
    </div>
  );
};

export default VideoList;
