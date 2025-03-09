interface VideoSnippet {
  channelTitle: string;
  localized: {
    title: string;
  };
  publishedAt: string;
  thumbnails: {
    maxres: {
      url: string;
    };
  };
}

interface RecommendedVideosProps {
  videoDetails: {
    id: string;
    snippet: VideoSnippet;
  };
}

const RecommendedVideos: React.FC<RecommendedVideosProps> = ({
  videoDetails,
}) => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <div className="max-w-[230px] max-h-[125px] shrink-0">
        <img src={videoDetails.snippet.thumbnails.maxres.url} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="mt-1">
        <h1 className="text-[0.83rem]">
          {videoDetails.snippet.localized.title}
        </h1>
        <p className="text-[0.77rem] text-muted-foreground">
          {videoDetails.snippet.channelTitle}
        </p>
        <p className="text-xs text-muted-foreground">
          {videoDetails.snippet.publishedAt}
        </p>
      </div>
    </div>
  );
};

export default RecommendedVideos;
