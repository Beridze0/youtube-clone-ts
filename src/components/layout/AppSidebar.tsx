import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import {
  Home,
  PlaySquare,
  Library,
  History,
  Clapperboard,
  Heart,
  Download,
  Settings,
} from "lucide-react";
import NavMain from "./NavMain";
import NavRest from "./NavRest";

interface SidebarLinksArray {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface SidebarLinks {
  main: SidebarLinksArray[];
  rest: SidebarLinksArray[];
}

const sidebarLinks: SidebarLinks = {
  main: [
    { name: "Home", url: "/", icon: Home },
    { name: "Shorts", url: "/shorts", icon: PlaySquare },
    { name: "Subscriptions", url: "/subscriptions", icon: Clapperboard },
    { name: "History", url: "/history", icon: History },
  ],
  rest: [
    { name: "Library", url: "/library", icon: Library },
    { name: "Liked Videos", url: "/liked", icon: Heart },
    { name: "Downloads", url: "/downloads", icon: Download },
    { name: "Settings", url: "/settings", icon: Settings },
  ],
};

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <NavMain mainLinks={sidebarLinks.main} />
        <NavRest restLinks={sidebarLinks.rest} />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
