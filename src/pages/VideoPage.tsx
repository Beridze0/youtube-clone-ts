import example from "@/assets/example.jpg"

const VideoPage = () => {
  return (
    <div>
        {/* left side */}
        <div className="w-[750px] h-[450px]">
            <img src={example} alt="" className="w-full h-full object-cover" />
        </div>
    </div>
  )
}

export default VideoPage