import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchVideos } from "@/redux/searchSlice";
import { useLocation } from "react-router-dom";

const VideoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, loading, error, searchArray } = useSelector((state: RootState) => state.search);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(fetchVideos("trending"));
    } else if (searchArray.length > 0) {
      dispatch(fetchVideos(searchArray[searchArray.length - 1]));
    }
  }, [dispatch, location.pathname, searchArray]);

  return (
    <div className="p-4">
      {loading && <p>Loading videos...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-4 gap-x-1 gap-y-5 px-3.5">
        {videos.length === 0 ? (
          <p>No videos found</p>
        ) : (
          videos.map((video: any, index: number) => (
            <VideoCard key={index} video={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default VideoList;
