import { CircleUserRound, Clapperboard, Flag, Flame, Gamepad2, HelpCircle, History, Home, Music, Newspaper, Rss, Settings } from "lucide-react";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import NavMain from "./NavMain";

const data = {
    Main: [
      {
        name: "Home",
        url: "/",
        icon: Home,
      },
      {
        name: "Shorts",
        url: "/shorts",
        icon: Clapperboard,
      },
      {
        name: "Subscriptions",
        url: "/subscription",
        icon: Rss,
      },
      {
        name: "You",
        url: "/account",
        icon: CircleUserRound,
      },
      {
        name: "History",
        url: "/history",
        icon: History,
      }
    ],
    Explore: [
      {
        name: "Trending",
        url: "/trending",
        icon: Flame,
      },
      {
        name: "Music",
        url: "/music",
        icon: Music,
      },
      {
        name: "Gaming",
        url: "/gaming",
        icon: Gamepad2,
      },
      {
        name: "News",
        url: "/news",
        icon: Newspaper,
      },
    ],
    More: [
      {
        name: "You",
        url: "/you",
        icon: CircleUserRound,
      },
      {
        name: "History",
        url: "/history",
        icon: History,
      },
    ],
    Settings: [
      {
        name: "Settings",
        url: "/settings",
        icon: Settings,
      },
      {
        name: "Help",
        url: "/help",
        icon: HelpCircle,
      },
      {
        name: "Report",
        url: "/report",
        icon: Flag,
      },
    ],
  };

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <NavMain mainItems={data.Main} />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
