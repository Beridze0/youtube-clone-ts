import example from "@/assets/example.jpg";
import Recommended from "@/components/custom/Recommended";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const VideoPage = () => {

  const {open} = useSidebar()

  return (
    <div className="px-6 flex gap-4">
      {/* left side */}
      <div className="flex-1/2">
        <div className={cn("w-[960px] h-[450px]", open && "w-[826px]")}>
          <img
            src={example}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold mt-2">
            Build Complete Website Like YouTube In React JS 2025
          </h1>

          <div className="flex items-center gap-2">
            <img
              src={example}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">GreatStack</p>
              <p className="text-xs">1.13M subscribers</p>
            </div>
          </div>
          <div>
            <button className="border px-4 py-1.5 rounded-2xl text-muted-foreground hover:text-primary cursor-pointer duration-200">Likes</button>
            <button className="border px-4 py-1.5 rounded-2xl text-muted-foreground hover:text-primary cursor-pointer duration-200">Dislikes</button>
          </div>
          <div className="rounded-xl p-3 mt-2 bg-card text-sm flex flex-col gap-0.5">
            <p>
              Learn React.js in this beginner-friendly tutorial! 🚀 We'll cover
              the basics and build a simple project together.
            </p>

            <p>🔥 Topics Covered:</p>
            <p>✅ What is React?</p>
            <p>✅ Components & Props</p>
            <p>✅ State & Hooks</p>
            <p>✅ Building a Simple App</p>

            <p>📅 Uploaded on: March 17, 2025</p>

            <p>🎥 More Tutorials:</p>
            <p>
              👉 <a href="#">Advanced React Guide</a>
            </p>
            <p>
              👉 <a href="#">State Management with Redux</a>
            </p>

            <p>
              🔔 Don't forget to like, share, and subscribe for more content!
            </p>
          </div>
          
        </div>
        

      </div>
      {/* right */}
      <div className="flex-1/2 flex flex-col gap-2">
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
      </div>
    </div>
  );
};

export default VideoPage;
