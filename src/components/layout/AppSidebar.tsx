import { CircleUserRound, History, House, Layers2, Rss } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "../ui/sidebar";
import { NavLink } from "react-router-dom";
import { CustomTrigger } from "../custom/CustomTrigger";

// Define your items array
const items = [
  {
    title: "Home",
    url: "#",
    icon: House,
  },
  {
    title: "Shorts",
    url: "#",
    icon: Layers2,
  },
  {
    title: "Subscriptions",
    url: "#",
    icon: Rss,
  },
  {
    title: "You",
    url: "#",
    icon: CircleUserRound,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="w-52">
        <SidebarTrigger style={{ marginLeft: "0.55rem", marginTop: "0.7rem", marginBottom: "0.8rem", cursor: "pointer" }} />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton  asChild>
                    <NavLink to={item.url}>
                      {/* Explicitly render the icon component and pass the size */}
                      <item.icon className="mr-1" />
                      <span className="text-sm">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
