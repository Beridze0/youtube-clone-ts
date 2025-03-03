import { CircleUserRound, Clapperboard, History, Home, Rss } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { NavLink } from "react-router-dom";

const sidebarItems = [
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
    name: "Subscription",
    url: "/subscription",
    icon: Rss,
  },
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
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        sidebarItems.map((item, index)=>(
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <NavLink to={item.url}> 
                                        <item.icon />
                                        <p>{item.name}</p>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
