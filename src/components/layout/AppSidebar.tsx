import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Home, PlaySquare, Library, History, Clapperboard, Heart, Download, Settings } from "lucide-react";

const sidebarLinks = [
  { name: "Home", url: "/", icon: Home },
  { name: "Shorts", url: "/shorts", icon: PlaySquare },
  { name: "Subscriptions", url: "/subscriptions", icon: Clapperboard },
  { name: "Library", url: "/library", icon: Library },
  { name: "History", url: "/history", icon: History },
  { name: "Liked Videos", url: "/liked", icon: Heart },
  { name: "Downloads", url: "/downloads", icon: Download },
  { name: "Settings", url: "/settings", icon: Settings },
];



const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        YOUTUBE
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                  {sidebarLinks.map((link)=>(
                    <SidebarMenuButton>
                    <NavLink to={link.url} className="flex items-center gap-2 cursor-pointer">
                      <link.icon />
                      <p>{link.name}</p>
                    </NavLink>
                    </SidebarMenuButton>
                  ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar