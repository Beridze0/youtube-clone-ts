import example from "@/assets/example.jpg";
import RecommendedVideos from "@/components/features/video/RecommendedVideos";
import { RootState } from "@/redux/store";
import { PersonStanding, ThumbsDown, ThumbsUp } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  const { videos, loading, error } = useSelector((state: RootState) => state.videos);

  // Show loading or error states
  if (loading) return <p>Loading please wait...</p>;
  if (error) return <p>{error}</p>;

  // Find the selected video
  const currentVideo = videos.find((video) => video.id === id);

  if (!currentVideo) return <p>Cannot open page</p>;

  return (
    <div key={currentVideo.id} className="flex px-5 justify-between w-full gap-5">
      {/* Video side */}
      <div className="flex-1/2 flex flex-col gap-2.5">
        <div className="w-[850px] h-[550px] ">
          <img
            src={example}
            alt="example"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <h1 className="text-xl font-semibold">{currentVideo.snippet.title}</h1>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <PersonStanding className="border border-border size-10 rounded-full " />
            <div className="">
              <p className="text-[0.95rem] font-semibold">{currentVideo.snippet.channelTitle}</p>
              <p className="text-xs text-muted-foreground">1M subscribers</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-border p-2 rounded-xl cursor-pointer text-muted-foreground hover:text-primary ">
              <ThumbsUp size={20} className="transition duration-200" />
              <p className="text-sm">23.4K Likes</p>
            </div>
            <div className="flex items-center gap-1 border border-border p-2 rounded-xl cursor-pointer text-muted-foreground hover:text-primary ">
              <ThumbsDown size={20} className="transition duration-200" />
              <p className="text-sm">12 Dislikes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div className="flex-1/2 flex flex-col gap-2.5">
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
