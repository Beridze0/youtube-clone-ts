import RecommendedVideos from "@/components/features/video/RecommendedVideos";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchVideos } from "@/redux/videoSlice";
import { PersonStanding, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>()
  const { videos, loading, error } = useSelector(
    (state: RootState) => state.videos
  );

  useEffect(()=>{
    dispatch(fetchVideos())
  },[dispatch])


  if (loading) return <p>Loading please wait...</p>;
  if (error) return <p>{error}</p>;

  const currentVideo = videos.find((video) => video.id === id);

  if (!currentVideo) return <p>Cannot open page</p>;

  return (
    <div
      key={currentVideo.id}
      className="flex px-5 justify-between w-full gap-5"
    >
      {/* Video side */}
      <div className="flex-1/2 flex flex-col gap-2.5">
        <div className="w-[850px] h-[550px] ">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover rounded-xl"
          ></iframe>
        </div>
        <h1 className="text-xl font-semibold">{currentVideo.snippet.title}</h1>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <PersonStanding className="border border-border size-10 rounded-full " />
            <div className="">
              <p className="text-[0.95rem] font-semibold">
                {currentVideo.snippet.channelTitle}
              </p>
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
        <div className="border p-3 rounded-2xl bg-accent mt-3">
            <p className="text-[0.9rem]">{currentVideo.snippet.description}</p>
        </div>
      </div>

      {/* Recommended */}
      <div className="flex-1/2 flex flex-col gap-2.5">
        {
          videos?.slice(0,7).map((item, index)=>(
            <RecommendedVideos key={index} videoDetails={item} />
          ))
        }
      </div>
    </div>
  );
};

export default VideoPage;
