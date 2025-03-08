import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";


const VideoList = () => {

  const API_KEY = import.meta.env.VITE_API_KEY
  const [data, setData] = useState({})
  
  useEffect(()=>{
    fetch(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=35&regionCode=US&videoCategoryId=0&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => setData(data.items)
    )
  },[API_KEY])

  console.log(data);
  
  

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((item, index)=>(
          <VideoCard key={index} videos={item} />
      ))}
    </div>
  );
};

export default VideoList;
